import axios from "axios";
import baseUrl from "src/config/Url";

export class UserServices {
  async addUser(uid, email, name, address, metaId, role, photoPath) {
    // await setDoc(doc(db, "user", uid), {
    //   email: email,
    //   name: name,
    //   address: address,
    //   metaId: metaId,
    //   role: parseInt(role),
    //   photoPath: photoPath,
    // });
  }

  async getUsers() {
    return;
  }

  async getUser(value) {
    const res = await axios.get(`${baseUrl}/user/${value}`);
    return res.data;
  }

  async delete(id) {
    const res = await axios.post(`${baseUrl}/user/delete`, { _id: id });
    return res.data;
  }

  async editUser(id, data) {}

  async getMothers() {
    const res = await axios.get(`${baseUrl}/user/mother`);
    return res.data;
  }

  async getMother(id) {
    const res = await axios.get(`${baseUrl}/user/mother/get-one?id=${id}`);
    return res.data;
  }

  async updateMother(id, data) {
    const res = await axios.put(`${baseUrl}/user/mother/update`, {
      _id: id,
      data: data,
    });
    return res.data;
  }

  async motherDelete(id) {
    const res = await axios.post(`${baseUrl}/user/mother/delete`, { _id: id });
    return res.data;
  }
}
