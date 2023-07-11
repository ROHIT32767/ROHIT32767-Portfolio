import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";
import {AiFillGithub} from "react-icons/ai";
import {BsLinkedin} from "react-icons/bs";
const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_iqbgmug",
        "template_9bitm4i",
        formRef.current,
        "H0PDX2rvlcq0D1aeL"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's bring Ideas to Life</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 7842265535
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              rohitgowlapalli01@gmail.com
            </div>
            <div className="c-info-item">
              <a style={{textDecoration: 'none'}}  href="https://github.com/ROHIT32767" target="_blank" rel="noreferrer">
              <AiFillGithub className="c-icon" />
              </a>
              ROHIT32767
            </div>
            <div className="c-info-item">
              <a style={{textDecoration: 'none'}}  href="https://github.com/ROHIT32767" target="_blank" rel="noreferrer">
              <BsLinkedin className="c-icon" />
              </a>
              Rohit Gowlapalli
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Silicon Homes , New Cyber Valley , Hyderabad , India
            </div>

          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            <h4>{done && "Thank you..."}</h4>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
