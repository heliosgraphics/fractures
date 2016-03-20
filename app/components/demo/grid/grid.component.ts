import { Component, OnInit } from "angular2/core";
import { NgClass, NgFor, NgIf } from "angular2/common";

import { OptionsService } from "../../../shared/services/options.service";
import { OptionsToggleComponent } from "../../../shared/components/options-toggle/options-toggle.component";

@Component({
	directives: [ OptionsToggleComponent ],
	providers: [ OptionsService ],
	selector: "grid",
	styleUrls: [ "app/components/demo/grid/grid.component.css" ],
	templateUrl: "app/components/demo/grid/grid.component.html"
})

export class GridComponent implements OnInit {
	public boxClasses: any;
	public elementArray: any;
	public elementClasses: any;
	public gridClasses: any;

	public optionsStrings: any = [ "box", "grid", "gridelement" ];
	public optionsArray: any = [];

	// TODO: A naïve implementation
	ngOnInit() {
		for(let x of this.optionsStrings) {
			this.OptionsService
				.getOptions(x)
				.subscribe(data => {
					this.optionsArray[x] = data;
				});
		}
	}

	constructor(private OptionsService: OptionsService) {
		this.boxClasses = [];
		this.elementArray = [{}];
		this.elementClasses = [];
		this.gridClasses = [];
	}

	// Set extra elements length
	elementCountUpdate(direction) {
		if(direction)
			return this.elementArray.push({});
		else
			return this.elementArray.splice(1, 1);
	}

}
