import React from "react";
import "./App.css";
import Row from "./component/row";
import Request from "./Services/request";
import Banner from './component/banner'
import Nav from './component/nav'
function App() {
  return (
    <div className="app">
      <Nav/>
      <Banner/>
      <Row
        title="Netflix Originals"
        fetchUrl={Request.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={Request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={Request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={Request.fetchActionMovies} />
      <Row title="Horror Movies" fetchUrl={Request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={Request.fetchRomanceMovies} />
      <Row title="Comedy Movies" fetchUrl={Request.fetchComedyMovies} />
      <Row title="Documentaries" fetchUrl={Request.fetchDocumentaries} />
    </div>
  );
}

export default App;
