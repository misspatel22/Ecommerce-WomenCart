import axios from "axios";
const apiURL = process.env.REACT_APP_API_URL;

export const postContactus = async (formData) => {
  try {
    let res = await axios.post(`${apiURL}/api/contact-us`, formData);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
