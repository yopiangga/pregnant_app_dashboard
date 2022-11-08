import axios from "axios";
import baseUrl from "src/config/Url";

export class ArticleServices {
  async add(data) {
    const res = await axios.post(`${baseUrl}/article/add`, data);
    return res.data;
  }

  async getAll() {
    const res = await axios.get(`${baseUrl}/article`);
    return res.data;
  }

  async getOne(id) {
    const res = await axios.get(`${baseUrl}/article/get-one?id=${id}`);
    return res.data;
  }

  async delete(id) {
    const res = await axios.post(`${baseUrl}/article/delete`, { _id: id });
    return res.data;
  }

  async update(id, data) {
    const res = await axios.put(`${baseUrl}/article/update`, {
      _id: id,
      data: data,
    });
    return res.data;
  }
}
