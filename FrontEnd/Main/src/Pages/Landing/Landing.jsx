
import Navbar from "../../component/NavBar/NavBar";
import { useNavigate } from "react-router-dom";
// import Login from './Pages/Login/Login.jsx';
import './Landing.css';
import People from '../../assets/People.png'

export default () => {

    const navigate = useNavigate();
  function handleStart(){
        navigate('/login');
    }
  

  return (
    <>
      <Navbar />
      <div className='Container'>
        <div className='txtContainer'>
          <h2 id='Description'>
            Designed for  Women,<br />
            Powered by AI
          </h2>
          <p id='briefDescription'>
            Connect with your community<br />
            Access Job oportunities<br />
            Track your Spending<br />
            Grow your savings<br />
            Report incidents safely,<br />
            all in one secure, supportive platform<br />
          </p>
          <button type='submit' id='getStartedBtn' onClick={handleStart}>Get Started</button>
        </div>
        <div className='imgContainer'>
            <img src={People} id='peoplesIMG' />
        </div>
      </div>
      <hr />
      <div className="services">
        <h1 id='heading'>Our Services</h1>
        <div className="cardContainer">
            <div className="card">
              Finance Tracker
              <span id='miniDescription'>Manage your finances well</span>
              </div>
            <div className="card">
              Goals
              <span id='miniDescription'>Play your goals in a SMART way</span>
              </div>
            <div className="card">
              Communities
              <span id='miniDescription'>Engage with like minded people</span>
              </div>
            <div className="card">
              Economic Support
              <span id='miniDescription'>Financial FREEDON, tailored for you</span>
              </div>
            <div className="card">
              Job Search
              <span id='miniDescription'>Find jobs that align with your skills</span>
              </div>
            <div className="card">
              Other
              <span id='miniDescription'>Manage your finances well</span>
              </div>
        </div>
      </div>
      <hr />
      <div className="Testimonials">
        <h1 className='tstHeading'>Testimonials</h1>
        <p id='testDescription'>
          Testimonies from previous and other current users
        </p>
        <div className="cardContainer">
          <div className="testCard">
          <img src={People} />
          <p id='tstMonial'>I had a great experience</p>
          <h4 id='tstName'>Masine Donald</h4>
          </div>
        <div className="testCard">
          <img src={People} />
          <p id='tstMonial'>I had a great experience</p>
          <h4 id='tstName'>Masine Donald</h4>
          </div>
        <div className="testCard">
          <img src={People} />
          <p id='tstMonial'>I had a great experience</p>
          <h4 id='tstName'>Masine Donald</h4>
          </div>
        <div className="testCard">
          <img src={People} />
          <p id='tstMonial'>I had a great experience</p>
          <h4 id='tstName'>Masine Donald</h4>
        </div>
        </div>
      </div>
      <hr />
    </>
  );
};
