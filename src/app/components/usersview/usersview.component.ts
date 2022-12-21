import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersServiceService } from 'src/app/services/users.service.service';
@Component({
  selector: 'app-usersview',
  templateUrl: './usersview.component.html',
  styleUrls: ['./usersview.component.css']
})
export class UsersviewComponent implements OnInit {
  public page_title: string;
  
  constructor(private userService: UsersServiceService) { 
    this.page_title = 'Usuarios'
  }
  users:any
  ngOnInit(): void {
    //this.getUsers();
    try {
      this.userService.getUsers().subscribe((users)=>{
        console.log(users)
        this.users = users
      })
    } catch (error) {
      
    }
  }
  
  //users:User[]

  getUsers(): void {
    this.userService.getUsers().subscribe(respuesta => console.log(respuesta))
    //this.users = this.userService.getUsers()
    //console.log(this.users)
  }
  

}
