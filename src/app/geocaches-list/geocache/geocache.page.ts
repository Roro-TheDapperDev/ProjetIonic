import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { GeocacheService } from 'src/app/geocache.service';
import { Geocache } from 'src/app/models/geocache.model';

@Component({
  selector: 'app-geocache',
  templateUrl: './geocache.page.html',
  styleUrls: ['./geocache.page.scss'],
})
export class GeocachePage implements OnInit {

  public geocache! : Geocache;
  public editMode = false;

  // gestion affichage indice/reponse
  public showHint = false;
  public showAnswer = false;




  constructor(
    private toastController: ToastController,
    private alertController: AlertController,
    private route : ActivatedRoute,
    private geocacheService: GeocacheService,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.geocacheService.get(id).subscribe((data: any) => {
      this.geocache = data;
    });
  }

  async presentToast() {
    const toast = this.toastController.create({
      message: 'Vos modifications sont enregistrées',
      duration: 2000
    });
    (await toast).present();
  }

  // gestion affichage indice/reponse
  toggleHint() {
    this.showHint = !this.showHint;
  }
  toggleAnswer() {
    this.showAnswer = !this.showAnswer;
  }

  // gestion edition
  async toggleEditMode() {
    // activer le mode edition
    if(!this.editMode) {
      const alert = await this.alertController.create({
        header : 'Etes vous sur de vouloir modifier ?',
        subHeader: 'Vous rendrez possible la modification',
        buttons : [
          {
            text: 'Annuler',
            role: 'Cancel'
          }, {
            // confirmation de l'activation du mode edition
            text: 'Configurer',
            handler: () => {this.editMode = !this.editMode;}
          }
        ]
      });
      await alert.present();
    } else {
      // si activé, on sort du mode edition
      this.editMode = !this.editMode;
    }
  }

  saveEdit() {
    this.geocacheService.update(this.geocache).subscribe(() => {
      this.presentToast();
      this.editMode = false;
    });
  }

  delete() {
    this.geocacheService.delete(this.geocache.id)
    this.router.navigate(['/geocaches']);
  }

  // gestion avec Maps
  openMaps(lat: number, long: number) {
    window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${long}`);
  }
}
