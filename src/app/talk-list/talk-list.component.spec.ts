/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TalkService } from '../talk.service';
import { TalkListComponent } from './talk-list.component';

describe('TalkListComponent', () => {
  let component: TalkListComponent;
  let fixture: ComponentFixture<TalkListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalkListComponent ],
      providers: [ TalkService ]
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
    let de = fixture.debugElement.query(By.css('.talk-list-container'));
    let el = de.nativeElement;
    expect(el).not.toBeNull();

    let children = de.queryAll(By.css('.talk-item'));
    expect(children.length).toEqual(5);
  });
});
