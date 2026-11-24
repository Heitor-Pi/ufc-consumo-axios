import axios from "axios";

export const api = axios.create({
  baseURL: "https://site.api.espn.com/apis/site/v2/sports/mma/ufc",
});
