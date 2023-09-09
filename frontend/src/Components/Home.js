import React,{useState} from 'react'
import '../Styles.css'
//import axios from 'axios'
import {Carousel} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const successful = () => {
    if (email && password) {
      let path = '/courses';
      navigate(path);
    }
  };

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setIsButtonDisabled(!inputEmail || !password);
  };

  const handlePasswordChange = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);
    setIsButtonDisabled(!email || !inputPassword);
  };
  return (
    <div className=''>
      <div className='backsty vh '>
        <br></br>
        <div className='d-flex justify-content-center '>
          <Carousel className='caros'>
            <Carousel.Item className='car1 text-center'>
              <h3>"BiblioSculpt has set my career!"</h3>
              <p>--Ashwin Bekal--</p>
              <br></br><br></br>
            </Carousel.Item>
            <Carousel.Item className='car2 text-center'>
              <h3>"I have aced my exams!"</h3>
              <p>--Bill Gates--</p>
              <br></br><br></br>
            </Carousel.Item>
            <Carousel.Item className='car3 text-center'>
              <h3>"Learning for a cause!"</h3>
              <p>--Rishi Sunak--</p>
              <br></br><br></br>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className='row container-fluid'>
          <div className='container-fluid col-lg-6'>
            <div className='justify-content-center px-5 pb-5'>
              <form className='justify-content-center form' required>
                <h2 className='maintext'>Namaste, Login...</h2><br></br>
                <div>
                  <label htmlFor='email' className='labels'><h5>Email: </h5></label>
                  <input type='email' placeholder='Enter Email Address' value={email} onChange={handleEmailChange} className='form-control inputmade' name='Email' autoFocus='True' required />
                </div><br></br>
                <div>
                  <label htmlFor='password' className='labels'><h5>Password: </h5></label>
                  <input type='password' placeholder='Enter Password' value={password} onChange={handlePasswordChange} className='form-control inputmade' name='Password' required></input>
                </div><br></br>
                <div>
                  <label htmlFor='checkbox' className='labels'> Remember Me:&ensp;</label>
                  <input type='checkbox' className='custom-control custom-checkbox'></input>
                </div><br></br>
                <div className='d-grid px-3'>
                  <button className='btn btn-success' type='submit' onClick={successful} disabled={isButtonDisabled}>Go to Library</button>
                </div>
              </form><br></br>
            </div>
          </div>
          <div className='container-fluid col-lg-6 px-5 pr-5 pt-5'>
            <h2 className='intro1'>Welcome to, BiblioSculpt!</h2><br></br>
            <h3 className='intro2'>Your Education Universe... to greater heights!</h3><br></br>
            <div className='row'>
              <div className='col-4 rank'>
                Global Rank
              </div>
              <div className='col-4 rank'>
                Country Rank
              </div>
              <div className='col-4 rank'>
                Category Rank
              </div>
            </div><br></br>
            <div className='row'>
              <div className='col-4'>
                <h1 className='ranks'>#137</h1>
              </div>
              <div className='col-4'>
                <h1 className='ranks'>#204</h1>
              </div>
              <div className='col-4'>
                <h1 className='ranks'>#97</h1>
              </div>
            </div><br></br>
            <div className='row'>
              <div className='col-4'>
                <h4 className='meterred'>↓ 43</h4>↑
              </div>
              <div className='col-4'>
                <h4 className='meter'>↑ 52</h4>
              </div>
              <div className='col-4'>
                <h4 className='meter'>↑ 27</h4>
              </div>
            </div><br></br>
          </div>
        </div>
        <footer>
        <h3 className='text-center text-secondary bg-dark foot'>Developed by BiblioSculpt Team of Institutions PVT. LTD. </h3>
        </footer>
      </div>
    </div>
  );
  
}

export default Home