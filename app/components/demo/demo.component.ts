import { Component, OnInit } from "angular2/core";
import { NgClass, NgFor, NgIf } from "angular2/common";

import { OptionsService } from "../../shared/services/options.service";
import { OptionsToggleComponent } from "../../shared/components/options-toggle/options-toggle.component";

@Component({
	directives: [ OptionsToggleComponent ],
	providers: [ OptionsService ],
	selector: "demo",
	styleUrls: [ "app/components/demo/demo.component.css" ],
	templateUrl: "app/components/demo/demo.component.html"
})

export class DemoComponent implements OnInit {
	public boxClasses: any;
	public containerClasses: any;
	public elementArray: any;
	public elementClasses: any;
	public fontSize: number;
	public formatClasses: any;
	public gridClasses: any;

	public optionsStrings: any = [ "container", "margin", "padding", "grid", "gridelement", "format" ];
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
		this.containerClasses = [];
		this.elementArray = [{}];
		this.elementClasses = [];
		this.gridClasses = [];
		this.formatClasses = [ "format" ];
		this.fontSize = 16;
	}

	// Set extra elements length
	elementCountUpdate(direction) {
		if(direction)
			return this.elementArray.push({});
		else
			return this.elementArray.splice(1, 1);
	}

}
