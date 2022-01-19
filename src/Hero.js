import React, {Fragment} from 'react';
import App from './App';
import './App.css';
import logo from './assets/AcreTrader_Logo.jpg';
import magIcon from './assets/magIcon.svg';
import social1 from './assets/fb.png';
import social2 from './assets/insta.png';
import social3 from './assets/link.png';
import social4 from './assets/twit.png';
import arrow from './assets/arrow.svg';


function Hero() {
  const submitForm1 = () => {
    window.dataLayer.push({
      event: 'kyleView',
      var: 'kyleSubmittedForm'
    })
    window.dataLayer.push({
      event: 'kyle view 2',
      var: 'kyle var 2'
    })
  }


  return (
    <div className="Hero">
      <div className='container'>
      <div className='topBar'>
      <img className='logo' src={logo} />
      <div className='btnCont'>
      <button className='clearBtn'>Home</button>
      <button className='clearBtn'>Properties</button>
      <button className='clearBtn'>Agents</button>
      <button className='clearBtn'>Blog</button>
      <button className='logBtn'>Log In</button>
      </div>
      </div>

      <div className='imageCont'>
      <div className='imgTitle'>
        <p>Some Title Could Go Here</p>
      </div>

      <div className='imgSubtitle'>
      <p>Some Subtitle Could go here, under the title, and then more dummy text. Acretrader is the best!</p>
      </div>


      <div className='imageMenu'>
      <div className='imageRow'>
        <button className='imageBtn'>Invest</button>
        <button className='imageBtn2' >Purchase</button>
        <button className='imageBtn2' >Lease</button>

      </div>

      <div className='imageRow2'>
        <div className='imageCol'>
          <p>Property Category</p>
          <select>
            <option>Farms</option>
          </select>
        </div>
        <div className='imageCol'>
          <p>Price Range</p>
          <select>
            <option>0-$200,000</option>
          </select>
        </div>
        <div className='imageCol'>
          <p>Number of Clients</p>
          <select>
            <option>0-100</option>
          </select>
        </div>
        <div className='imageCol'>
          <div className='buttonCont'>
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="magnifying-glass" className="magIcon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"></path></svg>
        <button className='searchBtn'></button>
        </div>
        </div>
      </div>



      </div>
      </div>

      <div className='interTitle'>
      <p>Most Beautiful Countries On Earth Lorem ipsum</p>
      </div>

      <div className='cardRow'>
        <div className='card1'>
        <p className='cardTitle'>Russia</p>
        </div>
        <div className='card2'>
        <p className='cardTitle'>Ukraine</p>
        </div>
        <div className='card3'>
        <p className='cardTitle'>Ukraine</p>
        </div>
        <div className='card4'>
        <p className='cardTitle'>Ukraine</p>
        </div>
      </div>

      <div className='interTitle2'>
      <p>Recently Added</p>
      <p className='interTitlep2'>See all</p>
      </div>

      <div className='addyCont'>
        {/*  */}
      <div className='addyCard'>
      <div className='addySplit'>
      <div className='addyImg'></div>
      </div>

      <div className='addyData'>
      <h3 className='addyTitle'>Location Address</h3>
        <div className='addyRow'>
          <p>Bedrooms</p>
          <p>Bathrooms</p>
          <p>Sq. Footage</p>
        </div>
        <div className='addyRow'>
        <p>Posted By: Name</p>
        <button className='addyBtn'>$54,000</button>
        </div>
        </div>
      </div>
      {/*  */}
              {/*  */}
              <div className='addyCard'>
      <div className='addySplit'>
      <div className='addyImg2'></div>
      </div>

      <div className='addyData'>
      <h3 className='addyTitle'>Location Address</h3>
        <div className='addyRow'>
          <p>Bedrooms</p>
          <p>Bathrooms</p>
          <p>Sq. Footage</p>
        </div>
        <div className='addyRow'>
        <p>Posted By: Name</p>
        <button className='addyBtn'>$54,000</button>
        </div>
        </div>
      </div>
      {/*  */}
              {/*  */}
              <div className='addyCard'>
      <div className='addySplit'>
      <div className='addyImg3'></div>
      </div>

      <div className='addyData'>
      <h3 className='addyTitle'>Location Address</h3>
        <div className='addyRow'>
          <p>Bedrooms</p>
          <p>Bathrooms</p>
          <p>Sq. Footage</p>
        </div>
        <div className='addyRow'>
        <p>Posted By: Name</p>
        <button className='addyBtn'>$54,000</button>
        </div>
        </div>
      </div>
      {/*  */}
        {/*  */}
        <div className='addyCard'>
      <div className='addySplit'>
      <div className='addyImg'></div>
      </div>

      <div className='addyData'>
      <h3 className='addyTitle'>Location Address</h3>
        <div className='addyRow'>
          <p>Bedrooms</p>
          <p>Bathrooms</p>
          <p>Sq. Footage</p>
        </div>
        <div className='addyRow'>
        <p>Posted By: Name</p>
        <button className='addyBtn'>$54,000</button>
        </div>
        </div>
      </div>
      {/*  */}
              {/*  */}
              <div className='addyCard'>
      <div className='addySplit'>
      <div className='addyImg2'></div>
      </div>

      <div className='addyData'>
      <h3 className='addyTitle'>Location Address</h3>
        <div className='addyRow'>
          <p>Bedrooms</p>
          <p>Bathrooms</p>
          <p>Sq. Footage</p>
        </div>
        <div className='addyRow'>
        <p>Posted By: Name</p>
        <button className='addyBtn'>$54,000</button>
        </div>
        </div>
      </div>
      {/*  */}
              {/*  */}
              <div className='addyCard'>
      <div className='addySplit'>
      <div className='addyImg3'></div>
      </div>

      <div className='addyData'>
      <h3 className='addyTitle'>Location Address</h3>
        <div className='addyRow'>
          <p>Bedrooms</p>
          <p>Bathrooms</p>
          <p>Sq. Footage</p>
        </div>
        <div className='addyRow'>
        <p>Posted By: Name</p>
        <button className='addyBtn'>$54,000</button>
        </div>
        </div>
      </div>
      {/*  */}
      </div>

      <div className='imageCont2'>
      <div className='imgTitle2'>
        <p>Some Title Could Go Here</p>
      </div>

      <div className='imgSubtitle2'>
      <p>Some Subtitle Could go here, under the title. Ut aliquip ex ea commodo consequat.</p>
      <button className='addyBtn2'>Contact Us</button>
      </div>
      </div>
      {/*  */}
      <div className='bottomBar'>
      <div className='bottomCol'>
      <img className='logo2' src={logo} />
      <p>safj jsnala s lkalks lkv  lknlkaslnlsa aopvpnw vpsknq we vns awlknglknbjkal  dknalksdn  eoklalkn alsk vna ndln gbpsocb skknbielns lbknspod lkns rlnblks slks. Tneno apbnlka</p>
      <div className='socialFoot'>
      <img className='social' src={social1} />
      <img className='social' src={social2} />
      <img className='social' src={social3} />
      <img className='social' src={social4} />
      </div>
      <p>© 2022 . All Rights Reserved</p>
      </div>
      <div className='bottomCol'>
        <label>Pages</label>
      <button className='clearBtn2'>Home</button>
      <button className='clearBtn2'>Properties</button>
      <button className='clearBtn2'>Agents</button>
      <button className='clearBtn2'>Blog</button>
      <button className='clearBtn2'>Log In</button>
      </div>
      <div className='bottomCol'>
      <label>Learn</label>
      <button className='clearBtn2'>Who We Are</button>
      <button className='clearBtn2'>Company Values</button>
      <button className='clearBtn2'>Benefits</button>
      <button className='clearBtn2'>Apply</button>
      <button className='clearBtn2'>Our Mission</button>
      </div>
      <div className='bottomCol'>
      <label>Subscribe</label>
      <p>eoklalkn alsk vna ndln gbpsocb skknbielns lbknspod lkns rlnblks slks.</p>

      <div className='inpDiv'>
      <input className='footerInp'></input>
      <button className='inpBtn'></button>
      <img className='arrow' src={arrow} />
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" className="arrow" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>
      </div>
      </div>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

        <form className='container' onSubmit={submitForm1}>
          <p>GTM Test Area</p>
          <input></input>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Hero;
