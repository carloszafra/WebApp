export interface Iuser {
    id: number,
    name: string,
    email: string,
    address: Iaddress,
    company: Icompany,
    phone: string,
    username: string,
    website: string
}

interface Icompany {
    name: string,
    catchPhrase: string,
    bs: string
}

interface Iaddress {
    city: string,
    geo: { lat: string, lng: string },
    street: string,
    suite: string,
    zipcode: string,
}