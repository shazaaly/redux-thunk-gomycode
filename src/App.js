import './App.scss';
import Home from './components/Home/Home'
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { MovieDetail } from "./components/MovieDetail/MovieDetail";
import { MovieListing } from "./components/MovieListing/MovieListing";
import { PageNotFound } from "./components/PageNotFound/PageNotFound";
function App() {

  return (
    <div className="App">
      <Header />
      <div className='container'>

        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/movies'>
            <Route index element={<MovieListing />} />
            <Route path=':id' element={<MovieDetail />} />
          </Route>

          <Route path='*' element={<PageNotFound />} />

        </Routes>

      </div>
      <Footer />

    </div>
  );
}

export default App;
