import "./about.css";
import Award from "../../img/award.png";
import Me from "../../img/me.jpg";
const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Me}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <div  className="a-sub">
          <a style={{  fontSize: 20,
    color: "#4a5",fontWeight: 'bold', fontFamily: "'Playfair Display', serif" , textDecoration: 'none'}} href="https://drive.google.com/file/d/1Z3Z3Q4Z3Z3Q4Z3Q4Z3Q4Z3Q4Z3Q4Z3Q4/view?usp=sharing" target="_blank" rel="noreferrer">Download Resume</a>
        </div>
        <p className="a-desc">
        Tech enthusiast skilled in MERN stack, React Native, Flutter, Firebase, and Docker. Strong problem-solving abilities for delivering innovative solutions.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Dean's List</h4>
            <p className="a-award-desc">
            Dean's List Awarded Student at IIIT Hyderabad
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
