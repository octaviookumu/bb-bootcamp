import { Component, OnInit } from '@angular/core';
import { PocketsHttpService } from '@bootcamp/pockets-api';
import { Pocket } from '../../../pockets-api/src/lib/model/pocket';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'bootcamp-pockets-list',
  templateUrl: './pockets-list.component.html',
  styleUrls: ['./pockets-list.component.scss'],
})
export class PocketsListComponent implements OnInit {
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

  ngOnInit(): void {}

  getPockets() {
    this.pockets$ = this.pocketsService
      .pocketsGet()
      .pipe(tap((result) => console.log('POCKETS', result)));
  }

  goToDetails(id: string) {
    console.log('navigate');
    this.router.navigate(['/pockets/details', id]);
  }
}
