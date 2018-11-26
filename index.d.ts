// Type definitions for react-native-icon-badge
// Project: https://github.com/yanqiw/react-native-icon-badge
// Definitions by: Jan Hesters <https://github.com/janhesters>
// TypeScript Version: 3.1

import * as React from "react";
import { StyleProp, ViewStyle } from "react-native";

export interface IconBadgeProps {
  /**
   * The background element.
   */
  MainElement: JSX.Element;

  /**
   * The badge element, normally it is a Text.
   */
  BadgeElement: JSX.Element;

  /**
   * Customized container (main view) style.
   */
  MainViewStyle?: StyleProp<ViewStyle>;

  /**
   * Customized badge style.
   */
  IconBadgeStyle?: StyleProp<ViewStyle>;

  /**
   * Hides badge.
   * @default true
   */
  Hidden?: boolean;
}

export default class IconBadge extends React.Component<IconBadgeProps> {}
