import type { Config } from "tailwindcss";

const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {//---good theme:extend:で以下3色以外も使える
        transparent: "transparent",
        current: 'currentColor',
        mypurple: { //bg-mypurple-300 --> ２段ネストまでOK
          100: '#cffafa',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
          DEFAULT: '#06b6d4',
        },
      },
      fontSize: {
        mySm: "0.8rem", //文字サイズだけ指定するクラス
        myLg: ["16px", "24px"], //文字サイズと行送りを指定するクラス
        my2xl: [ //他の設定も可能
          "1.5rem",
          {
            lineHeight: "2rem", //行送り
            letterSpacing: "-0.01em",
            fontWeight: "500", //ウェイト
          }
        ] 
      },
      fontFamily: {
        //.font-sans --> font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";	
        sans: ["Lato", ...defaultTheme.fontFamily.sans], //デフォルトの配列に要素を追加が必要な場合(左から優先的に選択されるフォント)
        serif: ['Times New Roman', ...defaultTheme.fontFamily.serif], //デフォルトの配列に要素を追加が必要な場合(左から優先的に選択されるフォント)
        mono: ['"Noto Sans Mono"', ...defaultTheme.fontFamily.mono]
      },
      content: {
        myAsterisk: '"***"',
        myAtmark: '"@@@"',
        myLink: 'url("/next.svg")',
        myTooltip: "after(data-tooltip)", //これは良くわからない
      },
      gridTemplateColumns: {
        //3列のグリッド
        my3: "repeat(3, minmax(0, 1fr))",
        //フッター専用の特殊レイアウト
        myFooter: "200px minmax(900px, 1fr) 100px",
      },
      listStyleType: {
        myCirle: "circle", //白丸
        mySquare: "square",
        myRoman: "upper-roman" //大文字アルファベット        
      },
      listStyleImage: {
        myIcon: 'url("/vercel.svg")',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      transitionProperty: {
        myHeight: "height",
        mySpacing: "margin, padding",
      },
      keyframes: {
        myWiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        myWiggle: "myWiggle 1s ease-in-out infinite",
      },
      aria: {
        myAsc: 'sort="ascending"',
        myDesc: 'sort="descending"',
      },
      data: {
        myChecked: 'myUi~="myChecked"',
      },

    },
  },
  plugins: [
    require("@headlessui/tailwindcss"),
    require("@tailwindcss/typography"),
  ],
  important: true, //すべてのcssクラスを!importにする
};
export default config;
