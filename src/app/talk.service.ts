import { Injectable } from '@angular/core';

import { Talk } from './talk';

@Injectable()
export class TalkService {

  talkList = [
    new Talk('Angular2', 'A introductory session on Angular2. This is a live coding session presenting the most common features of the framework', 'Greg'),
    new Talk('Git advanced', 'An advanced talk on GIT. Discover GIT commands and flow you had not dreamed of yet', 'Greg'),
    new Talk('Flexbox for dummies', "You don't know what flexbox are, yet you are a front end developer? This session is for you", 'Greg'),
    new Talk('Realtime CFF data', 'Return on experience fo the implementation of a big data system based no CFF data', 'Alex'),
    new Talk('Machine learning', 'Come discover what machine learning really is once you remove all the buzz', 'Benoit'),
  ];

  constructor() { }

  getTalks(): Talk[] {
    return this.talkList;
  }
}
