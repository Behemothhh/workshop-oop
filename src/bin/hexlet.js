#!/usr/bin/env node
import GeoGetter from '../index';
import Source from '../source';

const [, , cmdValue] = process.argv;
const source = new Source('http://ip-api.com/json/', 'data');
const geoGetter = new GeoGetter();
geoGetter.setSource(source);

geoGetter.getGeo(cmdValue)
  .then(data => Object.entries(data).forEach(([key, value]) => console.log(`${key} - ${value}`)));
