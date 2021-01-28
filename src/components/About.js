import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="https://avatars3.githubusercontent.com/u/32709092?s=460&u=4f7de2d07ab295cea9919be0f594e7aad99cf0a8&v=4" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>
			   <ul className="currentprojects">
				<li>
               {
                 resumeData.aboutme1
               }
               </li>
			   <li>
               {
                 resumeData.aboutme2
               }
               </li>
			   <li>
               {
                 resumeData.aboutme3
               }
               </li>
				</ul>
            </div>
         </div>
      </section>
    );
  }
}