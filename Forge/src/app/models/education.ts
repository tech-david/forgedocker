
export interface Education{
    id: any,
    university: any,
    graduation: any,
    major: any,
    minor:any,
    degree:any,
    portfolio: { /// portfolio id loose coupling changes/mapping
        id: any,
        belongsTo: any,
        status: any,
        myUser: {
            userId: any,
            email: any,
            password: any,
            firstName: any,
            lastName: any,
            admin: any
         }
    }
} 