import { Component, OnInit } from '@angular/core';

import { DataTableResource } from './../../data-table/index';
import persons from './data';

@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.scss']
})
export class FinancialComponent implements OnInit {


  ngOnInit() {
  }

  itemResource = new DataTableResource(persons);
  items = [];
  itemCount = 0;

  constructor() {
      this.itemResource.count().then(count => this.itemCount = count);
  }

  reloadItems(params) {
      this.itemResource.query(params).then(items => this.items = items);
  }

  // special properties:
  rowClick(rowEvent) {
      console.log('Clicked: ' + rowEvent.row.item.name);
  }

  rowDoubleClick(rowEvent) {
      alert('Double clicked: ' + rowEvent.row.item.name);
  }

  rowTooltip(item) { return item.jobTitle; }
}
