import { Component } from "angular2/core";
import { NgFor } from "angular2/common";

import { MapToIterable } from "../../shared/pipes/MapToIterable";
import blocks from "/app/shared/data/blocks.json";
import meta from "/dist/fractures.meta.js";

@Component({
	selector: "docs",
	pipes: [ MapToIterable ],
	templateUrl: "app/components/docs/docs.component.html"
})

export class DocsComponent {
	public fracturesArray: any = blocks;
	public meta: any = meta.meta;
}
