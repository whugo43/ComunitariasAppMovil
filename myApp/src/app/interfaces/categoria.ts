export interface Categoria {
    id?:string;
    name: string;
    description?: string;
    createdAt?: string;
    createdBy: string;
}

export interface Categorias{
    Categorias: Array<Categoria>
 }