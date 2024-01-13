export interface Room {
    totalRoom: number;
    availableRoom: number;
    bookedRoom: number;
}

export interface RoomList {
    roomType:string,
    photo:string
    price:number,
    checkInTime:Date
    checkOutTime:Date
    roomNumber:number
}