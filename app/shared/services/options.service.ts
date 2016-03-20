import { Injectable } from "angular2/core";
import { Http, Response } from "angular2/http";
import { Observable } from "rxjs/Rx";

@Injectable()
export class OptionsService {

	constructor(private http: Http) {
		this.http = http;
	}

	getOptions(block) {
		return this.http
			.get(`app/shared/data/${ block }.json`)
			.map((res:Response) => res.json());
	}
}
