export class Voluntario {
    id: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    social: string;
    createdBy: string;
    user: string;
    activities:any[];
}
export interface Voluntario {
    Categorias: Array<Voluntario>
}
