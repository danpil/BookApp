import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';

class TodoApi {
  constructor() {
    this.path = '/books';
  }

  async getAllBooks() {
    try {
      const { data } = await axios.get(this.path);
      return data;
    } catch (e) {
      return e;
    }
  }
  async deletedBook(id) {
    try {
      return await axios.delete(`${this.path}/${id}`);
    } catch (e) {
      throw e;
    }
  }
  async changeBook(id, data) {
    try {
      return await axios.put(`${this.path}/${id}`, data);
    } catch (e) {
      throw e;
    }
  }
}

export default new TodoApi();
