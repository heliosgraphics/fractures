import { Component, enableProdMode, ViewEncapsulation } from "@angular/core";

import { DocsComponent } from "../docs/docs.component";
import { IndexComponent } from "../index/index.component";
import { FlexComponent } from "../flex/flex.component";

enableProdMode();

@Component({
	selector: "app",
	directives: [ DocsComponent, IndexComponent, FlexComponent ],
	styleUrls: [
		"app/shared/styles/body.css",
		"app/shared/styles/btn.css"
	],
	encapsulation: ViewEncapsulation.None,
	template: `
		<main class="main">
			<index></index>
			<flex></flex>
			<docs></docs>
		</main>
	`
})

export class AppComponent {}
