import Source from './source';
class GeoGetter {
  constructor(source) {
    if (source instanceof Source) {
      this.source = source;
    } else {
      this.source = new Source('http://ip-api.com/json/', 'data');
    }
  }

  setSource(source) {
    this.source = source;
  }

  getGeo(ip = '') {
    return this.source.get(ip);
  }
}

export default GeoGetter;
