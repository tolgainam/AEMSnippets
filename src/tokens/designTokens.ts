// Consolidated Design System Tokens
// This file contains all TypeScript token definitions and utilities

// ============================================================================
// BASE TOKENS - Reference only, not used directly in design
// ============================================================================

// Brand Colors - Base reference colors
export const baseTokens = {
  // IQOS Brand Colors
  Dimensions: {

    space: {
      0: 0,
      1: 4,
      2: 8,
      3: 16,
      4: 24,
      5: 32,
      6: 48,
      7: 64,
      8: 80,
      9: 96,
      10: 120
    },

    Columns: {
      XS: 12,
      SM: 12,
      MD: 12,
      LG: 12,
      XL: 12,
    },

    Page: {
      width: {
        XS: 390,
        SM: 600,
        MD: 900,
        LG: 1200,
        XL: 1536,
        XXL: 1920,
      },
      height: {
        XS: 844,
        SM: 844,
        MD: 1280,
        LG: 1675,
        XL: 1080,
        XXL: 1080,
      }
    },

    Container: {
      width: {
        boxed: {
          XS: 390,
          SM: 600,
          MD: 900,
          LG: 1200,
          XL: 1536,
          XXL: 1536
        },
        full: {
          XS: 390,
          SM: 600,
          MD: 900,
          LG: 1200,
          XL: 1536,
          XXL: 1920,
        },
      },
      height: {
        full: {
          XS: 633,
          SM: 633,
          MD: 1024,
          LG: 540,
          XL: 810,  
          XXL: 810,
        },
        default: {
          XS: 480,
          SM: 480,
          MD: 600,
          LG: 700,
          XL: 700,
          XXL: 700,
        },
      },
    }
  },

  Colors: {
        iqos: {
          turquoise: '#00D1D2',
          anthracite: '#393E44',
          warmWhite: '#FFFDFB',
          terea: '#D24619',
          delia: '#D72018',
          levia: '#6B2FA0',
          hardWhite: '#FF6FCA',
          // IQOS Neutral Scale
          dark5: '#EBECEC',
          dark15: '#D7D8D9',
          dark30: '#C3C5C6',
          dark50: '#9C9FA1',
          dark65: '#888B8E',
          dark85: '#606568',
          darker140: '#1C1F21',
        },

        // ZYN Brand Colors
        zyn: {
          white: '#FFFFFF',
          darkBlue: '#001871',
          blue: '#00A9E0',
          hardWhite: '#F9F9F9',
          // ZYN Neutral Scale (blue-tinted)
          dark5: '#F2F5F7',
          dark15: '#D9E2E7',
          dark30: '#B2C4CF',
          dark50: '#809DAE',
          dark65: '#598096',
          dark85: '#265876',
          darker140: '#012236',
        },

        // VEEV Brand Colors
        veev: {
          deepPurple: '#221551',
          pureWhite: '#FFFFFF',
          deepBlue: '#332072',
          // VEEV Neutral Scale (purple-tinted)
          deepPurpleDarker: '#140A3A',
          deepPurple85: '#43386B',
          deepPurple65: '#6F678E',
          deepPurple50: '#908AA8',
          deepPurple30: '#BDB9CB',
          deepPurple15: '#DEDCE5',
          deepPurple5: '#F4F3F6',
        },

        global: {
          orange700: '#AA5600',
          orange50: '#FFF3E0',
          blue700: '#0070AE',
          blue50: '#E1F5FE',
          red700: '#D42E30',
          red50: '#FFEBEE',
          green700: '#2F7C34',
          green50: '#E8F5E9',
          yellow700: '#FDAC13',
          yellow50: '#FFEDCC',

          // Neutral Colors
          white: '#FFFFFF',
          black: '#000000',
          na: '#000000', // 0% opacity
          errorHighlight: '#F1D0C9',
        }
  }
} as const;


    // ============================================================================
    // FONT TOKENS
    // ============================================================================

    // Font face declarations for custom fonts
    export const fontFaces = {
      // IQOS Font Family
      iqos: {
        regular: 'IQOSW10-Regular',
        bold: 'IQOSW10-Bold',
      },
      // ZYN Font Family
      zyn: {
        regular: 'ZYNSans_W_Rg',
        bold: 'ZYNSans_W_XBd',
      },
    } as const;

    // Font family tokens for each brand
    export const fontFamilies = {
      // IQOS uses IQOS font for IQOS and VEEV brands
      iqos: {
        body: fontFaces.iqos.regular,
        heading: fontFaces.iqos.bold,
      },
      // VEEV also uses IQOS font
      veev: {
        body: fontFaces.iqos.regular,
        heading: fontFaces.iqos.bold,
      },
      // ZYN uses ZYN font
      zyn: {
        body: fontFaces.zyn.regular,
        heading: fontFaces.zyn.bold,
      },
    } as const;

    // Font weight tokens
    export const fontWeights = {
      regular: '400',
      bold: '700',
    } as const;

    // ============================================================================
    // DIMENSION TOKENS
    // ============================================================================

    // Breakpoints (only XS and XL as requested)
    export const resolutionBreakpoints = {
      '390px (XS)': '390px',
      '600px (SM)': '600px',
      '900px (MD)': '900px',
      '1200px (LG)': '1200px',
      '1536px (XL)': '1536px',
    } as const;


    export const Resolution = {
      Radius: {
        '0 (0px)': baseTokens.Dimensions.space[0],
        '2 (8px)': baseTokens.Dimensions.space[2],
        '3 (16px)': baseTokens.Dimensions.space[3],
        '4 (24px)': baseTokens.Dimensions.space[4],
      },

      Spacer: {
        0: baseTokens.Dimensions.space[0],
        1: baseTokens.Dimensions.space[1],
        2: baseTokens.Dimensions.space[2],
        3: baseTokens.Dimensions.space[3],
        4: baseTokens.Dimensions.space[4],
        5: baseTokens.Dimensions.space[5],
        6: baseTokens.Dimensions.space[6],
        7: baseTokens.Dimensions.space[7],
        8: baseTokens.Dimensions.space[8],
        9: baseTokens.Dimensions.space[9],
        10: baseTokens.Dimensions.space[10],
      },
      Typography: {
        lineHeight: {
          poster: {
            '390px (XS)': '48px',
            '1536px (XL)': '104px',
            '1920px (XL)': '104px',
          },
          h1: {
            '390px (XS)': '44px',
            '1536px (XL)': '72px',
            '1920px (XL)': '72px',
          },
          h2: {
            '390px (XS)': '40px',
            '1536px (XL)': '64px',
            '1920px (XL)': '64px',
          },
          h3: {
            '390px (XS)': '40px',
            '1536px (XL)': '56px',
            '1920px (XL)': '56px',
          },
          h4: {
            '390px (XS)': '32px',
            '1536px (XL)': '42px',
            '1920px (XL)': '42px',
          },
          h5: {
            '390px (XS)': '28px',
            '1536px (XL)': '36px',
            '1920px (XL)': '36px',
          },
          h6: {
            '390px (XS)': '24px',
            '1536px (XL)': '36px',
            '1920px (XL)': '36px',
          },
          fs1: {
            '390px (XS)': '44px',
            '1536px (XL)': '72px',
            '1920px (XL)': '72px',
          },
          fs2: {
            '390px (XS)': '40px',
            '1536px (XL)': '64px',
            '1920px (XL)': '64px',
          },
          fs3: {
            '390px (XS)': '40px',
            '1536px (XL)': '56px',
            '1920px (XL)': '56px',
          },
          fs4: {
            '390px (XS)': '32px',
            '1536px (XL)': '42px',
            '1920px (XL)': '42px',
          },
          fs5: {
            '390px (XS)': '28px',
            '1536px (XL)': '40px',
            '1920px (XL)': '40px',
          },
          fs6: {
            '390px (XS)': '24px',
            '1536px (XL)': '36px',
            '1920px (XL)': '36px',
          },
          body1: {
            '390px (XS)': '24px',
            '1536px (XL)': '24px',
            '1920px (XL)': '24px',
          },
          body2: {
            '390px (XS)': '20px',
            '1536px (XL)': '20px',
            '1920px (XL)': '20px',
          },
          body3: {
            '390px (XS)': '16px',
            '1536px (XL)': '16px',
            '1920px (XL)': '16px',
          },
        },

        size: {
          poster: {
            '390px (XS)': '40px',
            '1536px (XL)': '96px',
            '1920px (XL)': '96px',
          },
          h1: {
            '390px (XS)': '36px',
            '1536px (XL)': '64px',
            '1920px (XL)': '64px',
          },
          h2: {
            '390px (XS)': '32px',
            '1536px (XL)': '56px',
            '1920px (XL)': '56px',
          },
          h3: {
            '390px (XS)': '28px',
            '1536px (XL)': '42px',
            '1920px (XL)': '42px',
          },
          h4: {
            '390px (XS)': '24px',
            '1536px (XL)': '32px',
            '1920px (XL)': '32px',
          },
          h5: {
            '390px (XS)': '20px',
            '1536px (XL)': '28px',
            '1920px (XL)': '28px',
          },
          h6: {
            '390px (XS)': '18px',
            '1536px (XL)': '24px',
            '1920px (XL)': '24px',
          },
          fs1: {
            '390px (XS)': '36px',
            '1536px (XL)': '64px',
            '1920px (XL)': '64px',
          },
          fs2: {
            '390px (XS)': '32px',
            '1536px (XL)': '56px',
            '1920px (XL)': '56px',
          },
          fs3: {
            '390px (XS)': '28px',
            '1536px (XL)': '42px',
            '1920px (XL)': '42px',
          },
          fs4: {
            '390px (XS)': '24px',
            '1536px (XL)': '32px',
            '1920px (XL)': '32px',
          },
          fs5: {
            '390px (XS)': '20px',
            '1536px (XL)': '28px',
            '1920px (XL)': '28px',
          },
          fs6: {
            '390px (XS)': '18px',
            '1536px (XL)': '24px',
            '1920px (XL)': '24px',
          },
          body1: {
            '390px (XS)': '16px',
            '1536px (XL)': '16px',
            '1920px (XL)': '16px',
          },
          body2: {
            '390px (XS)': '14px',
            '1536px (XL)': '14px',
            '1920px (XL)': '14px',
          },
          body3: {
            '390px (XS)': '12px',
            '1536px (XL)': '12px',
            '1920px (XL)': '12px',
          },
        }
      },

      Page: {
        width: {
          '390px (XS)': baseTokens.Dimensions.Page.width.XS,
          '600px (SM)': baseTokens.Dimensions.Page.width.SM,
          '900px (MD)': baseTokens.Dimensions.Page.width.MD,
          '1200px (LG)': baseTokens.Dimensions.Page.width.LG,
          '1536px (XL)': baseTokens.Dimensions.Page.width.XL,
          '1920px (XL)': baseTokens.Dimensions.Page.width.XXL,
        },
        height: {
          '390px (XS)': baseTokens.Dimensions.Page.height.XS,
          '600px (SM)': baseTokens.Dimensions.Page.height.SM,
          '900px (MD)': baseTokens.Dimensions.Page.height.MD,
          '1200px (LG)': baseTokens.Dimensions.Page.height.LG,
          '1536px (XL)': baseTokens.Dimensions.Page.height.XL,
          '1920px (XL)': baseTokens.Dimensions.Page.height.XXL,
        },
        basePadding: {
          '390px (XS)': baseTokens.Dimensions.space[4],
          '600px (SM)': baseTokens.Dimensions.space[4],
          '900px (MD)': baseTokens.Dimensions.space[5],
          '1200px (LG)': baseTokens.Dimensions.space[6],
          '1536px (XL)': baseTokens.Dimensions.space[7],
          '1920px (XL)': baseTokens.Dimensions.space[7],
        },
      },

      Navigation: {},
      Cards: {},
      Image: {
        width:{
          full: {
            100: {
              xs: 390,
              xl: 1536,
              xxl: 1920,
            },
            50: {
              xs: 390,
              xl: 768,
              xxl: 960,
            },
          },
          boxed:{
            100: {
              xs: 390,
              xl: 1536,
              xxl: 1536,
            },
            50: {
              xs: 390,
              xl: 768,
              xxl: 768,
            },
          },
          square:{
            xs: 390,
            xl: 700,
            xxl: 700,
          }
        },
        height:{
          full: {
            xs: 633,
            xl: 810,
            xxl: 810,
          },
          default: {
            xs: 480,
            xl: 700,
            xxl: 700,
          },
          square:{
            xs: 390,
            xl: 700,
            xxl: 700,
          }
        },
      },
      BottomMargin: {
        Poster: {
          '390px (XS)': '16px',
          '600px (SM)': '16px',
          '900px (MD)': '16px',
          '1200px (LG)': '16px',
          '1536px (XL)': '16px',
          '1920px (XL)': '16px',
        },
        H1: {
          '390px (XS)': '16px',
          '600px (SM)': '16px',
          '900px (MD)': '16px',
          '1200px (LG)': '16px',
          '1536px (XL)': '16px',
          '1920px (XL)': '16px',
        },
        H2: {
          '390px (XS)': '16px',
          '600px (SM)': '16px',
          '900px (MD)': '16px',
          '1200px (LG)': '16px',
          '1536px (XL)': '16px',
          '1920px (XL)': '16px',
        },
        H3: {
          '390px (XS)': '16px',
          '600px (SM)': '16px',
          '900px (MD)': '16px',
          '1200px (LG)': '16px',
          '1536px (XL)': '16px',
          '1920px (XL)': '16px',
        },
        H4: {
          '390px (XS)': '16px',
          '600px (SM)': '16px',
          '900px (MD)': '16px',
          '1200px (LG)': '16px',
          '1536px (XL)': '16px',
          '1920px (XL)': '16px',
        },
        H5: {
          '390px (XS)': '16px',
          '600px (SM)': '16px',
          '900px (MD)': '16px',
          '1200px (LG)': '16px',
          '1536px (XL)': '16px',
          '1920px (XL)': '16px',
        },
        H6: {
          '390px (XS)': '16px',
          '600px (SM)': '16px',
          '900px (MD)': '16px',
          '1200px (LG)': '16px',
          '1536px (XL)': '16px',
          '1920px (XL)': '16px',
        },
        list: {
          '390px (XS)': '16px',
          '600px (SM)': '16px',
          '900px (MD)': '16px',
          '1200px (LG)': '16px',
          '1536px (XL)': '16px',
          '1920px (XL)': '16px',
        },
        default: {
          '390px (XS)': baseTokens.Dimensions.space[3],
          '600px (SM)': baseTokens.Dimensions.space[3],
          '900px (MD)': baseTokens.Dimensions.space[3],
          '1200px (LG)': baseTokens.Dimensions.space[3],
          '1536px (XL)': baseTokens.Dimensions.space[3],
          '1920px (XL)': baseTokens.Dimensions.space[3],
        },
      },
      Container: {
        width: {
          boxed: {
            '390px (XS)': baseTokens.Dimensions.Container.width.boxed.XS,
            '600px (SM)': baseTokens.Dimensions.Container.width.boxed.SM,
            '900px (MD)': baseTokens.Dimensions.Container.width.boxed.MD,
            '1200px (LG)': baseTokens.Dimensions.Container.width.boxed.LG,
            '1536px (XL)': baseTokens.Dimensions.Container.width.boxed.XL,
            '1920px (XL)': baseTokens.Dimensions.Container.width.boxed.XXL,
          },
          full: {
            '390px (XS)': baseTokens.Dimensions.Container.width.full.XS,
            '600px (SM)': baseTokens.Dimensions.Container.width.full.SM,
            '900px (MD)': baseTokens.Dimensions.Container.width.full.MD,
            '1200px (LG)': baseTokens.Dimensions.Container.width.full.LG,
            '1536px (XL)': baseTokens.Dimensions.Container.width.full.XL,
            '1920px (XL)': baseTokens.Dimensions.Container.width.full.XXL,
          }
        },
        height: {
          default: {
            '390px (XS)': baseTokens.Dimensions.Container.height.default.XS,
            '600px (SM)': baseTokens.Dimensions.Container.height.default.SM,
            '900px (MD)': baseTokens.Dimensions.Container.height.default.MD,
            '1200px (LG)': baseTokens.Dimensions.Container.height.default.LG,
            '1536px (XL)': baseTokens.Dimensions.Container.height.default.XL,
            '1920px (XL)': baseTokens.Dimensions.Container.height.default.XXL,
          },
          full: {
            '390px (XS)': baseTokens.Dimensions.Container.height.full.XS,
            '600px (SM)': baseTokens.Dimensions.Container.height.full.SM,
            '900px (MD)': baseTokens.Dimensions.Container.height.full.MD,
            '1200px (LG)': baseTokens.Dimensions.Container.height.full.LG,
            '1536px (XL)': baseTokens.Dimensions.Container.height.full.XL,
            '1920px (XL)': baseTokens.Dimensions.Container.height.full.XXL,
          },
        },
      },
      
      Button:{
        vPaddingSmall: {
          '390px (XS)': baseTokens.Dimensions.space[2],
          '600px (SM)': baseTokens.Dimensions.space[2],
          '900px (MD)': baseTokens.Dimensions.space[2],
          '1200px (LG)': baseTokens.Dimensions.space[2],
          '1536px (XL)': baseTokens.Dimensions.space[2],
          '1920px (XL)': baseTokens.Dimensions.space[2],
        },
        vPaddingDefault: {
          '390px (XS)': 12,
          '600px (SM)': 12,
          '900px (MD)': 12,
          '1200px (LG)': 12,
          '1536px (XL)': 12,
          '1920px (XL)': 12,
        },
        hPaddingSmall: {
          '390px (XS)': baseTokens.Dimensions.space[2],
          '600px (SM)': baseTokens.Dimensions.space[2],
          '900px (MD)': baseTokens.Dimensions.space[2],
          '1200px (LG)': baseTokens.Dimensions.space[2],
          '1536px (XL)': baseTokens.Dimensions.space[2],
          '1920px (XL)': baseTokens.Dimensions.space[2],
        },
        hPaddingDefault: {
          '390px (XS)': baseTokens.Dimensions.space[3],
          '600px (SM)': baseTokens.Dimensions.space[3],
          '900px (MD)': baseTokens.Dimensions.space[3],
          '1200px (LG)': baseTokens.Dimensions.space[3],
          '1536px (XL)': baseTokens.Dimensions.space[3],
          '1920px (XL)': baseTokens.Dimensions.space[3],
        },
        fontSizeSmall: {
          '390px (XS)': 14,
          '600px (SM)': 14,
          '900px (MD)': 14,
          '1200px (LG)': 14,
          '1536px (XL)': 14,
          '1920px (XL)': 14,
        },
        fontSizeDefault: {
          '390px (XS)': 16,
          '600px (SM)': 16,
          '900px (MD)': 16,
          '1200px (LG)': 16,
          '1536px (XL)': 16,
          '1920px (XL)': 16,
        },
        iconSizeSmall: {
          '390px (XS)': 18,
          '600px (SM)': 18,
          '900px (MD)': 18,
          '1200px (LG)': 18,
          '1536px (XL)': 18,
          '1920px (XL)': 18,
        },
        iconSizeDefault: {
          '390px (XS)': 24,
          '600px (SM)': 24,
          '900px (MD)': 24,
          '1200px (LG)': 24,
          '1536px (XL)': 24,
          '1920px (XL)': 24,
        },
      }
    } as const

    // ============================================================================
    // EXPORTED TOKENS (for type references and imports)
    // ============================================================================

    // Spacer tokens
    export const spacerTokens = Resolution.Spacer;

    // Typography tokens  
    export const typographyTokens = Resolution.Typography;

    // Container tokens
    export const containerTokens = Resolution.Container;

    // Image tokens
    export const imageTokens = Resolution.Image;

    // Bottom margin tokens
    export const bottomMarginTokens = Resolution.BottomMargin;

    // Page tokens (needed for pageTokens import)
    export const pageTokens = Resolution.Page;

    // Radius tokens
    export const radiusTokens = Resolution.Radius;

    // ============================================================================
    // BRAND TOKENS
    // ============================================================================

    // Brand Tokens - Brand-specific tokens that reference base tokens
    export const Brand = {
      // IQOS Brand Tokens
      iqos: {
        // Primary Colors (referencing base brand colors)
        primary: {
          main: baseTokens.Colors.iqos.turquoise,
          light: baseTokens.Colors.iqos.warmWhite,
          dark: baseTokens.Colors.iqos.anthracite,
        },

        // Tints (referencing base brand colors)
        tints: {
          dark5: baseTokens.Colors.iqos.dark5,
          dark15: baseTokens.Colors.iqos.dark15,
          dark30: baseTokens.Colors.iqos.dark30,
          dark50: baseTokens.Colors.iqos.dark50,
          dark65: baseTokens.Colors.iqos.dark65,
          dark85: baseTokens.Colors.iqos.dark85,
          darker140: baseTokens.Colors.iqos.darker140,
        },

        // Global Colors (referencing base global colTheors)
        global: {
          warning: baseTokens.Colors.global.orange700,
          error: baseTokens.Colors.global.red700,
          info: baseTokens.Colors.global.blue700,
          success: baseTokens.Colors.global.green700,
          fullWhite: baseTokens.Colors.global.white,
          fullBlack: baseTokens.Colors.global.black,
        },

        // Typography
        typography: {
          fontFamily: {
            body: fontFamilies.iqos.body,
            heading: fontFamilies.iqos.heading,
          },
          fontWeight: {
            regular: fontWeights.regular,
            bold: fontWeights.bold,
            button: fontWeights.regular,
          },
        },

        buttonRadius: Resolution.Spacer[10],



      },

      // ZYN Brand Tokens
      zyn: {
        // Primary Colors (referencing base brand colors)
        primary: {
          main: baseTokens.Colors.zyn.blue,
          light: baseTokens.Colors.zyn.white,
          dark: baseTokens.Colors.zyn.darkBlue,
        },

        // Tints (referencing base brand colors)
        tints: {
          dark5: baseTokens.Colors.zyn.dark5,
          dark15: baseTokens.Colors.zyn.dark15,
          dark30: baseTokens.Colors.zyn.dark30,
          dark50: baseTokens.Colors.zyn.dark50,
          dark65: baseTokens.Colors.zyn.dark65,
          dark85: baseTokens.Colors.zyn.dark85,
          darker140: baseTokens.Colors.zyn.darker140,
        },

        // Global Colors (referencing base global colors)
        global: {
          warning: baseTokens.Colors.global.orange700,
          error: baseTokens.Colors.global.red700,
          info: baseTokens.Colors.global.blue700,
          success: baseTokens.Colors.global.green700,
          fullWhite: baseTokens.Colors.global.white,
          fullBlack: baseTokens.Colors.global.black,
        },

        // Typography
        typography: {
          fontFamily: {
            body: fontFamilies.zyn.body,
            heading: fontFamilies.zyn.heading,
          },
          fontWeight: {
            regular: fontWeights.regular,
            bold: fontWeights.bold,
            button: fontWeights.bold,

          },
        },
        
        buttonRadius: Resolution.Spacer[10],
        

      },

      // VEEV Brand Tokens
      veev: {
        // Primary Colors (referencing base brand colors)
        primary: {
          main: baseTokens.Colors.veev.deepPurple,
          light: baseTokens.Colors.veev.pureWhite,
          dark: baseTokens.Colors.veev.deepBlue,
        },

        // Tints (referencing base brand colors)
        tints: {
          dark5: baseTokens.Colors.veev.deepPurple5,
          dark15: baseTokens.Colors.veev.deepPurple15,
          dark30: baseTokens.Colors.veev.deepPurple30,
          dark50: baseTokens.Colors.veev.deepPurple50,
          dark65: baseTokens.Colors.veev.deepPurple65,
          dark85: baseTokens.Colors.veev.deepPurple85,
          darker140: baseTokens.Colors.veev.deepPurpleDarker,
        },

        // Global Colors (referencing base global colors)
        global: {
          warning: baseTokens.Colors.global.orange700,
          error: baseTokens.Colors.global.red700,
          info: baseTokens.Colors.global.blue700,
          success: baseTokens.Colors.global.green700,
          fullWhite: baseTokens.Colors.global.white,
          fullBlack: baseTokens.Colors.global.black,
        },

        // Typography
        typography: {
          fontFamily: {
            body: fontFamilies.veev.body,
            heading: fontFamilies.veev.heading,
          },
          fontWeight: {
            regular: fontWeights.regular,
            bold: fontWeights.bold,
            button: fontWeights.regular,
          },
        },
        buttonRadius: Resolution.Spacer[10],

      },
    } as const;

    // Brand tokens (alias for easier access)
    export const brandTokens = Brand;

    // ============================================================================
    // THEME TOKENS
    // ============================================================================

    // Theme Tokens - Light and Dark themes with Background, Content, and Border sections
    export const createThemeTokens = (brand: keyof typeof Brand) => {
      const brandToken = Brand[brand];

      return {
        light: {
          // Background
          background: {
            primary: brandToken.primary.light,
            'primary-inverse': brandToken.primary.dark,
            accent: brandToken.primary.main,
            overlay: `${brandToken.primary.dark}80`, // 50% opacity
            highlight: brandToken.tints.dark30,
            'state-default': brandToken.global.fullWhite,
            'state-active': brandToken.global.fullWhite,
            'state-disabled': brandToken.tints.dark50,
            'state-focused': brandToken.global.fullWhite,
            'state-focused-error': brandToken.global.fullWhite,
            'state-error': brandToken.global.fullWhite,
            'state-readOnly': brandToken.global.fullWhite,
            'interaction-hover': brandToken.tints.darker140,
            'interaction-loading': `${brandToken.global.fullBlack}87`, // 87% opacity
            'interaction-active': brandToken.primary.main,
            'signal-warning': brandToken.global.warning,
            'signal-error': brandToken.global.error,
            'signal-info': brandToken.global.info,
            'signal-success': brandToken.global.success,
          },

          // Content
          content: {
            primary: brandToken.primary.dark,
            'primary-inverse': brandToken.primary.light,
            accent: brandToken.primary.main,
            overlay: brandToken.tints.dark50,
            highlight: brandToken.tints.dark30,
            'state-default': brandToken.primary.dark,
            'state-active': brandToken.primary.main,
            'state-disabled': brandToken.tints.dark30,
            'state-focused': brandToken.primary.main,
            'state-focused-error': brandToken.global.error,
            'state-error': brandToken.global.error,
            'state-readOnly': brandToken.tints.dark50,
            'interaction-hover': brandToken.primary.light,
            'interaction-loading': brandToken.tints.dark50,
            'interaction-active': brandToken.primary.dark,
            'signal-warning': brandToken.global.warning,
            'signal-error': brandToken.global.error,
            'signal-info': brandToken.global.info,
            'signal-success': brandToken.global.success,
          },

          // Border
          border: {
            primary: brandToken.primary.dark,
            'primary-inverse': brandToken.primary.light,
            accent: brandToken.primary.main,
            'state-default': brandToken.tints.dark85,
            'state-active': brandToken.primary.dark,
            'state-disabled': brandToken.tints.dark50,
            'state-focused': brandToken.tints.dark85,
            'state-focused-error': brandToken.global.error,
            'state-error': brandToken.global.error,
            'state-readOnly': brandToken.tints.dark85,
            'interaction-hover': brandToken.tints.darker140,
            'interaction-loading': brandToken.tints.dark30,
            'interaction-active': brandToken.primary.main,
            'signal-warning': brandToken.global.warning,
            'signal-error': brandToken.global.error,
            'signal-info': brandToken.global.info,
            'signal-success': brandToken.global.success,
          },
        },

        dark: {
          // Background Theme
          background: {
            primary: brandToken.primary.dark,
            'primary-inverse': brandToken.primary.light,
            accent: brandToken.primary.main,
            overlay: `${brandToken.primary.dark}80`, // 50% opacity
            highlight: brandToken.tints.dark30,
            'state-default': brandToken.global.fullWhite,
            'state-active': brandToken.global.fullWhite,
            'state-disabled': brandToken.tints.dark50,
            'state-focused': brandToken.global.fullWhite,
            'state-focused-error': brandToken.global.fullWhite,
            'state-error': brandToken.global.fullWhite,
            'state-readOnly': brandToken.global.fullWhite,
            'interaction-hover': brandToken.primary.light,
            'interaction-loading': `${brandToken.global.fullBlack}87`, // 87% opacity
            'interaction-active': brandToken.primary.main,
            'signal-warning': brandToken.global.warning,
            'signal-error': brandToken.global.error,
            'signal-info': brandToken.global.info,
            'signal-success': brandToken.global.success,
          },

          // Content Theme
          content: {
            primary: brandToken.primary.light,
            'primary-inverse': brandToken.primary.dark,
            accent: brandToken.primary.main,
            overlay: `${brandToken.primary.light}80`,
            highlight: brandToken.tints.dark30,
            'state-default': brandToken.primary.light,
            'state-active': brandToken.primary.main,
            'state-disabled': brandToken.tints.dark50,
            'state-focused': brandToken.primary.main,
            'state-focused-error': brandToken.global.error,
            'state-error': brandToken.global.error,
            'state-readOnly': brandToken.tints.dark50,
            'interaction-hover': brandToken.primary.dark,
            'interaction-loading': brandToken.tints.dark50,
            'interaction-active': brandToken.primary.dark,
            'signal-warning': brandToken.global.warning,
            'signal-error': brandToken.global.error,
            'signal-info': brandToken.global.info,
            'signal-success': brandToken.global.success,
          },

          // Border Theme
          border: {
            primary: brandToken.primary.light,
            'primary-inverse': brandToken.primary.dark,
            accent: brandToken.primary.main,
            'state-default': brandToken.tints.dark85,
            'state-active': brandToken.primary.dark,
            'state-disabled': brandToken.tints.dark50,
            'state-focused': brandToken.tints.dark85,
            'state-focused-error': brandToken.global.error,
            'state-error': brandToken.global.error,
            'state-readOnly': brandToken.tints.dark85,
            'interaction-hover': brandToken.primary.light,
            'interaction-loading': brandToken.tints.dark30,
            'interaction-active': brandToken.primary.main,
            'signal-warning': brandToken.global.warning,
            'signal-error': brandToken.global.error,
            'signal-info': brandToken.global.info,
            'signal-success': brandToken.global.success,
          },
        },
      };
    };

    // ============================================================================
    // UTILITY FUNCTIONS
    // ============================================================================

    // Brand utility functions
    export const getBrandTokens = (brand: keyof typeof Brand) => {
      return Brand[brand];
    };

    // Theme utility functions
    export const getThemeTokens = (brand: keyof typeof Brand, theme: 'light' | 'dark') => {
      const themeTokens = createThemeTokens(brand);
      return themeTokens[theme];
    };

    // Font utility functions
    export const getFontFamily = (brand: keyof typeof fontFamilies, type: 'body' | 'heading' = 'body') => {
      return fontFamilies[brand][type];
    };

    export const getFontWeight = (weight: keyof typeof fontWeights) => {
      return fontWeights[weight];
    };

    // Dimension utility functions
    export const getSpacer = (token: keyof typeof spacerTokens): number => {
      return spacerTokens[token];
    };

    export const getTypographySize = (token: keyof typeof typographyTokens.size, breakpoint: '390px (XS)' | '1536px (XL)' | '1920px (XL)' = '390px (XS)'): string => {
      const tokenObj = typographyTokens.size[token] as Record<string, string>;
      return tokenObj[breakpoint];
    };

    export const getTypographyLineHeight = (token: keyof typeof typographyTokens.lineHeight, breakpoint: '390px (XS)' | '1536px (XL)' | '1920px (XL)' = '390px (XS)'): string => {
      const tokenObj = typographyTokens.lineHeight[token] as Record<string, string>;
      return tokenObj[breakpoint];
    };

    export const getContainerWidth = (token: keyof typeof containerTokens.width, breakpoint: ContainerBreakpoint = '390px (XS)'): number => {
      const value = containerTokens.width[token];
      return value[breakpoint];
    };

    export const getContainerHeight = (token: keyof typeof containerTokens.height, breakpoint: ContainerBreakpoint = '390px (XS)'): number => {
      const value = containerTokens.height[token];
      return value[breakpoint];
    };

    export const getImageWidth = (token: keyof typeof imageTokens.width, breakpoint: 'xs' | 'xl' = 'xs'): number => {
      const tokenObj = imageTokens.width[token] as Record<string, number>;
      return tokenObj[breakpoint];
    };

    export const getImageHeight = (token: keyof typeof imageTokens.height, breakpoint: 'xs' | 'xl' = 'xs'): number => {
      const tokenObj = imageTokens.height[token] as Record<string, number>;
      return tokenObj[breakpoint];
    };

    export const getBottomMargin = (token: keyof typeof bottomMarginTokens, breakpoint: ContainerBreakpoint = '390px (XS)'): string => {
      const tokenObj = bottomMarginTokens[token] as Record<string, string>;
      return tokenObj[breakpoint];
    };

    // CSS Custom Property helpers
    export const getSpacerCSSVar = (token: keyof typeof spacerTokens): string => {
      return `var(--dimension-space-${token})`;
    };

    export const getTypographySizeCSSVar = (token: keyof typeof typographyTokens.size): string => {
      return `var(--typography-size-${token})`;
    };

    export const getTypographyLineHeightCSSVar = (token: keyof typeof typographyTokens.lineHeight): string => {
      return `var(--typography-line-height-${token})`;
    };

    export const getContainerWidthCSSVar = (token: keyof typeof containerTokens.width): string => {
      return `var(--container-width-${token})`;
    };

    export const getContainerHeightCSSVar = (token: keyof typeof containerTokens.height): string => {
      return `var(--container-height-${token})`;
    };

    export const getImageWidthCSSVar = (token: keyof typeof imageTokens.width): string => {
      return `var(--image-width-${token})`;
    };

    export const getImageHeightCSSVar = (token: keyof typeof imageTokens.height): string => {
      return `var(--image-height-${token})`;
    };

    export const getBottomMarginCSSVar = (token: keyof typeof bottomMarginTokens): string => {
      return `var(--bottom-margin-${token})`;
    };

    // Responsive utility for applying bottom margins to atoms
    export const applyBottomMargin = (token: keyof typeof bottomMarginTokens | null, breakpoint: ContainerBreakpoint = '390px (XS)'): string => {
      if (!token) return '';
      return `margin-bottom: ${getBottomMargin(token, breakpoint)};`;
    };

    // Utility for getting responsive container dimensions
    export const getResponsiveContainer = (
      width: keyof typeof containerTokens.width,
      height: keyof typeof containerTokens.height
    ): { width: string; height: string } => {
      return {
        width: getContainerWidthCSSVar(width),
        height: getContainerHeightCSSVar(height),
      };
    };

    // Utility for getting responsive image dimensions
    export const getResponsiveImage = (
      width: keyof typeof imageTokens.width,
      height: keyof typeof imageTokens.height
    ): { width: string; height: string } => {
      return {
        width: getImageWidthCSSVar(width),
        height: getImageHeightCSSVar(height),
      };
    };

    // Utility for getting responsive typography styles
    export const getResponsiveTypography = (
      size: keyof typeof typographyTokens.size,
      lineHeight: keyof typeof typographyTokens.lineHeight
    ): { fontSize: string; lineHeight: string } => {
      return {
        fontSize: getTypographySizeCSSVar(size),
        lineHeight: getTypographyLineHeightCSSVar(lineHeight),
      };
    };

    // CSS Custom Properties Generator
    export const createDimensionCSSProperties = () => {
      const cssProperties: Record<string, string> = {};

      // Spacer tokens
      Object.entries(spacerTokens).forEach(([key, value]) => {
        cssProperties[`--dimension-space-${key}`] = value.toString();
      });

      // Typography tokens
      Object.entries(typographyTokens.size).forEach(([key, breakpoints]) => {
        Object.entries(breakpoints).forEach(([breakpoint, value]) => {
          cssProperties[`--typography-size-${key}-${breakpoint}`] = value;
        });
      });

      Object.entries(typographyTokens.lineHeight).forEach(([key, breakpoints]) => {
        Object.entries(breakpoints).forEach(([breakpoint, value]) => {
          cssProperties[`--typography-line-height-${key}-${breakpoint}`] = value;
        });
      });

      // Container tokens
      Object.entries(containerTokens.width).forEach(([key, value]) => {
        if (typeof value === 'object') {
          Object.entries(value).forEach(([breakpoint, breakpointValue]) => {
            cssProperties[`--container-width-${key}-${breakpoint}`] = breakpointValue.toString();
          });
        } else {
          cssProperties[`--container-width-${key}`] = value;
        }
      });

      Object.entries(containerTokens.height).forEach(([key, value]) => {
        if (typeof value === 'object') {
          Object.entries(value).forEach(([breakpoint, breakpointValue]) => {
            cssProperties[`--container-height-${key}-${breakpoint}`] = breakpointValue.toString();
          });
        } else {
          cssProperties[`--container-height-${key}`] = value;
        }
      });

      // Image tokens - handle nested structure
      Object.entries(imageTokens.width).forEach(([widthType, sizes]) => {
        if (widthType === 'square') {
          // Square has direct xs/xl structure
          Object.entries(sizes).forEach(([breakpoint, value]) => {
            cssProperties[`--image-width-${widthType}-${breakpoint}`] = `${value}px`;
          });
        } else {
          // Full and boxed have nested percentage structure
          Object.entries(sizes).forEach(([percentage, breakpoints]) => {
            Object.entries(breakpoints).forEach(([breakpoint, value]) => {
              cssProperties[`--image-width-${widthType}-${percentage}-${breakpoint}`] = `${value}px`;
            });
          });
        }
      });

      Object.entries(imageTokens.height).forEach(([key, breakpoints]) => {
        Object.entries(breakpoints).forEach(([breakpoint, value]) => {
          cssProperties[`--image-height-${key}-${breakpoint}`] = `${value}px`;
        });
      });

      // Bottom margin tokens
      Object.entries(bottomMarginTokens).forEach(([key, breakpoints]) => {
        if (typeof breakpoints === 'object') {
          Object.entries(breakpoints).forEach(([breakpoint, value]) => {
            cssProperties[`--bottom-margin-${key}-${breakpoint}`] = value;
          });
        } else {
          cssProperties[`--bottom-margin-${key}`] = breakpoints;
        }
      });

      return cssProperties;
    };

    // Helper function to get all dimension tokens
    export const getDimensionTokens = () => {
      return {
        breakpoints: resolutionBreakpoints,
        spacers: spacerTokens,
        typography: typographyTokens,
        containers: containerTokens,
        images: imageTokens,
        bottomMargins: bottomMarginTokens,
      };
    };

    // ============================================================================
    // DESIGN SYSTEM MANAGER
    // ============================================================================

    // Brand switching utility
    export class DesignSystemManager {
      private currentBrand: keyof typeof Brand = 'iqos';
  private currentTheme: 'light' | 'dark' = 'light';

constructor(initialBrand: keyof typeof Brand = 'iqos', initialTheme: 'light' | 'dark' = 'light') {
  this.currentBrand = initialBrand;
  this.currentTheme = initialTheme;
}

// Brand management
setBrand(brand: keyof typeof Brand) {
  this.currentBrand = brand;
  this.updateCSSVariables();
}

getBrand(): keyof typeof Brand {
  return this.currentBrand;
}

// Theme management
setTheme(theme: 'light' | 'dark') {
  this.currentTheme = theme;
  this.updateCSSVariables();
}

getTheme(): 'light' | 'dark' {
  return this.currentTheme;
}

// Get current brand tokens
getCurrentBrandTokens() {
  return getBrandTokens(this.currentBrand);
}

// Get current theme tokens
getCurrentThemeTokens() {
  return getThemeTokens(this.currentBrand, this.currentTheme);
}

// Get specific theme section
getThemeSection(section: 'background' | 'content' | 'border') {
  const themeTokens = this.getCurrentThemeTokens();
  return themeTokens[section];
}

  // Update CSS custom properties
  private updateCSSVariables() {
  const brandTokens = this.getCurrentBrandTokens();
  const themeTokens = this.getCurrentThemeTokens();

  // Set brand-specific CSS variables
  this.setCSSVariables('--brand', brandTokens.primary);
  this.setCSSVariables('--brand-tints', brandTokens.tints);
  this.setCSSVariables('--brand-global', brandTokens.global);
  this.setCSSVariables('--brand-typography', brandTokens.typography);
  document.documentElement.style.setProperty('--button-radius', brandTokens.buttonRadius.toString());

  // Set theme-specific CSS variables
  this.setCSSVariables('--theme-background', themeTokens.background);
  this.setCSSVariables('--theme-content', themeTokens.content);
  this.setCSSVariables('--theme-border', themeTokens.border);
}

  private setCSSVariables(prefix: string, obj: Record<string, any>) {
  Object.entries(obj).forEach(([key, value]) => {
    if (typeof value === 'object' && value !== null) {
      this.setCSSVariables(`${prefix}-${key}`, value);
    } else {
      document.documentElement.style.setProperty(`${prefix}-${key}`, value);
    }
  });
}

// Initialize the design system
initialize() {
  this.updateCSSVariables();
}
}

