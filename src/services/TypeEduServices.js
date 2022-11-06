import axios from "axios";
import baseUrl from "src/config/Url";

export class TypeEduServices {
  async add(data) {
    const res = await axios.post(`${baseUrl}/type-edu/add`, data);
    return res.data;
  }

  async getAll() {
    const res = await axios.get(`${baseUrl}/type-edu`);
    return res.data;
  }

  async getOne(id) {
    const res = await axios.get(`${baseUrl}/type-edu/get-one?id=${id}`);
    return res.data;
  }

  async delete(id) {
    const res = await axios.delete(`${baseUrl}/type-edu/delete`, { _id: id });
    return res.data;
  }

  async update(id, data) {
    const res = await axios.put(`${baseUrl}/type-edu/update`, {
      _id: id,
      data: data,
    });
    return res.data;
  }
}
