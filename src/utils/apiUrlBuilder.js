import { apiKey } from "../globals/globals";

const urlBuilder = (filterStr) => {
    // can change page param later?
    const apiURL = `http://api.themoviedb.org/3/movie/${filterStr}?api_key=${apiKey}&language=en-US&page=1`;
    return apiURL;
};

export default urlBuilder;