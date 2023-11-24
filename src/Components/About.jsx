/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/beach-background.jpg";

const imageAltText = "California beach";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a United States Air Force veteran with a secret clearance transitioning from a successful career leading software teams, and recruiting, looking to carve a niche as a software developer.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Java",
  "Python",
  "Object Oriented Programming",
  "Concurrency",
  "Agile & Scrum Development",
  "Git",
  "Web Design",
  "Javascript",
  "HTML",
  "CSS",
  "Instructional Systems Design",
  "UML",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Since I was a young lad I developed a passion for technology, building websites in the geocities and angelfire era, constructing personal computers, and later building bitcoin mining machines. I love figuring out how things work and I am eager to learn more.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
