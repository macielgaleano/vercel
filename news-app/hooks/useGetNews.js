import { useEffect, useState } from "react";

export default function useGetNews() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=a30bdb464e4940598e2a978dd29a33ae"
    )
      .then((res) => res.json())
      .then((response) => {
        const { articles } = response;
        setNews(articles);
      });
  }, []);

  return { news };
}
