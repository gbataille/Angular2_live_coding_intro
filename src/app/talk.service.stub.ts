import { ITalkService } from './talk.service';
import { Talk } from './talk';

let talkList = [
  new Talk('Mock Angular2', 'A introductory session on Angular2. This is a live coding session presenting the most common features of the framework', 'Greg'),
  new Talk('Mock Git advanced', 'An advanced talk on GIT. Discover GIT commands and flow you had not dreamed of yet', 'Greg'),
  new Talk('Mock Flexbox for dummies', "You don't know what flexbox are, yet you are a front end developer? This session is for you", 'Greg'),
  new Talk('Mock Realtime CFF data', 'Return on experience fo the implementation of a big data system based no CFF data', 'Alex'),
];

export class MockTalkService implements ITalkService {
  getTalks(): Promise<Talk[]> {
    return Promise.resolve(talkList);
  }
}
