import axios from "axios";


export const getAxiosInstance = async () => {
 
    const instance = axios.create({
      baseURL: "https://api.pexels.com/v1/",
      headers: {
        Accept: "application/json",
        Authorization: "563492ad6f91700001000001048a6b5f09504a83a1958afc86fa48b5",
      },
    });
    instance.interceptors.request.use(
      function (response) {
        return response;
      },
      function (error) {
        return Promise.reject(error);
      }
    );

    return instance;
  
};