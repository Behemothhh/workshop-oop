import Source from '../source';
/*eslint-disable */
class TestSource extends Source {
  constructor() {
    super('localhost');
  }

  get() {
    return Promise.resolve({
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
    });
  }
}

export default TestSource;
