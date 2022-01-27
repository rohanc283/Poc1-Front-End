import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: "all-Users", component: UserListComponent },
  { path: "update-User/:id", component: UpdateUserComponent },
  { path: '', redirectTo: "all-Users", pathMatch: 'full' },
  { path: "create-User", component: CreateUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
