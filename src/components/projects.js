import React from "react";
import './truebeauty.jpg'
export default function Project()
{
    return(
        <div className="project-container">
           <div className="project-title">
            <h1>Projects</h1>
           </div>
           <div className="project-cards">
           <div className="card">
             <a href="https://countries-weather-info-reka-bwd44task.netlify.app/">
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqhImnN1KCxe8k8DDt0pCl01uqmq6yZDPm3w&usqp=CAU"
               width={300}
               height={200}               
               alt="weatherapi"/>
               </a>
                <div className="card-body">
                 <div className="desc">
                 <h4>Weather API Project</h4>
                 <h6>Technologies Used</h6>
                 
                 </div>  
                    <div className="tech">
                       <ul>
                        <li>HTML & CSS</li>
                        <li>Javascript</li>
                       </ul>
                     </div>
                     <div className="buttonDiv">
                  <a href="https://countries-weather-info-reka-bwd44task.netlify.app/">
                    <button className="btn btn-primary">View Project</button>
                  </a>
                 </div>
                </div>
                
            </div>
            <div className="card">
                <a href="https://makeupapi-webcode-truebeauty.netlify.app/">
               <img src="https://i.pinimg.com/originals/69/2a/71/692a71970933c3c6805062387b00e143.jpg"
               width={300}
               height={200}               
               alt="makeup"/>
               </a>
                <div className="card-body">
                 <div className="desc">
                 <h4>MakeUp API Project</h4>
                 <h6>Technologies Used</h6>
                 
                 </div>  
                    <div className="tech">
                       <ul>
                        <li>HTML & CSS</li>
                        <li>Javascript</li>
                       </ul>
                     </div>
                     <div className="buttonDiv">
                  <a href="https://makeupapi-webcode-truebeauty.netlify.app/">
                    <button className="btn btn-primary">View Project</button>
                  </a>
                 </div>
                </div>
                
            </div>
            <div className="card">
                <a href="https://paattyisai-reka-bwd44task.netlify.app/">
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHeLPkpt-fEgtw3A_p3RV5ju84ZxQDWUfvZA&usqp=CAU"
               width={300}
               height={200}               
               alt="spotify"/>
               </a>
                <div className="card-body">
                 <div className="desc">
                 <h4>Spotify API Project</h4>
                 <h6>Technologies Used</h6>
                 
                 </div>  
                    <div className="tech">
                       <ul>
                        <li>HTML & CSS</li>
                        <li>Javascript</li>
                       </ul>
                     </div>
                     <div className="buttonDiv">
                  <a href="https://paattyisai-reka-bwd44task.netlify.app/">
                    <button className="btn btn-primary">View Project</button>
                  </a>
                 </div>
                </div>
                
            </div>
           </div>
        </div>
    )
}