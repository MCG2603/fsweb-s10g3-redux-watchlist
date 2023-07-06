export const PASS_FILM = "PASS_FILM";



export const passFilm = (sira) => {
  return ({ type: PASS_FILM, payload: sira });
}

