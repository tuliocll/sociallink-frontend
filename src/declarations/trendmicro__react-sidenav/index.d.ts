interface IToggle {
  componentType?: any;
  componentClass?: void | string;
  disabled?: boolean;
  expanded?: boolean;
  children?: any;
}

interface INav {
  componentType?: any;
  componentClass?: void | string;
  onSelect?: void;
  selected?: any;
  defaultSelected?: any;
  defaultSelected?: any;
  expanded?: boolean;
  children?: any;
}

interface INavIcon {
  componentType?: any;
  children?: any;
}

interface INavItem {
  componentType?: any;
  componentClass?: void | string;
  active?: boolean;
  disabled?: boolean;
  expanded?: boolean;
  eventKey?: any;
  onClick?: void;
  onSelect?: void;
  selected?: any;
  subnav?: boolean;
  navitemClassName?: string;
  navitemStyle?: {};
  subnavClassName?: string;
  subnavStyle?: {};
  children?: any;
}

interface INavText {
  componentType?: any;
  children?: any;
}

interface ISideNav {
  componentType?: any;
  componentClass?: void | string;
  disabled?: boolean;
  expanded?: boolean;
  onToggle?(toogle: boolean): void;
  onSelect?(selected: string): void;
  children?: any;
}

declare module "@trendmicro/react-sidenav" {
  import React from "react";

  export class Toggle extends React.PureComponent<IToggle> {}
  export class Nav extends React.PureComponent<INav> {}
  export class NavIcon extends React.PureComponent<INavIcon> {}
  export class NavItem extends React.PureComponent<INavItem> {}
  export class NavText extends React.PureComponent<INavText> {}
  export class SideNav extends React.Component<ISideNav> {}
}
