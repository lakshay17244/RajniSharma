import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return <div key={education.school}><h4>{education.school}</h4>
          <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
          <p>{education.description}</p></div>
      })

      var kidNames = this.props.data.kids.map(function (kid) {
        return <div key={kid.name}><h3 style={{ fontSize: '17.5px' }}>{kid.name}</h3>
          <p className="info">{kid.school}
            {kid.class ?
              (
                <React.Fragment>
                  <span>&bull;</span>
                  <em className="date">{kid.class} Grade
          </em>
                </React.Fragment>
              ) :
              (<p></p>)
            }
          </p>
          <p></p>
        </div>
      })
      var work = this.props.data.work.map(function (work) {
        return <div key={work.company}><h3>{work.company}</h3>
          <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
          <p>{work.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function (skills) {
        var className = 'bar-expand ' + skills.name.toLowerCase();
        return <li key={skills.name}><span style={{ width: skills.level }} className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume">

        <div className="row centertext">
          <h1 style={{
            marginBottom:'5rem',
            fontSize:'30px' 
        }}><span>Why Cuemath?</span></h1>
          {/* <div className="three columns header-col">
            <h1><span>Current Batch</span></h1>
         </div> */}

          {/* <div className="nine columns main-col"> */}
          {/* <div className="row item"> */}
          {/* <div className="twelve columns"> */}
          {/* {education} */}
          {/* {kidNames} */}
          {/* <div style={{ paddingTop: '30px' }}>
            <iframe src="https://www.youtube.com/embed/MmtXTo7Q1M0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div> */}

          <div
            className="video"
            style={{
              position: "relative",
              paddingBottom: "56.25%" /* 16:9 */,
              paddingTop: '30px',
              height: 0
            }}
          >
            <iframe
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
              }}
              src={`https://www.youtube.com/embed/MmtXTo7Q1M0`}
              frameBorder="0"
            />
          </div>
          {/* <hr /> */}
          {/* </div> */}
          {/* </div> */}
          {/* </div> */}
        </div>


        {/* <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div> */}
      </section>
    );
  }
}

export default Resume;
