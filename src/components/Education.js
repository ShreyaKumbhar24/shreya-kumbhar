import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

class Education extends Component {
  render() {
    if (this.props.educationData && this.props.sectionName) {
      const sectionName = this.props.sectionName;
      const education = this.props.educationData.map((edu, i) => (
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date={edu.years}
          iconStyle={{
            background: "#2a3683ff",
            color: "#fff",
            textAlign: "center",
          }}
          icon={<i className="fas fa-graduation-cap experience-icon"></i>}
          key={i}
          contentStyle={{
            background: "#ffffff",
            color: "#0b0b0cff",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            borderRadius: "10px",
          }}
        >
          <div className="education-card">
            <h3 className="vertical-timeline-element-title" style={{ fontWeight: "600" }}>
              {edu.degree}
            </h3>
            <h4 className="vertical-timeline-element-subtitle" style={{ color: "#1e1e25ff" }}>
              {edu.institution}
            </h4>
            <div className="coursework-container" style={{ marginTop: "15px" }}>
              {edu.coursework.map((course, idx) => (
                <span
                  className="course-badge"
                  key={idx}
                  style={{
                    display: "inline-block",
                    backgroundColor: "#7e9ae6ff",
                    color: "#ffffff",
                    borderRadius: "40px",
                    padding: "8px 16px",
                    fontSize: "1.3rem",
                    margin: "6px 6px 0 0",
                    fontWeight: "500",
                  }}
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </VerticalTimelineElement>
      ));

      return (
        <section
          id="education"
          className="pb-5"
          style={{ backgroundColor: "#5355adff", padding: "60px 0" }}
        >
          <div className="col-md-12 mx-auto">
            <div className="col-md-12">
              <h1
  style={{
    color: "#322772ff",       // Desired text color
    textAlign: "center",
    fontSize: "2.5rem",
    fontWeight: "700",
    letterSpacing: "2px",
    marginBottom: "40px"
  }}
>
  {sectionName}
</h1>

            </div>
          </div>
          <div className="col-md-10 mx-auto">
            <VerticalTimeline>{education}</VerticalTimeline>
          </div>
        </section>
      );
    } else {
      return null;
    }
  }
}

export default Education;
