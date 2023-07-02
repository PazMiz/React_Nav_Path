import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div id="about">
      <h3>
        {/* This is the home page of the PazM React App. */}
        <br />
        {/* Use the navigation links above to explore different features of the app. ('') */}
        <Link to="/">
          <center>
            <img src="https://www.paz.co.il/assets/img/PAZ_LOGO_WEB.png" width={200} alt="Home" />
          </center>
        </Link>
      </h3>
      <div class="container">
        <h2>Welcome to the Home Page</h2>
        <p>
          This is the home page of the PazM React App. Use the navigation links above to explore different features of the app.
        </p>
      </div>

      <div class="container">
        <h2>CRUD (Create, Read, Update, Delete)</h2>
        <p>
          The CRUD functionality allows you to perform create, read, update, and delete operations on a data source. In this app, you can add, edit, and delete names in the list.
        </p>
      </div>

      <div class="container">
        <h2>Carousel</h2>
        <p>
          The Carousel component displays a rotating slideshow of images. You can customize the interval between slides and the images to be displayed.
        </p>
      </div>
    </div>
  );
};

export default About;