// Global design system instance
export const designSystem = new DesignSystemManager();

// Utility functions for easy token access
export const getToken = {
  // Brand tokens
  brand: {
    primary: (brand: keyof typeof Brand = designSystem.getBrand()) =>
      getBrandTokens(brand).primary,
    tints: (brand: keyof typeof Brand = designSystem.getBrand()) =>
      getBrandTokens(brand).tints,
    global: (brand: keyof typeof Brand = designSystem.getBrand()) =>
      getBrandTokens(brand).global,
    typography: (brand: keyof typeof Brand = designSystem.getBrand()) =>
      getBrandTokens(brand).typography,
    buttonRadius: (brand: keyof typeof Brand = designSystem.getBrand()) =>
      getBrandTokens(brand).buttonRadius,
  },

  // Theme tokens
  theme: {
    background: (brand: keyof typeof Brand = designSystem.getBrand(), theme: 'light' | 'dark' = designSystem.getTheme()) =>
      getThemeTokens(brand, theme).background,
    content: (brand: keyof typeof Brand = designSystem.getBrand(), theme: 'light' | 'dark' = designSystem.getTheme()) =>
      getThemeTokens(brand, theme).content,
    border: (brand: keyof typeof Brand = designSystem.getBrand(), theme: 'light' | 'dark' = designSystem.getTheme()) =>
      getThemeTokens(brand, theme).border,
  },

  // Dimension tokens
  dimension: {
    spacer: getSpacer,
    typography: {
      size: getTypographySize,
      lineHeight: getTypographyLineHeight,
    },
    container: {
      width: getContainerWidth,
      height: getContainerHeight,
    },
    image: {
      width: getImageWidth,
      height: getImageHeight,
    },
    bottomMargin: getBottomMargin,
  },
};

