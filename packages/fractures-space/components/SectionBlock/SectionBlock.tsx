import type { SectionBlockProps } from "./SectionBlock.types";

const SectionBlock: React.FC<SectionBlockProps> = (props) => (
	<section className={`${props.className} flex flex-column flex-gap-16`}>
		<h2 className="h2 mb-8">{props.title}</h2>
		{props.children}
	</section>
);

export default SectionBlock;
