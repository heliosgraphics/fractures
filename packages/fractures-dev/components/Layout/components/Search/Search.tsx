import React, { useRef, useEffect, useState } from "react";
import { fractureFiles } from "@fractures/library";
import { HiSearch, HiX } from "react-icons/hi";
import classNames from "@sindresorhus/class-names";
import SearchResults from "./components/SearchResults";
import styles from "./Search.module.css";
import type { FractureRuleType } from "@fractures/library/types/meta";
import type { SearchProps } from "./Search.types";

const FRACTURE_RULES: Array<FractureRuleType> = Object.values(fractureFiles)
	.flatMap((rule) => rule)
	.filter((rule) => !Boolean(rule.isHidden));

const Search: React.FC<SearchProps> = (props) => {
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

		globalThis?.addEventListener("keydown", handleKeys);

		return () => {
			globalThis?.removeEventListener("keydown", handleKeys);
		};
	}, []);

	const resetSearch = (): void => {
		setResults([]);
		setValue("");
		setFocus(false);

		return inputRef?.current.blur();
	};

	const searchRule = (value: string): void => {
		const results: Array<FractureRuleType> = FRACTURE_RULES.filter((rule) => {
			return rule.selector.includes(value) || rule.description?.includes(value);
		});

		return setResults(results);
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

	const inputClasses: string = classNames(
		`${styles.search__input} radius-2 p-4`,
		{
			[`${styles.search__inputFocus}`]: hasFocus,
		}
	);

	return (
		<li className={`${styles.search} grow-1 top-0 relative`}>
			<div className="absolute top-6 ml-5 no-pointer-events">
				<HiSearch size={16} color={iconColor} />
			</div>
			{!!value && (
				<div
					className="absolute top-5 right-5 cursor-pointer"
					onClick={resetSearch}
				>
					<HiX size={22} color="var(--gray-300)" />
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
		</li>
	);
};

export default Search;
