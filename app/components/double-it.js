import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class DoubleItComponent extends Component {
  @tracked multiple = 1;

  @action
  updateMultiple(newMultiple) {
    this.multiple = newMultiple;
  }
}
