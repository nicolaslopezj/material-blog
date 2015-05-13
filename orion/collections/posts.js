Posts = new orion.collection('posts', {
  singularName: 'post', // The name of one of this items
  pluralName: 'posts', // The name of more than one of this items
  link: {
    title: 'Posts' 
  },
  tabular: {
    columns: [
      { data: "title", title: "Title" },
      orion.attributeColumn('file', 'image', 'Image'),
      orion.attributeColumn('froala', 'body', 'Content'),
      orion.attributeColumn('createdBy', 'createdBy', 'Created By'),
      orion.attributeColumn('createdAt', 'createdAt', 'Created At')
    ]
  }
});


Posts.attachSchema(new SimpleSchema({
  title: {
    type: String
  },
  image: orion.attribute('file', {
      label: 'Image',
      optional: true
  }),
  body: orion.attribute('froala', {
      label: 'Body'
  }),
  createdBy: orion.attribute('createdBy'),
  createdAt: orion.attribute('createdAt')
}));


Posts.helpers({
  getCreator: function () {
    return Meteor.users.findOne({ _id: this.createdBy });
  }
});

