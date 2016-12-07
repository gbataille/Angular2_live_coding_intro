import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TalkListComponent } from './talk-list/talk-list.component';
import { TalkService } from './talk.service';
import { TalkDetailComponent } from './talk-detail/talk-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TalkListComponent,
    TalkDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: TalkListComponent,
      }, {
        path: 'talks',
        component: TalkListComponent,
      }, {
        path: 'talk/{id}',
        component: TalkDetailComponent
      }
    ])
  ],
  providers: [TalkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
