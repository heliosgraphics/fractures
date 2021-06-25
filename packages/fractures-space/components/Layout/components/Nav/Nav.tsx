import { useState, useEffect } from "react";
import Container from "../../../Container";
import Link from "next/link";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
import type React from "react";
import type { HeaderLinks, NavProps } from "./Nav.types";

const HEADER_LINKS: HeaderLinks = [
	{ name: "Fractures", url: "/" },
	{ icon: <div className="grow-1" /> },
	{ name: "Config", url: "/config" },
	{ name: "Layout", url: "/layout" },
	{ name: "Colors", url: "/colors" },
	{ name: "Typography", url: "/typography" },
	{ name: "Tools", url: "/tools" },
	{
		url: "http://github.com/fractures/fractures",
		icon: <AiFillGithub size={24} />,
		isExternal: true,
	},
];

const NavMarkup: React.FC<NavProps> = (props) => {
	const [path, setPath] = useState<string>("");

	useEffect(() => {
		const pathname = window?.location?.pathname;

		setPath(pathname);
	}, []);

	const liClasses: string = `flex flex-y-center flex-gap-2 hp-100`;
	const inactiveClasses: string = `gray-700`;
	const activeClasses: string = "fr-nav__item--active purple-700";

	return (
		<div
			className={`${props.className} fixed z-50 top-0 left-0 h-32 wp-100 sans p sm:px-4 xl:px-8`}
		>
			<Container className="flex flex-y-center hp-100">
				<ol className="flex flex-y-center flex-gap-4 hp-100 wp-100">
					{HEADER_LINKS.map((item, key) => {
						const isLink: boolean = !!item.url;
						const aClasses: string = `fr-nav__item relative flex flex-y-center flex-gap-4 hp-100 lg:px-3 px-6 bold ${
							path && path === item.url
								? activeClasses
								: inactiveClasses
						}`;

						if (!isLink) return item.icon;

						return (
							<li className={liClasses} key={key}>
								<Link
									href={item.url}
									passHref={item.isExternal}
								>
									<a className={aClasses}>
										{item.icon && (
											<div className="flex flex-center">
												{item.icon}
											</div>
										)}
										{item.name}
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
	overflow: scroll;

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
