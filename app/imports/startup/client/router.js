import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/about-us', {
  name: 'About_Us',
  action() {
    BlazeLayout.render('App_Body', { main: 'About_Us' });
  },
});

FlowRouter.route('/view-my-campaigns', {
  name: 'View_My_Campaigns',
  action() {
    BlazeLayout.render('App_Body', { main: 'View_My_Campaigns' });
  },
});

FlowRouter.route('/view-campaigns', {
  name: 'View_Campaigns',
  action() {
    BlazeLayout.render('App_Body', { main: 'View_Campaigns' });
  },
});

FlowRouter.route('/add-campaign', {
  name: 'Add_Campaign',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_Campaign' });
  },
});


FlowRouter.route('/list', {
  name: 'List_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'List_Stuff_Page' });
  },
});

FlowRouter.route('/add', {
  name: 'Add_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_Stuff_Page' });
  },
});

FlowRouter.route('/stuff/:_id', {
  name: 'Edit_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Stuff_Page' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};
