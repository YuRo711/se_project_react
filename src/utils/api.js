export default class Api
{
  constructor() {
    this._baseUrl = 'http://localhost:3001';
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
}