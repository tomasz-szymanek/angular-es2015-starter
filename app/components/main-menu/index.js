import angular from 'angular';
import uiRouter from 'angular-ui-router';
import MainMenuComponent from './main-menu.component';

const mainmenu = angular
  .module('main-menu', [
    uiRouter
  ])
  .component('mainmenu', MainMenuComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('main', {
        abstract: true,
        component: 'mainmenu'
      });
  })
  .name;

export default mainmenu;