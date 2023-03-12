import axios from 'axios';
import qs from 'qs';

export const RC_DOMAIN = process.env.NODE_ENV === 'production' ? `${process.env.NEXT_PUBLIC_WEBCONTEXT_BASEURL}/` : `http://localhost:3010${process.env.NEXT_PUBLIC_WEBCONTEXT_BASEURL}/`;
// export const RC_DOMAIN = process.env.NODE_ENV === 'production' ? `${process.env.NEXT_PUBLIC_WEBCONTEXT_BASEURL}/` : `http://localhost:8082${process.env.NEXT_PUBLIC_WEBCONTEXT_BASEURL}/`;

export function rcRequestPromise(url, param) {
  return new Promise((resolve, reject) => {
    axios({
      method: param.method ? param.method : 'post',
      url: RC_DOMAIN + url,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      transformRequest: [
        function(data, headers) {
          return qs.stringify(data, { arrayFormat: 'brackets' });
        },
      ],
      data: param,
      withCredentials: false,
    })
      .then(function(response) {
        if (response.data) {
          if (
            response.data.status &&
            response.data.status.result === 'success' &&
            response.data.data &&
            response.data.data.length > 0
          ) {
            resolve(response.data);
          } else {
            resolve(response.data);
          }
        } else {
          reject(response);
        }
      })
      .catch(function(error) {});
  });
}

export function requestGetAPI(url, param, header) {
  return axios({
    method: 'get',
    url: RC_DOMAIN + url,
    responseType: 'blob',
  });
}

export function requestPostAPI(url, param, temp) {
  // return axios({
  //   method: 'post',
  //   url: RC_DOMAIN + url,
  //   headers: {
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //   },
  //   transformRequest: [
  //     function(data) {
  //       return qs.stringify(data, { arrayFormat: 'brackets' });
  //     },
  //   ],
  //   data: param,
  //   withCredentials: false,
  // });
}

export function requestPostWidthJsonAPI(url, param) {
  return axios({
    method: 'post',
    url: RC_DOMAIN + url,
    headers: {
      'Content-Type': 'application/json',
    },
    dataType: 'json',
    data: param,
  });
}

// multipartform
export function requestMultipartFormAPI(url, param) {
  return axios({
    method: 'post',
    url: RC_DOMAIN + url,
    headers: { 'Content-Type': 'multipart/form-data; charset=utf-8' },
    transformRequest: [
      function(data) {
        return data;
      },
    ],
    data: param,
    withCredentials: false,
  });
}

export function requestPostDownloadAPI(url, param) {
  return axios({
    method: 'post',
    url: RC_DOMAIN + url,
    responseType: 'blob',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    transformRequest: [
      function(data) {
        return qs.stringify(data, { arrayFormat: 'brackets' });
      },
    ],
    traditional : true,
    data: param,
    withCredentials: false,
  });
}

