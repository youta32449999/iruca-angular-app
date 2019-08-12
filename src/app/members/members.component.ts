import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Member } from '../member';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  /** メンバー情報をテンプレートで使用する為のプロパティ */
  members: Member[];

  /** メンバー情報を取得する為にRoomServiceを使用 */
  /** pathからパラメータを取得する為にActivatedRouteを使用 */
  constructor(
    private route: ActivatedRoute,  
    private roomService: RoomService
  ) { }

  /** 良きタイミングでルームのメンバー情報を取得する */
  ngOnInit() {
    this.getRoomMembers();
  }

  /** ルームメンバーを取得する */
  private getRoomMembers(): void {
    const roomCode = this.route.snapshot.paramMap.get('roomCode');
    
    this.roomService.getRoomMembers(roomCode)
      .subscribe(members => this.members = members);
  }
}
