import { movies } from "../movies"
import { PASS_FILM } from "../actions/movieAct"
import { ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/favMoviesAct"
let favvMovies=[];
const initialState={
    sira:0,
    movies:movies,
    favMovies:favvMovies,
    id:0

}
const movieReducer=(state=initialState,action)=>{

    switch(action.type){
        
        case PASS_FILM:
            
            return {...state,
                sira:state.movies.length>state.sira+1 ? state.sira+1:0,
                id:state.movies[state.sira].id}
        case ADD_FAVORITE:
            
            favvMovies=favvMovies.filter(item=>item.id==movies[action.payload].id).length==0 ? favvMovies=[...favvMovies,movies[action.payload]]:favvMovies;

        return    {...state,
            id:movies[action.payload].id,
            favMovies:favvMovies
           
        } 

        case REMOVE_FAVORITE:
            favvMovies=favvMovies.filter(item=>item.id!=action.payload)
            console.log(favvMovies)
        return {...state, favMovies:favvMovies}

         default:
            
            return state;
           
    }


}

export default movieReducer;