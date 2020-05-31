export class  userGetterDto {
    readonly _id  : string;
    readonly login: string;
    readonly created_at: Date;

 
    constructor(id , login,created_at) {
        this._id = id;
        this.login = login;
        this.created_at = created_at;
    }
}
