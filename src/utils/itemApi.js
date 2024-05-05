import { baseUrl } from "./constants";

export default class ItemApi
{
  constructor() {
    this._baseUrl = baseUrl;
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

  addCardLike(id) {
    return this._request(`/items/${id}/likes`, "PUT");
  }

  removeCardLike(id) {
    return this._request(`/items/${id}/likes`, "DELETE");
  }

  setTokenHeader(token) {
    this._headers = new Headers({
      "content-Type": "application/json",
      "authorization": `Bearer ${token}`,
    });
  }
}

export const itemApi = new ItemApi();