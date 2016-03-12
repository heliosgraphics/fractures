import { Component, ViewEncapsulation, enableProdMode } from "angular2/core";
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from "angular2/router";

import { IndexComponent } from "../index/index.component";
import { GridComponent } from "../grid/grid.component";
import { TypoComponent } from "../typo/typo.component";

enableProdMode();

@Component({
	selector: "app",
	templateUrl: "app/app/app.component.html",
	directives: [ ROUTER_DIRECTIVES ],
	styleUrls: [ "app/app/app.component.css" ],
	providers: [ ROUTER_PROVIDERS ],
	encapsulation: ViewEncapsulation.None
})

@RouteConfig([
	{ path: "/", name: "Index", component: IndexComponent, useAsDefault: true },
	{ path: "/grid", name: "Grid", component: GridComponent },
	{ path: "/typo", name: "Typo", component: TypoComponent }
])

export class AppComponent {}
