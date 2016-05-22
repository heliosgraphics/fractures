import { Component } from "@angular/core";
import { NgFor } from "@angular/common";

import { MapToIterable } from "../../shared/pipes/MapToIterable";
import blocks from "../../shared/data/blocks";

@Component({
	selector: "docs",
	pipes: [ MapToIterable ],
	templateUrl: "app/components/docs/docs.component.html"
})

export class DocsComponent {
	public fracturesArray: any = blocks;
}
