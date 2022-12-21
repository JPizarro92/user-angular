import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { UserviewComponent } from './components/userview/userview.component';
import { UsersviewComponent } from './components/usersview/usersview.component';

const routes: Routes = [
    {path:  '', component: RegisterComponent},
    {path: 'registro', component: RegisterComponent },
    {path: 'usuario', component: UserviewComponent},
    {path: 'usuarios', component: UsersviewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }