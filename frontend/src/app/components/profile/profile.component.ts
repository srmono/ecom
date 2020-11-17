import { Component, OnInit } from '@angular/core';
import { UserService, ResponseModel } from '../../services/user.service';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import {Router} from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
  
export class ProfileComponent implements OnInit {
  myUser: any

  constructor(
    private userService: UserService, 
    private authService: SocialAuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userService.userData$
      .pipe(
        map(user => {
          if (user instanceof SocialUser) {
            console.log("Google User: ",user)
            return user
            // return {
            //   ...user,
            //   email: "test@test.com"
            // }
          } else {
            return user;
          }
        })
    ).subscribe((data: ResponseModel | SocialUser) => {
        this.myUser = data
      })
  }

  logout() {
    this.userService.logout()
  }
}
