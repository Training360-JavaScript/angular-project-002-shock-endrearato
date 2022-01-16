import { Component, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit {

  @Input() dataList: User[] = [];

  @Output() selectClick: EventEmitter<User> = new EventEmitter();
  @Output() updateClick: EventEmitter<User> = new EventEmitter();
  @Output() deleteClick: EventEmitter<User> = new EventEmitter();

  constructor() { }

  onSelectClick(): void {
    this.selectClick.emit(this.dataList);
  }
  onUpdateClick(): void {
    this.updateClick.emit(this.dataList);
  }
  onDeleteClick(): void {
    this.deleteClick.emit(this.dataList);
  }

  ngOnInit(): void {
  }

}
