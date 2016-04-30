import { Injectable } from "angular2/core";
import { Http, Response } from "angular2/http";
import { Observable } from "rxjs/Rx";

@Injectable()
export class OptionsService {
	public blocks: any = [];

	constructor(private http: Http) {
		this.http = http;
	}

	getOptions() {
		return this.http
			.get(`app/shared/data/blocks.json`)
			.map((res:Response) => res.json());
	}
}
