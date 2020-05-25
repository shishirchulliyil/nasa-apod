import dotenv from "dotenv";
import React, { useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";

dotenv.config();
const apiKey = process.env.REACT_APP_NASA_API_KEY;

const NasaPhoto = () => {
  const [photoData, setPhotoData] = useState(null);

  const fetchPhoto = () => {
    const apiUrl = "https://api.nasa.gov/planetary/apod?api_key=";

    const url = apiUrl + apiKey;
    axios({
      url: url,
      method: "GET",
    })
      .then((res) => {
        setPhotoData(res.data);
        console.log(photoData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (photoData === null)
    return (
      <div>
        <button onClick={fetchPhoto}> Browse</button>
      </div>
    );

  return (
    <>
      <NavBar />
      <div>
        <button onClick={fetchPhoto}> Browse</button>
      </div>
      <div className="card">
        <h3>{photoData.title}</h3>
        <img src={photoData.url} alt={photoData.title}></img>
        <a href={photoData.hdurl}>Click for HD Image</a>
        <div>
          <p>{photoData.date}</p>
          <p>{photoData.explanation}</p>
          <p>Copyright : {photoData.copyright}</p>
        </div>
      </div>
    </>
  );
};

export default NasaPhoto;
