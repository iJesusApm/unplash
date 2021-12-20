import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PATH} from './config';
let path = PATH;

export default {
  async get(url) {
    let headers;
    let token = await AsyncStorage.getItem('token');
    if (token) {
      headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer ' + token,
      };
    } else {
      headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      };
    }
    return new Promise((resolve, reject) => {
      axios({method: 'get', url: path + url, headers: headers})
        .then(res => {
          resolve(res.data);
        })
        .catch(err => reject(err));
    });
  },

  async post(url, data) {
    let headers;
    let token = await AsyncStorage.getItem('token');
    if (token) {
      headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer ' + token,
      };
    } else {
      headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      };
    }
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: path + url,
        data: data,
        headers: headers,
      })
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  async put(url, data) {
    let headers;
    let token = await AsyncStorage.getItem('token');
    if (token) {
      headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer ' + token,
      };
    } else {
      headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      };
    }
    return new Promise((resolve, reject) => {
      axios({
        method: 'put',
        url: path + url,
        data: data,
        headers: headers,
      })
        .then(res => {
          resolve(res.data);
        })
        .catch(err => reject(err));
    });
  },

  async delete(url) {
    let headers;
    let token = await AsyncStorage.getItem('token');
    if (token) {
      headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer ' + token,
      };
    } else {
      headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      };
    }
    return new Promise((resolve, reject) => {
      axios({method: 'delete', url: path + url, headers: headers})
        .then(res => {
          resolve(res.data);
        })
        .catch(err => reject(err));
    });
  },
};
