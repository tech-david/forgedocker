import { Portfolio } from "./portfolio";

export class User {
    userId: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    is_Admin: boolean;
    portfolio: Object; // should be portfolio array but is hotfixed as
}
