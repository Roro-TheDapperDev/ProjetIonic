import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.page.html',
  styleUrls: ['./tools.page.scss'],
})  
export class ToolsPage implements OnInit {
  public latitude: number = 0;
  public longitude: number = 0;

  constructor(
    private alertController: AlertController,
    private toastController: ToastController,
  ) { }

  ngOnInit() {
  }

  async getCoordinates() {
    // utiliser le plugin Geolocation pour récupérer les coordonnées GPS (latitude et longitude)
    const coordinates = await Geolocation.getCurrentPosition();
    this.latitude = coordinates.coords.latitude;
    this.longitude = coordinates.coords.longitude;
  }

  async copyToClipboard(value: number, type: string) {
    // stocker la valeur dans le presse-papier
    await navigator.clipboard.writeText(value.toString());

    // afficher une alerte custom selon le type de valeur copiée
    const toast = await this.toastController.create({
      message: `${type} copiée dans le presse-papier`,
      duration: 2000
    });
    toast.present();
  }




}
