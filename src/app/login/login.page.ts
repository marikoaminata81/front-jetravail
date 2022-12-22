import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthserviceService } from '../service/authservice.service';
import { TokenserviceService } from '../service/tokenservice.service';
import { Icredentials } from '../interface/icredentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: Icredentials = {
    username: '',
    password: ''
  }
  constructor(private router:Router,private route: ActivatedRoute, private authService: AuthserviceService, private tokenService: TokenserviceService) { }

  ngOnInit() {
  }
  onSubmit(): void{
    console.log(this.form)
    this.authService.login(this.form).subscribe(
      data => { 
      console.log(data.accessToken)
      this.tokenService.saveToken(data.accessToken)
    },
      err => console.log(err),
      //this.router.navigate(['/accueil'])
    );
    //this.router.navigate(['/accueil'])
  
  }
}
