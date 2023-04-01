import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Camera, CameraResultType } from '@capacitor/camera';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  uid!: string;
  user = {
    displayName: null,
    photoDataUrl: null,
  };
  photo!: string;


  constructor(
    public mdlCtrl: ModalController
    ) {}

  ngOnInit() {

  }

  modalDismiss() {
    this.mdlCtrl.dismiss();
  }

  async takePicture() {
    const image = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      quality: 100,
    })
    this.photo = image && image.dataUrl!;
  }
}
