import React from "react";
import { useNavigate } from "react-router-dom";
export default function About()
{
    const navigate=useNavigate()
    function handleHome()
    {
        navigate('/')
    }
    return(
        <div className="about-container">
           <div>
           <button onClick={handleHome} className="btn btn-outline-light">Home </button>
            </div>
            <div className="about-content">
               <h2 style={{fontFamily:"sans-serif"}}>A Little About Me...</h2>
                <h3>
                Hi, This is N.Reka.I have completed my Bachelor's degree in Information Technology from
                Panimalar Engineering College, Chennai.I'm a web developer fresher with expertise in HTML, CSS, JavaScript,React JS.
                With basic knowledge of MySQL and MongodB and Node JS.
                 In addition, I have experience working with API projects and simple full stack projects  to demonstrate my knowledge of these skills.
                </h3>
            </div>
            <div className="picture">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3eCCud_VzfNR7UcF0RP5Lxyoudmi9XXgdmg&usqp=CAU" alt="cartoon"  />



            </div>
        </div>
    )
}