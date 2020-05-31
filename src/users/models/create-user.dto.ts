export class  CreateUserDto {
    readonly _id  : string;
    readonly login: string;
    readonly password: string;
    readonly created_at: Date;
    readonly roles   : string[]; 
}
