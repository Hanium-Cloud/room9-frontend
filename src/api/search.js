import axios from "axios";

export const getSearchResult = async (filter) => {
    return await axios.get('/room/search', {params: filter});
};