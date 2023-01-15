import React, { useState, useEffect } from "react";
import ArticleTeaser from "./ArticleTeaser";

const NUMBER_ENDPOINT = "http://www.randomnumberapi.com/api/v1.0/random";

const MIN_NUMBER = 0;
const MAX_NUMBER = 20;
const COUNT = 1;

const ArticleTeasers = () => {
  const [teaserAmount, setTeaserAmount] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchNumber() {
      try {
        const data = await (
          await fetch(
            `${NUMBER_ENDPOINT}?min=${MIN_NUMBER}&max=${MAX_NUMBER}&count=${COUNT}`
          )
        ).json();

        const fetchedNumber: number = data.length && data[0];
        setTeaserAmount(fetchedNumber);
      } catch (e) {
        setError("Something went wrong, try again");
      }
    }

    fetchNumber();
  }, []);

  const renderArticleTeasers = (teaserAmount: number) => {
    return [...Array(teaserAmount)].map((e, i) => <ArticleTeaser key={i} />);
  };

  return (
    <div className="ab-testing">
      {Boolean(error) && <p>{error}</p>}

      <h1>article teasers</h1>
      {Boolean(teaserAmount) && (
        <ul className="article-teasers-list">
          {renderArticleTeasers(teaserAmount)}
        </ul>
      )}
    </div>
  );
};

export default ArticleTeasers;
