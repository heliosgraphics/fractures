import { Component } from "angular2/core";
import { NgFor } from "angular2/common";

import { OptionsService } from "../../shared/services/options.service";
import { MapToIterable } from "../../shared/pipes/MapToIterable";

@Component({
	selector: "docs",
	pipes: [ MapToIterable ],
	styleUrls: ["app/components/docs/docs.component.css"],
	templateUrl: "app/components/docs/docs.component.html"
})

export class DocsComponent {
	public fracturesArray: any = [];

	constructor(
		private OptionsService: OptionsService
	) {
		this.fracturesArray = this.OptionsService.blocks;
		console.log(this.fracturesArray);
	}
}
