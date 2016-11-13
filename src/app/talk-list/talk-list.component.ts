import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-talk-list',
  templateUrl: './talk-list.component.html',
  styleUrls: ['./talk-list.component.scss']
})
export class TalkListComponent implements OnInit {

  private talkList: string[];

  constructor() {
    this.talkList = ['Angular2', 'Git advanced', 'Les flexbox pour les nuls', 'Realtime CFF data',
      'Machine learning'];
  }

  ngOnInit() {
  }

}
