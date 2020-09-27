import { create } from 'apisauce';

class ItuneAPI {
  constructor() {
    this.api = create({
      baseURL: 'https://itunes.apple.com/'
    });
  }

  getSearchResult = term =>
    this.api
      .get(`search?term=${term}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.originalError} is occur, Please contact site admin.`);
        }
        return response.data;
      })
      .catch(error => alert(error));
}

export default new ItuneAPI();
