import React, { useEffect } from "react";
import axios from "axios";
import Toast from "react-native-simple-toast";
import { AXIOS_TIMEOUT } from "./variable";

const checkRequests = (Wrapped) => {
  function CheckRequests(props) {
    useEffect(() => {
      axios.interceptors.response.use(function (error) {
        if (
          error.message === "Network Error" ||
          error.message === `timeout of ${AXIOS_TIMEOUT}ms exceeded`
        ) {
          Toast.show(
            "Có lỗi sảy ra trong khi kết nối đến server,vui lòng thử lại!"
          );
          return;
        }
        if (
          error.response.status === 400 ||
          error.response.status === 401 ||
          error.response.status === 500
        ) {
          Toast.show(error.response.data.message, 1000);
          return;
        }
        if (error) {
          Toast.show(
            "Có gì đó không đúng, vui lòng thử lại hoặc báo cáo cho admin, xin cảm ơn!",
            1000
          );
        }
        // Do something with response error
        return Promise.reject(error);
      });
    });

    return <Wrapped {...props} />;
  }
  return CheckRequests;
};

export default checkRequests;
