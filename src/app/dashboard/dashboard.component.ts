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
    const _a = <ReleaseJob>{
      name: "Deli GCS",
      project: "deli-autopilot-software",
      branch : "development",
      startTime : "08.10.2022 | 21:13",
      timeElapsed : "3 minutes 12 seconds",
      status : "done"
    }
    this.releaseJobs.push(_)
    this.releaseJobs.push(_a)
  }

}
