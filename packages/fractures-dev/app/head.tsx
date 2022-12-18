import fracturesPackage from "../../fractures/package.json";

export interface MetaType {
	description: string;
	title: string;
	url: string;
}

const Head: React.FC<void> = () => {
	const meta: MetaType = {
		description: fracturesPackage.description,
		title: "Fractures",
		url: "https://fractures.dev",
	};

	return (
		<>
			<title>{meta.title}</title>
			<meta charSet="utf-8" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<meta name="description" content={meta.description} />
			<meta name="og-url" property="og:url" content={meta.url} />
			<meta name="og-type" property="og:type" content="website" />
			<meta name="og-title" property="og:title" content={meta.title} />
			<meta
				name="og-description"
				property="og:description"
				content={meta.description}
			/>
			<meta
				name="og-image"
				property="og:image"
				content="https://fractures.dev/images/share.png"
			/>
			<meta name="og-image-width" property="og:image:width" content="1600" />
			<meta name="og-image-height" property="og:image:height" content="800" />
			<link rel="icon" href="/favicon.ico" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<meta
				name="theme-color"
				content="#220845"
				media="(prefers-color-scheme: light)"
			/>
			<meta
				name="theme-color"
				content="#220845"
				media="(prefers-color-scheme: dark)"
			/>
		</>
	);
};

export default Head;
