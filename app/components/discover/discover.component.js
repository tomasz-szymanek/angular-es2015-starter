import controller from './discover.controller';

const DiscoverComponent = {
  controller,
  template: `
    <div class="discovery">
      build
      <ui-view></ui-view>
    </div>
  `
};

export default DiscoverComponent;
