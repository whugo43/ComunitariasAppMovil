export interface Campaign {
    id?:string;
    photo: string;
    name:string;
    contactName: string;
    description:string;
    state?:string;
    createdAt?:string;
    createdBy:string;
}
export interface Campaigns{
    campaigns: Array<Campaign>
 }