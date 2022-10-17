import React from "react";

function AboutMe() {
  return (
    <>
      {/* About me & img on left of screen */}
      <div className="d-flex">
        <div className="w-50 m-3">
          <h2>About Me</h2>
          <div className="mb-3">
            {/* Add current image of myself */}
            <img
              src={require("../assets/hannah-square.jpeg")}
              alt="Hannah Alverson"
              className="w-100"
            />
          </div>
        </div>
        {/* This div on the right of about me & img */}
        <div className="w-50 m-3">
          <h2>Student</h2>
          <div className="mb-3">
            <p>
              I am currently a student at the Full-Stack University of Denver
              Coding Boot Camp. My previous education includes a Bachelor of
              Science degree in Nutritional Sciences and a minor in Sustainable
              Agriculture and Food Systems (SAFS), earned in 2020. Programming
              was not my intended career; I had planned to become a Registered
              Dietician, but graduating with a bachelors degree right as COVID
              hit made me rethink my plan.
            </p>
            <p>
              I've always had an interest in programming since I was young. Fun
              fact, my 5th grade science fair project was a website I made with
              an old version of HTML! With that lifelong interest and having
              friends/family that are software developers, I decided to dive
              into a software development career path.
            </p>
            <p>
              My ultimate dream is to combine my nutrition knowledge and newly
              learned coding skills to help people with their health!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
