// This API only has one Route.
// It sends the info gathered from my contact form
// to nodemail via axios.

import axios from "axios";
import { Router } from "express"

export default {

  nodeMail: function(info) {
    console.log("About to send email: ", info);
    return axios.post("/api/nodemail", info);
  },

  // Could have other API routes here...


};
