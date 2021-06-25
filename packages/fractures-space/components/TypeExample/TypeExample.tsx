import Fracture from "../Fracture";
import type { TypeExampleProps } from "./TypeExample.types";

const TypeExample: React.FC<TypeExampleProps> = (props) => (
	<div className="flex flex-gap-12">
		<div className="flex flex-column flex-gap-2 p-4 w-36 bg-gray-50 center mono tiny">
			<span className="bolder">{props.fontSize}</span>
			<span>{props.lineHeight}</span>
		</div>
		<div className="flex flex-column flex-gap-2 py-6">
			<span className={props.classes}>
				{props.children ? (
					props.children
				) : (
					<>
						The observatories used a trajectory measurement system
						called <em>Tral</em>.
					</>
				)}
			</span>
			<Fracture class={props.classes} />
		</div>
	</div>
);

export default TypeExample;
