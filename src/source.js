import axios from 'axios';

class Source {
  constructor(adress, field) {
    this.adress = adress;
    this.field = field;
  }

  get(ip = '') {
    return axios.get(`${this.adress}${ip}`)
      .then(resp => resp[this.field]);
  }
}

export default Source;
