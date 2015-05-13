/**
 * We will create a new role that will allow
 * not-admin users to edit posts
 */
EditorRole = new Roles.Role('editor');

/**
 * Users can see posts in the admin
 */
EditorRole.allow('collection.posts.index', true);

/**
 * And we will make that the users only see their posts in the index
 */
EditorRole.helper('collection.posts.indexFilter', function() {
  return { createdBy: this.userId };
})

/**
 * Users can create posts
 */
EditorRole.allow('collection.posts.insert', true);

/**
 * Users can update posts
 */
EditorRole.allow('collection.posts.update', function(userId, doc, fields, modifier) {
  return doc.createdBy === userId; // Will be allowed to edit his own posts
});

/**
 * Users can't change the createdBy attribute
 */
EditorRole.deny('collection.posts.update', function(userId, doc, fields, modifier) {
  return !_.contains(fields, 'userId');
});

/**
 * Users can remove posts
 */
EditorRole.allow('collection.posts.remove', function(userId, doc) {
  return doc.createdBy === userId; // Will be allowed to edit his own posts
});

/**
 * Users can see the create post button
 */
EditorRole.allow('collection.posts.showCreate', true);

/**
 * Users can see the update post button if they created the doc
 */
EditorRole.allow('collection.posts.showUpdate', function(doc) {
  return doc.createdBy == this.userId;
});

/**
 * Users can see the delete post button if they created the doc
 */
EditorRole.allow('collection.posts.showRemove', function(doc) {
  return doc.createdBy == this.userId;
});

