import React from 'react'

const AdModal = () => {
  return (
    <>
    <section>
        <a href="#AdModal" data-dismiss="modal" data-toggle="modal">
          <span className="flaticon-arrow to-modal"></span>
        </a>
        <div id="AdModal" className="modal-style-1 dark modal ">
          <div className="modal-dialog modal-login">
              <div className="modal-content">
                  <div className="modal-header p-0 mb-3 mt-3">		
                      <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                  </div>
                  <div className="modal-body">
                    PDF
                  </div>
              </div>
          </div>
        </div> 
    </section>
    </>
  )
}

export default AdModal