import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { FlexComponent } from "../flex/flex.component";
import { FlexOptionsComponent } from "../flex-options/flex-options.component";
import { MapToIterable } from "../shared/pipes/MapToIterable";

@NgModule({
	imports: [ BrowserModule ],
	declarations: [ AppComponent, FlexComponent, FlexOptionsComponent, MapToIterable],
	bootstrap: [ AppComponent ]
})

export class AppModule {}
