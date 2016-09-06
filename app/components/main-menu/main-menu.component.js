import controller from './main-menu.controller';

const MainMenuComponent = {
  controller,
  template: `
    <div class="main-menu">
      main-menu
      <ui-view></ui-view>
    </div>
  `
};

export default MainMenuComponent;
