// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import mysql from "mysql2/promise";
import formidable from "formidable";
import path from "path";
import fs from "fs/promises";

const handler = async (req, res) => {
  switch (req.method) {
    case "POST":
      await saveResume(req, res);
      break;
    default:
      ErrorPage(req, res);
      break;
  }
};

export const config = {
  api: {
    bodyParser: false,
  },
};

let uploadPath = "/var/tabdata/uploads/resume";

const readFile = (req, saveLocally) => {
  let options = {};
  if (saveLocally) {
    options.uploadDir = path.join(uploadPath);
    options.filename = (name, ext, path, form) => {
      return Date.now().toString() + "_" + path.originalFilename;
    };
  }
  options.maxFileSize = 4000 * 1024 * 1024;
  const form = formidable(options);

  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      resolve({ fields, files });
    });
  });
};

const formvalidation = (props) => {
  const { mimetype, size, name, email, gender, address, newFilename } = props;
  const fileTypes = [
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/msword",
    "application/pdf",
    "text/plain",
  ];
  const getMimetype = fileTypes.find((item) => {
    return item === mimetype;
  });
  if (!getMimetype) throw new Error("Invalid file type");
  if (size / (2 * 1024 * 1024) > 2)
    throw new Error("File size is too big, upload only 2MB file size only");
  if (!name || !email || !gender || !newFilename || !address)
    throw new Error("Please fill all the mandatory fields");
};

const saveCandidateDet = async (props) => {
  const { name, email, mobile, gender, address, experience, newFilename } =
    props;
  const dbconn = await mysql.createConnection({
    host: process.env.MYSQLHOST,
    database: process.env.MYSQLDB,
    user: "tungsten",
    password: "Vsn8Tdy[-{v-",
  });
  const sql =
    "insert into candidate_details (name, email, mobile, gender, location, experience, resume_path, status) values ?";
  const values = [
    [name, email, mobile, gender, address, experience, newFilename, 2],
  ];
  const [data] = await dbconn.query(sql, [values], function (err) {
    if (err) throw err;
    dbconn.end();
  });
  return data.affectedRows;
};

const saveResume = async (req, res) => {
  try {
    await fs.readdir(uploadPath);
    const getResult = readFile(req, true);
    getResult
      .then(
        async ({
          fields: { name, email, gender, mobile, address, experience },
          files,
          files: {
            resume: { size, mimetype, newFilename },
          },
        }) => {
          formvalidation({
            mimetype,
            size,
            newFilename,
            name,
            email,
            gender,
            address,
            experience,
          });
          const saveReq = saveCandidateDet({
            name,
            email,
            gender,
            mobile,
            address,
            experience,
            newFilename,
          });
          const message = saveReq
            ? "Apllication sent successfully"
            : "Something went wrong, try after sometime";
          const errcode = 200;
          res
            .status(errcode)
            .json({ result: null, status: { message, errcode } });
        }
      )
      .catch((e) => {
        ErrorPage(req, res, 200, e.message, true);
      });
  } catch (e) {
    ErrorPage(req, res, 500, e.message);
  }
};

const ErrorPage = (req, res, ecode = "405", message = "", custom = false) => {
  const errcode = custom ? 100 : ecode;
  if (ecode === "405") message = `Method '${req.method}' Not Allowed`;
  res.status(ecode).json({ result: null, status: { message, errcode } });
};

export default handler;
