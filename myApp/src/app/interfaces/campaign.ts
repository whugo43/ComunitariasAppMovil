export interface Campaign {
    id?:string;
    photo?: any;
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