import { AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';



@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(
    public auth: Auth,
    public alertController: AlertController,
  ) { }


//   const createUserWithEmailAndPassword: {
//     (auth: Auth, email: string, password: string): Promise<UserCredential>;
//     (auth: FirebaseAuth, email: string, password: string): Promise<...>;
// }




  async register({ email, password }){
    try {
      const user = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
        );
        return user;
    } catch (e) {
      return null;
    }
  };

  async logIn({ email, password }){
    try {
      const user = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
        );
        return user;
    } catch (e) {
      return null;
    }
  };

  logOut() {
    return signOut(this.auth);
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ["閉じる"]
    });
    await alert.present();
  }













  // authSignUp(login: { email: string, password: string}) {
  //   return this.afAuth.createUserWithEmailAndPassword(login.email, login.password)
  //   .then(() => this.navController.navigateForward('/'))
  //     .catch((error => {
  //       throw error;
  //     }))
  // };

  // authSignIn(login: { email: string, password: string }) {
  //   return this.afAuth.signInWithEmailAndPassword(login.email, login.password)
  //   .then(() => this.navController.navigateForward('/')
  //     .catch(error => {
  //       throw error;
  //     }))
  // };

  // authSignOut() {
  //   return this.afAuth.signOut()
  //   .then(() => this.navController.navigateRoot('/auth/signin'))
  //     .catch(error => {
  //       throw error;
  //     })
  // };


}
