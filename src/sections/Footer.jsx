import { FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa';

const Footer = () => {
    return (
      <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
  
        <div className="flex gap-3">
          <div className="social-icon" style={{ color: "white", cursor: "pointer" }} onClick={() => {
            window.open('https://www.linkedin.com/in/prajjwal-soni-5b0741291/', '_blank');
          }}>
            <FaLinkedin/>
          </div>
          <div className="social-icon" style={{ color: "white", cursor:"pointer" }} onClick={() => {
            window.open('https://github.com/prajjwalhacker', '_blank');
          }}>
            <FaGithub/>
          </div>
          <div className="social-icon" style={{ color: "white", cursor: "pointer" }} onClick={() => {
             window.open('https://docs.google.com/document/d/18Y2pCu7ucuoxleHC2REBmwG2BRLuB2HCeCOIPu-xccU/edit?tab=t.0', '_blank');
          }}>
            <FaFileAlt/>
          </div>
        </div>
  
        <p className="text-white-500">© 2024 Prajjwal Soni. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;