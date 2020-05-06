export interface Categoria {
    id?:string;
    name: string;
    description?: string;
    state?: string;
    createdAt?: string;
    createdBy: string;
}

export interface Categorias{
    Categorias: Array<Categoria>
 }