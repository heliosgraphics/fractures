import { Component } from "angular2/core";
import { NgClass } from "angular2/common";

@Component({
	selector: "typo",
	templateUrl: "app/components/typo/typo.component.html",
	styleUrls: [ "app/components/typo/typo.component.css" ]
})

export class TypoComponent {
	public helpers: boolean;
	public fontSize: number;
	public format: boolean;

	constructor() {
		this.helpers = false;
		this.fontSize = 16;
		this.format = true;
	}
}
