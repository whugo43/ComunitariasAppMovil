export interface Provider {
    id?: string;
    name: string;
    direction: string;
    cell: string;
    email: string;
    description: string;
    list: string;
}

export interface Provider{
    Provider: Array<Provider>
 }