import axios from 'axios';
import GeoGetter from '../src/index';
import testResponses from './responses.json';

axios.get = ip => Promise.resolve({ data: testResponses[ip] });

describe('Get geo', () => {
  const geoGetter = new GeoGetter();
  it('no ip', async () => {
    const data = await geoGetter.get();

    expect(data).toEqual(testResponses['http://ip-api.com/json/']);
  });

  it('right ip', async () => {
    const data = await geoGetter.get('24.28.0.3');

    expect(data).toEqual(testResponses['http://ip-api.com/json/24.28.0.3']);
  });

  it('wrong ip', async () => {
    const data = await geoGetter.get('asd');

    expect(data).toEqual(testResponses['http://ip-api.com/json/asd']);
  });
});
