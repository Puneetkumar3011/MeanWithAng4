export class User {
    constructor(public email: string,
                public password: string,
                public household?: string,
                public firstName?: string,
                public lastName?: string) {}
}