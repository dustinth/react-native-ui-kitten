import { RkColors } from './color';

const Colors = {
  // 主色调
  primary: '#9c8152',
  // 按压态下的主色调，以下类同
  primaryActive: '#8c744a',
  // 操作成功
  success: '#22c93d',
  successActive: '#1fb537',
  // 普通文本（段落等），颜色比foreground略浅
  info: '#807f7a',
  infoActive: '#73726e',
  // 警告
  warning: '#e04356',
  warningActive: '#ca3c4d',
  // 危险操作
  danger: '#e04356',
  dangerActive: '#ca3c4d',
  // 前景色，常用于主要文本（标题等），深色
  foreground: '#382807',
  // 背景色，白色
  background: '#fff',
  // 逆向背景色，但也作用于背景上
  inverseBackground: '#000',
  // 模态框（弹层）背景色
  modalBackground: '#0000004d',
  // 图片背景色（通常是在加载中时显示，用于视觉填充）
  overlay: '#00000057',
  // 只读状态
  neutral: '#0000001A',
  // 禁用态文本色或背景色
  disabled: '#c8c8c8',
  // 次要文本，常用于提示文案
  hint: '#9c9b98',
  // 高亮色，暂不清楚和主色的差异。。。
  highlight: '#b39468',
  // 股市涨📈
  marketUp: '#e04356',
  // 股市跌📉
  marketDown: '#51af88',
}

export const Values = {
  primary: '#397edc',
  primaryActive: '#2d63ad',
  success: '#22c93d',
  successActive: '#1dab35',
  info: '#19bfe5',
  infoActive: '#17adcf',
  warning: '#feb401',
  warningActive: '#eba502',
  danger: '#ed1c4d',
  dangerActive: '#c2173f',
  foreground: '#000000dd',
  modalBackground: '#0000004d',
  background: '#fff',
  inverseBackground: '#000000',
  overlay: '#00000057',
  fontSize: 15,
  neutral: '#0000001A',
  hint: '#0000008e',
  highlight: '#ececec',
};

export const DefaultTheme = {
  px: 1,
  margin: {
    base: 25, // 等于列表项两侧的留白，常见于页面垂直方向的对齐基线
    small: 5,
    medium: 10,
    large: 15,
    xlarge: 20,
    xxlarge: 25,
  },
  padding: {
    base: 25, // 等于列表项两侧的留白，常见于页面垂直方向的对齐基线
    small: 5,
    medium: 10,
    large: 15,
    xlarge: 20,
    xxlarge: 25,
  },
  radius: {
    base: 5, // 暂定
    small: 2,
    medium: 5,
    large: 10,
    xlarge: 13,
    xxlarge: 15,
  },
  rows: {
    // 列表整体高度
    height: {
      base: 44,
      small: 29,
      medium: 44,
      large: 60,
    },
  },
  colors: {
    primary: Values.primary,
    primaryActive: Values.primaryActive,
    success: Values.success,
    successActive: Values.successActive,
    info: Values.info,
    infoActive: Values.infoActive,
    warning: Values.warning,
    warningActive: Values.warningActive,
    danger: Values.danger,
    dangerActive: Values.dangerActive,
    foreground: Values.foreground,
    modalBackground: Values.modalBackground,
    background: Values.background,
    overlay: Values.overlay,
    highlight: Values.highlight,
    // 股市涨📈
    marketUp: '#e04356',
    // 股市跌📉
    marketDown: '#51af88',
    text: {
      base: Values.foreground,
      inverse: Values.background,
      subtitle: Values.foreground,
      hint: Values.hint,
      primary: Colors.primary,
      info: Colors.info,
    },
    button: {
      primary: Values.primary,
      primaryActive: Values.primaryActive,
      success: Values.success,
      successActive: Values.successActive,
      info: Values.info,
      infoActive: Values.infoActive,
      warning: Values.warning,
      warningActive: Values.warningActive,
      danger: Values.danger,
      dangerActive: Values.dangerActive,
      foreground: Values.foreground,
      background: Values.background,
      cancel: Colors.hint,
      text: Values.background,
      outline: RkColors.transparent,
      outlineActive: 'rgba(0,0,0,0.1)',
    },
    screen: {
      base: Values.background,
      primary: Values.primary,
      primaryActive: Values.primaryActive,
      success: Values.success,
      successActive: Values.successActive,
      info: Values.info,
      infoActive: Values.infoActive,
      warning: Values.warning,
      warningActive: Values.warningActive,
      danger: Values.danger,
      dangerActive: Values.dangerActive,
      foreground: Values.foreground,
      modalBackground: Values.modalBackground,
      background: Values.background,
      backgroundActive: '#fcfbfa',
      pageBackground: '#f6f6f6', // 页面背景色，一般浅色，但可能不是纯白
      material: Values.primary,
      disabled: Values.neutral,
      inverse: Values.inverseBackground,
    },
    border: {
      base: Values.neutral,
      primary: Values.neutral,
      solid: '#0000003B',
      material: Values.warning,
      disabled: Values.neutral,
      card: '#00000014',
    },
    input: {
      text: Values.foreground,
      background: Values.background,
      label: Values.hint,
      placeholder: Values.hint,
      disabled: Colors.disabled,
      readonly: Colors.neutral,
    },
  },
  fonts: {
    sizes: {
      base: Values.fontSize,
      xsmall: 10,
      small: Values.fontSize * 0.8,
      medium: Values.fontSize,
      large: Values.fontSize * 1.2,
      xlarge: Values.fontSize / 0.75,
      xxlarge: Values.fontSize * 1.6,
    },
    height: {
      base: 22,
      xsmall: 13,
      small: 18,
      medium: 22,
      large: 24,
      xlarge: 28,
      xxlarge: 45,
    },
  },
};
