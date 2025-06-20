import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../models/auth.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  @Input() users: IUser[] = [];
  @Output() delete: EventEmitter<number> = new EventEmitter();
  @Output() edit: EventEmitter<number> = new EventEmitter();

  onDelete(id: number){
    this.delete.emit(id);
  }

  onEdit(id: number) {
    this.edit.emit(id);
  }
}
