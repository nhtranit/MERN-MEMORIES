import axios from 'axios';

const URL = 'http://localhost:5000/';

export class ClientApi {
  async fetchAllPost() {
    return await axios.get(`${URL}post`);
  }
  async createPostApi(data) {
    return await axios.post(`${URL}post`, data);
  }
  async deletePost(data) {
    return await axios.post(`${URL}post/deletePost`, data);
  }
}
