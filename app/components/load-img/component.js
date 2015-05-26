import Ember from 'ember';

export default Ember.Component.extend({
  error: false,
  loading: true,

  didInsertElement() {
    // Hide image on error and set error to true
    this.$('img').on('error', () => {
      this.set('error', true);
      this.set('loading', false);
      this.$('img').hide();
    });

    // Show the image after it loads
    this.$('img').on('load', () => {
      this.set('loading', false);
      this.$('img').show();
    });
  }
});
