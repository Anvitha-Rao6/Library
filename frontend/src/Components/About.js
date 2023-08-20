import React from 'react'
import {Accordion} from 'react-bootstrap'
const About = () => {
  return (
    <div className='abtbg-total'>
        <div className='abtbg vh'>
            <h1 className='org text-center'>We build your child's better future...</h1>
        </div><br></br><br></br><br></br>
        <h2 className='text-center vision'>Contact and About Us</h2>
        <div className='d-flex justify-content-center'>
        <Accordion defaultActiveKey="0" flush className='acc'>
      <Accordion.Item eventKey="0">
        <Accordion.Header><h2 className='acchead'>Organisation Name</h2></Accordion.Header>
        <Accordion.Body className='text-center accon'>
          Learniverse Group of Institutions PVT. LTD.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><h2 className='acchead'>Location & Address</h2></Accordion.Header>
        <Accordion.Body className='text-center accon'>
          Adyar, Mangalore, Karnataka
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header ><h2 className='acchead'>Phone Number</h2></Accordion.Header>
        <Accordion.Body className='text-center accon'>
          +91-00-xx-yy-zz-99
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><h2 className='acchead'>Email Address</h2></Accordion.Header>
        <Accordion.Body className='text-center accon'>
          learniverse@sahyadri.edu.in
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div><br></br><br></br>

        <div>
            <h2 className='text-center vision'>Our Vision</h2>
            <h4 className='text-center vision1 px-5'>To provide quality A1 education to students. Spread the knowledge and increase the grades.</h4>
        </div><br></br><br></br><br></br>
        <div>
            <h2 className='text-center vision'>Our Mission</h2>
            <h4 className='text-center vision1 px-5'>The mission of educational websites is to provide accessible and comprehensive learning resources and fostering knowledge acquisition.</h4>
        </div><br></br><br></br>

        
        <footer>
        <h3 className='text-center text-secondary bg-dark foot'>Developed by Learniverse Team of Institutions PVT. LTD. </h3>
        </footer>
    </div>
  )
}

export default About