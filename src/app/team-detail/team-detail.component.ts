import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {

  teamName : string;
  displayedColumns: string[] = ['teamMembers'];
  dataSource: string[] =  ['Mustafa Abdulkareem', 'Ali-almugoter', 'Ali Tarraf ','Steve Karim'];
;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
     this.route.params.subscribe(params => {
      this.teamName = params['teamName']; 
   });
  }
  
  

}
