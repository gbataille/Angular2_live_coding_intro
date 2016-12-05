import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


import { Talk } from './talk';

export interface ITalkService {
  getTalks(): Promise<Talk[]>;
}

@Injectable()
export class TalkService implements ITalkService {

  constructor(private http: Http) {}

  getTalks(): Promise<Talk[]> {
    let headers = new Headers();
    headers.append('X-api-key', 'VFrMcPFk6qfWyYmsjUn54To0dwRiPFV8stdoBcx3');
    return this.http.get("https://emzlbpzvf3.execute-api.eu-west-1.amazonaws.com/prod/getTalksDemo", {
      headers: headers
    })
      .toPromise()
      .then(response => response.json().talks as Talk[])
      .catch(error => console.log(error));
  }
}
