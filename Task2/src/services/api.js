import axios from "axios";

const url = 'https://reqres.in/api/users?page=1';

export const getData = async() =>{
    return await axios.get(url);
}
