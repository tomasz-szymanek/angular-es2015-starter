import angular from 'angular';
import uiRouter from 'angular-ui-router';
import secondaryMenuComponent from './secondary-menu.component';

const secondarymenu = angular
  .module('secondary-menu', [
    uiRouter
  ])
  .component('secondarymenu', secondaryMenuComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('main.sidebar.secondary', {
        abstract: true,
        component: 'secondarymenu'
      });
  })
  .name;

export default secondarymenu;