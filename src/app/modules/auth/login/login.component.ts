import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formLogin = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor(
    private auth: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private titleService: Title
  ) {
    this.titleService.setTitle("Connexion")
}
  
  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.formLogin.value)
  }

  //onLogin() {
  //  this.auth.login();
  //  this.router.navigateByUrl('/facesnaps');
  //}


}
