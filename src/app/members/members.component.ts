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

  /** 追加するメンバーを表すプロパティ */
  addingMember: Member;

  /** ステータスリストをテンプレートで表示する為のプロパティ */
  statuses: string[];

  /** メンバー情報を取得する為にRoomServiceを使用 */
  /** pathからパラメータを取得する為にActivatedRouteを使用 */
  constructor(
    private route: ActivatedRoute,  
    private roomService: RoomService
  ) { }

  /** 良きタイミングでルームのメンバー情報を取得する */
  ngOnInit() {
    this.getRoomMembers();
    this.getStatuses();
    
  }

  /** ルームメンバーを取得する */
  private getRoomMembers(): void {
    const roomCode = this.route.snapshot.paramMap.get('roomCode');
    
    this.roomService.getRoomMembers(roomCode)
      .subscribe(members => this.members = members);
  }

  /** ステータスを取得する */
  getStatuses(): void {
    const roomCode = this.route.snapshot.paramMap.get('roomCode');

    this.roomService.getStatuses(roomCode)
      .subscribe(statuses => {
        this.statuses = statuses;

        /** 追加メンバーのステータスリストの初期値を設定する
         * ここでやるべきなのか謎
         */
        this.addingMember = new Member();
        if (this.statuses.length > 0) {
          this.addingMember.status = this.statuses[0];
        }
      });
    
  }

  /** メンバーを追加する */
  addMember(): void {
    const roomCode = this.route.snapshot.paramMap.get('roomCode');

    this.roomService.addMember(roomCode, this.addingMember)
      .subscribe();

    this.getRoomMembers();
    
    /** 追加が完了したら入力項目をクリアする */
    this.addingMember = new Member();
    if (this.statuses.length > 0) {
      this.addingMember.status = this.statuses[0];
    }
  }

  
}
