export declare const baseTokens: {
    readonly Dimensions: {
        readonly space: {
            readonly 0: 0;
            readonly 1: 4;
            readonly 2: 8;
            readonly 3: 16;
            readonly 4: 24;
            readonly 5: 32;
            readonly 6: 48;
            readonly 7: 64;
            readonly 8: 80;
            readonly 9: 96;
            readonly 10: 120;
        };
        readonly Columns: {
            readonly XS: 12;
            readonly SM: 12;
            readonly MD: 12;
            readonly LG: 12;
            readonly XL: 12;
        };
        readonly Page: {
            readonly width: {
                readonly XS: 390;
                readonly SM: 600;
                readonly MD: 900;
                readonly LG: 1200;
                readonly XL: 1536;
                readonly XXL: 1920;
            };
            readonly height: {
                readonly XS: 844;
                readonly SM: 844;
                readonly MD: 1280;
                readonly LG: 1675;
                readonly XL: 1080;
                readonly XXL: 1080;
            };
        };
        readonly Container: {
            readonly width: {
                readonly boxed: {
                    readonly XS: 390;
                    readonly SM: 600;
                    readonly MD: 900;
                    readonly LG: 1200;
                    readonly XL: 1536;
                    readonly XXL: 1536;
                };
                readonly full: {
                    readonly XS: 390;
                    readonly SM: 600;
                    readonly MD: 900;
                    readonly LG: 1200;
                    readonly XL: 1536;
                    readonly XXL: 1920;
                };
            };
            readonly height: {
                readonly full: {
                    readonly XS: 633;
                    readonly SM: 633;
                    readonly MD: 1024;
                    readonly LG: 540;
                    readonly XL: 810;
                    readonly XXL: 810;
                };
                readonly default: {
                    readonly XS: 480;
                    readonly SM: 480;
                    readonly MD: 600;
                    readonly LG: 700;
                    readonly XL: 700;
                    readonly XXL: 700;
                };
            };
        };
    };
    readonly Colors: {
        readonly iqos: {
            readonly turquoise: "#00D1D2";
            readonly anthracite: "#393E44";
            readonly warmWhite: "#FFFDFB";
            readonly terea: "#D24619";
            readonly delia: "#D72018";
            readonly levia: "#6B2FA0";
            readonly hardWhite: "#FF6FCA";
            readonly dark5: "#EBECEC";
            readonly dark15: "#D7D8D9";
            readonly dark30: "#C3C5C6";
            readonly dark50: "#9C9FA1";
            readonly dark65: "#888B8E";
            readonly dark85: "#606568";
            readonly darker140: "#1C1F21";
        };
        readonly zyn: {
            readonly white: "#FFFFFF";
            readonly darkBlue: "#001871";
            readonly blue: "#00A9E0";
            readonly hardWhite: "#F9F9F9";
            readonly dark5: "#F2F5F7";
            readonly dark15: "#D9E2E7";
            readonly dark30: "#B2C4CF";
            readonly dark50: "#809DAE";
            readonly dark65: "#598096";
            readonly dark85: "#265876";
            readonly darker140: "#012236";
        };
        readonly veev: {
            readonly deepPurple: "#221551";
            readonly pureWhite: "#FFFFFF";
            readonly deepBlue: "#332072";
            readonly deepPurpleDarker: "#140A3A";
            readonly deepPurple85: "#43386B";
            readonly deepPurple65: "#6F678E";
            readonly deepPurple50: "#908AA8";
            readonly deepPurple30: "#BDB9CB";
            readonly deepPurple15: "#DEDCE5";
            readonly deepPurple5: "#F4F3F6";
        };
        readonly global: {
            readonly orange700: "#AA5600";
            readonly orange50: "#FFF3E0";
            readonly blue700: "#0070AE";
            readonly blue50: "#E1F5FE";
            readonly red700: "#D42E30";
            readonly red50: "#FFEBEE";
            readonly green700: "#2F7C34";
            readonly green50: "#E8F5E9";
            readonly yellow700: "#FDAC13";
            readonly yellow50: "#FFEDCC";
            readonly white: "#FFFFFF";
            readonly black: "#000000";
            readonly na: "#000000";
            readonly errorHighlight: "#F1D0C9";
        };
    };
};
export declare const fontFaces: {
    readonly iqos: {
        readonly regular: "IQOSW10-Regular";
        readonly bold: "IQOSW10-Bold";
    };
    readonly zyn: {
        readonly regular: "ZYNSans_W_Rg";
        readonly bold: "ZYNSans_W_XBd";
    };
};
export declare const fontFamilies: {
    readonly iqos: {
        readonly body: "IQOSW10-Regular";
        readonly heading: "IQOSW10-Bold";
    };
    readonly veev: {
        readonly body: "IQOSW10-Regular";
        readonly heading: "IQOSW10-Bold";
    };
    readonly zyn: {
        readonly body: "ZYNSans_W_Rg";
        readonly heading: "ZYNSans_W_XBd";
    };
};
export declare const fontWeights: {
    readonly regular: "400";
    readonly bold: "700";
};
export declare const resolutionBreakpoints: {
    readonly '390px (XS)': "390px";
    readonly '600px (SM)': "600px";
    readonly '900px (MD)': "900px";
    readonly '1200px (LG)': "1200px";
    readonly '1536px (XL)': "1536px";
};
export declare const Resolution: {
    readonly Radius: {
        readonly '0 (0px)': 0;
        readonly '2 (8px)': 8;
        readonly '3 (16px)': 16;
        readonly '4 (24px)': 24;
    };
    readonly Spacer: {
        readonly 0: 0;
        readonly 1: 4;
        readonly 2: 8;
        readonly 3: 16;
        readonly 4: 24;
        readonly 5: 32;
        readonly 6: 48;
        readonly 7: 64;
        readonly 8: 80;
        readonly 9: 96;
        readonly 10: 120;
    };
    readonly Typography: {
        readonly lineHeight: {
            readonly poster: {
                readonly '390px (XS)': "48px";
                readonly '1536px (XL)': "104px";
                readonly '1920px (XL)': "104px";
            };
            readonly h1: {
                readonly '390px (XS)': "36px";
                readonly '1536px (XL)': "64px";
                readonly '1920px (XL)': "64px";
            };
            readonly h2: {
                readonly '390px (XS)': "32px";
                readonly '1536px (XL)': "56px";
                readonly '1920px (XL)': "56px";
            };
            readonly h3: {
                readonly '390px (XS)': "28px";
                readonly '1536px (XL)': "42px";
                readonly '1920px (XL)': "42px";
            };
            readonly h4: {
                readonly '390px (XS)': "24px";
                readonly '1536px (XL)': "32px";
                readonly '1920px (XL)': "32px";
            };
            readonly h5: {
                readonly '390px (XS)': "28px";
                readonly '1536px (XL)': "36px";
                readonly '1920px (XL)': "36px";
            };
            readonly h6: {
                readonly '390px (XS)': "24px";
                readonly '1536px (XL)': "36px";
                readonly '1920px (XL)': "36px";
            };
            readonly fs1: {
                readonly '390px (XS)': "44px";
                readonly '1536px (XL)': "72px";
                readonly '1920px (XL)': "72px";
            };
            readonly fs2: {
                readonly '390px (XS)': "40px";
                readonly '1536px (XL)': "64px";
                readonly '1920px (XL)': "64px";
            };
            readonly fs3: {
                readonly '390px (XS)': "40px";
                readonly '1536px (XL)': "56px";
                readonly '1920px (XL)': "56px";
            };
            readonly fs4: {
                readonly '390px (XS)': "32px";
                readonly '1536px (XL)': "42px";
                readonly '1920px (XL)': "42px";
            };
            readonly fs5: {
                readonly '390px (XS)': "28px";
                readonly '1536px (XL)': "40px";
                readonly '1920px (XL)': "40px";
            };
            readonly fs6: {
                readonly '390px (XS)': "24px";
                readonly '1536px (XL)': "36px";
                readonly '1920px (XL)': "36px";
            };
            readonly body1: {
                readonly '390px (XS)': "24px";
                readonly '1536px (XL)': "24px";
                readonly '1920px (XL)': "24px";
            };
            readonly body2: {
                readonly '390px (XS)': "20px";
                readonly '1536px (XL)': "20px";
                readonly '1920px (XL)': "20px";
            };
            readonly body3: {
                readonly '390px (XS)': "16px";
                readonly '1536px (XL)': "16px";
                readonly '1920px (XL)': "16px";
            };
        };
        readonly size: {
            readonly poster: {
                readonly '390px (XS)': "40px";
                readonly '1536px (XL)': "96px";
                readonly '1920px (XL)': "96px";
            };
            readonly h1: {
                readonly '390px (XS)': "36px";
                readonly '1536px (XL)': "64px";
                readonly '1920px (XL)': "64px";
            };
            readonly h2: {
                readonly '390px (XS)': "32px";
                readonly '1536px (XL)': "56px";
                readonly '1920px (XL)': "56px";
            };
            readonly h3: {
                readonly '390px (XS)': "28px";
                readonly '1536px (XL)': "42px";
                readonly '1920px (XL)': "42px";
            };
            readonly h4: {
                readonly '390px (XS)': "24px";
                readonly '1536px (XL)': "32px";
                readonly '1920px (XL)': "32px";
            };
            readonly h5: {
                readonly '390px (XS)': "20px";
                readonly '1536px (XL)': "28px";
                readonly '1920px (XL)': "28px";
            };
            readonly h6: {
                readonly '390px (XS)': "18px";
                readonly '1536px (XL)': "24px";
                readonly '1920px (XL)': "24px";
            };
            readonly fs1: {
                readonly '390px (XS)': "36px";
                readonly '1536px (XL)': "64px";
                readonly '1920px (XL)': "64px";
            };
            readonly fs2: {
                readonly '390px (XS)': "32px";
                readonly '1536px (XL)': "56px";
                readonly '1920px (XL)': "56px";
            };
            readonly fs3: {
                readonly '390px (XS)': "28px";
                readonly '1536px (XL)': "42px";
                readonly '1920px (XL)': "42px";
            };
            readonly fs4: {
                readonly '390px (XS)': "24px";
                readonly '1536px (XL)': "32px";
                readonly '1920px (XL)': "32px";
            };
            readonly fs5: {
                readonly '390px (XS)': "20px";
                readonly '1536px (XL)': "28px";
                readonly '1920px (XL)': "28px";
            };
            readonly fs6: {
                readonly '390px (XS)': "18px";
                readonly '1536px (XL)': "24px";
                readonly '1920px (XL)': "24px";
            };
            readonly body1: {
                readonly '390px (XS)': "16px";
                readonly '1536px (XL)': "16px";
                readonly '1920px (XL)': "16px";
            };
            readonly body2: {
                readonly '390px (XS)': "14px";
                readonly '1536px (XL)': "14px";
                readonly '1920px (XL)': "14px";
            };
            readonly body3: {
                readonly '390px (XS)': "12px";
                readonly '1536px (XL)': "12px";
                readonly '1920px (XL)': "12px";
            };
        };
    };
    readonly Page: {
        readonly width: {
            readonly '390px (XS)': 390;
            readonly '600px (SM)': 600;
            readonly '900px (MD)': 900;
            readonly '1200px (LG)': 1200;
            readonly '1536px (XL)': 1536;
            readonly '1920px (XL)': 1920;
        };
        readonly height: {
            readonly '390px (XS)': 844;
            readonly '600px (SM)': 844;
            readonly '900px (MD)': 1280;
            readonly '1200px (LG)': 1675;
            readonly '1536px (XL)': 1080;
            readonly '1920px (XL)': 1080;
        };
        readonly basePadding: {
            readonly '390px (XS)': 24;
            readonly '600px (SM)': 24;
            readonly '900px (MD)': 32;
            readonly '1200px (LG)': 48;
            readonly '1536px (XL)': 64;
            readonly '1920px (XL)': 64;
        };
    };
    readonly Navigation: {};
    readonly Cards: {};
    readonly Image: {
        readonly width: {
            readonly full: {
                readonly 100: {
                    readonly xs: 390;
                    readonly xl: 1536;
                    readonly xxl: 1920;
                };
                readonly 50: {
                    readonly xs: 390;
                    readonly xl: 768;
                    readonly xxl: 960;
                };
            };
            readonly boxed: {
                readonly 100: {
                    readonly xs: 390;
                    readonly xl: 1536;
                    readonly xxl: 1536;
                };
                readonly 50: {
                    readonly xs: 390;
                    readonly xl: 768;
                    readonly xxl: 768;
                };
            };
            readonly square: {
                readonly xs: 390;
                readonly xl: 700;
                readonly xxl: 700;
            };
        };
        readonly height: {
            readonly full: {
                readonly xs: 633;
                readonly xl: 810;
                readonly xxl: 810;
            };
            readonly default: {
                readonly xs: 480;
                readonly xl: 700;
                readonly xxl: 700;
            };
            readonly square: {
                readonly xs: 390;
                readonly xl: 700;
                readonly xxl: 700;
            };
        };
    };
    readonly BottomMargin: {
        readonly Poster: {
            readonly '390px (XS)': "16px";
            readonly '600px (SM)': "16px";
            readonly '900px (MD)': "16px";
            readonly '1200px (LG)': "16px";
            readonly '1536px (XL)': "16px";
            readonly '1920px (XL)': "16px";
        };
        readonly H1: {
            readonly '390px (XS)': "16px";
            readonly '600px (SM)': "16px";
            readonly '900px (MD)': "16px";
            readonly '1200px (LG)': "16px";
            readonly '1536px (XL)': "16px";
            readonly '1920px (XL)': "16px";
        };
        readonly H2: {
            readonly '390px (XS)': "16px";
            readonly '600px (SM)': "16px";
            readonly '900px (MD)': "16px";
            readonly '1200px (LG)': "16px";
            readonly '1536px (XL)': "16px";
            readonly '1920px (XL)': "16px";
        };
        readonly H3: {
            readonly '390px (XS)': "16px";
            readonly '600px (SM)': "16px";
            readonly '900px (MD)': "16px";
            readonly '1200px (LG)': "16px";
            readonly '1536px (XL)': "16px";
            readonly '1920px (XL)': "16px";
        };
        readonly H4: {
            readonly '390px (XS)': "16px";
            readonly '600px (SM)': "16px";
            readonly '900px (MD)': "16px";
            readonly '1200px (LG)': "16px";
            readonly '1536px (XL)': "16px";
            readonly '1920px (XL)': "16px";
        };
        readonly H5: {
            readonly '390px (XS)': "16px";
            readonly '600px (SM)': "16px";
            readonly '900px (MD)': "16px";
            readonly '1200px (LG)': "16px";
            readonly '1536px (XL)': "16px";
            readonly '1920px (XL)': "16px";
        };
        readonly H6: {
            readonly '390px (XS)': "16px";
            readonly '600px (SM)': "16px";
            readonly '900px (MD)': "16px";
            readonly '1200px (LG)': "16px";
            readonly '1536px (XL)': "16px";
            readonly '1920px (XL)': "16px";
        };
        readonly list: {
            readonly '390px (XS)': "16px";
            readonly '600px (SM)': "16px";
            readonly '900px (MD)': "16px";
            readonly '1200px (LG)': "16px";
            readonly '1536px (XL)': "16px";
            readonly '1920px (XL)': "16px";
        };
        readonly default: {
            readonly '390px (XS)': 16;
            readonly '600px (SM)': 16;
            readonly '900px (MD)': 16;
            readonly '1200px (LG)': 16;
            readonly '1536px (XL)': 16;
            readonly '1920px (XL)': 16;
        };
    };
    readonly Container: {
        readonly width: {
            readonly boxed: {
                readonly '390px (XS)': 390;
                readonly '600px (SM)': 600;
                readonly '900px (MD)': 900;
                readonly '1200px (LG)': 1200;
                readonly '1536px (XL)': 1536;
                readonly '1920px (XL)': 1536;
            };
            readonly full: {
                readonly '390px (XS)': 390;
                readonly '600px (SM)': 600;
                readonly '900px (MD)': 900;
                readonly '1200px (LG)': 1200;
                readonly '1536px (XL)': 1536;
                readonly '1920px (XL)': 1920;
            };
        };
        readonly height: {
            readonly default: {
                readonly '390px (XS)': 480;
                readonly '600px (SM)': 480;
                readonly '900px (MD)': 600;
                readonly '1200px (LG)': 700;
                readonly '1536px (XL)': 700;
                readonly '1920px (XL)': 700;
            };
            readonly full: {
                readonly '390px (XS)': 633;
                readonly '600px (SM)': 633;
                readonly '900px (MD)': 1024;
                readonly '1200px (LG)': 540;
                readonly '1536px (XL)': 810;
                readonly '1920px (XL)': 810;
            };
        };
    };
    readonly Button: {
        readonly vPaddingSmall: {
            readonly '390px (XS)': 8;
            readonly '600px (SM)': 8;
            readonly '900px (MD)': 8;
            readonly '1200px (LG)': 8;
            readonly '1536px (XL)': 8;
            readonly '1920px (XL)': 8;
        };
        readonly vPaddingDefault: {
            readonly '390px (XS)': 12;
            readonly '600px (SM)': 12;
            readonly '900px (MD)': 12;
            readonly '1200px (LG)': 12;
            readonly '1536px (XL)': 12;
            readonly '1920px (XL)': 12;
        };
        readonly hPaddingSmall: {
            readonly '390px (XS)': 8;
            readonly '600px (SM)': 8;
            readonly '900px (MD)': 8;
            readonly '1200px (LG)': 8;
            readonly '1536px (XL)': 8;
            readonly '1920px (XL)': 8;
        };
        readonly hPaddingDefault: {
            readonly '390px (XS)': 16;
            readonly '600px (SM)': 16;
            readonly '900px (MD)': 16;
            readonly '1200px (LG)': 16;
            readonly '1536px (XL)': 16;
            readonly '1920px (XL)': 16;
        };
        readonly fontSizeSmall: {
            readonly '390px (XS)': 14;
            readonly '600px (SM)': 14;
            readonly '900px (MD)': 14;
            readonly '1200px (LG)': 14;
            readonly '1536px (XL)': 14;
            readonly '1920px (XL)': 14;
        };
        readonly fontSizeDefault: {
            readonly '390px (XS)': 16;
            readonly '600px (SM)': 16;
            readonly '900px (MD)': 16;
            readonly '1200px (LG)': 16;
            readonly '1536px (XL)': 16;
            readonly '1920px (XL)': 16;
        };
        readonly iconSizeSmall: {
            readonly '390px (XS)': 18;
            readonly '600px (SM)': 18;
            readonly '900px (MD)': 18;
            readonly '1200px (LG)': 18;
            readonly '1536px (XL)': 18;
            readonly '1920px (XL)': 18;
        };
        readonly iconSizeDefault: {
            readonly '390px (XS)': 24;
            readonly '600px (SM)': 24;
            readonly '900px (MD)': 24;
            readonly '1200px (LG)': 24;
            readonly '1536px (XL)': 24;
            readonly '1920px (XL)': 24;
        };
    };
};
export declare const spacerTokens: {
    readonly 0: 0;
    readonly 1: 4;
    readonly 2: 8;
    readonly 3: 16;
    readonly 4: 24;
    readonly 5: 32;
    readonly 6: 48;
    readonly 7: 64;
    readonly 8: 80;
    readonly 9: 96;
    readonly 10: 120;
};
export declare const typographyTokens: {
    readonly lineHeight: {
        readonly poster: {
            readonly '390px (XS)': "48px";
            readonly '1536px (XL)': "104px";
            readonly '1920px (XL)': "104px";
        };
        readonly h1: {
            readonly '390px (XS)': "36px";
            readonly '1536px (XL)': "64px";
            readonly '1920px (XL)': "64px";
        };
        readonly h2: {
            readonly '390px (XS)': "32px";
            readonly '1536px (XL)': "56px";
            readonly '1920px (XL)': "56px";
        };
        readonly h3: {
            readonly '390px (XS)': "28px";
            readonly '1536px (XL)': "42px";
            readonly '1920px (XL)': "42px";
        };
        readonly h4: {
            readonly '390px (XS)': "24px";
            readonly '1536px (XL)': "32px";
            readonly '1920px (XL)': "32px";
        };
        readonly h5: {
            readonly '390px (XS)': "28px";
            readonly '1536px (XL)': "36px";
            readonly '1920px (XL)': "36px";
        };
        readonly h6: {
            readonly '390px (XS)': "24px";
            readonly '1536px (XL)': "36px";
            readonly '1920px (XL)': "36px";
        };
        readonly fs1: {
            readonly '390px (XS)': "44px";
            readonly '1536px (XL)': "72px";
            readonly '1920px (XL)': "72px";
        };
        readonly fs2: {
            readonly '390px (XS)': "40px";
            readonly '1536px (XL)': "64px";
            readonly '1920px (XL)': "64px";
        };
        readonly fs3: {
            readonly '390px (XS)': "40px";
            readonly '1536px (XL)': "56px";
            readonly '1920px (XL)': "56px";
        };
        readonly fs4: {
            readonly '390px (XS)': "32px";
            readonly '1536px (XL)': "42px";
            readonly '1920px (XL)': "42px";
        };
        readonly fs5: {
            readonly '390px (XS)': "28px";
            readonly '1536px (XL)': "40px";
            readonly '1920px (XL)': "40px";
        };
        readonly fs6: {
            readonly '390px (XS)': "24px";
            readonly '1536px (XL)': "36px";
            readonly '1920px (XL)': "36px";
        };
        readonly body1: {
            readonly '390px (XS)': "24px";
            readonly '1536px (XL)': "24px";
            readonly '1920px (XL)': "24px";
        };
        readonly body2: {
            readonly '390px (XS)': "20px";
            readonly '1536px (XL)': "20px";
            readonly '1920px (XL)': "20px";
        };
        readonly body3: {
            readonly '390px (XS)': "16px";
            readonly '1536px (XL)': "16px";
            readonly '1920px (XL)': "16px";
        };
    };
    readonly size: {
        readonly poster: {
            readonly '390px (XS)': "40px";
            readonly '1536px (XL)': "96px";
            readonly '1920px (XL)': "96px";
        };
        readonly h1: {
            readonly '390px (XS)': "36px";
            readonly '1536px (XL)': "64px";
            readonly '1920px (XL)': "64px";
        };
        readonly h2: {
            readonly '390px (XS)': "32px";
            readonly '1536px (XL)': "56px";
            readonly '1920px (XL)': "56px";
        };
        readonly h3: {
            readonly '390px (XS)': "28px";
            readonly '1536px (XL)': "42px";
            readonly '1920px (XL)': "42px";
        };
        readonly h4: {
            readonly '390px (XS)': "24px";
            readonly '1536px (XL)': "32px";
            readonly '1920px (XL)': "32px";
        };
        readonly h5: {
            readonly '390px (XS)': "20px";
            readonly '1536px (XL)': "28px";
            readonly '1920px (XL)': "28px";
        };
        readonly h6: {
            readonly '390px (XS)': "18px";
            readonly '1536px (XL)': "24px";
            readonly '1920px (XL)': "24px";
        };
        readonly fs1: {
            readonly '390px (XS)': "36px";
            readonly '1536px (XL)': "64px";
            readonly '1920px (XL)': "64px";
        };
        readonly fs2: {
            readonly '390px (XS)': "32px";
            readonly '1536px (XL)': "56px";
            readonly '1920px (XL)': "56px";
        };
        readonly fs3: {
            readonly '390px (XS)': "28px";
            readonly '1536px (XL)': "42px";
            readonly '1920px (XL)': "42px";
        };
        readonly fs4: {
            readonly '390px (XS)': "24px";
            readonly '1536px (XL)': "32px";
            readonly '1920px (XL)': "32px";
        };
        readonly fs5: {
            readonly '390px (XS)': "20px";
            readonly '1536px (XL)': "28px";
            readonly '1920px (XL)': "28px";
        };
        readonly fs6: {
            readonly '390px (XS)': "18px";
            readonly '1536px (XL)': "24px";
            readonly '1920px (XL)': "24px";
        };
        readonly body1: {
            readonly '390px (XS)': "16px";
            readonly '1536px (XL)': "16px";
            readonly '1920px (XL)': "16px";
        };
        readonly body2: {
            readonly '390px (XS)': "14px";
            readonly '1536px (XL)': "14px";
            readonly '1920px (XL)': "14px";
        };
        readonly body3: {
            readonly '390px (XS)': "12px";
            readonly '1536px (XL)': "12px";
            readonly '1920px (XL)': "12px";
        };
    };
};
export declare const containerTokens: {
    readonly width: {
        readonly boxed: {
            readonly '390px (XS)': 390;
            readonly '600px (SM)': 600;
            readonly '900px (MD)': 900;
            readonly '1200px (LG)': 1200;
            readonly '1536px (XL)': 1536;
            readonly '1920px (XL)': 1536;
        };
        readonly full: {
            readonly '390px (XS)': 390;
            readonly '600px (SM)': 600;
            readonly '900px (MD)': 900;
            readonly '1200px (LG)': 1200;
            readonly '1536px (XL)': 1536;
            readonly '1920px (XL)': 1920;
        };
    };
    readonly height: {
        readonly default: {
            readonly '390px (XS)': 480;
            readonly '600px (SM)': 480;
            readonly '900px (MD)': 600;
            readonly '1200px (LG)': 700;
            readonly '1536px (XL)': 700;
            readonly '1920px (XL)': 700;
        };
        readonly full: {
            readonly '390px (XS)': 633;
            readonly '600px (SM)': 633;
            readonly '900px (MD)': 1024;
            readonly '1200px (LG)': 540;
            readonly '1536px (XL)': 810;
            readonly '1920px (XL)': 810;
        };
    };
};
export declare const imageTokens: {
    readonly width: {
        readonly full: {
            readonly 100: {
                readonly xs: 390;
                readonly xl: 1536;
                readonly xxl: 1920;
            };
            readonly 50: {
                readonly xs: 390;
                readonly xl: 768;
                readonly xxl: 960;
            };
        };
        readonly boxed: {
            readonly 100: {
                readonly xs: 390;
                readonly xl: 1536;
                readonly xxl: 1536;
            };
            readonly 50: {
                readonly xs: 390;
                readonly xl: 768;
                readonly xxl: 768;
            };
        };
        readonly square: {
            readonly xs: 390;
            readonly xl: 700;
            readonly xxl: 700;
        };
    };
    readonly height: {
        readonly full: {
            readonly xs: 633;
            readonly xl: 810;
            readonly xxl: 810;
        };
        readonly default: {
            readonly xs: 480;
            readonly xl: 700;
            readonly xxl: 700;
        };
        readonly square: {
            readonly xs: 390;
            readonly xl: 700;
            readonly xxl: 700;
        };
    };
};
export declare const bottomMarginTokens: {
    readonly Poster: {
        readonly '390px (XS)': "16px";
        readonly '600px (SM)': "16px";
        readonly '900px (MD)': "16px";
        readonly '1200px (LG)': "16px";
        readonly '1536px (XL)': "16px";
        readonly '1920px (XL)': "16px";
    };
    readonly H1: {
        readonly '390px (XS)': "16px";
        readonly '600px (SM)': "16px";
        readonly '900px (MD)': "16px";
        readonly '1200px (LG)': "16px";
        readonly '1536px (XL)': "16px";
        readonly '1920px (XL)': "16px";
    };
    readonly H2: {
        readonly '390px (XS)': "16px";
        readonly '600px (SM)': "16px";
        readonly '900px (MD)': "16px";
        readonly '1200px (LG)': "16px";
        readonly '1536px (XL)': "16px";
        readonly '1920px (XL)': "16px";
    };
    readonly H3: {
        readonly '390px (XS)': "16px";
        readonly '600px (SM)': "16px";
        readonly '900px (MD)': "16px";
        readonly '1200px (LG)': "16px";
        readonly '1536px (XL)': "16px";
        readonly '1920px (XL)': "16px";
    };
    readonly H4: {
        readonly '390px (XS)': "16px";
        readonly '600px (SM)': "16px";
        readonly '900px (MD)': "16px";
        readonly '1200px (LG)': "16px";
        readonly '1536px (XL)': "16px";
        readonly '1920px (XL)': "16px";
    };
    readonly H5: {
        readonly '390px (XS)': "16px";
        readonly '600px (SM)': "16px";
        readonly '900px (MD)': "16px";
        readonly '1200px (LG)': "16px";
        readonly '1536px (XL)': "16px";
        readonly '1920px (XL)': "16px";
    };
    readonly H6: {
        readonly '390px (XS)': "16px";
        readonly '600px (SM)': "16px";
        readonly '900px (MD)': "16px";
        readonly '1200px (LG)': "16px";
        readonly '1536px (XL)': "16px";
        readonly '1920px (XL)': "16px";
    };
    readonly list: {
        readonly '390px (XS)': "16px";
        readonly '600px (SM)': "16px";
        readonly '900px (MD)': "16px";
        readonly '1200px (LG)': "16px";
        readonly '1536px (XL)': "16px";
        readonly '1920px (XL)': "16px";
    };
    readonly default: {
        readonly '390px (XS)': 16;
        readonly '600px (SM)': 16;
        readonly '900px (MD)': 16;
        readonly '1200px (LG)': 16;
        readonly '1536px (XL)': 16;
        readonly '1920px (XL)': 16;
    };
};
export declare const pageTokens: {
    readonly width: {
        readonly '390px (XS)': 390;
        readonly '600px (SM)': 600;
        readonly '900px (MD)': 900;
        readonly '1200px (LG)': 1200;
        readonly '1536px (XL)': 1536;
        readonly '1920px (XL)': 1920;
    };
    readonly height: {
        readonly '390px (XS)': 844;
        readonly '600px (SM)': 844;
        readonly '900px (MD)': 1280;
        readonly '1200px (LG)': 1675;
        readonly '1536px (XL)': 1080;
        readonly '1920px (XL)': 1080;
    };
    readonly basePadding: {
        readonly '390px (XS)': 24;
        readonly '600px (SM)': 24;
        readonly '900px (MD)': 32;
        readonly '1200px (LG)': 48;
        readonly '1536px (XL)': 64;
        readonly '1920px (XL)': 64;
    };
};
export declare const radiusTokens: {
    readonly '0 (0px)': 0;
    readonly '2 (8px)': 8;
    readonly '3 (16px)': 16;
    readonly '4 (24px)': 24;
};
export declare const Brand: {
    readonly iqos: {
        readonly primary: {
            readonly main: "#00D1D2";
            readonly light: "#FFFDFB";
            readonly dark: "#393E44";
        };
        readonly tints: {
            readonly dark5: "#EBECEC";
            readonly dark15: "#D7D8D9";
            readonly dark30: "#C3C5C6";
            readonly dark50: "#9C9FA1";
            readonly dark65: "#888B8E";
            readonly dark85: "#606568";
            readonly darker140: "#1C1F21";
        };
        readonly global: {
            readonly warning: "#AA5600";
            readonly error: "#D42E30";
            readonly info: "#0070AE";
            readonly success: "#2F7C34";
            readonly fullWhite: "#FFFFFF";
            readonly fullBlack: "#000000";
        };
        readonly typography: {
            readonly fontFamily: {
                readonly body: "IQOSW10-Regular";
                readonly heading: "IQOSW10-Bold";
            };
            readonly fontWeight: {
                readonly regular: "400";
                readonly bold: "700";
                readonly button: "400";
            };
        };
        readonly buttonRadius: 120;
    };
    readonly zyn: {
        readonly primary: {
            readonly main: "#00A9E0";
            readonly light: "#FFFFFF";
            readonly dark: "#001871";
        };
        readonly tints: {
            readonly dark5: "#F2F5F7";
            readonly dark15: "#D9E2E7";
            readonly dark30: "#B2C4CF";
            readonly dark50: "#809DAE";
            readonly dark65: "#598096";
            readonly dark85: "#265876";
            readonly darker140: "#012236";
        };
        readonly global: {
            readonly warning: "#AA5600";
            readonly error: "#D42E30";
            readonly info: "#0070AE";
            readonly success: "#2F7C34";
            readonly fullWhite: "#FFFFFF";
            readonly fullBlack: "#000000";
        };
        readonly typography: {
            readonly fontFamily: {
                readonly body: "ZYNSans_W_Rg";
                readonly heading: "ZYNSans_W_XBd";
            };
            readonly fontWeight: {
                readonly regular: "400";
                readonly bold: "700";
                readonly button: "700";
            };
        };
        readonly buttonRadius: 120;
    };
    readonly veev: {
        readonly primary: {
            readonly main: "#221551";
            readonly light: "#FFFFFF";
            readonly dark: "#332072";
        };
        readonly tints: {
            readonly dark5: "#F4F3F6";
            readonly dark15: "#DEDCE5";
            readonly dark30: "#BDB9CB";
            readonly dark50: "#908AA8";
            readonly dark65: "#6F678E";
            readonly dark85: "#43386B";
            readonly darker140: "#140A3A";
        };
        readonly global: {
            readonly warning: "#AA5600";
            readonly error: "#D42E30";
            readonly info: "#0070AE";
            readonly success: "#2F7C34";
            readonly fullWhite: "#FFFFFF";
            readonly fullBlack: "#000000";
        };
        readonly typography: {
            readonly fontFamily: {
                readonly body: "IQOSW10-Regular";
                readonly heading: "IQOSW10-Bold";
            };
            readonly fontWeight: {
                readonly regular: "400";
                readonly bold: "700";
                readonly button: "400";
            };
        };
        readonly buttonRadius: 120;
    };
};
export declare const brandTokens: {
    readonly iqos: {
        readonly primary: {
            readonly main: "#00D1D2";
            readonly light: "#FFFDFB";
            readonly dark: "#393E44";
        };
        readonly tints: {
            readonly dark5: "#EBECEC";
            readonly dark15: "#D7D8D9";
            readonly dark30: "#C3C5C6";
            readonly dark50: "#9C9FA1";
            readonly dark65: "#888B8E";
            readonly dark85: "#606568";
            readonly darker140: "#1C1F21";
        };
        readonly global: {
            readonly warning: "#AA5600";
            readonly error: "#D42E30";
            readonly info: "#0070AE";
            readonly success: "#2F7C34";
            readonly fullWhite: "#FFFFFF";
            readonly fullBlack: "#000000";
        };
        readonly typography: {
            readonly fontFamily: {
                readonly body: "IQOSW10-Regular";
                readonly heading: "IQOSW10-Bold";
            };
            readonly fontWeight: {
                readonly regular: "400";
                readonly bold: "700";
                readonly button: "400";
            };
        };
        readonly buttonRadius: 120;
    };
    readonly zyn: {
        readonly primary: {
            readonly main: "#00A9E0";
            readonly light: "#FFFFFF";
            readonly dark: "#001871";
        };
        readonly tints: {
            readonly dark5: "#F2F5F7";
            readonly dark15: "#D9E2E7";
            readonly dark30: "#B2C4CF";
            readonly dark50: "#809DAE";
            readonly dark65: "#598096";
            readonly dark85: "#265876";
            readonly darker140: "#012236";
        };
        readonly global: {
            readonly warning: "#AA5600";
            readonly error: "#D42E30";
            readonly info: "#0070AE";
            readonly success: "#2F7C34";
            readonly fullWhite: "#FFFFFF";
            readonly fullBlack: "#000000";
        };
        readonly typography: {
            readonly fontFamily: {
                readonly body: "ZYNSans_W_Rg";
                readonly heading: "ZYNSans_W_XBd";
            };
            readonly fontWeight: {
                readonly regular: "400";
                readonly bold: "700";
                readonly button: "700";
            };
        };
        readonly buttonRadius: 120;
    };
    readonly veev: {
        readonly primary: {
            readonly main: "#221551";
            readonly light: "#FFFFFF";
            readonly dark: "#332072";
        };
        readonly tints: {
            readonly dark5: "#F4F3F6";
            readonly dark15: "#DEDCE5";
            readonly dark30: "#BDB9CB";
            readonly dark50: "#908AA8";
            readonly dark65: "#6F678E";
            readonly dark85: "#43386B";
            readonly darker140: "#140A3A";
        };
        readonly global: {
            readonly warning: "#AA5600";
            readonly error: "#D42E30";
            readonly info: "#0070AE";
            readonly success: "#2F7C34";
            readonly fullWhite: "#FFFFFF";
            readonly fullBlack: "#000000";
        };
        readonly typography: {
            readonly fontFamily: {
                readonly body: "IQOSW10-Regular";
                readonly heading: "IQOSW10-Bold";
            };
            readonly fontWeight: {
                readonly regular: "400";
                readonly bold: "700";
                readonly button: "400";
            };
        };
        readonly buttonRadius: 120;
    };
};
export declare const createThemeTokens: (brand: keyof typeof Brand) => {
    light: {
        background: {
            primary: "#FFFDFB" | "#FFFFFF";
            'primary-inverse': "#393E44" | "#001871" | "#332072";
            accent: "#00D1D2" | "#00A9E0" | "#221551";
            overlay: string;
            highlight: "#C3C5C6" | "#B2C4CF" | "#BDB9CB";
            'state-default': "#FFFFFF";
            'state-active': "#FFFFFF";
            'state-disabled': "#9C9FA1" | "#809DAE" | "#908AA8";
            'state-focused': "#FFFFFF";
            'state-focused-error': "#FFFFFF";
            'state-error': "#FFFFFF";
            'state-readOnly': "#FFFFFF";
            'interaction-hover': "#1C1F21" | "#012236" | "#140A3A";
            'interaction-loading': string;
            'interaction-active': "#00D1D2" | "#00A9E0" | "#221551";
            'signal-warning': "#AA5600";
            'signal-error': "#D42E30";
            'signal-info': "#0070AE";
            'signal-success': "#2F7C34";
        };
        content: {
            primary: "#393E44" | "#001871" | "#332072";
            'primary-inverse': "#FFFDFB" | "#FFFFFF";
            accent: "#00D1D2" | "#00A9E0" | "#221551";
            overlay: "#9C9FA1" | "#809DAE" | "#908AA8";
            highlight: "#C3C5C6" | "#B2C4CF" | "#BDB9CB";
            'state-default': "#393E44" | "#001871" | "#332072";
            'state-active': "#00D1D2" | "#00A9E0" | "#221551";
            'state-disabled': "#C3C5C6" | "#B2C4CF" | "#BDB9CB";
            'state-focused': "#00D1D2" | "#00A9E0" | "#221551";
            'state-focused-error': "#D42E30";
            'state-error': "#D42E30";
            'state-readOnly': "#9C9FA1" | "#809DAE" | "#908AA8";
            'interaction-hover': "#FFFDFB" | "#FFFFFF";
            'interaction-loading': "#9C9FA1" | "#809DAE" | "#908AA8";
            'interaction-active': "#393E44" | "#001871" | "#332072";
            'signal-warning': "#AA5600";
            'signal-error': "#D42E30";
            'signal-info': "#0070AE";
            'signal-success': "#2F7C34";
        };
        border: {
            primary: "#393E44" | "#001871" | "#332072";
            'primary-inverse': "#FFFDFB" | "#FFFFFF";
            accent: "#00D1D2" | "#00A9E0" | "#221551";
            'state-default': "#606568" | "#265876" | "#43386B";
            'state-active': "#393E44" | "#001871" | "#332072";
            'state-disabled': "#9C9FA1" | "#809DAE" | "#908AA8";
            'state-focused': "#606568" | "#265876" | "#43386B";
            'state-focused-error': "#D42E30";
            'state-error': "#D42E30";
            'state-readOnly': "#606568" | "#265876" | "#43386B";
            'interaction-hover': "#00D1D2" | "#00A9E0" | "#221551";
            'interaction-loading': "#C3C5C6" | "#B2C4CF" | "#BDB9CB";
            'interaction-active': "#00D1D2" | "#00A9E0" | "#221551";
            'signal-warning': "#AA5600";
            'signal-error': "#D42E30";
            'signal-info': "#0070AE";
            'signal-success': "#2F7C34";
        };
    };
    dark: {
        background: {
            primary: "#393E44" | "#001871" | "#332072";
            'primary-inverse': "#FFFDFB" | "#FFFFFF";
            accent: "#00D1D2" | "#00A9E0" | "#221551";
            overlay: string;
            highlight: "#C3C5C6" | "#B2C4CF" | "#BDB9CB";
            'state-default': "#FFFFFF";
            'state-active': "#FFFFFF";
            'state-disabled': "#9C9FA1" | "#809DAE" | "#908AA8";
            'state-focused': "#FFFFFF";
            'state-focused-error': "#FFFFFF";
            'state-error': "#FFFFFF";
            'state-readOnly': "#FFFFFF";
            'interaction-hover': "#1C1F21" | "#012236" | "#140A3A";
            'interaction-loading': string;
            'interaction-active': "#00D1D2" | "#00A9E0" | "#221551";
            'signal-warning': "#AA5600";
            'signal-error': "#D42E30";
            'signal-info': "#0070AE";
            'signal-success': "#2F7C34";
        };
        content: {
            primary: "#FFFDFB" | "#FFFFFF";
            'primary-inverse': "#393E44" | "#001871" | "#332072";
            accent: "#00D1D2" | "#00A9E0" | "#221551";
            overlay: string;
            highlight: "#C3C5C6" | "#B2C4CF" | "#BDB9CB";
            'state-default': "#FFFDFB" | "#FFFFFF";
            'state-active': "#00D1D2" | "#00A9E0" | "#221551";
            'state-disabled': "#9C9FA1" | "#809DAE" | "#908AA8";
            'state-focused': "#00D1D2" | "#00A9E0" | "#221551";
            'state-focused-error': "#D42E30";
            'state-error': "#D42E30";
            'state-readOnly': "#9C9FA1" | "#809DAE" | "#908AA8";
            'interaction-hover': "#FFFDFB" | "#FFFFFF";
            'interaction-loading': "#9C9FA1" | "#809DAE" | "#908AA8";
            'interaction-active': "#FFFDFB" | "#FFFFFF";
            'signal-warning': "#AA5600";
            'signal-error': "#D42E30";
            'signal-info': "#0070AE";
            'signal-success': "#2F7C34";
        };
        border: {
            primary: "#FFFDFB" | "#FFFFFF";
            'primary-inverse': "#393E44" | "#001871" | "#332072";
            accent: "#00D1D2" | "#00A9E0" | "#221551";
            'state-default': "#606568" | "#265876" | "#43386B";
            'state-active': "#393E44" | "#001871" | "#332072";
            'state-disabled': "#9C9FA1" | "#809DAE" | "#908AA8";
            'state-focused': "#606568" | "#265876" | "#43386B";
            'state-focused-error': "#D42E30";
            'state-error': "#D42E30";
            'state-readOnly': "#606568" | "#265876" | "#43386B";
            'interaction-hover': "#00D1D2" | "#00A9E0" | "#221551";
            'interaction-loading': "#C3C5C6" | "#B2C4CF" | "#BDB9CB";
            'interaction-active': "#00D1D2" | "#00A9E0" | "#221551";
            'signal-warning': "#AA5600";
            'signal-error': "#D42E30";
            'signal-info': "#0070AE";
            'signal-success': "#2F7C34";
        };
    };
};
export declare const getBrandTokens: (brand: keyof typeof Brand) => {
    readonly primary: {
        readonly main: "#00D1D2";
        readonly light: "#FFFDFB";
        readonly dark: "#393E44";
    };
    readonly tints: {
        readonly dark5: "#EBECEC";
        readonly dark15: "#D7D8D9";
        readonly dark30: "#C3C5C6";
        readonly dark50: "#9C9FA1";
        readonly dark65: "#888B8E";
        readonly dark85: "#606568";
        readonly darker140: "#1C1F21";
    };
    readonly global: {
        readonly warning: "#AA5600";
        readonly error: "#D42E30";
        readonly info: "#0070AE";
        readonly success: "#2F7C34";
        readonly fullWhite: "#FFFFFF";
        readonly fullBlack: "#000000";
    };
    readonly typography: {
        readonly fontFamily: {
            readonly body: "IQOSW10-Regular";
            readonly heading: "IQOSW10-Bold";
        };
        readonly fontWeight: {
            readonly regular: "400";
            readonly bold: "700";
            readonly button: "400";
        };
    };
    readonly buttonRadius: 120;
} | {
    readonly primary: {
        readonly main: "#00A9E0";
        readonly light: "#FFFFFF";
        readonly dark: "#001871";
    };
    readonly tints: {
        readonly dark5: "#F2F5F7";
        readonly dark15: "#D9E2E7";
        readonly dark30: "#B2C4CF";
        readonly dark50: "#809DAE";
        readonly dark65: "#598096";
        readonly dark85: "#265876";
        readonly darker140: "#012236";
    };
    readonly global: {
        readonly warning: "#AA5600";
        readonly error: "#D42E30";
        readonly info: "#0070AE";
        readonly success: "#2F7C34";
        readonly fullWhite: "#FFFFFF";
        readonly fullBlack: "#000000";
    };
    readonly typography: {
        readonly fontFamily: {
            readonly body: "ZYNSans_W_Rg";
            readonly heading: "ZYNSans_W_XBd";
        };
        readonly fontWeight: {
            readonly regular: "400";
            readonly bold: "700";
            readonly button: "700";
        };
    };
    readonly buttonRadius: 120;
} | {
    readonly primary: {
        readonly main: "#221551";
        readonly light: "#FFFFFF";
        readonly dark: "#332072";
    };
    readonly tints: {
        readonly dark5: "#F4F3F6";
        readonly dark15: "#DEDCE5";
        readonly dark30: "#BDB9CB";
        readonly dark50: "#908AA8";
        readonly dark65: "#6F678E";
        readonly dark85: "#43386B";
        readonly darker140: "#140A3A";
    };
    readonly global: {
        readonly warning: "#AA5600";
        readonly error: "#D42E30";
        readonly info: "#0070AE";
        readonly success: "#2F7C34";
        readonly fullWhite: "#FFFFFF";
        readonly fullBlack: "#000000";
    };
    readonly typography: {
        readonly fontFamily: {
            readonly body: "IQOSW10-Regular";
            readonly heading: "IQOSW10-Bold";
        };
        readonly fontWeight: {
            readonly regular: "400";
            readonly bold: "700";
            readonly button: "400";
        };
    };
    readonly buttonRadius: 120;
};
export declare const getThemeTokens: (brand: keyof typeof Brand, theme: "light" | "dark") => {
    background: {
        primary: "#FFFDFB" | "#FFFFFF";
        'primary-inverse': "#393E44" | "#001871" | "#332072";
        accent: "#00D1D2" | "#00A9E0" | "#221551";
        overlay: string;
        highlight: "#C3C5C6" | "#B2C4CF" | "#BDB9CB";
        'state-default': "#FFFFFF";
        'state-active': "#FFFFFF";
        'state-disabled': "#9C9FA1" | "#809DAE" | "#908AA8";
        'state-focused': "#FFFFFF";
        'state-focused-error': "#FFFFFF";
        'state-error': "#FFFFFF";
        'state-readOnly': "#FFFFFF";
        'interaction-hover': "#1C1F21" | "#012236" | "#140A3A";
        'interaction-loading': string;
        'interaction-active': "#00D1D2" | "#00A9E0" | "#221551";
        'signal-warning': "#AA5600";
        'signal-error': "#D42E30";
        'signal-info': "#0070AE";
        'signal-success': "#2F7C34";
    };
    content: {
        primary: "#393E44" | "#001871" | "#332072";
        'primary-inverse': "#FFFDFB" | "#FFFFFF";
        accent: "#00D1D2" | "#00A9E0" | "#221551";
        overlay: "#9C9FA1" | "#809DAE" | "#908AA8";
        highlight: "#C3C5C6" | "#B2C4CF" | "#BDB9CB";
        'state-default': "#393E44" | "#001871" | "#332072";
        'state-active': "#00D1D2" | "#00A9E0" | "#221551";
        'state-disabled': "#C3C5C6" | "#B2C4CF" | "#BDB9CB";
        'state-focused': "#00D1D2" | "#00A9E0" | "#221551";
        'state-focused-error': "#D42E30";
        'state-error': "#D42E30";
        'state-readOnly': "#9C9FA1" | "#809DAE" | "#908AA8";
        'interaction-hover': "#FFFDFB" | "#FFFFFF";
        'interaction-loading': "#9C9FA1" | "#809DAE" | "#908AA8";
        'interaction-active': "#393E44" | "#001871" | "#332072";
        'signal-warning': "#AA5600";
        'signal-error': "#D42E30";
        'signal-info': "#0070AE";
        'signal-success': "#2F7C34";
    };
    border: {
        primary: "#393E44" | "#001871" | "#332072";
        'primary-inverse': "#FFFDFB" | "#FFFFFF";
        accent: "#00D1D2" | "#00A9E0" | "#221551";
        'state-default': "#606568" | "#265876" | "#43386B";
        'state-active': "#393E44" | "#001871" | "#332072";
        'state-disabled': "#9C9FA1" | "#809DAE" | "#908AA8";
        'state-focused': "#606568" | "#265876" | "#43386B";
        'state-focused-error': "#D42E30";
        'state-error': "#D42E30";
        'state-readOnly': "#606568" | "#265876" | "#43386B";
        'interaction-hover': "#00D1D2" | "#00A9E0" | "#221551";
        'interaction-loading': "#C3C5C6" | "#B2C4CF" | "#BDB9CB";
        'interaction-active': "#00D1D2" | "#00A9E0" | "#221551";
        'signal-warning': "#AA5600";
        'signal-error': "#D42E30";
        'signal-info': "#0070AE";
        'signal-success': "#2F7C34";
    };
} | {
    background: {
        primary: "#393E44" | "#001871" | "#332072";
        'primary-inverse': "#FFFDFB" | "#FFFFFF";
        accent: "#00D1D2" | "#00A9E0" | "#221551";
        overlay: string;
        highlight: "#C3C5C6" | "#B2C4CF" | "#BDB9CB";
        'state-default': "#FFFFFF";
        'state-active': "#FFFFFF";
        'state-disabled': "#9C9FA1" | "#809DAE" | "#908AA8";
        'state-focused': "#FFFFFF";
        'state-focused-error': "#FFFFFF";
        'state-error': "#FFFFFF";
        'state-readOnly': "#FFFFFF";
        'interaction-hover': "#1C1F21" | "#012236" | "#140A3A";
        'interaction-loading': string;
        'interaction-active': "#00D1D2" | "#00A9E0" | "#221551";
        'signal-warning': "#AA5600";
        'signal-error': "#D42E30";
        'signal-info': "#0070AE";
        'signal-success': "#2F7C34";
    };
    content: {
        primary: "#FFFDFB" | "#FFFFFF";
        'primary-inverse': "#393E44" | "#001871" | "#332072";
        accent: "#00D1D2" | "#00A9E0" | "#221551";
        overlay: string;
        highlight: "#C3C5C6" | "#B2C4CF" | "#BDB9CB";
        'state-default': "#FFFDFB" | "#FFFFFF";
        'state-active': "#00D1D2" | "#00A9E0" | "#221551";
        'state-disabled': "#9C9FA1" | "#809DAE" | "#908AA8";
        'state-focused': "#00D1D2" | "#00A9E0" | "#221551";
        'state-focused-error': "#D42E30";
        'state-error': "#D42E30";
        'state-readOnly': "#9C9FA1" | "#809DAE" | "#908AA8";
        'interaction-hover': "#FFFDFB" | "#FFFFFF";
        'interaction-loading': "#9C9FA1" | "#809DAE" | "#908AA8";
        'interaction-active': "#FFFDFB" | "#FFFFFF";
        'signal-warning': "#AA5600";
        'signal-error': "#D42E30";
        'signal-info': "#0070AE";
        'signal-success': "#2F7C34";
    };
    border: {
        primary: "#FFFDFB" | "#FFFFFF";
        'primary-inverse': "#393E44" | "#001871" | "#332072";
        accent: "#00D1D2" | "#00A9E0" | "#221551";
        'state-default': "#606568" | "#265876" | "#43386B";
        'state-active': "#393E44" | "#001871" | "#332072";
        'state-disabled': "#9C9FA1" | "#809DAE" | "#908AA8";
        'state-focused': "#606568" | "#265876" | "#43386B";
        'state-focused-error': "#D42E30";
        'state-error': "#D42E30";
        'state-readOnly': "#606568" | "#265876" | "#43386B";
        'interaction-hover': "#00D1D2" | "#00A9E0" | "#221551";
        'interaction-loading': "#C3C5C6" | "#B2C4CF" | "#BDB9CB";
        'interaction-active': "#00D1D2" | "#00A9E0" | "#221551";
        'signal-warning': "#AA5600";
        'signal-error': "#D42E30";
        'signal-info': "#0070AE";
        'signal-success': "#2F7C34";
    };
};
export declare const getFontFamily: (brand: keyof typeof fontFamilies, type?: "body" | "heading") => "IQOSW10-Regular" | "IQOSW10-Bold" | "ZYNSans_W_Rg" | "ZYNSans_W_XBd";
export declare const getFontWeight: (weight: keyof typeof fontWeights) => "400" | "700";
export declare const getSpacer: (token: keyof typeof spacerTokens) => number;
export declare const getTypographySize: (token: keyof typeof typographyTokens.size, breakpoint?: "390px (XS)" | "1536px (XL)" | "1920px (XL)") => string;
export declare const getTypographyLineHeight: (token: keyof typeof typographyTokens.lineHeight, breakpoint?: "390px (XS)" | "1536px (XL)" | "1920px (XL)") => string;
export declare const getContainerWidth: (token: keyof typeof containerTokens.width, breakpoint?: ContainerBreakpoint) => number;
export declare const getContainerHeight: (token: keyof typeof containerTokens.height, breakpoint?: ContainerBreakpoint) => number;
export declare const getImageWidth: (token: keyof typeof imageTokens.width, breakpoint?: "xs" | "xl") => number;
export declare const getImageHeight: (token: keyof typeof imageTokens.height, breakpoint?: "xs" | "xl") => number;
export declare const getBottomMargin: (token: keyof typeof bottomMarginTokens, breakpoint?: ContainerBreakpoint) => string;
export declare const getSpacerCSSVar: (token: keyof typeof spacerTokens) => string;
export declare const getTypographySizeCSSVar: (token: keyof typeof typographyTokens.size) => string;
export declare const getTypographyLineHeightCSSVar: (token: keyof typeof typographyTokens.lineHeight) => string;
export declare const getContainerWidthCSSVar: (token: keyof typeof containerTokens.width) => string;
export declare const getContainerHeightCSSVar: (token: keyof typeof containerTokens.height) => string;
export declare const getImageWidthCSSVar: (token: keyof typeof imageTokens.width) => string;
export declare const getImageHeightCSSVar: (token: keyof typeof imageTokens.height) => string;
export declare const getBottomMarginCSSVar: (token: keyof typeof bottomMarginTokens) => string;
export declare const applyBottomMargin: (token: keyof typeof bottomMarginTokens | null, breakpoint?: ContainerBreakpoint) => string;
export declare const getResponsiveContainer: (width: keyof typeof containerTokens.width, height: keyof typeof containerTokens.height) => {
    width: string;
    height: string;
};
export declare const getResponsiveImage: (width: keyof typeof imageTokens.width, height: keyof typeof imageTokens.height) => {
    width: string;
    height: string;
};
export declare const getResponsiveTypography: (size: keyof typeof typographyTokens.size, lineHeight: keyof typeof typographyTokens.lineHeight) => {
    fontSize: string;
    lineHeight: string;
};
export declare const createDimensionCSSProperties: () => Record<string, string>;
export declare const getDimensionTokens: () => {
    breakpoints: {
        readonly '390px (XS)': "390px";
        readonly '600px (SM)': "600px";
        readonly '900px (MD)': "900px";
        readonly '1200px (LG)': "1200px";
        readonly '1536px (XL)': "1536px";
    };
    spacers: {
        readonly 0: 0;
        readonly 1: 4;
        readonly 2: 8;
        readonly 3: 16;
        readonly 4: 24;
        readonly 5: 32;
        readonly 6: 48;
        readonly 7: 64;
        readonly 8: 80;
        readonly 9: 96;
        readonly 10: 120;
    };
    typography: {
        readonly lineHeight: {
            readonly poster: {
                readonly '390px (XS)': "48px";
                readonly '1536px (XL)': "104px";
                readonly '1920px (XL)': "104px";
            };
            readonly h1: {
                readonly '390px (XS)': "36px";
                readonly '1536px (XL)': "64px";
                readonly '1920px (XL)': "64px";
            };
            readonly h2: {
                readonly '390px (XS)': "32px";
                readonly '1536px (XL)': "56px";
                readonly '1920px (XL)': "56px";
            };
            readonly h3: {
                readonly '390px (XS)': "28px";
                readonly '1536px (XL)': "42px";
                readonly '1920px (XL)': "42px";
            };
            readonly h4: {
                readonly '390px (XS)': "24px";
                readonly '1536px (XL)': "32px";
                readonly '1920px (XL)': "32px";
            };
            readonly h5: {
                readonly '390px (XS)': "28px";
                readonly '1536px (XL)': "36px";
                readonly '1920px (XL)': "36px";
            };
            readonly h6: {
                readonly '390px (XS)': "24px";
                readonly '1536px (XL)': "36px";
                readonly '1920px (XL)': "36px";
            };
            readonly fs1: {
                readonly '390px (XS)': "44px";
                readonly '1536px (XL)': "72px";
                readonly '1920px (XL)': "72px";
            };
            readonly fs2: {
                readonly '390px (XS)': "40px";
                readonly '1536px (XL)': "64px";
                readonly '1920px (XL)': "64px";
            };
            readonly fs3: {
                readonly '390px (XS)': "40px";
                readonly '1536px (XL)': "56px";
                readonly '1920px (XL)': "56px";
            };
            readonly fs4: {
                readonly '390px (XS)': "32px";
                readonly '1536px (XL)': "42px";
                readonly '1920px (XL)': "42px";
            };
            readonly fs5: {
                readonly '390px (XS)': "28px";
                readonly '1536px (XL)': "40px";
                readonly '1920px (XL)': "40px";
            };
            readonly fs6: {
                readonly '390px (XS)': "24px";
                readonly '1536px (XL)': "36px";
                readonly '1920px (XL)': "36px";
            };
            readonly body1: {
                readonly '390px (XS)': "24px";
                readonly '1536px (XL)': "24px";
                readonly '1920px (XL)': "24px";
            };
            readonly body2: {
                readonly '390px (XS)': "20px";
                readonly '1536px (XL)': "20px";
                readonly '1920px (XL)': "20px";
            };
            readonly body3: {
                readonly '390px (XS)': "16px";
                readonly '1536px (XL)': "16px";
                readonly '1920px (XL)': "16px";
            };
        };
        readonly size: {
            readonly poster: {
                readonly '390px (XS)': "40px";
                readonly '1536px (XL)': "96px";
                readonly '1920px (XL)': "96px";
            };
            readonly h1: {
                readonly '390px (XS)': "36px";
                readonly '1536px (XL)': "64px";
                readonly '1920px (XL)': "64px";
            };
            readonly h2: {
                readonly '390px (XS)': "32px";
                readonly '1536px (XL)': "56px";
                readonly '1920px (XL)': "56px";
            };
            readonly h3: {
                readonly '390px (XS)': "28px";
                readonly '1536px (XL)': "42px";
                readonly '1920px (XL)': "42px";
            };
            readonly h4: {
                readonly '390px (XS)': "24px";
                readonly '1536px (XL)': "32px";
                readonly '1920px (XL)': "32px";
            };
            readonly h5: {
                readonly '390px (XS)': "20px";
                readonly '1536px (XL)': "28px";
                readonly '1920px (XL)': "28px";
            };
            readonly h6: {
                readonly '390px (XS)': "18px";
                readonly '1536px (XL)': "24px";
                readonly '1920px (XL)': "24px";
            };
            readonly fs1: {
                readonly '390px (XS)': "36px";
                readonly '1536px (XL)': "64px";
                readonly '1920px (XL)': "64px";
            };
            readonly fs2: {
                readonly '390px (XS)': "32px";
                readonly '1536px (XL)': "56px";
                readonly '1920px (XL)': "56px";
            };
            readonly fs3: {
                readonly '390px (XS)': "28px";
                readonly '1536px (XL)': "42px";
                readonly '1920px (XL)': "42px";
            };
            readonly fs4: {
                readonly '390px (XS)': "24px";
                readonly '1536px (XL)': "32px";
                readonly '1920px (XL)': "32px";
            };
            readonly fs5: {
                readonly '390px (XS)': "20px";
                readonly '1536px (XL)': "28px";
                readonly '1920px (XL)': "28px";
            };
            readonly fs6: {
                readonly '390px (XS)': "18px";
                readonly '1536px (XL)': "24px";
                readonly '1920px (XL)': "24px";
            };
            readonly body1: {
                readonly '390px (XS)': "16px";
                readonly '1536px (XL)': "16px";
                readonly '1920px (XL)': "16px";
            };
            readonly body2: {
                readonly '390px (XS)': "14px";
                readonly '1536px (XL)': "14px";
                readonly '1920px (XL)': "14px";
            };
            readonly body3: {
                readonly '390px (XS)': "12px";
                readonly '1536px (XL)': "12px";
                readonly '1920px (XL)': "12px";
            };
        };
    };
    containers: {
        readonly width: {
            readonly boxed: {
                readonly '390px (XS)': 390;
                readonly '600px (SM)': 600;
                readonly '900px (MD)': 900;
                readonly '1200px (LG)': 1200;
                readonly '1536px (XL)': 1536;
                readonly '1920px (XL)': 1536;
            };
            readonly full: {
                readonly '390px (XS)': 390;
                readonly '600px (SM)': 600;
                readonly '900px (MD)': 900;
                readonly '1200px (LG)': 1200;
                readonly '1536px (XL)': 1536;
                readonly '1920px (XL)': 1920;
            };
        };
        readonly height: {
            readonly default: {
                readonly '390px (XS)': 480;
                readonly '600px (SM)': 480;
                readonly '900px (MD)': 600;
                readonly '1200px (LG)': 700;
                readonly '1536px (XL)': 700;
                readonly '1920px (XL)': 700;
            };
            readonly full: {
                readonly '390px (XS)': 633;
                readonly '600px (SM)': 633;
                readonly '900px (MD)': 1024;
                readonly '1200px (LG)': 540;
                readonly '1536px (XL)': 810;
                readonly '1920px (XL)': 810;
            };
        };
    };
    images: {
        readonly width: {
            readonly full: {
                readonly 100: {
                    readonly xs: 390;
                    readonly xl: 1536;
                    readonly xxl: 1920;
                };
                readonly 50: {
                    readonly xs: 390;
                    readonly xl: 768;
                    readonly xxl: 960;
                };
            };
            readonly boxed: {
                readonly 100: {
                    readonly xs: 390;
                    readonly xl: 1536;
                    readonly xxl: 1536;
                };
                readonly 50: {
                    readonly xs: 390;
                    readonly xl: 768;
                    readonly xxl: 768;
                };
            };
            readonly square: {
                readonly xs: 390;
                readonly xl: 700;
                readonly xxl: 700;
            };
        };
        readonly height: {
            readonly full: {
                readonly xs: 633;
                readonly xl: 810;
                readonly xxl: 810;
            };
            readonly default: {
                readonly xs: 480;
                readonly xl: 700;
                readonly xxl: 700;
            };
            readonly square: {
                readonly xs: 390;
                readonly xl: 700;
                readonly xxl: 700;
            };
        };
    };
    bottomMargins: {
        readonly Poster: {
            readonly '390px (XS)': "16px";
            readonly '600px (SM)': "16px";
            readonly '900px (MD)': "16px";
            readonly '1200px (LG)': "16px";
            readonly '1536px (XL)': "16px";
            readonly '1920px (XL)': "16px";
        };
        readonly H1: {
            readonly '390px (XS)': "16px";
            readonly '600px (SM)': "16px";
            readonly '900px (MD)': "16px";
            readonly '1200px (LG)': "16px";
            readonly '1536px (XL)': "16px";
            readonly '1920px (XL)': "16px";
        };
        readonly H2: {
            readonly '390px (XS)': "16px";
            readonly '600px (SM)': "16px";
            readonly '900px (MD)': "16px";
            readonly '1200px (LG)': "16px";
            readonly '1536px (XL)': "16px";
            readonly '1920px (XL)': "16px";
        };
        readonly H3: {
            readonly '390px (XS)': "16px";
            readonly '600px (SM)': "16px";
            readonly '900px (MD)': "16px";
            readonly '1200px (LG)': "16px";
            readonly '1536px (XL)': "16px";
            readonly '1920px (XL)': "16px";
        };
        readonly H4: {
            readonly '390px (XS)': "16px";
            readonly '600px (SM)': "16px";
            readonly '900px (MD)': "16px";
            readonly '1200px (LG)': "16px";
            readonly '1536px (XL)': "16px";
            readonly '1920px (XL)': "16px";
        };
        readonly H5: {
            readonly '390px (XS)': "16px";
            readonly '600px (SM)': "16px";
            readonly '900px (MD)': "16px";
            readonly '1200px (LG)': "16px";
            readonly '1536px (XL)': "16px";
            readonly '1920px (XL)': "16px";
        };
        readonly H6: {
            readonly '390px (XS)': "16px";
            readonly '600px (SM)': "16px";
            readonly '900px (MD)': "16px";
            readonly '1200px (LG)': "16px";
            readonly '1536px (XL)': "16px";
            readonly '1920px (XL)': "16px";
        };
        readonly list: {
            readonly '390px (XS)': "16px";
            readonly '600px (SM)': "16px";
            readonly '900px (MD)': "16px";
            readonly '1200px (LG)': "16px";
            readonly '1536px (XL)': "16px";
            readonly '1920px (XL)': "16px";
        };
        readonly default: {
            readonly '390px (XS)': 16;
            readonly '600px (SM)': 16;
            readonly '900px (MD)': 16;
            readonly '1200px (LG)': 16;
            readonly '1536px (XL)': 16;
            readonly '1920px (XL)': 16;
        };
    };
};
export declare class DesignSystemManager {
    private currentBrand;
    private currentTheme;
    constructor(initialBrand?: keyof typeof Brand, initialTheme?: 'light' | 'dark');
    setBrand(brand: keyof typeof Brand): void;
    getBrand(): keyof typeof Brand;
    setTheme(theme: 'light' | 'dark'): void;
    getTheme(): 'light' | 'dark';
    getCurrentBrandTokens(): {
        readonly primary: {
            readonly main: "#00D1D2";
            readonly light: "#FFFDFB";
            readonly dark: "#393E44";
        };
        readonly tints: {
            readonly dark5: "#EBECEC";
            readonly dark15: "#D7D8D9";
            readonly dark30: "#C3C5C6";
            readonly dark50: "#9C9FA1";
            readonly dark65: "#888B8E";
            readonly dark85: "#606568";
            readonly darker140: "#1C1F21";
        };
        readonly global: {
            readonly warning: "#AA5600";
            readonly error: "#D42E30";
            readonly info: "#0070AE";
            readonly success: "#2F7C34";
            readonly fullWhite: "#FFFFFF";
            readonly fullBlack: "#000000";
        };
        readonly typography: {
            readonly fontFamily: {
                readonly body: "IQOSW10-Regular";
                readonly heading: "IQOSW10-Bold";
            };
            readonly fontWeight: {
                readonly regular: "400";
                readonly bold: "700";
                readonly button: "400";
            };
        };
        readonly buttonRadius: 120;
    } | {
        readonly primary: {
            readonly main: "#00A9E0";
            readonly light: "#FFFFFF";
            readonly dark: "#001871";
        };
        readonly tints: {
            readonly dark5: "#F2F5F7";
            readonly dark15: "#D9E2E7";
            readonly dark30: "#B2C4CF";
            readonly dark50: "#809DAE";
            readonly dark65: "#598096";
            readonly dark85: "#265876";
            readonly darker140: "#012236";
        };
        readonly global: {
            readonly warning: "#AA5600";
            readonly error: "#D42E30";
            readonly info: "#0070AE";
            readonly success: "#2F7C34";
            readonly fullWhite: "#FFFFFF";
            readonly fullBlack: "#000000";
        };
        readonly typography: {
            readonly fontFamily: {
                readonly body: "ZYNSans_W_Rg";
                readonly heading: "ZYNSans_W_XBd";
            };
            readonly fontWeight: {
                readonly regular: "400";
                readonly bold: "700";
                readonly button: "700";
            };
        };
        readonly buttonRadius: 120;
    } | {
        readonly primary: {
            readonly main: "#221551";
            readonly light: "#FFFFFF";
            readonly dark: "#332072";
        };
        readonly tints: {
            readonly dark5: "#F4F3F6";
            readonly dark15: "#DEDCE5";
            readonly dark30: "#BDB9CB";
            readonly dark50: "#908AA8";
            readonly dark65: "#6F678E";
            readonly dark85: "#43386B";
            readonly darker140: "#140A3A";
        };
        readonly global: {
            readonly warning: "#AA5600";
            readonly error: "#D42E30";
            readonly info: "#0070AE";
            readonly success: "#2F7C34";
            readonly fullWhite: "#FFFFFF";
            readonly fullBlack: "#000000";
        };
        readonly typography: {
            readonly fontFamily: {
                readonly body: "IQOSW10-Regular";
                readonly heading: "IQOSW10-Bold";
            };
            readonly fontWeight: {
                readonly regular: "400";
                readonly bold: "700";
                readonly button: "400";
            };
        };
        readonly buttonRadius: 120;
    };
    getCurrentThemeTokens(): {
        background: {
            primary: "#FFFDFB" | "#FFFFFF";
            'primary-inverse': "#393E44" | "#001871" | "#332072";
            accent: "#00D1D2" | "#00A9E0" | "#221551";
            overlay: string;
            highlight: "#C3C5C6" | "#B2C4CF" | "#BDB9CB";
            'state-default': "#FFFFFF";
            'state-active': "#FFFFFF";
            'state-disabled': "#9C9FA1" | "#809DAE" | "#908AA8";
            'state-focused': "#FFFFFF";
            'state-focused-error': "#FFFFFF";
            'state-error': "#FFFFFF";
            'state-readOnly': "#FFFFFF";
            'interaction-hover': "#1C1F21" | "#012236" | "#140A3A";
            'interaction-loading': string;
            'interaction-active': "#00D1D2" | "#00A9E0" | "#221551";
            'signal-warning': "#AA5600";
            'signal-error': "#D42E30";
            'signal-info': "#0070AE";
            'signal-success': "#2F7C34";
        };
        content: {
            primary: "#393E44" | "#001871" | "#332072";
            'primary-inverse': "#FFFDFB" | "#FFFFFF";
            accent: "#00D1D2" | "#00A9E0" | "#221551";
            overlay: "#9C9FA1" | "#809DAE" | "#908AA8";
            highlight: "#C3C5C6" | "#B2C4CF" | "#BDB9CB";
            'state-default': "#393E44" | "#001871" | "#332072";
            'state-active': "#00D1D2" | "#00A9E0" | "#221551";
            'state-disabled': "#C3C5C6" | "#B2C4CF" | "#BDB9CB";
            'state-focused': "#00D1D2" | "#00A9E0" | "#221551";
            'state-focused-error': "#D42E30";
            'state-error': "#D42E30";
            'state-readOnly': "#9C9FA1" | "#809DAE" | "#908AA8";
            'interaction-hover': "#FFFDFB" | "#FFFFFF";
            'interaction-loading': "#9C9FA1" | "#809DAE" | "#908AA8";
            'interaction-active': "#393E44" | "#001871" | "#332072";
            'signal-warning': "#AA5600";
            'signal-error': "#D42E30";
            'signal-info': "#0070AE";
            'signal-success': "#2F7C34";
        };
        border: {
            primary: "#393E44" | "#001871" | "#332072";
            'primary-inverse': "#FFFDFB" | "#FFFFFF";
            accent: "#00D1D2" | "#00A9E0" | "#221551";
            'state-default': "#606568" | "#265876" | "#43386B";
            'state-active': "#393E44" | "#001871" | "#332072";
            'state-disabled': "#9C9FA1" | "#809DAE" | "#908AA8";
            'state-focused': "#606568" | "#265876" | "#43386B";
            'state-focused-error': "#D42E30";
            'state-error': "#D42E30";
            'state-readOnly': "#606568" | "#265876" | "#43386B";
            'interaction-hover': "#00D1D2" | "#00A9E0" | "#221551";
            'interaction-loading': "#C3C5C6" | "#B2C4CF" | "#BDB9CB";
            'interaction-active': "#00D1D2" | "#00A9E0" | "#221551";
            'signal-warning': "#AA5600";
            'signal-error': "#D42E30";
            'signal-info': "#0070AE";
            'signal-success': "#2F7C34";
        };
    } | {
        background: {
            primary: "#393E44" | "#001871" | "#332072";
            'primary-inverse': "#FFFDFB" | "#FFFFFF";
            accent: "#00D1D2" | "#00A9E0" | "#221551";
            overlay: string;
            highlight: "#C3C5C6" | "#B2C4CF" | "#BDB9CB";
            'state-default': "#FFFFFF";
            'state-active': "#FFFFFF";
            'state-disabled': "#9C9FA1" | "#809DAE" | "#908AA8";
            'state-focused': "#FFFFFF";
            'state-focused-error': "#FFFFFF";
            'state-error': "#FFFFFF";
            'state-readOnly': "#FFFFFF";
            'interaction-hover': "#1C1F21" | "#012236" | "#140A3A";
            'interaction-loading': string;
            'interaction-active': "#00D1D2" | "#00A9E0" | "#221551";
            'signal-warning': "#AA5600";
            'signal-error': "#D42E30";
            'signal-info': "#0070AE";
            'signal-success': "#2F7C34";
        };
        content: {
            primary: "#FFFDFB" | "#FFFFFF";
            'primary-inverse': "#393E44" | "#001871" | "#332072";
            accent: "#00D1D2" | "#00A9E0" | "#221551";
            overlay: string;
            highlight: "#C3C5C6" | "#B2C4CF" | "#BDB9CB";
            'state-default': "#FFFDFB" | "#FFFFFF";
            'state-active': "#00D1D2" | "#00A9E0" | "#221551";
            'state-disabled': "#9C9FA1" | "#809DAE" | "#908AA8";
            'state-focused': "#00D1D2" | "#00A9E0" | "#221551";
            'state-focused-error': "#D42E30";
            'state-error': "#D42E30";
            'state-readOnly': "#9C9FA1" | "#809DAE" | "#908AA8";
            'interaction-hover': "#FFFDFB" | "#FFFFFF";
            'interaction-loading': "#9C9FA1" | "#809DAE" | "#908AA8";
            'interaction-active': "#FFFDFB" | "#FFFFFF";
            'signal-warning': "#AA5600";
            'signal-error': "#D42E30";
            'signal-info': "#0070AE";
            'signal-success': "#2F7C34";
        };
        border: {
            primary: "#FFFDFB" | "#FFFFFF";
            'primary-inverse': "#393E44" | "#001871" | "#332072";
            accent: "#00D1D2" | "#00A9E0" | "#221551";
            'state-default': "#606568" | "#265876" | "#43386B";
            'state-active': "#393E44" | "#001871" | "#332072";
            'state-disabled': "#9C9FA1" | "#809DAE" | "#908AA8";
            'state-focused': "#606568" | "#265876" | "#43386B";
            'state-focused-error': "#D42E30";
            'state-error': "#D42E30";
            'state-readOnly': "#606568" | "#265876" | "#43386B";
            'interaction-hover': "#00D1D2" | "#00A9E0" | "#221551";
            'interaction-loading': "#C3C5C6" | "#B2C4CF" | "#BDB9CB";
            'interaction-active': "#00D1D2" | "#00A9E0" | "#221551";
            'signal-warning': "#AA5600";
            'signal-error': "#D42E30";
            'signal-info': "#0070AE";
            'signal-success': "#2F7C34";
        };
    };
    getThemeSection(section: 'background' | 'content' | 'border'): {
        primary: "#FFFDFB" | "#FFFFFF";
        'primary-inverse': "#393E44" | "#001871" | "#332072";
        accent: "#00D1D2" | "#00A9E0" | "#221551";
        overlay: string;
        highlight: "#C3C5C6" | "#B2C4CF" | "#BDB9CB";
        'state-default': "#FFFFFF";
        'state-active': "#FFFFFF";
        'state-disabled': "#9C9FA1" | "#809DAE" | "#908AA8";
        'state-focused': "#FFFFFF";
        'state-focused-error': "#FFFFFF";
        'state-error': "#FFFFFF";
        'state-readOnly': "#FFFFFF";
        'interaction-hover': "#1C1F21" | "#012236" | "#140A3A";
        'interaction-loading': string;
        'interaction-active': "#00D1D2" | "#00A9E0" | "#221551";
        'signal-warning': "#AA5600";
        'signal-error': "#D42E30";
        'signal-info': "#0070AE";
        'signal-success': "#2F7C34";
    } | {
        primary: "#393E44" | "#001871" | "#332072";
        'primary-inverse': "#FFFDFB" | "#FFFFFF";
        accent: "#00D1D2" | "#00A9E0" | "#221551";
        overlay: "#9C9FA1" | "#809DAE" | "#908AA8";
        highlight: "#C3C5C6" | "#B2C4CF" | "#BDB9CB";
        'state-default': "#393E44" | "#001871" | "#332072";
        'state-active': "#00D1D2" | "#00A9E0" | "#221551";
        'state-disabled': "#C3C5C6" | "#B2C4CF" | "#BDB9CB";
        'state-focused': "#00D1D2" | "#00A9E0" | "#221551";
        'state-focused-error': "#D42E30";
        'state-error': "#D42E30";
        'state-readOnly': "#9C9FA1" | "#809DAE" | "#908AA8";
        'interaction-hover': "#FFFDFB" | "#FFFFFF";
        'interaction-loading': "#9C9FA1" | "#809DAE" | "#908AA8";
        'interaction-active': "#393E44" | "#001871" | "#332072";
        'signal-warning': "#AA5600";
        'signal-error': "#D42E30";
        'signal-info': "#0070AE";
        'signal-success': "#2F7C34";
    } | {
        primary: "#393E44" | "#001871" | "#332072";
        'primary-inverse': "#FFFDFB" | "#FFFFFF";
        accent: "#00D1D2" | "#00A9E0" | "#221551";
        'state-default': "#606568" | "#265876" | "#43386B";
        'state-active': "#393E44" | "#001871" | "#332072";
        'state-disabled': "#9C9FA1" | "#809DAE" | "#908AA8";
        'state-focused': "#606568" | "#265876" | "#43386B";
        'state-focused-error': "#D42E30";
        'state-error': "#D42E30";
        'state-readOnly': "#606568" | "#265876" | "#43386B";
        'interaction-hover': "#00D1D2" | "#00A9E0" | "#221551";
        'interaction-loading': "#C3C5C6" | "#B2C4CF" | "#BDB9CB";
        'interaction-active': "#00D1D2" | "#00A9E0" | "#221551";
        'signal-warning': "#AA5600";
        'signal-error': "#D42E30";
        'signal-info': "#0070AE";
        'signal-success': "#2F7C34";
    } | {
        primary: "#393E44" | "#001871" | "#332072";
        'primary-inverse': "#FFFDFB" | "#FFFFFF";
        accent: "#00D1D2" | "#00A9E0" | "#221551";
        overlay: string;
        highlight: "#C3C5C6" | "#B2C4CF" | "#BDB9CB";
        'state-default': "#FFFFFF";
        'state-active': "#FFFFFF";
        'state-disabled': "#9C9FA1" | "#809DAE" | "#908AA8";
        'state-focused': "#FFFFFF";
        'state-focused-error': "#FFFFFF";
        'state-error': "#FFFFFF";
        'state-readOnly': "#FFFFFF";
        'interaction-hover': "#1C1F21" | "#012236" | "#140A3A";
        'interaction-loading': string;
        'interaction-active': "#00D1D2" | "#00A9E0" | "#221551";
        'signal-warning': "#AA5600";
        'signal-error': "#D42E30";
        'signal-info': "#0070AE";
        'signal-success': "#2F7C34";
    } | {
        primary: "#FFFDFB" | "#FFFFFF";
        'primary-inverse': "#393E44" | "#001871" | "#332072";
        accent: "#00D1D2" | "#00A9E0" | "#221551";
        overlay: string;
        highlight: "#C3C5C6" | "#B2C4CF" | "#BDB9CB";
        'state-default': "#FFFDFB" | "#FFFFFF";
        'state-active': "#00D1D2" | "#00A9E0" | "#221551";
        'state-disabled': "#9C9FA1" | "#809DAE" | "#908AA8";
        'state-focused': "#00D1D2" | "#00A9E0" | "#221551";
        'state-focused-error': "#D42E30";
        'state-error': "#D42E30";
        'state-readOnly': "#9C9FA1" | "#809DAE" | "#908AA8";
        'interaction-hover': "#FFFDFB" | "#FFFFFF";
        'interaction-loading': "#9C9FA1" | "#809DAE" | "#908AA8";
        'interaction-active': "#FFFDFB" | "#FFFFFF";
        'signal-warning': "#AA5600";
        'signal-error': "#D42E30";
        'signal-info': "#0070AE";
        'signal-success': "#2F7C34";
    } | {
        primary: "#FFFDFB" | "#FFFFFF";
        'primary-inverse': "#393E44" | "#001871" | "#332072";
        accent: "#00D1D2" | "#00A9E0" | "#221551";
        'state-default': "#606568" | "#265876" | "#43386B";
        'state-active': "#393E44" | "#001871" | "#332072";
        'state-disabled': "#9C9FA1" | "#809DAE" | "#908AA8";
        'state-focused': "#606568" | "#265876" | "#43386B";
        'state-focused-error': "#D42E30";
        'state-error': "#D42E30";
        'state-readOnly': "#606568" | "#265876" | "#43386B";
        'interaction-hover': "#00D1D2" | "#00A9E0" | "#221551";
        'interaction-loading': "#C3C5C6" | "#B2C4CF" | "#BDB9CB";
        'interaction-active': "#00D1D2" | "#00A9E0" | "#221551";
        'signal-warning': "#AA5600";
        'signal-error': "#D42E30";
        'signal-info': "#0070AE";
        'signal-success': "#2F7C34";
    };
    private updateCSSVariables;
    private setCSSVariables;
    initialize(): void;
}
export declare const designSystem: DesignSystemManager;
export declare const getToken: {
    brand: {
        primary: (brand?: keyof typeof Brand) => {
            readonly main: "#00D1D2";
            readonly light: "#FFFDFB";
            readonly dark: "#393E44";
        } | {
            readonly main: "#00A9E0";
            readonly light: "#FFFFFF";
            readonly dark: "#001871";
        } | {
            readonly main: "#221551";
            readonly light: "#FFFFFF";
            readonly dark: "#332072";
        };
        tints: (brand?: keyof typeof Brand) => {
            readonly dark5: "#EBECEC";
            readonly dark15: "#D7D8D9";
            readonly dark30: "#C3C5C6";
            readonly dark50: "#9C9FA1";
            readonly dark65: "#888B8E";
            readonly dark85: "#606568";
            readonly darker140: "#1C1F21";
        } | {
            readonly dark5: "#F2F5F7";
            readonly dark15: "#D9E2E7";
            readonly dark30: "#B2C4CF";
            readonly dark50: "#809DAE";
            readonly dark65: "#598096";
            readonly dark85: "#265876";
            readonly darker140: "#012236";
        } | {
            readonly dark5: "#F4F3F6";
            readonly dark15: "#DEDCE5";
            readonly dark30: "#BDB9CB";
            readonly dark50: "#908AA8";
            readonly dark65: "#6F678E";
            readonly dark85: "#43386B";
            readonly darker140: "#140A3A";
        };
        global: (brand?: keyof typeof Brand) => {
            readonly warning: "#AA5600";
            readonly error: "#D42E30";
            readonly info: "#0070AE";
            readonly success: "#2F7C34";
            readonly fullWhite: "#FFFFFF";
            readonly fullBlack: "#000000";
        } | {
            readonly warning: "#AA5600";
            readonly error: "#D42E30";
            readonly info: "#0070AE";
            readonly success: "#2F7C34";
            readonly fullWhite: "#FFFFFF";
            readonly fullBlack: "#000000";
        } | {
            readonly warning: "#AA5600";
            readonly error: "#D42E30";
            readonly info: "#0070AE";
            readonly success: "#2F7C34";
            readonly fullWhite: "#FFFFFF";
            readonly fullBlack: "#000000";
        };
        typography: (brand?: keyof typeof Brand) => {
            readonly fontFamily: {
                readonly body: "IQOSW10-Regular";
                readonly heading: "IQOSW10-Bold";
            };
            readonly fontWeight: {
                readonly regular: "400";
                readonly bold: "700";
                readonly button: "400";
            };
        } | {
            readonly fontFamily: {
                readonly body: "ZYNSans_W_Rg";
                readonly heading: "ZYNSans_W_XBd";
            };
            readonly fontWeight: {
                readonly regular: "400";
                readonly bold: "700";
                readonly button: "700";
            };
        } | {
            readonly fontFamily: {
                readonly body: "IQOSW10-Regular";
                readonly heading: "IQOSW10-Bold";
            };
            readonly fontWeight: {
                readonly regular: "400";
                readonly bold: "700";
                readonly button: "400";
            };
        };
        buttonRadius: (brand?: keyof typeof Brand) => 120;
    };
    theme: {
        background: (brand?: keyof typeof Brand, theme?: "light" | "dark") => {
            primary: "#FFFDFB" | "#FFFFFF";
            'primary-inverse': "#393E44" | "#001871" | "#332072";
            accent: "#00D1D2" | "#00A9E0" | "#221551";
            overlay: string;
            highlight: "#C3C5C6" | "#B2C4CF" | "#BDB9CB";
            'state-default': "#FFFFFF";
            'state-active': "#FFFFFF";
            'state-disabled': "#9C9FA1" | "#809DAE" | "#908AA8";
            'state-focused': "#FFFFFF";
            'state-focused-error': "#FFFFFF";
            'state-error': "#FFFFFF";
            'state-readOnly': "#FFFFFF";
            'interaction-hover': "#1C1F21" | "#012236" | "#140A3A";
            'interaction-loading': string;
            'interaction-active': "#00D1D2" | "#00A9E0" | "#221551";
            'signal-warning': "#AA5600";
            'signal-error': "#D42E30";
            'signal-info': "#0070AE";
            'signal-success': "#2F7C34";
        } | {
            primary: "#393E44" | "#001871" | "#332072";
            'primary-inverse': "#FFFDFB" | "#FFFFFF";
            accent: "#00D1D2" | "#00A9E0" | "#221551";
            overlay: string;
            highlight: "#C3C5C6" | "#B2C4CF" | "#BDB9CB";
            'state-default': "#FFFFFF";
            'state-active': "#FFFFFF";
            'state-disabled': "#9C9FA1" | "#809DAE" | "#908AA8";
            'state-focused': "#FFFFFF";
            'state-focused-error': "#FFFFFF";
            'state-error': "#FFFFFF";
            'state-readOnly': "#FFFFFF";
            'interaction-hover': "#1C1F21" | "#012236" | "#140A3A";
            'interaction-loading': string;
            'interaction-active': "#00D1D2" | "#00A9E0" | "#221551";
            'signal-warning': "#AA5600";
            'signal-error': "#D42E30";
            'signal-info': "#0070AE";
            'signal-success': "#2F7C34";
        };
        content: (brand?: keyof typeof Brand, theme?: "light" | "dark") => {
            primary: "#393E44" | "#001871" | "#332072";
            'primary-inverse': "#FFFDFB" | "#FFFFFF";
            accent: "#00D1D2" | "#00A9E0" | "#221551";
            overlay: "#9C9FA1" | "#809DAE" | "#908AA8";
            highlight: "#C3C5C6" | "#B2C4CF" | "#BDB9CB";
            'state-default': "#393E44" | "#001871" | "#332072";
            'state-active': "#00D1D2" | "#00A9E0" | "#221551";
            'state-disabled': "#C3C5C6" | "#B2C4CF" | "#BDB9CB";
            'state-focused': "#00D1D2" | "#00A9E0" | "#221551";
            'state-focused-error': "#D42E30";
            'state-error': "#D42E30";
            'state-readOnly': "#9C9FA1" | "#809DAE" | "#908AA8";
            'interaction-hover': "#FFFDFB" | "#FFFFFF";
            'interaction-loading': "#9C9FA1" | "#809DAE" | "#908AA8";
            'interaction-active': "#393E44" | "#001871" | "#332072";
            'signal-warning': "#AA5600";
            'signal-error': "#D42E30";
            'signal-info': "#0070AE";
            'signal-success': "#2F7C34";
        } | {
            primary: "#FFFDFB" | "#FFFFFF";
            'primary-inverse': "#393E44" | "#001871" | "#332072";
            accent: "#00D1D2" | "#00A9E0" | "#221551";
            overlay: string;
            highlight: "#C3C5C6" | "#B2C4CF" | "#BDB9CB";
            'state-default': "#FFFDFB" | "#FFFFFF";
            'state-active': "#00D1D2" | "#00A9E0" | "#221551";
            'state-disabled': "#9C9FA1" | "#809DAE" | "#908AA8";
            'state-focused': "#00D1D2" | "#00A9E0" | "#221551";
            'state-focused-error': "#D42E30";
            'state-error': "#D42E30";
            'state-readOnly': "#9C9FA1" | "#809DAE" | "#908AA8";
            'interaction-hover': "#FFFDFB" | "#FFFFFF";
            'interaction-loading': "#9C9FA1" | "#809DAE" | "#908AA8";
            'interaction-active': "#FFFDFB" | "#FFFFFF";
            'signal-warning': "#AA5600";
            'signal-error': "#D42E30";
            'signal-info': "#0070AE";
            'signal-success': "#2F7C34";
        };
        border: (brand?: keyof typeof Brand, theme?: "light" | "dark") => {
            primary: "#393E44" | "#001871" | "#332072";
            'primary-inverse': "#FFFDFB" | "#FFFFFF";
            accent: "#00D1D2" | "#00A9E0" | "#221551";
            'state-default': "#606568" | "#265876" | "#43386B";
            'state-active': "#393E44" | "#001871" | "#332072";
            'state-disabled': "#9C9FA1" | "#809DAE" | "#908AA8";
            'state-focused': "#606568" | "#265876" | "#43386B";
            'state-focused-error': "#D42E30";
            'state-error': "#D42E30";
            'state-readOnly': "#606568" | "#265876" | "#43386B";
            'interaction-hover': "#00D1D2" | "#00A9E0" | "#221551";
            'interaction-loading': "#C3C5C6" | "#B2C4CF" | "#BDB9CB";
            'interaction-active': "#00D1D2" | "#00A9E0" | "#221551";
            'signal-warning': "#AA5600";
            'signal-error': "#D42E30";
            'signal-info': "#0070AE";
            'signal-success': "#2F7C34";
        } | {
            primary: "#FFFDFB" | "#FFFFFF";
            'primary-inverse': "#393E44" | "#001871" | "#332072";
            accent: "#00D1D2" | "#00A9E0" | "#221551";
            'state-default': "#606568" | "#265876" | "#43386B";
            'state-active': "#393E44" | "#001871" | "#332072";
            'state-disabled': "#9C9FA1" | "#809DAE" | "#908AA8";
            'state-focused': "#606568" | "#265876" | "#43386B";
            'state-focused-error': "#D42E30";
            'state-error': "#D42E30";
            'state-readOnly': "#606568" | "#265876" | "#43386B";
            'interaction-hover': "#00D1D2" | "#00A9E0" | "#221551";
            'interaction-loading': "#C3C5C6" | "#B2C4CF" | "#BDB9CB";
            'interaction-active': "#00D1D2" | "#00A9E0" | "#221551";
            'signal-warning': "#AA5600";
            'signal-error': "#D42E30";
            'signal-info': "#0070AE";
            'signal-success': "#2F7C34";
        };
    };
    dimension: {
        spacer: (token: keyof typeof spacerTokens) => number;
        typography: {
            size: (token: keyof typeof typographyTokens.size, breakpoint?: "390px (XS)" | "1536px (XL)" | "1920px (XL)") => string;
            lineHeight: (token: keyof typeof typographyTokens.lineHeight, breakpoint?: "390px (XS)" | "1536px (XL)" | "1920px (XL)") => string;
        };
        container: {
            width: (token: keyof typeof containerTokens.width, breakpoint?: ContainerBreakpoint) => number;
            height: (token: keyof typeof containerTokens.height, breakpoint?: ContainerBreakpoint) => number;
        };
        image: {
            width: (token: keyof typeof imageTokens.width, breakpoint?: "xs" | "xl") => number;
            height: (token: keyof typeof imageTokens.height, breakpoint?: "xs" | "xl") => number;
        };
        bottomMargin: (token: keyof typeof bottomMarginTokens, breakpoint?: ContainerBreakpoint) => string;
    };
};
export declare const switchBrand: (brand: keyof typeof Brand) => void;
export declare const switchTheme: (theme: "light" | "dark") => void;
export type BrandName = keyof typeof Brand;
export type SpacingToken = keyof typeof spacerTokens;
export type DimensionBreakpoint = keyof typeof resolutionBreakpoints;
export type ContainerBreakpoint = '390px (XS)' | '600px (SM)' | '900px (MD)' | '1200px (LG)' | '1536px (XL)' | '1920px (XL)';
export type TypographySize = keyof typeof typographyTokens.size;
export type TypographyLineHeight = keyof typeof typographyTokens.lineHeight;
export type DimensionContainerWidth = keyof typeof containerTokens.width;
export type DimensionContainerHeight = keyof typeof containerTokens.height;
export type ImageWidth = keyof typeof imageTokens.width;
export type ImageHeight = keyof typeof imageTokens.height;
export type BottomMarginToken = keyof typeof bottomMarginTokens;
export type BrandToken = keyof typeof Brand;
export type BrandPrimaryColor = keyof typeof Brand.iqos.primary;
export type BrandTint = keyof typeof Brand.iqos.tints;
export type BrandGlobalColor = keyof typeof Brand.iqos.global;
export type BrandFontWeight = keyof typeof Brand.iqos.typography.fontWeight;
export type BrandFontFamily = keyof typeof Brand.iqos.typography.fontFamily;
export type BrandButtonRadius = typeof Brand.iqos.buttonRadius;
export type FontFamily = keyof typeof fontFamilies;
export type FontType = 'body' | 'heading';
export type FontWeight = keyof typeof fontWeights;
export type ThemeSection = 'background' | 'content' | 'border';
export type ThemeToken = keyof ReturnType<typeof createThemeTokens>['light']['background'];
