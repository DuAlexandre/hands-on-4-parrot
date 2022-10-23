export interface IPostEntity {
    idPost?: number,
    content: string,
    created_at: Date,
    updated_at: Date,
    user_id: number
}