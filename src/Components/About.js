import React, { Component } from 'react';


class About extends Component {
   render() {

      if (this.props.data) {

         var name = this.props.data.name;
         var profilepic = "images/" + this.props.data.image;
         var whatsappIcon = "images/whatsapp.png";
         var bio = this.props.data.bio;
         var street = this.props.data.address.street;
         var city = this.props.data.address.city;
         var state = this.props.data.address.state;
         var zip = this.props.data.address.zip;
         var phone = this.props.data.phone;
         var email = this.props.data.email;
         var resumeDownload = this.props.data.resumedownload;
         var networks = this.props.data.social.map(function (network) {
            return <li key={network.name}><a href={network.url} target='_blank'>{network.name}</a></li>
         })
      }

      return (

         <section id="about">

            <div className="row">

               <div className="three columns">
                  <img className="profile-pic" src={profilepic} alt="Rajni Sharma Profile Pic" />
               </div>
               <div className="nine columns main-col">
                  <h2>About Me</h2>

                  <p>{bio}</p>

                  
                  {/* <h4><p>Below is the curriculum for all classes.</p></h4>
                     <ul className="social">
                        {networks}
                     </ul> */}
                     <hr />
                  {/* <div className="rows" style={{textAlign:'center'}}>
                     <a href={resumeDownload} className="button">
                        <img style={{
                           verticalAlign: 'middle',
                           marginRight: '10px'
                        }}
                        src={whatsappIcon} height='27' width='27' />Whatsapp Me</a>
               </div> */}
               </div>
            </div>

         </section>
      );
   }
}

export default About;
