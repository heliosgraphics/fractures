import styled from "styled-components";
import type { PreProps } from "./Pre.types";

const PreMarkup: React.FC<PreProps> = (props) => {
	const getSyntax = (line: string): { __html: string } => ({
		__html: line,
	});

	return (
		<pre className={`${props.className} flex flex-column radius-3 mono`}>
			{props.code.map((line, key) => (
				<code key={key} dangerouslySetInnerHTML={getSyntax(line)} />
			))}
		</pre>
	);
};

const Pre: React.FC<PreProps> = styled(PreMarkup)`
	height: calc(
		var(--line-height-p) * ${(props) => props.code.length} +
			(2 * var(--box-8))
	);
	min-width: 480px;
	overflow: hidden;
	padding: var(--box-8) var(--box-16);

	background: linear-gradient(
		to right,
		var(--gray-100),
		var(--gray-100) var(--box-16),
		var(--gray-50) calc(var(--box-16) + 2px),
		var(--gray-50) 100%
	);

	counter-reset: line;
	font-size: var(--font-size-small);
	line-height: var(--line-height-p);
	tab-size: 4;

	code {
		position: relative;

		display: inline-flex;
		padding: 0 var(--box-8);

		color: var(--gray-700);
	}

	code:before {
		position: absolute;
		left: calc(var(--box-16) * -1);

		width: var(--box-16);

		color: var(--gray-500);
		counter-increment: line;
		content: counter(line);

		user-select: none;
		text-align: center;
	}

	mark {
		background-color: transparent;
		color: var(--purple-500);
	}
`;

export default Pre;
