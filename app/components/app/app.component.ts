import { Component, enableProdMode, ViewEncapsulation } from "@angular/core";

import { FlexComponent } from "../flex/flex.component";
import { MapToIterable } from "../../shared/pipes/MapToIterable";

import blocks from "../../shared/data/blocks";
import meta from "../../../dist/fractures.meta";

enableProdMode();

@Component({
	selector: "app",
	directives: [ FlexComponent ],
	styleUrls: [
		"app/shared/styles/body.css",
		"app/shared/styles/btn.css"
	],
	pipes: [ MapToIterable ],
	encapsulation: ViewEncapsulation.None,
	templateUrl: "app/components/app/app.component.html"
})

export class AppComponent {
	public meta: any = meta;
	public fracturesArray: any = blocks;
}
