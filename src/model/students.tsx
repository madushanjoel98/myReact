class Student {
    private name: string = "";
    private age: number = 0;


    public getname(): string {
        return this.name;
    }
    public setname(value: string) {
        this.name = value;
    }

    public getage(): number {
        return this.age;
    }
    public setage(value: number) {
        this.age = value;
    }
    public toJson() {
        var obj = {
            "name": this.name,
            "age": this.age
        }
        return obj;
    }
}