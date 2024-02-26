import React from "react";

const PreviewResume = ({ title, filepath }) => {
  return (
    <>
      <div>
        <a href="#" data-toggle="modal" data-target="#resumepreview">
          <i className="fa fa-eye text-success"></i>
          <small> Preview Resume</small>
        </a>
      </div>
      <div className="modal fade" id="resumepreview" role="dialog">
        <style jsx>{`
          .responsive-video {
            position: relative;
            padding-bottom: 56.25%;
            padding-top: 60px;
            overflow: hidden;
          }

          .responsive-video iframe,
          .responsive-video object,
          .responsive-video embed {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
        `}</style>
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
              <h4 className="modal-title">
                MyResume{" >> "}
                {title}
              </h4>
            </div>
            <div className="modal-body">
              <div className="responsive-video">
                <iframe title="view resume" src={filepath}></iframe>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreviewResume;
