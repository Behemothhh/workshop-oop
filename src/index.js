class GeoGetter {
  setSource(source) {
    this.source = source;
  }

  getGeo(ip = '') {
    return this.source.get(ip);
  }
}

export default GeoGetter;
