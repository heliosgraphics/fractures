import type { SectionBlockProps } from "./SectionBlock.types";

const SectionBlock: React.FC<SectionBlockProps> = (props) => (
	<section className={`${props.className} flex flex-column flex-gap-16`}>
		<div className='mb-8 flex flex-gap-4 flex-y-center'>
			<h2 className="h2">{props.title}</h2>
			{props.isExperimental && <span className='small'>Experimental</span>}
		</div>
		{props.children}
	</section>
);

export default SectionBlock;
