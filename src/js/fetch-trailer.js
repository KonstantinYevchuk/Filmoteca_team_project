import { refs } from "./refs";

export async function fetchTrailer(id = 536554) {
  try {
    return await fetch(`${refs.API_URL}movie/${id}/videos?api_key=${refs.API_KEY}`).then(
      resp => {
        if (!resp.ok) {
          throw new Error('Bad request!!!');
        }
        return resp.json();
      }
    );
  } catch (err) {
    console.log(err);
  }
}
