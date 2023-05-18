import React, { useState } from "react";
import "../App.css";
import axios from "axios";

function Form() {
  let [longUrl, setLongUrl] = useState("Shorten your link");
  let [shortUrl, setShortUrl] = useState("");
  let [status, setStatus] = useState(0);

  const submitHandler = async (e) => {
    try {
      e.preventDefault();

      const dataObj = await axios.post(
        "https://url-shortener-bc6q-f50bic5eo-n0iq.vercel.app/url",
        {
          longUrl,
        }
      );
      // console.log(dataObj);

      const urlObj = dataObj.data;

      setShortUrl((shortUrl = urlObj.data.shortUrl));
      setStatus((status = dataObj.statusText === "OK" ? 1 : 0));
    } catch (err) {
      console.log(err);
      alert("Invalid URL");
    }
  };

  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={longUrl}
          onClick={(e) => setLongUrl((longUrl = ""))}
          onChange={(e) => setLongUrl((longUrl = e.target.value))}
          className="url-box"></input>
        <button type="submit" className="btn">
          Shorten URL
        </button>
        <br />
        {status === 1 && (
          <a href={shortUrl} target="_blank" rel="noreferrer">
            <input
              type="text"
              value={shortUrl}
              className="shortUrl-box"></input>
          </a>
        )}
      </form>
    </div>
  );
}

export default Form;
