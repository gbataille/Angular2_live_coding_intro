/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TalkListComponent } from './talk-list.component';

describe('TalkListComponent', () => {
  let component: TalkListComponent;
  let fixture: ComponentFixture<TalkListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalkListComponent ]
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
});
