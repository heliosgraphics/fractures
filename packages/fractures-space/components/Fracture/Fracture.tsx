import type { FractureProps } from "./Fracture.types";

const Fracture: React.FC<FractureProps> = (props) => {
	const allClasses: Array<string> = props.class?.split(" ");

	return (
		<div className="inline-flex flex-gap-4">
			{allClasses?.map((cl) => (
				<code
					className={`
        inline-flex p-2
        bg-${props.colorScale || "gray"}-100 radius-1
        tiny mono
      `}
				>
					.{cl}
				</code>
			))}
		</div>
	);
};

export default Fracture;
