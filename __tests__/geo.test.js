import GeoGetter from '../src/index';
import TestSource from '../src/test/TestSource';

describe('Get geo', () => {
  it('should return object', () => {
    const answer = {
      query: '95.108.225.214',
      status: 'success',
      country: 'Russia',
      countryCode: 'RU',
      region: 'MOW',
      regionName: 'Moscow',
      city: 'Moscow',
      district: '',
      zip: '',
      lat: 55.7558,
      lon: 37.6173,
      timezone: 'Europe/Moscow',
      isp: 'Yandex LLC',
      org: 'Yandex',
      as: 'AS13238 YANDEX LLC',
      mobile: false,
      proxy: false,
    };
    const testSource = new TestSource();
    const geoGetter = new GeoGetter();
    geoGetter.setSource(testSource);

    return geoGetter.getGeo().then(data => expect(data).toEqual(answer));
  });
});
