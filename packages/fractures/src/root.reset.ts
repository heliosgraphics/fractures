export const reset: string = `* {
	margin: 0;
	padding: 0;
}

*,
*:before,
*:after {
	box-sizing: border-box;
}

html,
body {
	position: relative;
}

body {
  text-decoration-thickness: from-font;
  text-underline-position: from-font;
}

html {
	overflow-y: scroll;
}

a {
	text-decoration: none;
}

ul,
ol {
	list-style: none;
}

img { max-width: 100%; }
sub { vertical-align: sub; }
sup { vertical-align: super; }`
