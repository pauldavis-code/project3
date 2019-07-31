import axios from "axios";

export default {
  createNewUser: function(userData) {
    return axios.post("/api/users", userData)
  }
}