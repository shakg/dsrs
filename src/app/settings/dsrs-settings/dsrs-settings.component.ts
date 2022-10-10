import { Component, OnInit } from '@angular/core';
import { VersioningStrategy } from 'src/app/types/VersioningStrategy';

@Component({
  selector: 'app-dsrs-settings',
  templateUrl: './dsrs-settings.component.html',
  styleUrls: ['./dsrs-settings.component.css']
})
export class DsrsSettingsComponent implements OnInit {

  // new strategy to add .
  // reset after save or cancel. 
  public newStrategy:VersioningStrategy = <VersioningStrategy>{
    name: "",
    details:""
  }

  private _strategy1:VersioningStrategy = <VersioningStrategy>{
    name : "automatic",
    details : "Automatically puts version number according to commit history. Usefull if you use conventional commit metodology."
  }
  private _strategy2:VersioningStrategy = <VersioningStrategy>{
    name : "from package.json",
    details : "Pulls your current version from package json if avaliable."
  }

  public versioningStrategies:Array<VersioningStrategy> = [this._strategy1,this._strategy2];

  public toggleAddNewStrategyContainer:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  addNewStrategyContainerToggler(){
    this.toggleAddNewStrategyContainer = !this.toggleAddNewStrategyContainer;
  }

  addNewStrategy(){
    this.versioningStrategies.push(this.newStrategy);
    this.newStrategy = <VersioningStrategy>{
      name:"",
      details:""
    }
  }

}
