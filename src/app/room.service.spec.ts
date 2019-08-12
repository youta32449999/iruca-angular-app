import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { RoomService } from './room.service';


describe('RoomService', () => {
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [HttpClient]});
    http = TestBed.get(HttpClient);
  })

  const roomService = new RoomService(http);
  roomService.getRoom('sample').subscribe(room => console.log(room.name));

  it('getRoom() should get room object',() => {
    const service = new RoomService(http);
  });
});
