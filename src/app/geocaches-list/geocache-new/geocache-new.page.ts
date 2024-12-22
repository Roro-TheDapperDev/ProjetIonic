import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { GeocacheService } from 'src/app/geocache.service';
import { Geocache } from 'src/app/models/geocache.model';

@Component({
  selector: 'app-geocache-new',
  templateUrl: './geocache-new.page.html',
  styleUrls: ['./geocache-new.page.scss'],
})
export class GeocacheNewPage implements OnInit {

  public geocache! : Geocache

  constructor(
    private geocacheService: GeocacheService,
    private toastController: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    this.geocache = new Geocache();
  }

  async presentToast() {
    const toast = this.toastController.create({
      message: 'Nouvelle géocache ajoutée',
      duration: 2000
    });
    (await toast).present().then(() => {
      setTimeout(() => {
        this.router.navigate(['/geocaches']);
      }, 2000);
    });
  }


  add(){
    this.geocacheService.save(this.geocache).subscribe(() => {
      // reussite
      this.geocache = new Geocache();
      this.presentToast();
    },
    // erreur detectée
    (error : string) => {
      const toast = this.toastController.create({
        message: error,
        duration: 2000
      });
      toast.then((toast) => {
        toast.present();
      });
    });
  }

  

}
