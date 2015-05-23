import Ember from 'ember';
import Cams from '../utils/cams';

export default Ember.Route.extend({
  cams: new Cams(),
  model(params) {
    return this.get('cams').objectAt(params.id - 1);
  },

  actions: {
    close() {
      this.transitionTo('/');
    }
  }
});
