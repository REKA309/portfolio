import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import photos from "./skillImages";
import ModalComponent from "./Modal";
export default function Skills()
{
    const navigate=useNavigate()
    function handleHome()
    {
        navigate('/')
    }
    const [selectedImgSrc, setSelectedImgSrc] = useState('');

    const handleViewPhoto = (imgSrc) => {
      setSelectedImgSrc(imgSrc);
    };
  
    const closeModal = () => {
      setSelectedImgSrc('');
    };
    return(
        <div className="skills-container">
           <div className="buttonDiv">
           <button onClick={handleHome} className="btn btn-outline-light">Go to Home </button>
            </div>
           <div className="skill-title" >
            <h1>Skills</h1>
           </div>
           <div className="skills-card row">
           {photos.map((photo) => (
        <div className="col-lg-4 col-md-6 col-sm-12" key={photo.id}>
          <div className="card">
            <div className="imglogo">
              <img width={50} height={50} src={photo.thumbnail} alt={photo.altname} />
              <h3 style={{ color: 'white' }}>{photo.altname}</h3>
            </div>
            <div className="card-body">
              <button
                className="btn btn-outline-light"
                data-bs-toggle="modal" data-bs-target="#exampleModal"
                onClick={() => handleViewPhoto(photo.fullSize)}
              >
                View Certificate
              </button>
            </div>
          </div>
        </div>
      ))}
      {selectedImgSrc && (
        <ModalComponent imgSrc={selectedImgSrc} closeModal={closeModal} />
      )}
           </div>
        </div>
    )
}