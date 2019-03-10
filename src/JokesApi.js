import axios from "axios";
// condensed in one file to make the 
// axios requests to the backend

const BASE_URL = "http://localhost:3001/jokes";

class JokesApi {
  static async getRandomJokes(num = 20) {
    const response = await axios.get(BASE_URL);
    return response.data.jokes;
  }

  static async getTopJokes() {
    const response = await axios.get(`${BASE_URL}/best`);
    return response.data.jokes;
  }

  static async getWorstJokes() {
    const response = await axios.get(`${BASE_URL}/worst`);
    return response.data.jokes;
  }
}

export default JokesApi;
