import axios from "axios";

export default {

  nodeMail: function(info) {
    console.log("About to send email: ", info);
    return axios.post("/api/nodemail", info);
  },


};
