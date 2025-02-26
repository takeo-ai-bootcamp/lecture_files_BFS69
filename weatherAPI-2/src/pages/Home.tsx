import Content from "../components/content";
import Header from "../components/header";

function Home({ temperature }) {
  return (
    <>
      <Header />
      <Content temperature={temperature} />
    </>
  );
}

export default Home;
