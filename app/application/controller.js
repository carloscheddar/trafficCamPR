import Ember from 'ember';
import Cams from '../utils/cams';
import computedFilterByQuery from 'ember-cli-filter-by-query';

export default Ember.Controller.extend({
  queryParams: ['name'],
  cams: new Cams(),
  showingModal: false,
  selectedCam: null,
  name: '',

  // This property filters cams by name using the search box or query param.
  filteredCams: computedFilterByQuery('cams', 'name', 'name'),

  actions: {
    // Toggle the modal with the cam that the user selected.
    toggleModal(cam) {
      this.set('selectedCam', cam);
      this.transitionTo('cam', cam.id);
      this.toggleProperty('showingModal');
    }
  }
});
