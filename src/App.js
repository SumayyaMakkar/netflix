import logo from './logo.svg';
import './App.css';
import Row from './components/Row';
import Banner from './components/Banner';
import Navigationbar from './components/Navigationbar';
import { requests } from './request';

function App() {
  return (

    <div>
      <Navigationbar />
      <Banner fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
