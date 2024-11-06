export interface IProducts {
    records: {id:number, title:string, price:number, category:string, images:string}[],
    loading: "idle" | "pending" | "succeeded" | "failed",
    error: string | null,
}

export interface INewArrivals {
    newArrivals: {id:number, title:string, price:number, category:string, images:string}[],
    loading: "idle" | "pending" | "succeeded" | "failed",
    error: string | null,
}

export interface IBestSeller {
    bestSeller: {id:number, title:string, price:number, category:string, images:string}[],
    loading: "idle" | "pending" | "succeeded" | "failed",
    error: string | null,
}

export interface ISpecialOffers {
    SpecialOffers: {id:number, title:string, price:number, category:string, images:string}[],
    loading: "idle" | "pending" | "succeeded" | "failed",
    error: string | null,
}

export interface ICategories {
    records: {id:number, categore:string}[],
    loading: "idle" | "pending" | "succeeded" | "failed",
    error: string | null,
}

export interface ICategoriesProducts {
        id:number;
        title:string;
        price:number;
        images:string;
}

export interface ICard {
    id:number,
    img:string,
    name:string,
    price:string | number
}

export interface ICardInCart {
    id?:number,
    img?:string,
    name?:string,
    price?:string | number,
    quantety?: number,
    description?: string
}

export interface ICart {
    items: { [key:number]: number }
    records: {id:number, images:string, price:number, title:string, quantety:number, description:string}[],
    loading: "idle" | "pending" | "succeeded" | "failed",
    error: string | null,
}

// Typeing Data For Forms ( SignUp )
export interface IDataSignUpForm {
    data: {
        firstName : string,
        lastName : string,
        phoneNumber : string,
        email : string,
    } | null,
    accessToken: string | null;
    loading : "idle" | "pending" | "succeeded" | "failed",
    error: string | null,
}

export interface IDataThunk {
    firstName : string,
    lastName : string,
    phoneNumber : string,
    email : string,
    password : string,
    confirmPassword: string
}

export interface ILogin {
    email : string,
    password : string
}


export interface IResponse {
    accessToken: string ;
    data: {
        id: number ,
        firstName : string,
        lastName : string,
        phoneNumber : string,
        email : string,
    } 
}