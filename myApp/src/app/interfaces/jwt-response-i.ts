export interface JwtResponseI {
    dataUser:{
        id: number,
        name: string,
        role: string,
        accessToken: string,
        expiresIn: string

    }
}
