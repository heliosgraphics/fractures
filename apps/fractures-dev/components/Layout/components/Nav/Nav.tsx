"use client";

import { useState, useEffect } from "react";
import styles from "./Nav.module.css";
import Container from "../../../Container";
import classNames from "@sindresorhus/class-names";
import Link from "next/link";
import Search from "../Search";
import { AiFillGithub } from "react-icons/ai";
import type React from "react";
import type { HeaderLinks, NavProps } from "./Nav.types";

const HEADER_LINKS: HeaderLinks = [
	{ name: "Fractures", url: "/" },
	{ component: <Search key="nav-search" /> },
	{ name: "Setup", url: "/setup" },
	{ name: "Colors", url: "/colors", isDesktop: true },
	{ name: "Selectors", url: "/selectors", isDesktop: true },
	{
		url: "http://github.com/fractures/fractures",
		name: "GitHub",
		component: <AiFillGithub size={24} key="github-icon" />,
		isExternal: true,
		isIconOnly: true,
	},
];

const Nav: React.FC<NavProps> = (props) => {
	const [path, setPath] = useState<string>("");
	const pathname = globalThis?.location?.pathname;

	useEffect(() => {
		setPath(pathname);
	}, [pathname]);

	return (
		<div
			className={`${styles.nav} fixed z-50 top-0 left-0 h-32 wp-100 sans p sm:px-4 xl:px-8`}
		>
			<Container className="flex flex-y-center hp-100">
				<ol className="flex flex-y-center flex-gap-4 hp-100 wp-100">
					{HEADER_LINKS.map((item, key) => {
						const isLink: boolean = !!item.url;
						const isActive: boolean = path && path === item.url;

						const liClasses: string = classNames(
							`flex flex-y-center flex-gap-2 hp-100`,
							{
								"lg:none": item.isDesktop,
							}
						);

						const aClasses: string = classNames(
							"relative flex flex-y-center flex-gap-4 hp-100 lg:px-3 px-6 bold",
							{
								[`${styles.navItemActive} purple-700`]: isActive,
								"gray-700": !isActive,
							}
						);

						if (!isLink) return item.component;

						return (
							<li className={liClasses} key={key}>
								<Link
									href={item.url}
									passHref={item.isExternal}
									className={aClasses}
									aria-label={item.name}
								>
									{item.component && (
										<div className="flex flex-center">{item.component}</div>
									)}
									{!item.isIconOnly && item.name}
								</Link>
							</li>
						);
					})}
				</ol>
			</Container>
		</div>
	);
};

export default Nav;
