import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppComponent from './app.component';
import Components from './components';

const root = angular
  .module('app', [
    Components,
    uiRouter
  ])
  .component('app', AppComponent)
  .name;

export default root;