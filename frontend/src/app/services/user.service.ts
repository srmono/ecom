import { Injectable } from '@angular/core';
// import {
//   SocialAuthService,
//   SocialLoginModule,
//   GoogleLoginProvider,
//   SocialAuthServiceConfig,
//   SocialUser
// } from 'angularx-social-login';
 
import { SocialAuthService, SocialUser } from "angularx-social-login";
import {  GoogleLoginProvider } from "angularx-social-login";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  auth = false;
  private SERVER_URL = environment.serverURL;
  private user;

  authState$ = new BehaviorSubject<boolean>(this.auth);
  userData$ = new BehaviorSubject<SocialUser | ResponseModel>(null);
  loginMessage$ = new BehaviorSubject<string>(null);

  constructor(
    private socialAuthService: SocialAuthService,
    private httpClient: HttpClient
  ) {
    socialAuthService.authState.subscribe((user: SocialUser) => {
      if (user != null) {
        this.auth = true;
        this.authState$.next(this.auth);
        this.userData$.next(user)
      }
    })
  }
  
  loginUser(email: string, password: string) {
    this.httpClient.post<ResponseModel>(`${this.SERVER_URL}auth/login`, {email, password})
      .pipe(catchError((err: HttpErrorResponse) => of(err.error.message)))
      .subscribe((data: ResponseModel) => {
        if (typeof (data) === 'string') {
          this.loginMessage$.next(data);
        } else {
          this.auth = data.auth;
          this.authState$.next(this.auth);
          this.userData$.next(data);
        }
      });
  }
  //Google Authentication
  googleLogin(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  
  logout() {
    this.socialAuthService.signOut();
    this.auth = false;
    this.authState$.next(this.auth);
  }
  
}

export interface ResponseModel{
  token: string,
  auth: boolean,
  email: string,
  username: string,
  fname: string,
  lname: string,
  photoUrl: string,
  userId: number
}












