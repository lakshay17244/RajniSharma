import React, { Component } from 'react';

class Header extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var profilepic = "images/" + this.props.data.image;
         var occupation = this.props.data.occupation;
         var description = this.props.data.description;
         var city = this.props.data.address.city;
         var whatsappIcon = "images/whatsapp.png";
         var name = this.props.data.name;
         var street = this.props.data.address.street;
         var city = this.props.data.address.city;
         var state = this.props.data.address.state;
         var zip = this.props.data.address.zip;
         var phone = this.props.data.phone;
         var email = this.props.data.email;
         var message = this.props.data.contactmessage;
         var whatsappLink = this.props.data.resumedownload;
         var networks = this.props.data.social.map(function (network) {
            //   return <li key={network.name}><a href={network.url}><i className={network.className}>network.name</i></a></li>
            return <li key={network.name}><a href={network.url} target='_blank'>{network.name}</a></li>
         })
      }

      return (
         <header id="home">

            <nav id="nav-wrap">

               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
               <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

               <ul id="nav" className="nav">
                  <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                  <li><a className="smoothscroll" href="#about">About</a></li>
                  <li><a className="smoothscroll" href="#syllabus">Curriculum</a></li>
                  <li><a className="smoothscroll" href="#resume">Why Cuemath?</a></li>
                  <li><a className="smoothscroll" href="#portfolio">Gallery</a></li>
                  {/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li> */}
                  <li><a className="smoothscroll" href="#contact">Contact</a></li>
               </ul>

            </nav>

            <div className="row banner">
               {/* <div className="three columns"> */}
               <img className="profile-pic" src={profilepic} alt="Rajni Sharma Profile Pic" />
               {/* </div> */}
               <div className="banner-text">
                  <h1 className="responsive-headline">May I Help You?</h1>
                  <h3>Hi I'm <span>Rajni Sharma, the Educator</span>. <br />
                     I am teaching <a href='https://www.cuemath.com/' target='_blank'>Cuemath</a> courses of maths and coding to national and international students. I take math classes from Grade I to Grade X. I also teach Python language, App Lab, and Game Lab.
                  </h3>


                  {/* <div className="columns center"> */}
                  <div className="six columns" style={{ textAlign: 'center' }}>
                     <p className="address">
                        <span><i class="fa fa-phone" style={{ marginRight: '10px' }}></i> <a href={"tel:" + phone}>{phone}</a></span><br />
                        <span><i class="fa fa-envelope" style={{ marginRight: '10px' }}></i>< a href={"mailto:" + email}>{email}</a></span>
                     </p>
                  </div>
                  {/* </div> */}
                  <div className="download six columns" style={{ textAlign: 'center' }}>
                     <a href={whatsappLink} className="button download"><img
                        style={{
                           verticalAlign: 'middle',
                           marginRight: '10px'
                        }}
                        src={whatsappIcon} height='27' width='27' />Whatsapp Me</a>
                  </div>

                  {/* </div> */}


                  <hr />
               </div>
            </div>

            <p className="scrolldown">
               <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>

         </header>
      );
   }
}

export default Header;
