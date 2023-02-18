import axios from "axios";

export const getAll = async () => {
    return await axios.get(`https://api.github.com/users/LIIuko/repos`);
}