import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** RommCompoonentを表示するpathを設定する為にimportする */
import { RoomComponent } from './room/room.component';
import { MembersComponent } from './members/members.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';

const routes: Routes = [
  /** コンポーネントのpathを設定する*/
  { path: ':roomCode', component: RoomComponent, children: [
    { path: '', component: MembersComponent},
    { path: ':memberId', component: MemberDetailComponent}
  ]},
  // { path: ':roomCode/:memberId', component: MemberDetailComponent},
  { path: '', redirectTo: 'sample', pathMatch: 'full'},
  // { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
