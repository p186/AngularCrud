import { Component, OnInit } from '@angular/core';
import {HostListener, ViewChild} from '@angular/core';
import {MdbTableDirective} from "angular-bootstrap-md";


@Component({
  selector: 'app-serachtable',
  templateUrl: './serachtable.component.html',
  styleUrls: ['./serachtable.component.css']
})
export class SerachtableComponent implements OnInit {
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  elements: any = [];
  headElements = ['ID', 'First', 'Last', 'Handle', 'Button'];

  searchText: string = '';
  previous: string;

  constructor() { }

  @HostListener('input') oninput() {
    this.searchItems();
  }

  ngOnInit() {
    for (let i = 1; i <= 10; i++) {
      this.elements.push({ id: i.toString(), first: 'Wpis ' + i, last: 'Last ' + i, handle: 'Handle ' + i, Button: 'Button ' + i });
    }

    this.mdbTable.setDataSource(this.elements);
    this.previous = this.mdbTable.getDataSource();
  }

  searchItems() {
    const prev = this.mdbTable.getDataSource();

    if (!this.searchText) {
      this.mdbTable.setDataSource(this.previous);
      this.elements = this.mdbTable.getDataSource();
    }

    if (this.searchText) {
      this.elements = this.mdbTable.searchLocalDataBy(this.searchText);
      this.mdbTable.setDataSource(prev);
    }
  }
}

