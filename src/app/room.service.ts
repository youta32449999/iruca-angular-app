/** ルーム情報を管理するサービス */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Room } from './room';
import { Member } from './member';

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

  /** ルーム情報を取得する
   * roomCodeはURLのパラメータから読み取る
   */
  getRoom(roomCode: string): Observable<Room> {
    const requestUrl = this.baseUrl + roomCode;

    /** get<Room>としないと返り値の型はObjectになるので注意 */
    const result = this.http.get<Room>(requestUrl)
      .pipe(
        /** ここに操作ログを入れる*/
        catchError(this.handleError)
      );
      
    return result;
  }

  /** ルーム内のメンバー情報を取得する
   * roomCodeはURLのパラメータから
  */
  getRoomMembers(roomCode: string): Observable<Member[]> {
    const requestUrl = this.baseUrl + roomCode + '/members';

    const result = this.http.get<Member[]>(requestUrl)
      .pipe(
        /** ここに操作ログを入れる*/
        catchError(this.handleError)
      );

      return result;
  }

  /** メンバーの詳細情報を取得する
   * @param roomCode
   * @param memberId
   */
  getMember(roomCode: string, memberId: number): Observable<Member> {
    const requestUrl = this.baseUrl + roomCode + '/members' + memberId;

    const result = this.http.get<Member>(requestUrl)
      .pipe(
        /** ここに操作ログを入れる */
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
