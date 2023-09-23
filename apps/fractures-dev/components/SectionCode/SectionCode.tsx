import Pre from "../Pre";
import type { SectionCodeProps } from "./SectionCode.types";

const SectionCode: React.FC<SectionCodeProps> = (props) => (
	<div className="flex flex-gap-12 lg:flex-column lg:flex-gap-8">
		<div className="flex flex-gap-4 flex-column lg:wp-100 wp-40">
			<h3 className="h5">{props.title}</h3>
			{props.children}
		</div>
		<Pre code={props.code} className="wp-100" />
	</div>
);

export default SectionCode;
