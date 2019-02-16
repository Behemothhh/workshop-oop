import GeoInfo from '../src/01/index';
import testResponses from './responses.json';

const testAxios = ip => Promise.resolve({ data: testResponses[`http://ip-api.com/json/${ip}`] });

describe('Get geo', () => {
  const geoInfo = new GeoInfo(testAxios);
  it('no ip', async () => {
    const data = await geoInfo.getInfoForIp();

    expect(data).toEqual(testResponses['http://ip-api.com/json/']);
  });

  it('right ip', async () => {
    const data = await geoInfo.getInfoForIp('24.28.0.3');

    expect(data).toEqual(testResponses['http://ip-api.com/json/24.28.0.3']);
  });

  it('wrong ip', async () => {
    const data = await geoInfo.getInfoForIp('asd');

    expect(data).toEqual(testResponses['http://ip-api.com/json/asd']);
  });
});
