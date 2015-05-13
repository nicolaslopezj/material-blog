Options.set('profileSchema', {
  picture: orion.attribute('file', {
      label: 'Picture',
      optional: true
  }),
  name: {
    type: String
  }
});