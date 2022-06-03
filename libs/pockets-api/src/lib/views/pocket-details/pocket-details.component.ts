/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { PocketsHttpService } from '../../api/pockets.service';

@Component({
  selector: 'bootcamp-pocket-details',
  templateUrl: './pocket-details.component.html',
  styleUrls: ['./pocket-details.component.scss'],
})
export class PocketDetailsComponent implements OnInit {
  pocketData$!: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private pocketsService: PocketsHttpService
  ) {}

  ngOnInit() {
    const pocketId = this.route.snapshot.params['id'];
    console.log(pocketId);
    this.pocketData$ = this.pocketsService.pocketsIdGet({ id: pocketId }).pipe(
      map((res: any) => res[0]),
      tap((ting) => console.log('TING', ting))
    );
  }
}
