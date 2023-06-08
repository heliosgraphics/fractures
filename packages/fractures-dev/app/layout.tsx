"use client";

import { Inter, IBM_Plex_Mono } from "@next/font/google";
import "@fractures/css/dist/fractures.min.css";
import "./layout.css";

const fontInter = Inter({ subsets: ["latin"] });
const fontPlexMono = IBM_Plex_Mono({
	subsets: ["latin"],
	weight: ["400", "700"],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<style jsx global>{`
				:root {
					--font-family-sans: ${fontInter.style.fontFamily};
					--font-family-mono: ${fontPlexMono.style.fontFamily};
				}
			`}</style>
			<html lang="en">
				<head />
				<body>{children}</body>
			</html>
		</>
	);
}
