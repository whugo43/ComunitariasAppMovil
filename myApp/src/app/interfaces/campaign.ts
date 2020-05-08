export interface Campaign {
    id?:string;
    photo: File;
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