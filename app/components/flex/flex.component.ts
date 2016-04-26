import { Component, OnInit } from "angular2/core";
import { NgClass, NgFor, NgIf } from "angular2/common";

import { OptionsService } from "../../shared/services/options.service";
import { FlexOptionsComponent } from "../flex-options/flex-options.component";

@Component({
	directives: [ FlexOptionsComponent ],
	providers: [ OptionsService ],
	selector: "flex",
	styleUrls: [ "app/components/flex/flex.component.css" ],
	templateUrl: "app/components/flex/flex.component.html"
})

export class FlexComponent implements OnInit {
	public containerClasses: any = ["container"];
	public elementArray: any = [{}];
	public elementClasses: any = [];
	public flexClasses: any = [];
	public fracturesArray: any = [];
	public fracturesStrings: any = ["container", "dimension", "flex", "flexelement", "format", "margin", "padding"];

	constructor(
		private OptionsService: OptionsService
	) {}

	// TODO: A naïve implementation
	ngOnInit() {
		for(let fracture of this.fracturesStrings) {
			this.OptionsService
				.getOptions(fracture)
				.subscribe(data => {
					this.fracturesArray[fracture] = data;
				});
		}
	}

	// Sets extra elements length
	elementCountUpdate(direction) {
		if(direction)
			return this.elementArray.push({});
		else
			return this.elementArray.splice(1, 1);
	}

}
