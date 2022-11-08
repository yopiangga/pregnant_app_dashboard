import axios from "axios";
import baseUrl from "src/config/Url";

export class VideoServices {
  async add(data) {
    const res = await axios.post(`${baseUrl}/video/add`, data);
    return res.data;
  }

  async getAll() {
    const res = await axios.get(`${baseUrl}/video`);
    return res.data;
  }

  async getOne(id) {
    const res = await axios.get(`${baseUrl}/video/get-one?id=${id}`);
    return res.data;
  }

  async delete(id) {
    const res = await axios.post(`${baseUrl}/video/delete`, { _id: id });
    return res.data;
  }

  async update(id, data) {
    const res = await axios.put(`${baseUrl}/video/update`, {
      _id: id,
      data: data,
    });
    return res.data;
  }
}
