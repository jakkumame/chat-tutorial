import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    private authService: AuthService,
    public router: Router,
  ) {}

  async logOut() {
    await this.authService.logOut();

    this.router.navigateByUrl('/auth/signin', { replaceUrl: true });
  }

}
