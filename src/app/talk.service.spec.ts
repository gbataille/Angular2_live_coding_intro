/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TalkService } from './talk.service';

describe('Service: Talk', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TalkService]
    });
  });

  it('should ...', inject([TalkService], (service: TalkService) => {
    expect(service).toBeTruthy();
  }));
});
