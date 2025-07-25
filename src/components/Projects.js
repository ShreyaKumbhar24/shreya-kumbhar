import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });
    if (this.props.resumeProjects && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.projects;
      var projects = this.props.resumeProjects.map(function (projects) {
        return (
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            key={projects.titles[0]}
            style={{ cursor: "pointer" }}
          >
            <span className="portfolio-item d-block">
              <div className="foto" onClick={() => detailsModalShow(projects)}>
                <div>
                  <img
                    src={`/images/${projects.images[0]}`}
                    alt="projectImages"
                    height="230"
                    style={{maxWidth: "100%", minHeight: "80%", marginBottom: 0, paddingBottom: 0, position: 'relative'}}
                  />
                  <span className="project-date">{projects.startDate}</span>
                  <br />
                  <p className="project-title-settings mt-3">
                    {projects.titles[0]}
                  </p>
                </div>
              </div>
            </span>
          </div>
        );
      });
    }
    if (this.props.sharedBasicInfo) {
      var networks = this.props.sharedBasicInfo.social.map(function (network) {
        return (
          <span key={network.name} className="m-4">
            <a href={network.url} target="_blank" rel="noopener noreferrer">
              <i className={network.class}></i>
            </a>
          </span>
        );
      });
    }

    return (
      <section id="portfolio" style={{ padding: "80px 0" }}>

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
     <div className="container mb-5">
  <div className="row justify-content-center">{projects}</div>
</div>


          <ProjectDetailsModal
            show={this.state.detailsModalShow}
            onHide={detailsModalClose}
            data={this.state.deps}
          />
        </div>
        <div className="social-links text-center" style={{ fontSize: '50px', color: 'black' }}>{networks} </div>
      </section>
      
    );
  }
}

export default Projects;
