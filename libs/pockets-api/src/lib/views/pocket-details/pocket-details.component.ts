import { Component, Input, OnInit } from '@angular/core';
import { Pocket } from '../../model/pocket';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'bootcamp-pocket-details',
  templateUrl: './pocket-details.component.html',
  styleUrls: ['./pocket-details.component.scss'],
})
export class PocketDetailsComponent implements OnInit {
  pocketData!: any;
  urlData!: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe(
      (param) => (this.urlData = param.get('data'))
    );
    this.pocketData = JSON.parse(this.urlData);
  }
}
