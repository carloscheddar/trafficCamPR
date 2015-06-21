/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';

describeComponent(
  'load-img',
  'LoadImgComponent',
  {
    // specify the other units that are required for this test
    needs: ['component:md-loader']
  },
  function() {
    it('renders', function() {
      // creates the component instance
      var component = this.subject();
      expect(component._state).to.equal('preRender');

      // renders the component on the page
      this.render();
      expect(component._state).to.equal('inDOM');
    });
  }
);
