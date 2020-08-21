export class Volunteer {
    id?:string;
    name?:string;
    telefono?: string;
    redsocial?:string;

    constructor() { }
    
    public setId(id: string) {
        this.id = id;
    }
}
export interface Volunteers{
    volunteers: Array<Volunteer>
 }