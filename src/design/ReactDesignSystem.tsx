import ThemeContext, { AppTheme } from "./theme/AppTheme";
import { DesignAppBrand, defaultInterMessagingColor } from "./theme/AppBrand";
import {
  DesignBrandColor,
  ColorTokens,
  InterActionColor,
  MessagingColor,
  DesignNeutralColor,
  defaultDesignNeutralColor,
} from "./theme/ColorTokens";
import { Provider } from "react-redux";
import { globalStore } from "../global/GlobalStore";
import { BaseModule } from "../modules/BaseModule";
import React from "react";

export function getColorTokens(
  props:{
    brandColor: DesignBrandColor,
  interaction: InterActionColor,
  messaging: MessagingColor,
  neutral: DesignNeutralColor
  }
): ColorTokens {
  const tokens: ColorTokens = {
    brand: props.brandColor,
    interaction: props.interaction,
    messaging: props.messaging,
    neutral: props.neutral,
  };
  return tokens;
}

export function ReactDesignSystem(props: {
  brand: DesignAppBrand;
  children: any;
  modules: BaseModule[];
}) {
  const bColors = props.brand.getTokens(false);
  const tokens = getColorTokens(
    {
      brandColor: bColors.brand,
      interaction: bColors.interaction,
      messaging: bColors.messaging,
      neutral: bColors.neutral
    }
  );
  const theme: AppTheme = {
    colors: tokens,
  };
  return (
    <Provider store={globalStore(props.modules)}>
      <ThemeContext.Provider value={theme}>
        {props.children}
      </ThemeContext.Provider>
    </Provider>
  );
}
