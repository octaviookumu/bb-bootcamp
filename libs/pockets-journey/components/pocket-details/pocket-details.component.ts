import { Component, Input, OnInit } from '@angular/core';
import { Pocket } from '../../../pockets-api/src/lib/model/pocket'

@Component({
  selector: 'bootcamp-pocket-details',
  templateUrl: './pocket-details.component.html',
  styleUrls: ['./pocket-details.component.scss'],
})
export class PocketDetailsComponent implements OnInit {
  @Input('pocketData') pocketDataProps!: Pocket;

  constructor() {}

  ngOnInit(): void {}
}
