import { DesignAppBrand } from "./theme/AppBrand";
import { DesignBrandColor, ColorTokens, InterActionColor, MessagingColor, DesignNeutralColor } from "./theme/ColorTokens";
import { BaseModule } from "../modules/BaseModule";
import React from "react";
export declare const getColorTokens: (brandColor: DesignBrandColor, interaction: InterActionColor, messaging?: MessagingColor, neutral?: DesignNeutralColor) => ColorTokens;
export declare function ReactDesignSystem(props: {
    brand: DesignAppBrand;
    children: any;
    modules: BaseModule[];
}): React.JSX.Element;
