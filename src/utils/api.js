export default class Api
{
  constructor() {
    this._baseUrl = 'http://localhost:3001';
    this._headers = new Headers({"content-type": "application/json"});
  }

  async _request(url, method, requestBody) {
    return fetch(this._baseUrl + url, {
      method: method,
      headers: this._headers,
      body: JSON.stringify(requestBody)
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          return Promise.reject("something went wrong");
        }
    })
      .catch((err) => {console.log(err);});
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
}