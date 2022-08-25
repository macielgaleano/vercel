import Image from "next/image";
import PageLayout from "../components/PageLayout";
import styles from "../styles/Home.module.css";

export default function Home({ news }) {
  return (
    <PageLayout title={"Home"}>
      <div className={styles.container}>
        {news?.length === 0 && <p>Not articles</p>}
        {news?.length > 0 &&
          news.map((article, index) => {
            return (
              <article key={index}>
                <img
                  alt={`Image for the article ${article}`}
                  src={article.urlToImage}
                ></img>
                <h2>{article.title}</h2>
                <p>{article.description}</p>
              </article>
            );
          })}
      </div>
    </PageLayout>
  );
}

export async function getServerSideProps() {
  const response = await fetch(
    "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=a30bdb464e4940598e2a978dd29a33ae"
  );
  const { articles } = await response.json();
  return {
    props: {
      news: articles,
    },
  };
}
