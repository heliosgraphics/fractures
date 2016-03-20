import { bootstrap } from "angular2/platform/browser"
import { AppComponent } from "./components/app/app.component"
import { HTTP_PROVIDERS } from "angular2/http";

import "rxjs/add/operator/map";

bootstrap(AppComponent, [HTTP_PROVIDERS]);
