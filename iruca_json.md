## ルーム情報取得
GET https://iruca.co/api/rooms/sample

### レスポンス
```json
{
    "id":1765,
    "code":"sample",
    "name":"サンプルルーム",
    "note":"ルームの説明",
    "statuses":["在席","取込中","離席","外出","休暇"],
    "created_at":"2017-11-11T02:30:28.000Z",
    "updated_at":"2017-11-11T02:32:26.000Z",
    "status_updated_at":"2019-08-09T09:48:48.000Z"
}
```

## メンバーリスト取得
GET https://iruca.co/api/rooms/sample/members

### レスポンス
```json
[
    {
        "id":22165,
        "room_id":1765,
        "name":"白川",
        "status":"在席",
        "message":"今日は早めに帰る予定",
        "created_at":"2019-08-11T23:30:10.000Z",
        "updated_at":"2019-08-11T23:30:10.000Z",
        "position":1
    },
    {
        "id":22166,
        "room_id":1765,
        "name":"岡崎",
        "status":"休暇",
        "message":"リフレッシュ休暇✈️",
        "created_at":"2019-08-11T23:30:10.000Z",
        "updated_at":"2019-08-11T23:30:10.000Z",
        "position":2
    }
]
```

## 新規メンバー追加
POST https://iruca.co/api/rooms/sample/members

### body
- name: 必須
- status: 必須
- message: 任意

## メンバー情報取得
GET https://iruca.co/api/rooms/sample/members/<MEMBER-ID>

### レスポンス
```json
{
    "id":22165,
    "room_id":1765,
    "name":"白川",
    "status":"在席",
    "message":"今日は早めに帰る予定",
    "created_at":"2019-08-11T23:30:10.000Z",
    "updated_at":"2019-08-11T23:30:10.000Z",
    "position":1
}
```

## メンバー情報更新
PUT https://iruca.co/api/rooms/sample/members/<MEMBER-ID>
### body
- name: 任意
- status: 必須
- message: 任意

## メンバー情報削除
DELETE https://iruca.co/api/rooms/sample/members/<MEMBER-ID>