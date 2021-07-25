import { useEffect, useState } from "react";
import Container from "../../../Container";
import classNames from "@sindresorhus/class-names";
import { useRouter } from "next/router";
import type {
	CircleColorSet,
	CircleColors,
	CirclesProps,
} from "./Circles.types";

const circleColors: CircleColors = {
	"/": [
		"rgba(68,213,118, 1)",
		"rgba(68,213,118,0)",
		"rgba(46,43,238,1)",
		"rgba(128,48,232,0)",
	],
	"/setup": [
		"rgba(47,234,123,1)",
		"rgba(18,213,18,0)",
		"rgba(100,3,138,0)",
		"rgba(28,8,202,0)",
	],
	"/layout": [
		"rgba(47,234,123,1)",
		"rgba(8,213,18,0)",
		"rgba(100,3,138,0)",
		"rgba(228,8,202,0)",
	],
	"/colors": [
		"rgba(47,234,123,1)",
		"rgba(8,213,18,0)",
		"rgba(100,3,138,0)",
		"rgba(228,8,202,0)",
	],
	"/typography": [
		"rgba(47,234,123,1)",
		"rgba(8,213,18,0)",
		"rgba(100,3,138,0)",
		"rgba(228,8,202,0)",
	],
	"/tools": [
		"rgba(47,234,123,1)",
		"rgba(8,213,18,0)",
		"rgba(100,3,138,0)",
		"rgba(228,8,202,0)",
	],
};

const Circles: React.FC<CirclesProps> = (props) => {
	const circleClasses: string = classNames(
		props.className,
		"absolute overflow-hidden wpmax-100"
	);
	const [colorSet, setColorSet] = useState<CircleColorSet>(circleColors["/"]);
	const router = useRouter();

	useEffect(() => {
		const color: CircleColorSet =
			circleColors[router.pathname] || circleColors["/"];

		setColorSet(color);
	}, [router.pathname]);

	return (
		<Container isWide={true}>
			<svg height={1280} width={1280} className={circleClasses}>
				<defs>
					<radialGradient id="greenYellow">
						<stop
							offset="00%"
							stopColor={colorSet[0]}
							stopOpacity="30%"
						/>
						<stop offset="100%" stopColor={colorSet[1]} />
					</radialGradient>
					<radialGradient id="blueMagenta">
						<stop
							offset="0%"
							stopColor={colorSet[2]}
							stopOpacity="30%"
						/>
						<stop offset="100%" stopColor={colorSet[3]} />
					</radialGradient>
				</defs>
				<circle
					cx={240}
					cy={120}
					r={240}
					stroke="transparent"
					strokeWidth={0}
					fill="url('#greenYellow')"
					className="circle--green-yellow"
				/>
				<circle
					cx={480}
					cy={240}
					r={240}
					stroke="transparent"
					strokeWidth={0}
					fill="url('#blueMagenta')"
					className="circle--blue-magenta"
				/>
			</svg>
		</Container>
	);
};

export default Circles;
