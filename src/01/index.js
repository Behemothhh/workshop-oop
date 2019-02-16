import requestBuilder from './requestBuilder';

class GeoInfo {
  constructor(source) {
    if (typeof source === 'string') {
      this.get = requestBuilder(source);
    } else {
      this.get = source;
    }
  }

  async getInfoForIp(ip = '') {
    const { data } = await this.get(ip);
    return data;
  }
}

export default GeoInfo;
