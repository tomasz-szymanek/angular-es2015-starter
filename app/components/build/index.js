import angular from 'angular';
import uiRouter from 'angular-ui-router';
import BuildComponent from './discover.component';

const discover = angular
  .module('discover', [
    uiRouter
  ])
  .component('discover', DiscoverComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('main.build', {
        abstract: true,
        component: 'discover'
      });
  })
  .name;

export default discover;