import axios from "axios";

export const getAll = async (name) => {
    return await axios.get(`https://api.github.com/users/${name}/repos`);
}