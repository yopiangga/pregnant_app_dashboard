import axios from "axios";
import baseUrl from "src/config/Url";

export class UserServices {
  static async addUsers(uid, email, name, address, metaId, role, photoPath) {
    // await setDoc(doc(db, "user", uid), {
    //   email: email,
    //   name: name,
    //   address: address,
    //   metaId: metaId,
    //   role: parseInt(role),
    //   photoPath: photoPath,
    // });
  }

  static async getUsers() {
    return;
  }

  static async getUser(value) {
    const res = await axios.get(`${baseUrl}/user/${value}`);
    return res.data;
  }

  static async deleteUser(id) {}

  static async editUser(id, data) {}
}
