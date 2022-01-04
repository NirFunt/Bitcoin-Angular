import { Move } from "./move";

export interface User {
    _id : string,
    username : string,
    email : string,
    phone : string,
    coins : number,
    moves : Move[],
}
