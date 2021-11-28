import '../App.css'
import { NavLink } from "react-router-dom";
const About = () => {
    return (
    <>
    <p>I am a <a href="https://github.com/wijiler" rel="noreferrer">developer</a>. I like tinkering around with code bits and it's is very fun. </p>
    <div className="link">
    <NavLink to="/">
      Home
      </NavLink>
      </div>
    </>
    );
}
export default About;