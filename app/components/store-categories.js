import Component from '@glimmer/component';

export default class StoreCategoriesComponent extends Component {
  categories = {
    'Bourbons': ['Bulleit', 'Four Roses', 'Woodford Reserve'],
    'Ryes': ['WhistlePig', 'High West']
  };
}
