import { BrandColor, ColorTokens, InterActionColor, MessagingColor, defaultNeutralColor } from "./ColorTokens";

export interface AppBrand {
  getTokens(isDaark: boolean): ColorTokens
}

export const defaultBrand: AppBrand = {
  getTokens: function (isDaark: boolean): ColorTokens {
      return defaultColorTokens
  }
}



export const defaultBrandColor: BrandColor = {
  main: "#0075BB",
  secondary: "#0075BB",
  dark: "#0075BB",
  background: null
}

export const defaultInterActionColor: InterActionColor = {
  main: "#0075BB",
  hover: "#0075BB",
  pressed: "#D9EAF5"
}

export const defaultInterMessagingColor: MessagingColor = {
  error: "#D00025",
  errorLight: "#F8D9DE",
  success: "#008337",
  successLight: "#D9ECE1",
  warning: "#E94E00",
  warningLight: "#FCE4D9",
  information: "#0075BB",
  informationLight: "#D9EAF5"
}

export const defaultColorTokens: ColorTokens = {
  brand: defaultBrandColor,
  interaction: defaultInterActionColor,
  messaging: defaultInterMessagingColor,
  neutral: defaultNeutralColor
}