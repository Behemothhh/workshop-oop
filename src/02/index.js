import fs from 'fs';

class Pipeline {
  constructor(arg) {
    this.arg = arg;
  }

  pipe(fn) {
    return new Pipeline(fn(this.arg));
  }

  toString() {
    return this.arg.toString();
  }
}

const pipeline = new Pipeline(fs.readdirSync('./'));

pipeline.pipe(files => files.sort(file => file[0] === '.'))
  .pipe(files => files.sort())
  .pipe(files => files[Math.floor(files.length / 2)])
  .pipe(file => (/s^/i.test(file) ? file : `${file}s`))
  .pipe(file => file.toUpperCase())
  .pipe(console.log);
