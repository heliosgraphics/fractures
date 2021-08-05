export const root: string = `:root {
	--box-px: 1px;
	--box-1: 2px;
	--box-2: 4px;
	--box-3: 6px;
	--box-4: 8px;
	--box-5: 10px;
	--box-6: 12px;
	--box-7: 14px;
	--box-8: 16px;
	--box-9: 18px;
	--box-10: 20px;
	--box-11: 22px;
	--box-12: 24px;
	--box-13: 26px;
	--box-14: 28px;
	--box-15: 30px;
	--box-16: 32px;
	--box-24: 48px;
	--box-32: 64px;
	--box-40: 80px;
	--box-48: 96px;

	--font-size-h1: 36px;
	--font-size-h2: 32px;
	--font-size-h3: 28px;
	--font-size-h4: 24px;
	--font-size-h5: 20px;
	--font-size-h6: 18px;
	--font-size-p: 16px;
	--font-size-small: 14px;
	--font-size-tiny: 12px;

	--line-height-h1: 44px;
	--line-height-h2: 40px;
	--line-height-h3: 36px;
	--line-height-h4: 32px;
	--line-height-h5: 26px;
	--line-height-h6: 24px;
	--line-height-p: 22px;
	--line-height-small: 20px;
	--line-height-tiny: 16px;

	--font-family-sans: "Arial";
	--font-family-serif: "Georgia";
	--font-family-mono: "Monospace";

	--font-weight-lighter: lighter;
	--font-weight-light: light;
	--font-weight-normal: normal;
	--font-weight-bold: bold;
	--font-weight-bolder: bolder;

	--z-index-0: 0;
	--z-index-10: 100;
	--z-index-20: 200;
	--z-index-30: 300;
	--z-index-40: 400;
	--z-index-50: 500;
	--z-index-60: 600;
	--z-index-70: 700;
	--z-index-80: 800;
	--z-index-90: 900;
	--z-index-100: 1000;

	--background-opacity: 1;
	--color-opacity: 1;

	--rgb-gray-0: 255 255 255;
	--rgb-gray-25: 249 250 250;
	--rgb-gray-50: 247 247 248;
	--rgb-gray-100: 241 242 243;
	--rgb-gray-200: 214 216 219;
	--rgb-gray-300: 187 191 195;
	--rgb-gray-400: 160 165 171;
	--rgb-gray-500: 133 139 148;
	--rgb-gray-600: 107 114 122;
	--rgb-gray-700: 84 89 95;
	--rgb-gray-800: 60 63 68;
	--rgb-gray-900: 36 38 41;
	--rgb-gray-1000: 0 0 0;

	--rgb-red-100: 252 233 234;
	--rgb-red-200: 245 188 192;
	--rgb-red-300: 239 144 150;
	--rgb-red-400: 232 99 109;
	--rgb-red-500: 225 55 67;
	--rgb-red-600: 200 30 41;
	--rgb-red-700: 156 23 32;
	--rgb-red-800: 111 16 23;
	--rgb-red-900: 67 10 14;

	--rgb-yellow-100: 254 246 230;
	--rgb-yellow-200: 252 228 181;
	--rgb-yellow-300: 250 210 132;
	--rgb-yellow-400: 249 192 83;
	--rgb-yellow-500: 247 174 34;
	--rgb-yellow-600: 221 148 8;
	--rgb-yellow-700: 172 115 6;
	--rgb-yellow-800: 123 82 5;
	--rgb-yellow-900: 74 49 3;

	--rgb-green-100: 234 250 240;
	--rgb-green-200: 193 241 209;
	--rgb-green-300: 151 232 179;
	--rgb-green-400: 109 222 148;
	--rgb-green-500: 68 213 118;
	--rgb-green-600: 42 187 92;
	--rgb-green-700: 33 146 72;
	--rgb-green-800: 23 104 51;
	--rgb-green-900: 14 62 31;

	--rgb-blue-100: 232 231 253;
	--rgb-blue-200: 185 184 249;
	--rgb-blue-300: 139 137 245;
	--rgb-blue-400: 93 90 241;
	--rgb-blue-500: 46 43 238;
	--rgb-blue-600: 21 17 212;
	--rgb-blue-700: 16 14 165;
	--rgb-blue-800: 11 10 118;
	--rgb-blue-900: 7 6 71;

	--rgb-purple-100: 241 232 252;
	--rgb-purple-200: 213 186 247;
	--rgb-purple-300: 185 140 242;
	--rgb-purple-400: 157 94 237;
	--rgb-purple-500: 128 48 232;
	--rgb-purple-600: 103 23 207;
	--rgb-purple-700: 80 18 161;
	--rgb-purple-800: 57 13 115;
	--rgb-purple-900: 34 8 69;

	--rgb-pink-100: 252 233 244;
	--rgb-pink-200: 246 188 223;
	--rgb-pink-300: 239 143 201;
	--rgb-pink-400: 233 98 179;
	--rgb-pink-500: 227 54 158;
	--rgb-pink-600: 201 28 132;
	--rgb-pink-700: 157 22 103;
	--rgb-pink-800: 112 16 73;
	--rgb-pink-900: 67 9 44;

	--gray-0: rgba(var(--rgb-gray-0, 1));
	--gray-25: rgba(var(--rgb-gray-25, 1));
	--gray-50: rgba(var(--rgb-gray-50, 1));
	--gray-100: rgba(var(--rgb-gray-100, 1));
	--gray-200: rgba(var(--rgb-gray-200, 1));
	--gray-300: rgba(var(--rgb-gray-300, 1));
	--gray-400: rgba(var(--rgb-gray-400, 1));
	--gray-500: rgba(var(--rgb-gray-500, 1));
	--gray-600: rgba(var(--rgb-gray-600, 1));
	--gray-700: rgba(var(--rgb-gray-700, 1));
	--gray-800: rgba(var(--rgb-gray-800, 1));
	--gray-900: rgba(var(--rgb-gray-900, 1));
	--gray-1000: rgba(var(--rgb-gray-1000, 1));

	--red-100: rgba(var(--rgb-red-100, 1));
	--red-200: rgba(var(--rgb-red-200, 1));
	--red-300: rgba(var(--rgb-red-300, 1));
	--red-400: rgba(var(--rgb-red-400, 1));
	--red-500: rgba(var(--rgb-red-500, 1));
	--red-600: rgba(var(--rgb-red-600, 1));
	--red-700: rgba(var(--rgb-red-700, 1));
	--red-800: rgba(var(--rgb-red-800, 1));
	--red-900: rgba(var(--rgb-red-900, 1));

	--yellow-100: rgba(var(--rgb-yellow-100, 1));
	--yellow-200: rgba(var(--rgb-yellow-200, 1));
	--yellow-300: rgba(var(--rgb-yellow-300, 1));
	--yellow-400: rgba(var(--rgb-yellow-400, 1));
	--yellow-500: rgba(var(--rgb-yellow-500, 1));
	--yellow-600: rgba(var(--rgb-yellow-600, 1));
	--yellow-700: rgba(var(--rgb-yellow-700, 1));
	--yellow-800: rgba(var(--rgb-yellow-800, 1));
	--yellow-900: rgba(var(--rgb-yellow-900, 1));

	--green-100: rgba(var(--rgb-green-100, 1));
	--green-200: rgba(var(--rgb-green-200, 1));
	--green-300: rgba(var(--rgb-green-300, 1));
	--green-400: rgba(var(--rgb-green-400, 1));
	--green-500: rgba(var(--rgb-green-500, 1));
	--green-600: rgba(var(--rgb-green-600, 1));
	--green-700: rgba(var(--rgb-green-700, 1));
	--green-800: rgba(var(--rgb-green-800, 1));
	--green-900: rgba(var(--rgb-green-900, 1));

	--blue-100: rgba(var(--rgb-blue-100, 1));
	--blue-200: rgba(var(--rgb-blue-200, 1));
	--blue-300: rgba(var(--rgb-blue-300, 1));
	--blue-400: rgba(var(--rgb-blue-400, 1));
	--blue-500: rgba(var(--rgb-blue-500, 1));
	--blue-600: rgba(var(--rgb-blue-600, 1));
	--blue-700: rgba(var(--rgb-blue-700, 1));
	--blue-800: rgba(var(--rgb-blue-800, 1));
	--blue-900: rgba(var(--rgb-blue-900, 1));

	--purple-100: rgba(var(--rgb-purple-100, 1));
	--purple-200: rgba(var(--rgb-purple-200, 1));
	--purple-300: rgba(var(--rgb-purple-300, 1));
	--purple-400: rgba(var(--rgb-purple-400, 1));
	--purple-500: rgba(var(--rgb-purple-500, 1));
	--purple-600: rgba(var(--rgb-purple-600, 1));
	--purple-700: rgba(var(--rgb-purple-700, 1));
	--purple-800: rgba(var(--rgb-purple-800, 1));
	--purple-900: rgba(var(--rgb-purple-900, 1));

	--pink-100: rgba(var(--rgb-pink-100, 1));
	--pink-200: rgba(var(--rgb-pink-200, 1));
	--pink-300: rgba(var(--rgb-pink-300, 1));
	--pink-400: rgba(var(--rgb-pink-400, 1));
	--pink-500: rgba(var(--rgb-pink-500, 1));
	--pink-600: rgba(var(--rgb-pink-600, 1));
	--pink-700: rgba(var(--rgb-pink-700, 1));
	--pink-800: rgba(var(--rgb-pink-800, 1));
	--pink-900: rgba(var(--rgb-pink-900, 1));
}`;
