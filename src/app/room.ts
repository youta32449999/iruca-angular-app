/** ルーム情報のレスポンスの型 */
export class Room {
    id: number;
    code: string;
    name: string;
    note: string;
    statuses: string[];
    created_at: string;
    updated_at: string;
    status_updated_at: string;
}