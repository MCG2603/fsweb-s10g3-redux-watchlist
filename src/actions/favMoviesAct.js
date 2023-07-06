export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";


export const addFavorite = (sira) => {
  console.log("burdaa333")
  return ({ type: ADD_FAVORITE, payload: sira });
}

export const removeFavorite = (id) => {
  console.log(id)
  return ({ type: REMOVE_FAVORITE, payload: id });
}