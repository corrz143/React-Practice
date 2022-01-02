import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US </h1>
        <p>
          It all started in 1985, when the owner Jimmy H opened his first
          Pizzeria Company in Cheney, with a unique recipe for fresh crust pizza
          and an old fashioned stone hearth oven.
        </p>
        <p>
          Since we opened our first store in 1985, we have been making our thin
          crust pizza from scratch when you order it. And we still use stone
          hearth ovens. That is one of the reasons our unique pizzas are worth
          the wait!
        </p>
        <p>
          We pride ourselves in offering you the very best pizza, salads and
          sandwiches, and we value your patronage. We always makes our dough and
          ingredients fresh daily.
        </p>
      </div>
    </div>
  );
};

export default About;
