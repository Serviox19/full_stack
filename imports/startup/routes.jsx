import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

//Pages
import { App } from '../ui/App';
import Home from '../ui/pages/Home';

FlowRouter.route('/', {
  action() {
    mount(App, {
      content: <Home />
    });
  }
});
