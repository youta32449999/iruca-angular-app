import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Member } from '../member';
import { RoomService } from '../room.service'

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.scss']
})
export class MemberDetailComponent implements OnInit {

  member: Member;

  constructor(
    private route: ActivatedRoute,
    private roomService: RoomService
  ) { }

  ngOnInit() {
    this.getMember();
  }

  private getMember(): void {
    const roomCode = this.route.snapshot.paramMap.get('roomCode');
    /** +を付けることによりnumberに変換 */
    const memberId: number = +this.route.snapshot.paramMap.get('memberId');

    this.roomService.getMember(roomCode, memberId)
      .subscribe(member => this.member = member);
  }
}
