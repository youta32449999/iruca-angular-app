import { Component, OnInit } from '@angular/core';
/** パラメータ付きルートの情報を取り出す為にimport */
import { ActivatedRoute } from '@angular/router';

import { Room } from '../room';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  /** templete内で使用する為にプロパティを定義 */
  room: Room;

  
  constructor(
    /** パラメータ付きルートの情報を取り出す為にconstructorへ注入 */
    private route: ActivatedRoute,

    /** Component内でRoomServiceを使用する為にconstructorへ注入する */
    private roomService: RoomService
    ) { }

      /** コンポーネント作成時の良きタイミングで実行してroom情報を取得する */
  ngOnInit() {
    this.getRoom();
  }

  /** Room情報を取得してroomプロパティへ入れるメソッド*/
  private getRoom(): void {
    const roomCode = this.route.snapshot.paramMap.get('roomCode');
    this.roomService.getRoom(roomCode)
    .subscribe(room => this.room = room);
  }

}
