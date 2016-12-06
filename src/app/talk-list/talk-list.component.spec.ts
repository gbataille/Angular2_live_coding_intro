/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpModule } from '@angular/http';

import { Talk } from '../talk';
import { ITalkService, TalkService } from '../talk.service';
import { MockTalkService } from '../talk.service.stub';
import { TalkListComponent } from './talk-list.component';
import { TalkDetailComponent } from '../talk-detail/talk-detail.component';

describe('TalkListComponent', () => {
  let component: TalkListComponent;
  let fixture: ComponentFixture<TalkListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({ declarations: [ TalkListComponent, TalkDetailComponent ],
      providers: [ {provide: TalkService, useClass: MockTalkService} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a talk list with several elements', () => {
    fixture.whenStable().then(() => {
      let de = fixture.debugElement.query(By.css('.talk-list-container'));
      let el = de.nativeElement;
      expect(el).not.toBeNull();

      let children = de.queryAll(By.css('.talk-item'));
      expect(children.length).toEqual(4);
      for (let child of children) {
        let title = child.query(By.css('.mdl-card__title'))
        expect(title.nativeElement.startWith("Mock"));
      }
    });
  });
});

