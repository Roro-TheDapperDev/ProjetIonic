import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

import { Geocache } from './models/geocache.model';


@Injectable({
  providedIn: 'root'
})
export class GeocacheService {
  private dbPath = '/geocaches';
  geocacheRef: AngularFirestoreCollection<Geocache>;;

  constructor(
    private db: AngularFirestore
  ) {
    this.geocacheRef = db.collection(this.dbPath);
  }
  
  getAll(): any {
    return this.geocacheRef.snapshotChanges().pipe(
      map((changes: any) => {
        return changes.map((doc:any) => {
          return ({id: doc.payload.doc.id, ...doc.payload.doc.data()})
        })
      })
    );
  }

  get(id: any):any {
    return  new Observable(obs => {
      this.geocacheRef.doc(id).get().subscribe((res: any) => {
        obs.next({id: res.id, ...res.data()});
      });
    });
  }

  checkGeocache(cache: Geocache): any {
    // le titre ne doit pas être vide
    if (cache.title === '') {
      return new Observable(obs => {
        obs.error('Le titre ne peut pas être vide');
      });
    }

    // la description ne doit pas être vide
    if (cache.description === '') {
      return new Observable(obs => {
        obs.error('La description ne peut pas être vide');
      });
    }

    // lat et long doivent être des nombres
    if (isNaN(cache.latitude) || isNaN(cache.longitude)) {
      return new Observable(obs => {
        obs.error('La latitude et la longitude doivent être des nombres');
      });
    }
    // lat et long doivent être des nombres compris entre -90 et 90 pour la latitude et -180 et 180 pour la longitude
    if (cache.latitude < -90 || cache.latitude > 90) {
      return new Observable(obs => {
        obs.error('La latitude doit être comprise entre -90 et 90');
      });
    } else if (cache.longitude < -180 || cache.longitude > 180) {
      return new Observable(obs => {
        obs.error('La longitude doit être comprise entre -180 et 180');
      });
    }

    // le lien de l'image doit être une url ou etre vide
    if (cache.pictureLink !== '' && !cache.pictureLink.match(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g)) {
      return new Observable(obs => {
        obs.error('Le lien de l\'image doit être une url valide');
      });
    }

    // l'indice ne doit pas être vide
    if (cache.hint === '') {
      return new Observable(obs => {
        obs.error('L\'indice ne peut pas être vide');
      });
    }

    // la réponse ne doit pas être vide
    if (cache.answer === '') {
      return new Observable(obs => {
        obs.error('La réponse ne peut pas être vide');
      });
    }

    // la ville et le pays ne doivent pas être vide
    if (cache.city === '' || cache.country === '') {
      return new Observable(obs => {
        obs.error('La ville et le pays ne peuvent pas être vides');
      });
    }



  }

  save(cache: Geocache): any {
    // verifier que les données sont correctes
    if (this.checkGeocache(cache)) {
      return this.checkGeocache(cache);
    } else {
      return new Observable(obs => {
        this.geocacheRef.add({...cache}).then(() => {
          obs.next();
        });
      });
    }
  }

  update(cache: Geocache): any {
    if (this.checkGeocache(cache)) {
      // meme principe que pour enregistrer une nouvelle geocache
      return this.checkGeocache(cache);
    } else {
      return new Observable(obs => {
        this.geocacheRef.doc(cache.id).update(cache).then(() => {
          obs.next();
        });
      });
    }
  }

  delete(id: any) {
    this.db.doc(`${this.dbPath}/${id}`).delete();
  }

}
