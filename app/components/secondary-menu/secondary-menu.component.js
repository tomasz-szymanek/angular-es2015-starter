import controller from './secondary-menu.controller';

const SecondaryMenuComponent = {
  controller,
  template: `
    <div class="secondary-menu">
      secondary-menu
      <ui-view></ui-view>
    </div>
  `
};

export default SecondaryMenuComponent;
