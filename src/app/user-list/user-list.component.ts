import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[]

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getUsers()

  }

  updateUsers(id: number) {
    this.router.navigate(['update-User', id])
  }

  deleteUsers(id: number) {
    this.userService.deleteUser(id).subscribe((data) => {
      this.getUsers();
    })
  }

  private getUsers() {
    return this.userService.getUsersList().subscribe((data) => {
      this.users = data;
    })
  }

}
