import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  authToken : string;
  loginUser : any;

  constructor(private http: Http) { }

  registerUser(user){
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/userApi/user',user,{headers:headers}).map(
      res => res.json()
    );
  }

  authenticateUser(user){
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/userApi/authenticate',user,{headers:headers}).map(
      res => res.json()
    );
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.loginUser = user;
  }

  loadToken(){
    this.authToken = localStorage.getItem('id_token');
    console.log(this.authToken);
    return this.authToken;
  }

  isLoggedIn(){
    if(this.loadToken() != null || this.loadToken()) return true;
    else return false;
  }

  logout(){
    this.authToken = null;
    this.loginUser = null;
    localStorage.clear();
  }

}
