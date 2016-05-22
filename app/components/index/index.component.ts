import { Component } from "@angular/core";

import meta from "../../../dist/fractures.meta";

@Component({
	selector: "index",
	templateUrl: "app/components/index/index.component.html"
})

export class IndexComponent {
	public meta: any = meta;
}
