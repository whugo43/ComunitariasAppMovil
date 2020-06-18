export interface Provider {
    id?: string;
    name: string,
    address: string,
    phoneNumber: string,
    email: string,
    categories: string,
}

export interface Providers{
    providers: Array<Provider>
 }