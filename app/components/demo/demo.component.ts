import { Component } from "angular2/core";
import { NgClass, NgFor, NgIf } from "angular2/common";

import { FormatComponent } from "./format/format.component";
import { GridComponent } from "./grid/grid.component";

@Component({
	directives: [ FormatComponent, GridComponent ],
	selector: "demo",
	templateUrl: "app/components/demo/demo.component.html"
})

export class DemoComponent {}
