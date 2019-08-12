import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/** HttpClientを利用可能にする為にimport */
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomComponent } from './room/room.component';
import { MembersComponent } from './members/members.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    MembersComponent,
    MemberDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule /** HttpClientを利用可能にする為にimport */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }