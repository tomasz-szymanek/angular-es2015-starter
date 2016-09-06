import controller from './build.controller';

const BuildComponent = {
  controller,
  template: `
    <div class="build">
      build
      <ui-view></ui-view>
    </div>
  `
};

export default BuildComponent;
