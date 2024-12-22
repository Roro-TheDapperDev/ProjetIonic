import { Component, OnInit } from '@angular/core';
import { GeocacheService } from '../geocache.service';
import { Geocache } from '../models/geocache.model';

@Component({
  selector: 'app-geocaches-list',
  templateUrl: './geocaches-list.page.html',
  styleUrls: ['./geocaches-list.page.scss'],
})

export class GeocachesListPage implements OnInit {

  caches!: Array<Geocache>;
  constructor(
    private geocacheService: GeocacheService
  ) { }

  ngOnInit() {
    this.geocacheService.getAll().subscribe((data: any) => {
      this.caches = data;
    });
  }

}
