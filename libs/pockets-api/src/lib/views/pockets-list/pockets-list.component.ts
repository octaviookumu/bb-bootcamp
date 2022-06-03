/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from '@angular/core';
import { PocketsHttpService } from '@bootcamp/pockets-api';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'bootcamp-pockets-list',
  templateUrl: './pockets-list.component.html',
  styleUrls: ['./pockets-list.component.scss'],
})
export class PocketsListComponent {
  pockets$!: Observable<any>;

  constructor(
    private pocketsService: PocketsHttpService,
    private router: Router
  ) {
    this.getPockets();
  }

  getPockets() {
    this.pockets$ = this.pocketsService.pocketsGet();
  }

  goToDetails(id: string) {
    this.router.navigate(['/pockets/details', id]);
  }
}
