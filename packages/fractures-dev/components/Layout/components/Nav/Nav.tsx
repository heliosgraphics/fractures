import { useState, useEffect } from "react";
import Container from "../../../Container";
import classNames from "@sindresorhus/class-names";
import Link from "next/link";
import styled from "styled-components";
import Search from "../Search";
import { AiFillGithub } from "react-icons/ai";
import type React from "react";
import type { HeaderLinks, NavProps } from "./Nav.types";

const HEADER_LINKS: HeaderLinks = [
	{ name: "Fractures", url: "/" },
	{ component: <Search key="nav-search" /> },
	{ name: "Setup", url: "/setup" },
	{ name: "Layout", url: "/layout", isDesktop: true },
	{ name: "Colors", url: "/colors", isDesktop: true },
	{ name: "Typography", url: "/typography", isDesktop: true },
	{ name: "Tools", url: "/tools", isDesktop: true },
	{
		url: "http://github.com/fractures/fractures",
		component: <AiFillGithub size={24} key="github-icon" />,
		isExternal: true,
		isIconOnly: true,
	},
];

const NavMarkup: React.FC<NavProps> = (props) => {
	const [path, setPath] = useState<string>("");

	useEffect(() => {
		const pathname = window?.location?.pathname;

		setPath(pathname);
	}, []);

	return (
		<div
			className={`${props.className} fixed z-50 top-0 left-0 h-32 wp-100 sans p sm:px-4 xl:px-8`}
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
							"fr-nav__item relative flex flex-y-center flex-gap-4 hp-100 lg:px-3 px-6 bold",
							{
								"fr-nav__item--active purple-700": isActive,
								"gray-700": !isActive,
							}
						);

						if (!isLink) return item.component;

						return (
							<li className={liClasses} key={key}>
								<Link href={item.url} passHref={item.isExternal}>
									<a className={aClasses} aria-label={item.name}>
										{item.component && (
											<div className="flex flex-center">{item.component}</div>
										)}
										{!item.isIconOnly && item.name}
									</a>
								</Link>
							</li>
						);
					})}
				</ol>
			</Container>
		</div>
	);
};

const Nav: React.FC<NavProps> = styled(NavMarkup)`
	background-color: rgba(255, 255, 255, 0.75);
	backdrop-filter: blur(12px) brightness(120%);

	.fr-nav__item--active:after {
		position: absolute;
		top: calc(100% - 16px);
		left: calc(50% - 24px);

		height: 2px;
		width: 48px;

		animation: example ease-in-out 100ms 1 forwards;
		background-color: var(--purple-500);
		border-radius: 4px;

		content: "";
	}

	@keyframes example {
		from {
			left: calc(50% - 1px);
			width: 2px;
		}
		to {
			left: calc(50% - 24px);
			width: 48px;
		}
	}
`;

export default Nav;