// Convenience functions for switching brand and theme
export const switchBrand = (brand: keyof typeof Brand) => {
  designSystem.setBrand(brand);
};

export const switchTheme = (theme: 'light' | 'dark') => {
  designSystem.setTheme(theme);
};

// ============================================================================
// TYPE EXPORTS
// ============================================================================

// Base types
export type BrandName = keyof typeof Brand;
export type SpacingToken = keyof typeof spacerTokens;

// Dimension types  
export type DimensionBreakpoint = keyof typeof resolutionBreakpoints;
export type ContainerBreakpoint = '390px (XS)' | '600px (SM)' | '900px (MD)' | '1200px (LG)' | '1536px (XL)' | '1920px (XL)';
export type TypographySize = keyof typeof typographyTokens.size;
export type TypographyLineHeight = keyof typeof typographyTokens.lineHeight;
export type DimensionContainerWidth = keyof typeof containerTokens.width;
export type DimensionContainerHeight = keyof typeof containerTokens.height;
export type ImageWidth = keyof typeof imageTokens.width;
export type ImageHeight = keyof typeof imageTokens.height;
export type BottomMarginToken = keyof typeof bottomMarginTokens;

// Brand types
export type BrandToken = keyof typeof Brand;
export type BrandPrimaryColor = keyof typeof Brand.iqos.primary;
export type BrandTint = keyof typeof Brand.iqos.tints;
export type BrandGlobalColor = keyof typeof Brand.iqos.global;
export type BrandFontWeight = keyof typeof Brand.iqos.typography.fontWeight;
export type BrandFontFamily = keyof typeof Brand.iqos.typography.fontFamily;
export type BrandButtonRadius = typeof Brand.iqos.buttonRadius;

// Font types
export type FontFamily = keyof typeof fontFamilies;
export type FontType = 'body' | 'heading';
export type FontWeight = keyof typeof fontWeights;

// Theme types
export type ThemeSection = 'background' | 'content' | 'border';
export type ThemeToken = keyof ReturnType<typeof createThemeTokens>['light']['background'];