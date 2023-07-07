import React from "react";
import { useNavigate } from "react-router-dom";
export default function Skills()
{
    const navigate=useNavigate()
    function handleHome()
    {
        navigate('/')
    }
    return(
        <div className="skills-container">
           <div className="buttonDiv">
           <button onClick={handleHome} className="btn btn-outline-light">Go to Home </button>
            </div>
           <div className="skill-title" >
            <h1>Skills</h1>
           </div>
           <div className="skills-card">
           <div className="card-container row">
            <div className="card ">
                <img 
                width={50}
                height={50}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEbyqJR-426v72Ejr87Vf_h2Wqzg5LYmX69w&usqp=CAU"
                alt="html"/>
                <h3>80%</h3>
            </div>
            <div className="card ">
            <img 
                width={50}
                height={50}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd9apTPFM9FveJrWHGVe-UVBV7l-xfEYlxRw&usqp=CAU"
                alt="css"
                />
                <h3>75%</h3>
            </div>
            <div className="card ">
            <img 
                width={50}
                height={50}
                src="https://www.freepnglogos.com/uploads/javascript/javascript-online-logo-for-website-0.png"
                alt="javscript"/>
                <h3>70%</h3>
            </div>
            <div className="card ">
            <img 
                width={50}
                height={50}
                src="https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp&w=256"
                alt="react"/>
                <h3>60%</h3>
            </div>
            <div className="card">
            <img 
                width={50}
                height={50}
                src="https://p7.hiclipart.com/preview/747/798/387/mysql-database-web-development-computer-software-dolphin.jpg"
                alt="mysql"/>
                <h3>80%</h3>
            </div>
            <div className="card">
            <img 
                width={60}
                height={60}
                src="https://www.pngall.com/wp-content/uploads/13/Mongodb-PNG-Image-HD.png"
                alt="mongodb"/>
                <h3>50%</h3>
            </div>
            <div className="card">
            <img 
                width={50}
                height={50}
                src="https://img.freepik.com/free-icon/java_318-402723.jpg"
                alt="java"/>
                <h3>80%</h3>
            </div>
           </div>
           </div>
        </div>
    )
}