import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

export interface Rank {
  teamName: string;
  currentRank: number;
  previousRank: number;
}

const ELEMENT_DATA: Rank[] = [
  {teamName: 'team 1', currentRank : 1, previousRank : 2},
  {teamName: 'team 3', currentRank : 2, previousRank : 3},
  {teamName: 'team 2', currentRank : 3, previousRank : 2},
  
];


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  displayedColumns: string[] = ['teamName', 'currentRank', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
