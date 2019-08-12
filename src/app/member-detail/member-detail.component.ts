import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Member } from '../member';
import { RoomService } from '../room.service'

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.scss']
})
export class MemberDetailComponent implements OnInit {

  member: Member;
  statuses: string[];

  constructor(
    private route: ActivatedRoute,
    private roomService: RoomService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getMember();
    this.getStatuses();
  }

  /** メンバー情報を取得 */
  private getMember(): void {
    /** .parentを付けて一つ前のパラメータを取得 */
    const roomCode = this.route.snapshot.parent.paramMap.get('roomCode');

    /** +を付けることによりnumberに変換 */
    const memberId = +this.route.snapshot.paramMap.get('memberId');

    this.roomService.getMember(roomCode, memberId)
      .subscribe(member => this.member = member);
  }

  /** ステータスリストを取得 */
  getStatuses(): void {
    /** .parentを付けて一つ前のパラメータを取得 */
    const roomCode = this.route.snapshot.parent.paramMap.get('roomCode');

    this.roomService.getStatuses(roomCode)
      .subscribe(statuses => this.statuses = statuses);
  }

  /** メンバー情報をアップデート */
  updateMember(): void {
    /** .parentを付けて一つ前のパラメータを取得 */
    const roomCode = this.route.snapshot.parent.paramMap.get('roomCode');

    /** +を付けることによりnumberに変換 */
    const memberId = +this.route.snapshot.paramMap.get('memberId');

    /** アップデート後はリスト画面へ戻る */
    this.roomService.updateMember(roomCode, memberId, this.member)
      .subscribe(() => this.goBack());

  }

  /** メンバー情報を削除 */
  deleteMember(): void {
    /** .parentを付けて一つ前のパラメータを取得 */
    const roomCode = this.route.snapshot.parent.paramMap.get('roomCode');

    /** +を付けることによりnumberに変換 */
    const memberId = +this.route.snapshot.paramMap.get('memberId');

    /** 削除後はリスト画面へ戻る */
    this.roomService.deleteMember(roomCode, memberId)
      .subscribe(() => this.goBack());
  }
  
  /** 前の画面へ戻る */
  goBack(): void {
    this.location.back();
  }
}
