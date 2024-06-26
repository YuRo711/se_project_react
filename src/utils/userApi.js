import { baseUrl } from "./constants";

export default class UserApi
{
  constructor() {
    this._baseUrl = baseUrl;
    this._headers = new Headers({
      "content-type": "application/json",
    });
  }

  async _request(url, method, requestBody, headers=this._headers) {
    return fetch(this._baseUrl + url, {
      method: method,
      headers: headers,
      body: JSON.stringify(requestBody)
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          return Promise.reject("something went wrong");
        }
    })
  }

  async addUser(userData) {
    return this._request("/signup", "POST", userData);
  }

  async updateUser(userData) {
    return this._request("/users/me", "PATCH", userData);
  }

  async signIn(signInData) {
    return this._request("/signin", "POST", signInData);
  }

  async auth(token) {
    this.setTokenHeader(token);
    return this._request("/users/me", "GET");
  }

  setTokenHeader(token) {
    this._headers = new Headers({
      "content-Type": "application/json",
      "authorization": `Bearer ${token}`,
    });
  }
}

export const userApi = new UserApi();