// NOTE: Iterator helper for https://github.com/angular/angular/issues/2246

import { Pipe } from "@angular/core";

@Pipe({
	name: "MapToIterable"
})

export class MapToIterable {
	transform(dict: Object) {
		let keyedArray = [];

		for(let key in dict) {
			if(dict.hasOwnProperty(key)) {
				keyedArray.push({
					key: key,
					val: dict[key]
				});
			}
		}

		return keyedArray;
	}
}
