import { Component, enableProdMode, ViewEncapsulation } from "angular2/core";

import { DocsComponent } from "../docs/docs.component";
import { IndexComponent } from "../index/index.component";
import { FlexComponent } from "../flex/flex.component";

enableProdMode();

@Component({
	selector: "app",
	templateUrl: "app/components/app/app.component.html",
	directives: [ DocsComponent, IndexComponent, FlexComponent ],
	styleUrls: [
		"app/shared/styles/body.css",
		"app/shared/styles/btn.css"
	],
	encapsulation: ViewEncapsulation.None
})

export class AppComponent {}
