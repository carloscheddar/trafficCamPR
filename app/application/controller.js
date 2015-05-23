import Ember from 'ember';
import Cams from '../utils/cams';

export default Ember.Controller.extend({
  cams: new Cams(),
  showingModal: false,
  selectedCam: null,

  actions: {
    // Toggle the modal with the cam that the user selected.
    toggleModal(cam) {
      this.set('selectedCam', cam);
      this.transitionTo('cam', cam.id);
      this.toggleProperty('showingModal');
    }
  }
});
