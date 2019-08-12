import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** RommCompoonentを表示するpathを設定する為にimportする */
import { RoomComponent } from './room/room.component';

const routes: Routes = [
  /** コンポーネントのpathを設定する*/
  { path: ':roomCode', component: RoomComponent},
  { path: '', redirectTo: 'sample', pathMatch: 'full'},
  // { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
