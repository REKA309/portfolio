import React from "react";
export default function ModalComponent({ imgSrc, closeModal })
{
 
    
    return(
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h2 className="modal-title fs-5" id="exampleModalLabel">Certificate</h2>
        <button type="button" className="btn-close"  onClick={closeModal} data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
     
      
      <div className="modal-body">
      
      <img src={imgSrc} 
      width={350}
      height={220}
      alt="Full-size" />

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary"  onClick={closeModal} data-bs-dismiss="modal">Close</button>
        {/* <button type="button" className="btn btn-primary" onClick={handleSubmit}>{operation} {role}</button> */}
      </div>
    </div>
  </div>
</div>
    )
}