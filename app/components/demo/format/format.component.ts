import { Component } from "angular2/core";
import { NgClass } from "angular2/common";

import { OptionsToggleComponent } from "../../../shared/components/options-toggle/options-toggle.component";

@Component({
	directives: [ OptionsToggleComponent ],
	selector: "format",
	templateUrl: "app/components/demo/format/format.component.html"
})

export class FormatComponent {
	public helpers: boolean;
	public fontSize: number;
	public formatClasses: any;
	public formatOptions: any;

	constructor() {
		this.helpers = false;
		this.fontSize = 16;

		this.formatClasses = [ "format" ];
		this.formatOptions = {
			format: {
				selected: 0,
				options: [
					"format"
				]
			}
		};
	}
}
