import React, { useState } from "react";
import styled from "styled-components";
import SearchResultItem from "./components/SearchResultItem";
import type { SearchResultsProps } from "./SearchResults.types";

const SearchResultsMarkup: React.FC<SearchResultsProps> = (props) => {
	const hasResult: boolean = props.isVisible && props.results?.length > 0;

	if (!hasResult) return null;

	return (
		<div className={`${props.className} fixed z-50 top-32 p-2`}>
			<ol className="radius-3 bg-gray-0">
				{props.results.map((rule, key) => (
					<SearchResultItem key={key + rule.selector} rule={rule} />
				))}
			</ol>
		</div>
	);
};

const SearchResults = styled(SearchResultsMarkup)`
	width: 320px;

	animation: 160ms 1 alternate fadein;

	ol {
		max-height: 460px;
		overflow-y: scroll;

		box-shadow: rgba(0, 0, 0, 0.01) 0px 1px 1px, rgba(0, 0, 0, 0.03) 0px 1px 2px,
			rgba(0, 0, 0, 0.1) 0px 1px 8px;
	}

	ol li {
		transition: background-color 60ms ease-in-out;
	}

	ol > li:not(:last-child) {
		border-bottom: 1px solid var(--gray-100);
	}

	ol::-webkit-scrollbar {
		height: 4px;
		width: 4px;
	}

	ol::-webkit-scrollbar-thumb {
		background-color: var(--purple-700);
		border-radius: 2px 0 0 2px;
	}

	ol::-webkit-scrollbar-track {
		background-color: var(--gray-100);
		border-left: 1px solid var(--gray-200);
	}

	ol::-webkit-scrollbar-thumb:hover {
		background-color: var(--gray-500);
	}

	ol::-webkit-scrollbar-track {
		border-left: 0;
	}

	.fr-search-results__copy {
		display: none;
	}

	ol li:hover .fr-search-results__copy {
		display: flex;
	}

	@keyframes fadein {
		from {
			transform: translateY(-16px);
		}

		to {
			transform: translateY(0);
		}
	}
`;

export default SearchResults;
