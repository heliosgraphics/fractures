import React from "react";
import styles from "./SearchResults.module.css";
import SearchResultItem from "./components/SearchResultItem";
import type { SearchResultsProps } from "./SearchResults.types";

const SearchResults: React.FC<SearchResultsProps> = (props) => {
	const hasResult: boolean = props.isVisible && props.results?.length > 0;

	if (!hasResult) return null;

	return (
		<div className={`${styles.searchResults} fixed z-50 top-32 p-2`}>
			<ol className="radius-3 bg-gray-0">
				{props.results.map((rule, key) => (
					<SearchResultItem key={key + rule.selector} rule={rule} />
				))}
			</ol>
		</div>
	);
};

export default SearchResults;
