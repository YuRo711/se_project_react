export default class Api
{
  constructor() {
    this._baseUrl = 'http://localhost:3001';
    this._headers = new Headers({"content-type": "application/json"});
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
    });
  }

  async getItems() {
    return this._request("/items", "GET");
  }

  async addItem(itemData) {
    return this._request("/items", "POST", itemData);
  }

  async deleteItem(itemId) {
    return this._request("/items/" + itemId, "DELETE");
  }

  async addUser(userData) {
    return this._request("/signup", "POST", userData);
  }

  async signIn(signInData) {
    return this._request("/signin", "POST", signInData);
  }

  async auth(token) {
    return this._request("/users/me", "GET", {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    });
  }
}

export const api = new Api();