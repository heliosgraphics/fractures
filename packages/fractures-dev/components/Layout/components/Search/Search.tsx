import React, { useRef, useEffect, useState } from "react";
import { fractureFiles } from "fractures-library/src/index";
import { HiSearch, HiX } from "react-icons/hi";
import classNames from "@sindresorhus/class-names";
import SearchResults from "./components/SearchResults";
import styled from "styled-components";
import type { FractureRuleType } from "fractures-library/types/css-rules";
import type { SearchProps } from "./Search.types";

const FRACTURE_RULES: Array<FractureRuleType> = Object.values(fractureFiles)
	.flatMap((rule) => rule)
	.filter((rule) => !Boolean(rule.isHidden));

const SearchMarkup: React.FC<SearchProps> = (props) => {
	const [value, setValue] = useState<string>("");
	const [hasFocus, setFocus] = useState<boolean>(false);
	const [results, setResults] = useState<Array<FractureRuleType>>([]);
	const isVisible: boolean = !!value;
	const inputRef = useRef<HTMLInputElement | null>(null);

	useEffect(() => {
		const handleKeys = (event) => {
			const isEsc: boolean = event.keyCode === 27;

			if (isEsc) {
				resetSearch();
			}
		};

		window?.addEventListener("keydown", handleKeys);

		return () => {
			window?.removeEventListener("keydown", handleKeys);
		};
	}, []);

	const resetSearch = () => {
		setResults([]);
		setValue("");
		setFocus(false);

		inputRef?.current.blur();
	};

	const searchRule = (value: string) => {
		const results: Array<FractureRuleType> = FRACTURE_RULES.filter((rule) => {
			return rule.selector.includes(value);
		});

		setResults(results);
	};

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newValue: string = event.target.value;

		searchRule(newValue);
		setValue(newValue);
	};

	const onFocus = (): void => setFocus(true);
	const onBlur = (): void => {
		const shouldDropFocus: boolean = results.length === 0 || !value;

		shouldDropFocus && setFocus(false);
	};

	const iconColor = hasFocus ? "var(--gray-500)" : "var(--gray-300)";

	const inputClasses: string = classNames("fr-search__input radius-2 p-4", {
		"fr-search__input--focus": hasFocus,
	});

	return (
		<div className={`${props.className} grow-1 top-0 relative`}>
			<div className="absolute top-6 ml-5 no-events">
				<HiSearch size={16} color={iconColor} />
			</div>
			{!!value && (
				<div
					className="absolute top-6 right-4 cursor-pointer"
					onClick={resetSearch}
				>
					<HiX size={16} color="var(--gray-500)" />
				</div>
			)}
			<input
				value={value}
				ref={inputRef}
				onChange={onChange}
				onFocus={onFocus}
				onBlur={onBlur}
				placeholder="Find a selector"
				className={inputClasses}
			/>
			<SearchResults results={results} isVisible={isVisible} />
		</div>
	);
};

const Search: React.FC<SearchProps> = styled(SearchMarkup)`
	width: calc(280px - 32px);

	.fr-search__input {
		height: 40px;
		padding-left: 32px;
		padding-right: 32px;
		width: 100%;

		background-color: transparent;
		border: 1px solid transparent;
		color: var(--gray-700);
		outline: none;
		transition: all 120ms ease-in-out;

		font-family: var(--font-family-sans);
		font-size: var(--font-size-small);
	}

	.fr-search__input::placeholder {
		color: var(--gray-300);
	}

	.fr-search__input--focus,
	.fr-search__input:active,
	.fr-search__input:focus {
		border-color: var(--purple-500);
		box-shadow: 0 0 0 1px var(--purple-500);
	}
`;

export default Search;
