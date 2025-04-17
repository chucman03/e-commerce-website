import axios from "../utils/axiosCustomize";

const postLogin = (email, password) => {
  return axios.post(`/api/v1/login`, {
    email: email,
    password: password,
  });
};

const postSignUp = (firstName, lastName, phoneNumber, email, password) => {
  return axios.post(`/api/v1/register`, {
    firstName,
    lastName,
    phoneNumber,
    email,
    password,
  });
};

export { postLogin, postSignUp };
