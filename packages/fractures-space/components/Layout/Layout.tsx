import Circles from "./components/Circles";
import fracturesPackage from "fractures/package.json";
import Head from "next/head";
import Nav from "./components/Nav";
import type { MetaType, LayoutProps } from "./Layout.types";

const Layout: React.FC<LayoutProps> = (props) => {
	const meta: MetaType = {
		description: fracturesPackage.description,
		title: !!props.title ? `${props.title} — Fractures` : "Fractures",
		url: "https://fractures.space",
	};

	return (
		<>
			<Head>
				<title>{meta.title}</title>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
				<meta name="description" content={meta.description} />
				<meta name="og-url" property="og:url" content={meta.url} />
				<meta name="og-type" property="og:type" content="website" />
				<meta
					name="og-title"
					property="og:title"
					content={meta.title}
				/>
				<meta
					name="og-description"
					property="og:description"
					content={meta.description}
				/>
				<meta
					name="og-image"
					property="og:image"
					content="https://fractures.space/images/share.png"
				/>
				<meta
					name="og-image-width"
					property="og:image:width"
					content="332"
				/>
				<meta
					name="og-image-height"
					property="og:image:height"
					content="332"
				/>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;700&family=Inter:wght@300;400;500;700;900&family=IBM+Plex+Sans:wght@700&display=swap"
					rel="stylesheet"
				/>
				<meta name="theme-color" content="#220845" media="(prefers-color-scheme: light)"/>
				<meta name="theme-color" content="#220845" media="(prefers-color-scheme: dark)"/>
			</Head>
			<Circles />
			<Nav />
			<main
				className="
				relative z-1

				mt-24
				p-16 pb-32 lg:p-8 sm:p-4

				sans foreground
			"
			>
				{props.children}
			</main>
		</>
	);
};

export default Layout;
