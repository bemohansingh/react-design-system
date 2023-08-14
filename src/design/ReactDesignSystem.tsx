import React, { Children } from "react";
import ThemeContext, { AppTheme, defaultTheme } from "./theme/AppTheme";
import { AppBrand, defaultInterMessagingColor } from "./theme/AppBrand";
import {
  BrandColor,
  ColorTokens,
  InterActionColor,
  MessagingColor,
  NeutralColor,
  defaultNeutralColor,
} from "./theme/ColorTokens";
import { Provider } from "react-redux";
import {globalStore } from "../global/GlobalStore";
import { BaseModule } from "../modules/BaseModule";
import { BaseRoute } from "../../app/BaseRoute";

const getColorTokens = function (
  brandColor: BrandColor,
  interaction: InterActionColor,
  messaging: MessagingColor = defaultInterMessagingColor,
  neutral: NeutralColor = defaultNeutralColor
): ColorTokens {
  const tokens: ColorTokens = {
    brand: brandColor,
    interaction: interaction,
    messaging: messaging,
    neutral: neutral,
  };
  return tokens;
};

export function ReactDesignSystem(props: { brand: AppBrand; children: any; modules: BaseModule[] }) {
  const bColors = props.brand.getTokens(true);
  const tokens = getColorTokens(
    bColors.brand,
    bColors.interaction,
    bColors.messaging,
    bColors.neutral
  );
  const theme: AppTheme = {
    colors: tokens,
  };
  return (
    <Provider store={globalStore(props.modules)}>
      <ThemeContext.Provider value={defaultTheme}>
        {props.children}
      </ThemeContext.Provider>
    </Provider>
  );
}
