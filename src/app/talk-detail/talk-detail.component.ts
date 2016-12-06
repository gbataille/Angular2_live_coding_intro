import { Component, Input, OnInit } from '@angular/core';

import { Talk } from '../talk';

@Component({
  selector: 'app-talk-detail',
  templateUrl: './talk-detail.component.html',
  styleUrls: ['./talk-detail.component.scss']
})
export class TalkDetailComponent implements OnInit {

  @Input() talk: Talk;

  constructor() { }

  ngOnInit() {
  }

}
