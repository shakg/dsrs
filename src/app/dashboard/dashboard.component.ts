import { Component, OnInit } from '@angular/core';
import { ReleaseJob } from '../types/ReleaseJob';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {
  releaseJobs:Array<ReleaseJob> = new Array<ReleaseJob>();
  constructor() { }

  ngOnInit(): void {
    const _ = <ReleaseJob>{
      name: "Deli GCS",
      project: "deli-ground-control-software",
      branch : "development",
      startTime : "08.10.2022 | 21:13",
      timeElapsed : "3 minutes 12 seconds",
      status : "running"
    }
    this.releaseJobs.push(_)
    console.log(this.releaseJobs);
    
  }

}
