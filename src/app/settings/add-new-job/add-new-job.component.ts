import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new-job',
  templateUrl: './add-new-job.component.html',
  styleUrls: ['./add-new-job.component.css']
})
export class AddNewJobComponent implements OnInit {

  saved:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  saveReleaseJob(){
    this.saved = true;
    setTimeout(()=>{
      this.saved = false;
    }, 3000)
  }

}
