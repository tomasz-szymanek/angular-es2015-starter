import angular from 'angular';
import uiRouter from 'angular-ui-router';
import DiscoverComponent from './discover.component';

const discover = angular
  .module('discover', [
    uiRouter
  ])
  .component('discover', DiscoverComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('main.build.discover', {
        url: '/discover',
        component: 'discover'
      });
  })
  .name;

export default discover;