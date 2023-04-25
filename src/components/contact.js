import React from "react";
export default function Contact()
{
    function handleDownload() {
        // replace this URL with the URL of your resume PDF file
        const resumeUrl = 'https://drive.google.com/file/d/1FGvH8wIBFkg1kYJmR4KkG466j-aohteM/view';
        
        // create a new anchor element
        const downloadLink = document.createElement('a');
        
        // set the href attribute of the anchor to the URL of your resume PDF file
        downloadLink.href = resumeUrl;
        downloadLink.target='_blank';
        
        // set the download attribute of the anchor to the filename you want to use for the downloaded file
        downloadLink.download = 'resume.pdf';
        
        // simulate a click on the anchor element to trigger the download
        downloadLink.click();
      }
      
    return(
        <div className="contact-container">
            <div className="contact-title">
                <h1>Contact Me</h1>
            </div>
            <div className="contact-content">
         <div className="buttonDiv">  <button onClick={handleDownload} className="btn btn-outline-light">Download Resume</button></div>
            <div className="media-link">
                <h4>My Social Media Accounts</h4>
                <div className="card social">
                    <a href="https://github.com/REKA309" target="_blank"  rel="noreferrer">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQKjc_bmIWdBbruQr2xT_ovw8WTCkNraBSeA&usqp=CAU"
                    alt="github profile"
                    width={35}
                    height={30}/>
                    </a>
                    <a href="https://www.linkedin.com/in/reka-nagaraj-9731aa192" target="_blank" rel="noreferrer">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjCfdGKOWo5UnqQb-0KUmAdZ0UwZCE85G-Kw&usqp=CAU"
                    alt="linkedin profile"
                    width={35}
                    height={30}/>
                    </a>
                    <a href="mailto:reka3092@gmail.com" target="_blank"  rel="noreferrer">
                    <img src="https://download.logo.wine/logo/Gmail/Gmail-Logo.wine.png"
                    alt="gmail"
                    width={35}
                    height={30}/>
                    </a>
                </div>
            </div>
            </div>
        </div>
    )
}