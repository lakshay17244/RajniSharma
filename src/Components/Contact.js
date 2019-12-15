import React, { Component } from 'react';

class Contact extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var street = this.props.data.address.street;
         var city = this.props.data.address.city;
         var state = this.props.data.address.state;
         var zip = this.props.data.address.zip;
         var phone = this.props.data.phone;
         var email = this.props.data.email;
         var message = this.props.data.contactmessage;
         var whatsappLink = this.props.data.resumedownload;
         var whatsappIcon = "images/whatsapp.png";
      }

      return (
         <section id="contact">
            <div className="row section-head">
               <div className="rows header-col" style={{ textAlign: 'center' }}>
                  {/* <h1><span>Get In Touch.</span></h1> */}
                  <h1>Get In Touch.</h1>
               </div>
               <div className="rows" style={{ textAlign: 'center' }}>
                  <p className="lead" style={{ paddingLeft: '3%' }}>{message}</p>
               </div>
            </div>

            <div className="row centered">
               <div className="rows" style={{ textAlign: 'center' }}>
                  <h1>Contact Details</h1>
                  <p className="address">
                     <span>{name}</span><br />
                     <span>{street}<br />
                        {city} {state}, {zip}
                     </span><br />


                     <span><i class="fa fa-phone" style={{ marginRight: '10px' }}></i> <a href={"tel:" + phone}>{phone}</a></span><br />
                     <span><i class="fa fa-envelope" style={{ marginRight: '10px' }}></i>< a href={"mailto:" + email}>{email}</a></span><br />
                     <span><i class="fa fa-hand-o-right" style={{ marginRight: '10px' }}></i>< a href="https://goo.gl/maps/Q16tNXb4vasQUFFUA" target='_blank'>Directions</a></span>
                  </p>
               </div>
               <div className="rows download" style={{ textAlign: 'center' }}>
                  <a href={whatsappLink} className="button"><img
                     style={{
                        verticalAlign: 'middle',
                        marginRight: '10px'
                     }}
                     src={whatsappIcon} height='27' width='27' />Whatsapp Me</a>
               </div>
               
            </div>
             </section>
      );
   }
}

export default Contact;
