/** ルーム情報を管理するサービス */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Room } from './room';

/** POST, PUT, DELETEリクエストを送る際に必要 */
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private readonly baseUrl = 'https://iruca.co/api/rooms/';

  constructor(private http: HttpClient) { }

  /** roomIdはURLのパラメータから読み取る */
  getRoom(roomCode: string): Observable<Room> {
    const requestUrl = this.baseUrl + roomCode;

    /** get<Room>としないと返り値の型はObjectになるので注意 */
    const result = this.http.get<Room>(requestUrl)
      .pipe(
        tap(_ => console.log("get room info")),
        catchError(this.handleError)
      );

    return result;
  }

  /** TODO:handleErrorの型が間違ってるので修正*/
  /** Roomの取得が失敗した時に実行する関数を返す */
  private handleError() {
    
    /** Roomの取得が失敗した時にfuncが実行される */
    const func = (error: any) => {
      console.log("getRoom is failed");
      let room = new Room();
      return of(room as Room);
    };

    return func;
  }
}
