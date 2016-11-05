import { Component, enableProdMode, ViewEncapsulation } from "@angular/core";

import blocks from "../blocks";
import meta from "../../dist/fractures.meta";

enableProdMode();

@Component({
	selector: "app",
	templateUrl: "app/app/app.component.html",
	encapsulation: ViewEncapsulation.None,
	styleUrls: ["app/main.css"]
})

export class AppComponent {
	public meta: any = meta;
	public fracturesArray: any = blocks;
}
