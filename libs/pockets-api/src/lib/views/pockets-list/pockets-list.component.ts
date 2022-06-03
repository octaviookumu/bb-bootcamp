/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from '@angular/core';
import { PocketsHttpService } from '@bootcamp/pockets-api';
import { Pocket } from '../../model/pocket';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'bootcamp-pockets-list',
  templateUrl: './pockets-list.component.html',
  styleUrls: ['./pockets-list.component.scss'],
})
export class PocketsListComponent{
  pockets$!: Observable<any>;
  testPocket = {
    id: '1a',
    name: 'Travel',
    funds: {
      currency: 'USD',
      amount: 47.5,
    },
    goal: {
      currency: 'USD',
      amount: 1500,
    },
    goalDate: '2022-12-20T00:00:00+0000',
  };

  constructor(
    private pocketsService: PocketsHttpService,
    private router: Router
  ) {
    this.getPockets();
  }

  getPockets() {
    this.pockets$ = this.pocketsService
      .pocketsGet()
      .pipe(tap((result) => console.log('POCKETS', result)));
  }

  goToDetails(item: Pocket) {
    console.log('navigate');
    // this.router.navigate(['/pockets/details', item.id, { queryParams : JSON.stringify(item) }]);
    this.router.navigate(['/pockets/details', item.id], {
      queryParams: { data: JSON.stringify(item) },
    });
  }
}
