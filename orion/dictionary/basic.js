orion.dictionary.addDefinition('title', 'basic', {
  type: String
});

orion.dictionary.addDefinition('logo', 'basic', 
  orion.attribute('file', {
      label: 'Site Logo',
      optional: true
  })
);