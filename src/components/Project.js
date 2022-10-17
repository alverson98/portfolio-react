import React from "react";

function Project() {
  return (
    <div className="project-section">
      <h2>Projects</h2>
      <div className="project-cards">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <div className="card h-100">
              <img
                className="card-img-top"
                src={require("../assets/trip-split-2.png")}
                alt="Screenshot of trip split app"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Trip $plit</h5>
                <a
                  href="https://github.com/alverson98/trip_split"
                  className="btn btn-primary mt-auto"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Repository
                </a>
                <a
                  href="https://trip-split-atoz.herokuapp.com/"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Deployed Application
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="card h-100">
              <img
                className="card-img-top"
                src={require("../assets/middle-where.PNG")}
                alt="Screenshot of middle where home page"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Middle-Where</h5>
                <a
                  href="https://github.com/alverson98/middleWhere"
                  className="btn btn-primary mt-auto"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Repository
                </a>
                <a
                  href="https://limitless-temple-38712.herokuapp.com/"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Deployed Application
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <div className="card h-100">
              <img
                className="card-img-top"
                src={require("../assets/fiHub.png")}
                alt="Screenshot of FiHub"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">FiHub</h5>
                <a
                  href="https://github.com/alverson98/FiHub"
                  className="btn btn-primary mt-auto"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Repository
                </a>
                <a
                  href="https://alverson98.github.io/FiHub/"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Deployed Application
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="card h-100">
              <img
                className="card-img-top"
                src={require("../assets/weather-screenshot.png")}
                alt="screenshot of weather dashboard"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Weather Dashboard</h5>
                <a
                  href="https://github.com/alverson98/weather-forecast-data"
                  className="btn btn-primary mt-auto"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Repository
                </a>
                <a
                  href="https://alverson98.github.io/weather-forecast-data/"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Deployed Application
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <div className="card h-100">
              <img
                className="card-img-top"
                src={require("../assets/work-schedule.jpeg")}
                alt="screenshot of work schedule"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Work Schedule</h5>
                <a
                  href="https://github.com/alverson98/work-schedule"
                  className="btn btn-primary mt-auto"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Repository
                </a>
                <a
                  href="https://alverson98.github.io/work-schedule/"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Deployed Application
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="card h-100">
              <img
                className="card-img-top"
                src={require("../assets/code-quiz.jpeg")}
                alt="screenshot of coding quiz"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Coding Quiz</h5>
                <a
                  href="https://github.com/alverson98/code-quiz"
                  className="btn btn-primary mt-auto"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Repository
                </a>
                <a
                  href="https://alverson98.github.io/code-quiz/"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Deployed Application
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
