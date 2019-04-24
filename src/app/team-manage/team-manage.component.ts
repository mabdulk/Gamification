import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';


export interface Rank {
  teamName: string;
  company: string;
  previousRank: number
  enableEditing : boolean;
}

const ELEMENT_DATA: Rank[] = [
  {teamName: 'first team', company : 'first Compnay', previousRank : 2, enableEditing : false},
  {teamName: 'third team', company : 'first Compnay', previousRank : 3, enableEditing: false},
  {teamName: 'second team', company : 'second Compnay', previousRank : 2, enableEditing : false},
  {teamName: 'Truck - number one', company : 'second Compnay', previousRank : 3, enableEditing : false},
  
];

@Component({
  selector: 'app-team-manage',
  templateUrl: './team-manage.component.html',
  styleUrls: ['./team-manage.component.css']
})
export class TeamManageComponent implements OnInit {

  displayedColumns: string[] = ['teamName', 'company', 'edit'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
