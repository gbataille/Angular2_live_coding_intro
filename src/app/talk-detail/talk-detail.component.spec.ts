/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Talk } from '../talk';
import { TalkDetailComponent } from './talk-detail.component';

describe('TalkDetailComponent', () => {
  let component: TalkDetailComponent;
  let fixture: ComponentFixture<TalkDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalkDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalkDetailComponent);
    component = fixture.componentInstance;
    component.talk = new Talk("title", "desc", "author");
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
