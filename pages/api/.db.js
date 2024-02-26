import mysql from "mysql2/promise";

const dbconn = async () => {
  return await mysql.createConnection({
    host: "172.16.59.111",
    database: "netmon",
    user: "tungsten",
    password: "Vsn8Tdy[-{v-",
    /*socketPath:""*/
  });
};

export default dbconn;
