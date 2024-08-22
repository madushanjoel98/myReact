export class User {
    private username?: string;
    private password?: string;

    public getUsername(): string | undefined {
        return this.username;
    }

    public setUsername(username?: string): void {
        this.username = username;
    }

    public getPassword(): string | undefined {
        return this.password;
    }

    public setPassword(password?: string): void {
        this.password = password;
    }

    public getJson(): string {
        let obj = {
            "username": this.getUsername(),
            "password": this.getPassword()
        };
        return JSON.stringify(obj);
    }
}
