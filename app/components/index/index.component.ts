import { Component } from "angular2/core";
import { ROUTER_DIRECTIVES } from "angular2/router";

@Component({
	selector: "index",
	templateUrl: "app/components/index/index.component.html",
	styleUrls: [ "app/components/index/index.component.css" ],
	directives: [ ROUTER_DIRECTIVES ]
})

export class IndexComponent {}
