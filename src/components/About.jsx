import React, { useState, useEffect } from 'react'
import { Alert } from 'react-bootstrap';
import { test } from '../api/Api';
import email from '../assets/Email.png'
import git from '../assets/git.png'
import link from '../assets/link.png'

const About = () => {

  const [alert, setAlert] = useState(false)

  useEffect(()=>{
    const testApi = async () => {
      const status = await test()
      if(status)setAlert(true)
    }
    testApi()
  },[])

  return (
    <footer className="page-footer font-small blue pt-4" style={{background:"linear-gradient(93deg, rgba(58,162,180,0.6797312675070029) 0%, rgba(253,29,227,0.38001137955182074) 48%, rgba(252,176,69,0.2399553571428571) 100%)"}}>
      {alert?<></>:<Alert variant='warning' style={{ display:"grid"}}>
     <div> If components does not render please
      <Alert.Link href="https://ecom-backend-1uz5.onrender.com/">
        {" "}
        click me{" "}
      </Alert.Link  >
      and comeback after 60sec</div>
    </Alert>}
    
    <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
  <div style={{margin:"10px 10px 10px 10px"}}>
  <img src={email} alt="" style={{height:"25px", marginRight:"5px"}}/>
    <a href="mailto:vinayak.m.honnatti@gmail.com">vinayak.m.honnatti@gmail.com</a>
  </div>
  <>|</>
  <div  style={{margin:"10px 10px 10px 10px"}}>
  <img src={git} alt="" style={{height:"35px"}}/>
    <a href="https://github.com/vinayak-git-hub">https://github.com/vinayak-git-hub</a>
  </div>
  <>|</>
  <div  style={{margin:"10px 10px 10px 10px"}}>
  <img src={link} alt="" style={{height:"25px", marginRight:"5px"}}/>
    <a href="https://linkedin.com/in/vinayak5">linkedin.com/in/vinayak5</a>
  </div>
    </div>
    
</footer>
  )
}

export default About;