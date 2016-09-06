import angular from 'angular';
import uiRouter from 'angular-ui-router';
import SidebarMenuComponent from './sidebar-menu.component';

const sidebarmenu = angular
  .module('sidebar-menu', [
    uiRouter
  ])
  .component('sidebarmenu', SidebarMenuComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('main.sidebar', {
        abstract: true,
        component: 'sidebarmenu'
      });
  })
  .name;

export default sidebarmenu;