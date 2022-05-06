import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormRegister, FormLogin, UserAuth } from '../interface/user.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AuthUserService {
  private baseUrl: string = 'https://remember21.herokuapp.com/api/usuario';
  public  userAuth:UserAuth ={token:'',nombre:''};
  constructor(private http: HttpClient) {
    if(localStorage.getItem('userAuth'))
    this.userAuth = JSON.parse(localStorage.getItem('userAuth')!)
  }

  createUser(mewUserRegister: FormRegister) {
    return this.http.post<UserAuth>(`${this.baseUrl}/register`, mewUserRegister).subscribe(
        res=>{
          console.log(res);
          localStorage.setItem('userAuth', JSON.stringify(res))
        }
    );
  }

  loginUser(credentialUser: FormLogin) {
    return this.http.post<UserAuth>(`${this.baseUrl}/login`, credentialUser)
    .subscribe(res=>{
      console.log(res);
      localStorage.setItem('userAuth', JSON.stringify(res))
    });
  }
}
