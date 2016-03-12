import { Component, enableProdMode, ViewEncapsulation } from "angular2/core";
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from "angular2/router";

import { IndexComponent } from "../index/index.component";
import { GridComponent } from "../grid/grid.component";
import { TypoComponent } from "../typo/typo.component";

enableProdMode();

@Component({
	selector: "app",
	templateUrl: "app/components/app/app.component.html",
	directives: [ ROUTER_DIRECTIVES ],
	styleUrls: [
		"app/components/app/app.component.css",
		"app/shared/styles/body.css",
		"app/shared/styles/btn.css",
		"app/shared/styles/output.css"
	],
	providers: [ ROUTER_PROVIDERS ],
	encapsulation: ViewEncapsulation.None
})

@RouteConfig([
	{ path: "/", name: "Index", component: IndexComponent, useAsDefault: true },
	{ path: "/grid", name: "Grid", component: GridComponent },
	{ path: "/typo", name: "Typo", component: TypoComponent }
])

export class AppComponent {}
