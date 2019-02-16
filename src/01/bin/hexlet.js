#!/usr/bin/env node
import GeoInfo from '../index';

const [, , ip] = process.argv;
const geoInfo = new GeoInfo();

geoInfo.getInfoForIp(ip)
  .then(data => Object.entries(data).forEach(([key, value]) => console.log(`${key} - ${value}`)));
