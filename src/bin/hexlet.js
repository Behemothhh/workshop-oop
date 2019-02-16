#!/usr/bin/env node
import GeoGetter from '../index';

const [, , cmdValue] = process.argv;
const geoGetter = new GeoGetter();
geoGetter.setSource(source);

geoGetter.getGeo(cmdValue)
  .then(data => Object.entries(data).forEach(([key, value]) => console.log(`${key} - ${value}`)));
