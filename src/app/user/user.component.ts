import { Component, Output, Input, computed, input, EventEmitter, output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true }) id!: string
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string; 
  @Output() select = new EventEmitter();
  
  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() {
    this.select.emit(this.id);
  }
}
