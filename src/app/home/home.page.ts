import { Component } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private alertController: AlertController, private menu: MenuController) { }

  async sayHello() {
    const alert = await this.alertController.create({
      header: 'Saludo',
      subHeader: 'Bienvenido a mi primera aplicación!',
      message: 'Soy un alert!',
      buttons: ['OK']
    });
    await alert.present();
  }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

}
