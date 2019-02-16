import requestBuilder from './requestBuilder';

class GeoGetter {
  constructor(host) {
    this.getMeta = requestBuilder(host);
  }

  async get(ip = '') {
    const { data } = await this.getMeta(ip);
    return data;
  }
}

export default GeoGetter;
