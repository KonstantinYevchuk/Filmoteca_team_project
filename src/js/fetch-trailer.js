const API_URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = '158819e65eb0fbf8513ba7b934c25216';


export async function fetchTrailer(id = 536554) {

    try {
        return await fetch(`${API_URL}${id}/videos?api_key=${API_KEY}`).then(resp => {
            if (!resp.ok) {
                throw new Error("Bad request!!!");
            }
            return resp.json()
        });
        // console.log(await resp.json());
        // if (!resp.ok) {
        //     throw new Error("Bad request!!!");
        // }
        // return await resp.json();
    } catch (err){
        console.log(err);
    }
}
console.log("hi");