import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class Certifications extends Component {
  render() {
    const certificates = [
      "Watson.AI",
      "AWS Educate Digital Certificate",
      "SQL For Data Science",
      "Introduction to Cybersecurity Tools & Cyber Attacks",
    ];

    return (
      <section id="certifications" className="pb-5">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
             <h1
              className="section-title"
              style={{
                color: "#322772ff",
                textAlign: "center",
                fontSize: "2.5rem",
                fontWeight: "700",
                letterSpacing: "2px",
                marginBottom: "40px",
              }}
            >
              CERTIFICATIONS
            </h1>
          </div>
        </div>
        <div className="col-md-10 mx-auto d-flex flex-wrap justify-content-center">
          {certificates.map((cert, i) => (
            <Card
              key={i}
              className="mb-3 mx-2"
              style={{
                width: "22rem",
                minHeight: "10px",
                display: "flex",
                alignItems: "right",
                justifyContent: "right",
              }}
            >
              <Card.Body>
                <Card.Text
                  className="text-center"
                  style={{ fontWeight: "bold", fontSize: "1.4em" }}
                >
                  {cert}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </section>
    );
  }
}

export default Certifications;
