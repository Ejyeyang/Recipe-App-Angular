import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


//return data from api
interface AuthResponseData{
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  signup(email: string, password: string){
    return this.http.post(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBEZau9Juf7sjmh6LeQKH5hJSGh9HMxLDg',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    );
  }
}
