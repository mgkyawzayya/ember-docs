import Helper from '@ember/component/helper';

export default class Substring extends Helper {
  compute([string], {start, length}) {
    return string.substr(start || 0, length);
  }
}