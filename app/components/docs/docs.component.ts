import { Component } from "@angular/core";
import { NgFor } from "@angular/common";

import { MapToIterable } from "../../shared/pipes/MapToIterable";
import blocks from "../../shared/data/blocks";
import meta from "../../../dist/fractures.meta";

@Component({
	selector: "docs",
	pipes: [ MapToIterable ],
	templateUrl: "app/components/docs/docs.component.html"
})

export class DocsComponent {
	public fracturesArray: any = blocks;
	public meta: any = meta;
}
