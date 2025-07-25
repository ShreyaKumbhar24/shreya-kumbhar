import React, { Component } from "react";

class Skills extends Component {
  render() {
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.skills;
      var skills = this.props.sharedSkills.icons.map((skills, i) => {
        return (
          <li
            key={i}
            className="list-inline-item mx-3"
            style={{ cursor: "default" }}
          >
            <span>
<div className="text-center skills-tile" style={{backgroundColor: "#f1f1f3ff", borderRadius: "10px", padding: "20px 15px", width: "120px"}}>
  <i
    className={skills.class}
    style={{ fontSize: "220%", color: "#2e2a4d" }}
  ></i>
  <p
    className="text-center"
    style={{
      fontSize: "1.2em",
      fontWeight: "bold",
      color: "#2e2a4d",
    }}
  >
    {skills.name}
  </p>
</div>
            </span>
          </li>
        );
      });
      return (
        <section id="skills" className="py-5">
          <div className="col-md-12 mx-auto">
            <div className="col-md-12">
                 <h1
                style={{
                  color: "#322772ff",
                  textAlign: "center",
                  fontSize: "2.5rem",
                  fontWeight: "700",
                  letterSpacing: "2px",
                  marginBottom: "40px",
                }}
              >
                {sectionName}
              </h1>
            </div>
          </div>
          <div className="col-md-10 mx-auto">
           <ul className="list-inline d-flex flex-wrap justify-content-center align-items-center">{skills}</ul>

          </div>
        </section>
      );
    } else {
      return null;
    }
  }
}

export default Skills;
