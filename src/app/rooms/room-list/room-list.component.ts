import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RoomList } from '../Room';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.scss',
})
export class RoomListComponent {
  @Input() rooms: RoomList[] = [];

  //! @Input() is a decorator that allows you to pass data from a parent component to a child component. It is used to define an input property in the child component, making it possible to bind values from the parent component to this property.

}
