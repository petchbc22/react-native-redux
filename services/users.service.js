import axios from "axios";

const API_URL = "http://10.0.2.2:3001/api/";

class UserDataService {
  getUser() {
    return axios.get(API_URL + "users/");
  };
  createUser(data){
    return axios.post(API_URL + "users/", data);
  };
  deleteUser(id) {
    return axios.delete(`${API_URL}users/${id}`);
  };
  updateUser(id, data) {
    console.log('service---',id, data)
    return axios.put(`${API_URL}users/${id}` ,data);
  }
}
export default new UserDataService();
