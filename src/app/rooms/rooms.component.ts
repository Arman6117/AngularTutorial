import { ChangeDetectorRef, Component } from '@angular/core';
import { Room, RoomList } from './Room';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
  exportAs: 'RoomComponent',
})
export class RoomsComponent {
  //! Data binding in Angular
  //! Interpolation binding
  //! Interpolation binding in Angular is a one-way data binding technique that uses double curly braces { { and }} to display component properties or expressions in the view template

  hotelName = 'New hotel';

  //!Property binding

  newRoomName = 'New room 1';

  //! Event binding
  hideRooms = false;
  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  room: Room = {
    totalRoom: 20,
    availableRoom: 15,
    bookedRoom: 5,
  };

  roomList: RoomList[] = [
    {
      roomType: 'Normal Room',
      checkInTime: new Date('15-jan-2024'),
      checkOutTime: new Date('20-jan-2024'),
      photo:
        'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 5000,
      roomNumber: 1,
    },
    {
      roomType: 'AC Room',
      checkInTime: new Date('15-jan-2024'),
      checkOutTime: new Date('20-jan-2024'),
      photo:
        'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 8000,
      roomNumber: 2,
    },
    {
      roomType: 'Deluxe Room',
      checkInTime: new Date('15-jan-2024'),
      checkOutTime: new Date('20-jan-2024'),
      photo:
        'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 10000,
      roomNumber: 3,
    },
  ];
  bookRooms() {
    this.room.bookedRoom++;
    this.room.availableRoom--;
  }

  unBookRooms() {
    this.room.availableRoom++;
    this.room.bookedRoom--;
  }

  constructor() {}
}
