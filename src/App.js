import { useState } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Movie from "./components/Movie";
import FavMovie from "./components/FavMovie";
import { movies } from "./movies";
import { useDispatch, useSelector } from "react-redux";
import { passFilm } from "./actions/movieAct";
import { addFavorite } from "./actions/favMoviesAct";

function App() {
  const sira = useSelector(store=>store.mo.sira);
  const dispatch=useDispatch();
const favMovies=useSelector(store=>store.mo.favMovies)
  function sonrakiFilm() {

    dispatch(passFilm(sira))
  }

  function favList(){
    dispatch(addFavorite(sira))
  }
  

  return (
    <div className="wrapper max-w-2xl mx-auto">
      <nav className="flex text-2xl pb-6 pt-8 gap-2 justify-center">
        <NavLink to="/" exact className="py-3 px-6 " activeClassName="bg-white shadow-sm text-blue-600">
          Filmler
        </NavLink>
        <NavLink to="/listem" className="py-3 px-6 " activeClassName="bg-white shadow-sm text-blue-600">
          Listem
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          <Movie  />

          <div className="flex gap-3 justify-end py-3">
            <button
              onClick={sonrakiFilm}
              className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
            >
              Sıradaki
            </button>
            <button
            onClick={favList}
             className="select-none px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white">
              Listeme ekle
            </button>
          </div>
        </Route>

        <Route path="/listem">
        <FavMovie    />

        </Route>
      </Switch>
    </div>
  );
}

export default App;
