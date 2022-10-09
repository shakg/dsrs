import { Component, OnInit } from '@angular/core';
import { ReleaseJob } from '../types/ReleaseJob';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  releaseJobs:Array<ReleaseJob> = new Array<ReleaseJob>();
  constructor() { }

  ngOnInit(): void {
    const _ = <ReleaseJob>{
      name: "Deli GCS",
      releaseType: "daily",
      project: "deli-ground-control-software",
      branch : "development",
      prepScript : "build-gcs.sh",
      buildCommand : "npm run dist",
      versionNumberStrategy : "from package.json",
      webHookUrl : "http://10.30.50.41:4848/dgcs-daily",
      targetLocationForWindows: "release/win-unpacked/deli-ground-control.exe",
      targetLocationForLinux : "release/deli-ground-control-software.AppImage"
    }
    const _a = <ReleaseJob>{
      name: "Deli MC",
      releaseType: "daily",
      project: "deli-mission-computer",
      branch : "development",
      prepScript : "build-gcs.sh",
      buildCommand : "npm run dist",
      versionNumberStrategy : "from package.json",
      webHookUrl : "http://10.30.50.41:4848/dgcs-daily",
      targetLocationForWindows: "release/win-unpacked/deli-ground-control.exe",
      targetLocationForLinux : "release/deli-ground-control-software.AppImage"
    }
    this.releaseJobs.push(_)
    this.releaseJobs.push(_a)
    
    
  }

  addNewJob(){
  }
}
