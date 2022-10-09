import { Component, OnInit } from '@angular/core';
import { GatewayService } from '../gateway.service';
import { ReleaseJob } from '../types/ReleaseJob';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  releaseJobs:Array<ReleaseJob> = new Array<ReleaseJob>();
  constructor(private gateway:GatewayService) { }

  ngOnInit(): void {
    this.gateway.getReleases().subscribe((releases:any)=>{
      this.releaseJobs = releases;
    })
  }
}
