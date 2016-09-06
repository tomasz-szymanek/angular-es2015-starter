import angular from 'angular';
import MainMenu from './main-menu';

const components = angular
  .module('app.components', [
    MainMenu
  ])
  .name;

export default components;