import { User } from "../models/user";

export class Portfolio {
    id: number;
    belongsTo: string;
    status: string;
    aboutMe: Object;
    industryEquivalency: Object;
    myUser?: User;
    projects: Object;
    education: Object;
    skillMatrix: Object;
   
}
