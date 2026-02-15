import React from 'react';
import Contact from './contact';
import GitHubIcon from './assets/Github-Icon.svg';
import EmailIcon from './assets/emailIcon.svg';
import LocationIcon from './assets/locationIcon.svg';
import LinkedinIcon from './assets/linkedinIcon.svg';

function Footer(){

    const LinkedInInlineSVG = (
        <svg
          height="56.693px"
          width="56.693px"
          viewBox="0 0 56.693 56.693"
          aria-label="LinkedIn"
          className="linkedin-icon"
        >
          <g>
           
            <path fill="#000" d="M49.265,4.667H7.145c-2.016,0-3.651,1.596-3.651,3.563v42.613c0,1.966,1.635,3.562,3.651,3.562h42.12 c2.019,0,3.654-1.597,3.654-3.562V8.23C52.919,6.262,51.283,4.667,49.265,4.667z"/>
          
            <path fill="#fff" d="M18.475,46.304h-7.465V23.845h7.465V46.304z M14.743,20.777h-0.05c-2.504,0-4.124-1.725-4.124-3.88 c0-2.203,1.67-3.88,4.223-3.88c2.554,0,4.125,1.677,4.175,3.88 C18.967,19.052,17.345,20.777,14.743,20.777z M45.394,46.304h-7.465V34.286c0-3.018-1.08-5.078-3.781-5.078 c-2.062,0-3.29,1.389-3.831,2.731c-0.197,0.479-0.245,1.149-0.245,1.821v12.543h-7.465c0,0,0.098-20.354,0-22.459h7.465v3.179 c0.992-1.53,2.766-3.709,6.729-3.709c4.911,0,8.594,3.211,8.594,10.11V46.304z"/>
          </g>
        </svg>
      );

    const footerItems = [
        {
            id: 1,
            className: 'email-p',
            icon: EmailIcon,
            text: "Send an email",
            link: "mailto:derekschelberg@gmail.com",
            alt: 'email icon'
        },
        {
            id: 2,
            className: 'location-flex-item',
            icon: LocationIcon,
            text: "Seattle, WA",
            link: "",
            alt: "location icon"
        },
    ];

    return (
        <div className="closing-section">
            <h2 className="closing-h2">Want to get in touch?</h2><br />
            <p className="closing-p">I am always excited to talk all things programming and tech!</p>

            <div className="footer-div">
                <div className="footer-info-row">
                    {footerItems.map((item) => (
                        <Contact key={item.id} socialItem={item} />
                    ))}
                </div>

                <div className="social-row">
                    <a href="https://github.com/DerekScott27" className="social-icon" aria-label="github icon">
                        <img src={GitHubIcon} alt="github icon" className="github-icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/derekschelberg/" className="social-icon" aria-label="linkedin icon">
                        {LinkedInInlineSVG}
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;