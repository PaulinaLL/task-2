import React, { useState, useEffect } from "react";

const IMAGE_ENDPOINT = "https://dog.ceo/api/breeds/image/random";

const ArticleTeaser = () => {
  const [sourceLink, setSourceLink] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await (await fetch(IMAGE_ENDPOINT)).json();
        setSourceLink(response.message);
      } catch (e) {
        setErrorMessage("Error, Image source could not be loaded");
      }
    }

    fetchImages();
  }, []);

  return (
    <li className="article-teaser">
      <img src={sourceLink} height="200px" />
    </li>
  );
};

export default ArticleTeaser;
