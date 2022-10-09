import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GatewayService } from 'src/app/gateway.service';
import { ReleaseJob } from 'src/app/types/ReleaseJob';

@Component({
  selector: 'app-add-new-job',
  templateUrl: './add-new-job.component.html',
  styleUrls: ['./add-new-job.component.css']
})
export class AddNewJobComponent implements OnInit {

  saved:boolean = false;
  toSave:ReleaseJob = <ReleaseJob>{};
  constructor(private gateway:GatewayService, private router:Router) { }

  ngOnInit(): void {
  }

  saveReleaseJob(){
    this.saved = true;
    setTimeout(()=>{
      this.saved = false;
    }, 3000)

    this.gateway.saveReleaseJob(this.toSave).subscribe((_serverResponse:any)=>{
      console.log(_serverResponse);
    })
    
    // return to settings page
    this.router.navigate(['/settings']);
  }
}
