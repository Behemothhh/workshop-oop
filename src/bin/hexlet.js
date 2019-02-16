#!/usr/bin/env node
import GeoGetter from '../index';

const [, , ip] = process.argv;
const geoGetter = new GeoGetter();

geoGetter.get(ip)
  .then(data => Object.entries(data).forEach(([key, value]) => console.log(`${key} - ${value}`)));
