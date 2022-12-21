import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersServiceService } from 'src/app/services/users.service.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UsersServiceService]
})
export class RegisterComponent implements OnInit {
  public page_title: string;
  public user:User;
  constructor(
    private _userService: UsersServiceService
  ) { 
    this.page_title = 'Registro'
    this.user = new User(0,'','','ROL_USER','description persona','','')
  }

  ngOnInit(): void {
  }

  onSubmit(form:any){
    this._userService.register(this.user).subscribe(
      response => {
        console.log(response)
        form.reset()
      },
      error => {
        console.log(<any>error)
      }
    )
    
  }
}
