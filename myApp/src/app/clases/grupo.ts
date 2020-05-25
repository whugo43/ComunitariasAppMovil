export class Grupo {
    id: string;
    members: [];
    name:string;
    createdBy: string;
    user: string;
}

export interface Grupo {
    Categorias: Array<Grupo>
}