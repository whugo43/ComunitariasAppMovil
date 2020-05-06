export interface Campaign {
    id?:number;
    name:string;
    contactName: string;
    description:string;
    state?:number;
    createdBy?:number;
}
export interface Campaigns{
    campaigns: Array<Campaign>
 }