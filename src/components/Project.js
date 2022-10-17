import React from "react";

function Project() {
  return (
    <div className="project-section">
      <h2 className="project">Projects</h2>
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
                <h5 className="card-title mt-auto text-center">Trip $plit</h5>
                <a
                  href="https://github.com/alverson98/trip_split"
                  className=" project-btn btn btn-light mt-auto"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Repository
                </a>
                <a
                  href="https://trip-split-atoz.herokuapp.com/"
                  className="project-btn btn btn-light"
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
                <h5 className="card-title mt-auto text-center">Middle-Where</h5>
                <a
                  href="https://github.com/alverson98/middleWhere"
                  className="project-btn btn btn-light mt-auto"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Repository
                </a>
                <a
                  href="https://limitless-temple-38712.herokuapp.com/"
                  className="project-btn btn btn-light"
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
                <h5 className="card-title mt-auto text-center">FiHub</h5>
                <a
                  href="https://github.com/alverson98/FiHub"
                  className="project-btn btn btn-light mt-auto"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Repository
                </a>
                <a
                  href="https://alverson98.github.io/FiHub/"
                  className="project-btn btn btn-light"
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
                <h5 className="card-title mt-auto text-center">
                  Weather Dashboard
                </h5>
                <a
                  href="https://github.com/alverson98/weather-forecast-data"
                  className="project-btn btn btn-light mt-auto"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Repository
                </a>
                <a
                  href="https://alverson98.github.io/weather-forecast-data/"
                  className="project-btn btn btn-light"
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
                <h5 className="card-title mt-auto text-center">
                  Work Schedule
                </h5>
                <a
                  href="https://github.com/alverson98/work-schedule"
                  className="project-btn btn btn-light mt-auto"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Repository
                </a>
                <a
                  href="https://alverson98.github.io/work-schedule/"
                  className="project-btn btn btn-light"
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
                <h5 className="card-title mt-auto text-center">Coding Quiz</h5>
                <a
                  href="https://github.com/alverson98/code-quiz"
                  className="project-btn btn btn-light mt-auto"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Repository
                </a>
                <a
                  href="https://alverson98.github.io/code-quiz/"
                  className="project-btn btn btn-light"
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
