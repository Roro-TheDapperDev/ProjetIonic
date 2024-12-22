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

  save(cache: Geocache): any {
    return new Observable(obs => {
      this.geocacheRef.add({...cache}).then(() => {
        obs.next();
      });
    });
  }

  update(cache: Geocache): any {
    return new Observable(obs => {
      this.geocacheRef.doc(cache.id).update(cache).then(() => {
        obs.next();
      });
    });
  }

  delete(id: any) {
    this.db.doc(`${this.dbPath}/${id}`).delete();
  }

}
