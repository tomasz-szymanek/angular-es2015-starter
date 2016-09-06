import controller from './sidebar-menu.controller';

const SidebarMenuComponent = {
  controller,
  template: `
    <div class="sidebar-menu">
      sidebar-menu
      <ui-view></ui-view>
    </div>
  `
};

export default SidebarMenuComponent;
