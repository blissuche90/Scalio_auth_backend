import { Document } from 'mongoose';

export interface  User extends Document {
    readonly userId  : string;
    readonly login: string;
    readonly password: string;
    readonly created_at: Date;
    readonly roles   : string[]; 
}
