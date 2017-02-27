if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 10);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      if(Session.get('counter') > 0)
      {
        Session.set('counter', Session.get('counter') - 1);
      }
      else
      {
        Session.set('counter', 10);
      }
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
