import requestBuilder from './requestBuilder';

class GeoGetter {
  constructor(host) {
    this.get = requestBuilder(host);
  }

  async getMeta(ip = '') {
    const { data } = await this.get(ip);
    return data;
  }
}

export default GeoGetter;
