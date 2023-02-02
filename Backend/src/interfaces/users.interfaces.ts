export interface IUserRequest {
    fullName: string
    email: string
    telphone: string
    password?: string
}

export interface IUserResponse extends IUserRequest{
    id: string
    createdAt: string;
    updatedAt: string;
    
}
export interface IUserUpdate {
    fullName?: string
    email?: string
    password?: string
    telphone?: string

}