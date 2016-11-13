import { Component, OnInit } from '@angular/core';
import { TalkService } from '../talk.service';
import { Talk } from '../talk';

@Component({
  selector: 'app-talk-list',
  templateUrl: './talk-list.component.html',
  styleUrls: ['./talk-list.component.scss']
})
export class TalkListComponent implements OnInit {

  private talkList: Talk[];

  constructor(private talkService: TalkService) {
  }

  ngOnInit() {
    this.talkList = this.talkService.getTalks();
  }

}
