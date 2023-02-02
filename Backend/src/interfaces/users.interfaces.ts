export interface IUserRequest {
    fullName: string
    email: string
    telephone: string
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
    telephone?: string
}