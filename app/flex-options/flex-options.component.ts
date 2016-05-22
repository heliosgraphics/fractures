import { Component } from "@angular/core";
import { NgClass, NgFor } from "@angular/common";

import { MapToIterable } from "../shared/pipes/MapToIterable";

@Component({
	inputs: [ "classes", "options" ],
	pipes: [ MapToIterable ],
	selector: "flex-options",
	template: `
		<ul>
			<li
				*ngFor="let set of options | MapToIterable"
				class="mb-1">
				<div class="btn-group clearfix">
					<a
						*ngFor="let class of set.val; let i = index"
						[ngClass]="{ 'active': classes.includes(class) }"
						(click)="toggleClass(class, set.key)"
						class="btn btn-link">{{ class }}</a>
				</div>
			</li>
		</ul>
	`
})

export class FlexOptionsComponent {
	public classes: any;
	public options: any;

	toggleClass(selected, set) {

		// Remove setitems from classes array
		for(let option of this.options[set]) {
			let optionIndex = this.classes.indexOf(option);

			// Matches for set item
			if(optionIndex !== -1) {

				// Removes class
				this.classes.splice(optionIndex, 1);

				// This is a toggle action, exits
				if(selected === option) return false;
			}
		}

		// Add new class to array
		if(selected)
			this.classes.push(selected);
	}
}
