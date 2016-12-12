import 'rxjs/add/operator/switchMap';

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Talk } from '../talk';
import { TalkService } from '../talk.service';

@Component({
  selector: 'app-talk-detail',
  templateUrl: './talk-detail.component.html',
  styleUrls: ['./talk-detail.component.scss']
})
export class TalkDetailComponent implements OnInit {

  @Input() talk: Talk;

  constructor(private talkService: TalkService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.talkService.getTalk(params['title']))
      .subscribe(talk => {
        this.talk = talk
      })
  }

}
