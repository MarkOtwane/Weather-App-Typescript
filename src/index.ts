//https://dummyjson.com/

// https://dummyjson.com/users
type Gender = 'Male' | 'female'
interface Users{
    id: number,
    firstName: string,
    lastName: string,
    maidenName: string,
    age: number,
    gender: Gender,
    email: string,
    phone: string,
    username:string,
    password: string,
    birthDate: string,
    image: string,
    bloodGroup: string,
    height: number,
    weight: number,
    eyeColor: string,
    hair:{
        color: string,
        type: string,
    },
    ip: string,
    address:{
        address:string,
        city: string,
        state: string,
        stateCode: string,
        postalCode:string,
    
    coordinates: {
        lat: number,
        lng: number
    },
    country: string,
    },
    macAddress: string,
    university: string,
    bank: {
    cardExpire:	string,
    cardNumber:	string,
    cardType:	string,
    currency:	string,
    iban: string,
    },
    company:{
    department: string,
    name:	string,
    title: string,

    address	: {
        address	: string,
        city	: string,
        state	: string
        stateCode	: string,
        postalCode	: string
        coordinates :{
            lat:number,
            lng:number
        },
        country: string,
        },
    },
    ein: string,
    ssn: string,
    userAgent: string,

    crypto: {
        coin: string,
        wallet: string,
        network: string,
    },
    role: string
}

// https://dummyjson.com/carts
interface Carts{
    id: number,
    products: {
        id: number,
        title :string
        price:	number,
        quantity:	number,
        total: number,
        discountPercentage:	number,
        discountedTotal: string,
        thumbnail: string
    },
    total: number,
    discountedTotal: number,
    userId: number,
    totalProducts: number,
    totalQuantity:number,
}

// https://dummyjson.com/products
interface Products{
    id: number,
    title: string,
    description: string,
    category: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    tags : {
        brand: string,
        sku: string,
        weight: number
    },
    dimensions : {
        width: number,
        height: number,
        depth: number,
    },
    warrantyInformation: string,
    shippingInformation: string,
    availabilityStatus: string,
    reviews: {
        rating: number,
        comment: string,
        date: string,
        reviewerName: string,
        reviewerEmail: string
    },
    returnPolicy: string,
    minimumOrderQuantity: number,
    meta: {
        createdAt: string,
        updatedAt: string,
        barcode: string,
        qrcode: string
    },
    images: string,
     thumbnail: string
}

interface posts{
    id: number,
    title:string,
    body: string,
    tags: {
        0: string,
        1:string,
        2:string
    },
    reactions: {
        likes: number,
        dislikes: string,
    },
    views: number,
    userId: string
    
}