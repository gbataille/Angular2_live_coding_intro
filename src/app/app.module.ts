import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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
    HttpModule
  ],
  providers: [TalkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
