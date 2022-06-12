import Head from "next/head";
import app from "next/app";
import "@fractures/css";
import "./_app.css";

export default class MyApp extends app {
	render() {
		const { Component, pageProps } = this.props;

		return (
			<>
				<Head>
					<script
						src="https://cdn.usefathom.com/script.js"
						data-site={`${process.env.FATHOM_FRACTURES_DEV}`}
						defer
					/>
				</Head>
				<Component {...pageProps} />
			</>
		);
	}
}
