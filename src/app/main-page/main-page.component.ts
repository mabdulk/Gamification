import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MainPageService } from './main-page.service';

export interface Rank {
  teamName: string;
  currentRank: number;
  previousRank: number;
}

const ELEMENT_DATA: Rank[] = [
  {teamName: 'first team', currentRank : 1, previousRank : 2},
  {teamName: 'third team', currentRank : 2, previousRank : 3},
  {teamName: 'second team', currentRank : 3, previousRank : 2},
  {teamName: 'Truck - number one', currentRank : 9, previousRank : 3},
  
];


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  displayedColumns: string[] = ['teamName', 'currentRank', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private mainPageService: MainPageService) { }

  ngOnInit() {
    this.getTest();
  }

  getTest()
  {
    this.mainPageService.getTest();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
