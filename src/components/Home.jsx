import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <Link className="home-link" to="/nasaphoto">
        <h1>
          <span>See into the stars!</span>
        </h1>
      </Link>
    </div>
  );
};

export default Home;
