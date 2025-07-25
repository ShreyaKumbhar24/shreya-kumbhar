import React, { Component } from "react";

class About extends Component {
  render() {
    let profilepic, hello, about;
    if (this.props.sharedBasicInfo) {
      profilepic = "images/" + this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      hello = this.props.resumeBasicInfo.description_header;
      about = this.props.resumeBasicInfo.description;
    }

    return (
      <section
        id="about"
        style={{
          minHeight: "70vh",
          background: "#f7ede2",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "48px 16px 0 16px",
        }}
      >
        <img
          src={profilepic}
          alt="Profile"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow: "0 4px 24px rgba(45,50,116,0.10)",
            marginBottom: "30px",
            border: "6px solid #2c16a7ff"
          }}
        />
        <h1
          style={{
            fontFamily: "Inter, Arial",
            fontWeight: 700,
            fontSize: "2rem",
            color: "#2d3274",
            marginBottom: "12px",
            textAlign: "center"
          }}
        >
          {hello}
        </h1>
        <p
          style={{
            fontSize: "1.7rem",
            color: "#222",
            maxWidth: "800px",
            textAlign: "center",
            margin: "18px auto 0 auto",
            lineHeight: "1.7"
          }}
        >
          {about}
        </p>
      </section>
    );
  }
}

export default About;