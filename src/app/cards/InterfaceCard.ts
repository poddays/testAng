export interface IUsers{
    id:string,
    name: string; 
    surname: string; 
    imageUrl: string;
    mail:string; 
    orders: IOrders[]; 
    location: location;
    
}

export interface IOrders{ 
    id: string; 
    date:string;
    product: {
        name: string, 
        price: number,
    } ,
    quantity: number, 
}

export interface location { 
    address: string; 
    city: string; 
    cap: string; 
}