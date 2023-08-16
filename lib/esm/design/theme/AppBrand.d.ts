import { DesignBrandColor, ColorTokens, InterActionColor, MessagingColor } from "./ColorTokens";
export interface DesignAppBrand {
    getTokens(isDaark: boolean): ColorTokens;
}
export declare const defaultBrand: DesignAppBrand;
export declare const defaultBrandColor: DesignBrandColor;
export declare const defaultInterActionColor: InterActionColor;
export declare const defaultInterMessagingColor: MessagingColor;
export declare const defaultColorTokens: ColorTokens;
