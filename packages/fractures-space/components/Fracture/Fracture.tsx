import type { FractureProps } from "./Fracture.types";

const Fracture: React.FC<FractureProps> = (props) => {
	return (
		<div className="inline-flex flex-gap-4">
			<code
					className={`
        inline-flex p-2
        bg-${props.colorScale || "gray"}-100 radius-1
        tiny mono nowrap
      `}
				>
					<span className='gray-300 unselectable'>.</span>{props.class}
				</code>
		</div>
	);
};

export default Fracture;
