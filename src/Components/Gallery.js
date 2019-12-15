import React, { Component } from 'react';
import AwesomeSlider from 'react-awesome-slider';
// import AwesomeSliderStyles from 'react-awesome-slider/src/styled/fall-animation';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
// import 'react-awesome-slider/dist/styles.css';

class Gallery extends Component {
    render() {
        const slider = (
            <AwesomeSlider className='aws-btn'>
                <div data-src={"images/gallery/1.jpeg"} />
                <div data-src={"images/gallery/2.jpeg"} />
                <div data-src={"images/gallery/3.jpeg"} />
                <div data-src={"images/gallery/4.jpeg"} />
                <div data-src={"images/gallery/5.jpeg"} />
                <div data-src={"images/gallery/6.jpeg"} />
            </AwesomeSlider>
        );

        if (this.props.data) {
            var projects = this.props.data.projects.map(function (projects) {
                var projectImage = 'images/portfolio/' + projects.image;
                return <div key={projects.title} className="columns portfolio-item">
                    <div className="item-wrap">
                        <a href={projects.url} title={projects.title}>
                            <img alt={projects.title} src={projectImage} />
                            <div className="overlay">
                                <div className="portfolio-item-meta">
                                    <h5>{projects.title}</h5>
                                    <p>{projects.category}</p>
                                </div>
                            </div>
                            <div className="link-icon"><i className="fa fa-link"></i></div>
                        </a>
                    </div>
                </div>
            })
        }

        return (
            <section id="portfolio">

                <div className="row">

                    <div className="twelve columns collapsed" style={{ textAlign: 'center' }}>
                        <h2>GALLERY</h2>
                        <h1>Check out some of the in-class/event pictures.</h1>
                        <div className='ten center'>
                            {slider}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Gallery;
