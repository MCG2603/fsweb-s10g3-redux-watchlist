import { useDispatch, useSelector } from "react-redux";
import { removeFavorite } from "../actions/favMoviesAct";

export default function FavMovie({ title, id }) {
  const favMovies=useSelector(store=>store.mo.favMovies)
  const dispatch=useDispatch();
  function removeList(e){
    console.log(e.target.value)
    dispatch(removeFavorite(e.target.value))
  }
  return (
    <div className="flex p-3 pl-4 bg-white mb-2 shadow items-center group">
       <div>
            {favMovies.map((movie) => (
           <div className="pr-4 flex-1">{movie.title}
           <button value={movie.id} onClick={removeList} className="px-3 py-2 block text-sm rounded bg-rose-700 text-white opacity-30 group-hover:opacity-100">
              Çıkar</button></div>
            ))
            }
          </div>
      
    
    </div>
  );
}
