import React, { useState } from "react";
import Fracture from "../../../../../../../Fracture";
import Tiny from "../../../../../../../Tiny";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import type { SearchResultItemProps } from "./SearcResultItem.types";

const SearchResultItem: React.FC<SearchResultItemProps> = (props) => {
	const [isCopied, setCopied] = useState<boolean>(false);
	const selector: string = props.rule.selectorNice || props.rule.selector;

	const onCopy = (): void => {
		setCopied(true);
		setTimeout(() => setCopied(false), 400);

		navigator.clipboard.writeText(selector);
	};

	return (
		<li
			className={`p-3 flex flex-column flex-gap-2 w-100 cursor-pointer hover:bg-gray-50`}
			onClick={onCopy}
		>
			<div className="flex space-between w-100">
				<Fracture
					colorScale={isCopied ? "green" : "purple"}
					colorTint={isCopied ? 700 : 900}
					class={selector}
				/>
				<a className="fr-search-results__copy flex flex-gap-2 flex-y-center p-2 radius-1 gray-300 hover:gray-600 cursor-pointer">
					<Tiny>{isCopied ? "Copied" : "Copy"}</Tiny>
					<HiOutlineDocumentDuplicate size={16} color="currentColor" />
				</a>
			</div>
			{props.rule.description && (
				<Tiny className="gray-500">{props.rule.description}</Tiny>
			)}
		</li>
	);
};

export default SearchResultItem;
