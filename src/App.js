import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [imageAlt, setImageAlt] = useState("");
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    async function fetchPhoto() {
      let url = "https://api.nasa.gov/planetary/apod";
      let config = {
        params: { api_key: process.env.REACT_APP_NASAKEY }
      };

      const res = await axios(url, config);
      setImageAlt(res.data.title);
      setImageSrc(res.data.url);
    }
    fetchPhoto();
  }, []);

  return (
    <div className="App">
      <h1>Nasa Photo of the Day</h1>
      <img alt={imageAlt} src={imageSrc}></img>
    </div>
  );
}

export default App;
