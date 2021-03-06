import { Component } from '@angular/core';
import { User } from './model/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'The good Angular programmer';
  currentUser: User = new User();
  users = UserService;
  constructor() {}

  onSelectUser(user: User): void {
    this.currentUser = user;
  }

  

}
