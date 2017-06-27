import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: string;
  username: string;
  password: string;
  email: string;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    var registerUser = {
      name: this.name,
      username : this.username,
      password: this.password,
      email: this.email
    };
    this.authService.registerUser(registerUser).subscribe(
      data => {
          if (data.success){
            alert('Register Success');
            this.router.navigate(['/login']);
          }else{
            alert(data.msg);
            this.router.navigate(['/register']);
          }
    });
  }

}
