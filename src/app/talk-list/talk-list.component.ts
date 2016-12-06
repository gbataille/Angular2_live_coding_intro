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
  private selectedTalk: Talk;

  constructor(private talkService: TalkService) {
  }

  ngOnInit() {
    this.talkService.getTalks()
      .then(talks => this.talkList = talks);
  }

  onSelect(talk: Talk) {
    this.selectedTalk = talk;
  }

}
