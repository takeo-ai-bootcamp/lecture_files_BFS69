import Content from "../components/content";
import Header from "../components/header";

function Home() {
  fetch(
    "https://api.openweathermap.org/data/3.0/onecall?lat=90.0&lon=90.0&exclude={part}&appid=45ac24a8e537c5a8c92d60cf6a81ee21"
  );

  return (
    <>
      <Header />
      <Content />
    </>
  );
}

export default Home;
