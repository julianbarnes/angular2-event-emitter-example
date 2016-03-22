export class Role {
    id:number;
    roleName:string;
    description:string;
    enabled:string;
    readOnly:string;
}

export class User {
    id:number;
    fullName:string;
    username:string;
    password:string;
    lastLogin:string;
    roles:Role[];

    authenticated:boolean;
}