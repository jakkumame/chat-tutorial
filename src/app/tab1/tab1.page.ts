import { ProfilePage } from './../shared/profile/profile.page';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public mdlCtrl: ModalController) {}

  async ngOnInit() {
    const modal = await this.mdlCtrl.create({
      component: ProfilePage,
    });
    await modal.present();
  }

}
