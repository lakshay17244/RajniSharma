import React, { Component } from 'react';

class Syllabus extends Component {
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
            <section id="syllabus">
                <div className="row">
                    <div className="rows section-head centertext">
                        <h1>Curriculum</h1>
                    </div>

                    <div className="columns download centertext">
                        <a className="button" href="https://www.cuemath.com/foundation-math-program/" target='_blank'>
                            <h4><span>Grade KG to 6th</span></h4>
                            <p>Foundation Math Program</p>
                            <h5 className='columns'> <i className='fa fa-map-marker'></i>At a center near you</h5>
                            <br />
                            <h5 style={{marginTop:'10px'}}>Click to know more...</h5>
                        </a>
                    </div>

                    <div className="columns download centertext">
                        <a className="button" href="https://www.cuemath.com/leap/" target='_blank'>
                            <h4><span>Grade 7th to 10th</span></h4>
                            <p>Cuemath Leap Program</p>
                            <h5 className='columns'><i className='fa fa-rocket'></i>Live Online Classes</h5>
                            <br />
                            <h5 style={{marginTop:'10px'}}>Click to know more...</h5>
                        </a>
                    </div>
                
                </div>

            </section>
        );
    }
}

export default Syllabus;
