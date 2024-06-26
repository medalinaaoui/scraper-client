import axios from "axios";

export default axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}`,
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
});
