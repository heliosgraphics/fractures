import { Component } from "angular2/core";
import { NgClass } from "angular2/common";

import { OptionsToggleComponent } from "../../shared/components/options-toggle/options-toggle.component";

@Component({
	directives: [ OptionsToggleComponent ],
	selector: "typo",
	templateUrl: "app/components/typo/typo.component.html",
	styleUrls: [ "app/components/typo/typo.component.css" ]
})

export class TypoComponent {
	public helpers: boolean;
	public fontSize: number;
	public formatClasses: any;
	public formatOptions: any;

	constructor() {
		this.helpers = false;
		this.fontSize = 16;

		this.formatClasses = [];
		this.formatOptions = {
			format: {
				selected: false,
				options: [
					"format"
				]
			}
		};
	}
}
