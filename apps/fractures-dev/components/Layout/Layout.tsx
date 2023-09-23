import React from "react";
import Nav from "./components/Nav";
import type { LayoutProps } from "./Layout.types";

const Layout: React.FC<LayoutProps> = (props) => {
	return (
		<>
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
