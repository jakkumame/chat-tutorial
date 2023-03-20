import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  credentials!: FormGroup;


  constructor(
    private fb: FormBuilder,
    private loadingController: LoadingController,
    private authService: AuthService,
    private router: Router,
  ) {}

  get email() {
    return this.credentials.get('email');
  }

  get password() {
    return this.credentials.get('password');
  }

  ngOnInit() {
    this.credentials = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  async logIn() {
    const loading = await this.loadingController.create();
    await loading.present();
    const user = await this.authService.logIn(this.credentials.value);
    await loading.dismiss();

    if (user) {
      this.router.navigateByUrl('/', { replaceUrl: true });
    } else {
      this.authService.showAlert("ログイン失敗。","もう一度入力をしてください。");
    }
  }

}
