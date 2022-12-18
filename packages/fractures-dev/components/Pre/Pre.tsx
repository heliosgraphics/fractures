import styles from "./Pre.module.css";
import type { PreProps } from "./Pre.types";

const Pre: React.FC<PreProps> = (props) => {
	const getSyntax = (line: string): { __html: string } => ({
		__html: line,
	});

	return (
		<pre
			className={`${styles.pre} flex flex-column radius-3 mono overflow-scroll`}
			style={{
				height: `calc(
          var(--line-height-p) * ${props.code.length} + (2 * var(--box-8))
        )`,
			}}
		>
			{props.code.map((line, key) => (
				<code key={key} dangerouslySetInnerHTML={getSyntax(line)} />
			))}
		</pre>
	);
};

export default Pre;
