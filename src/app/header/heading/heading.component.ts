import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/service/apiservice.service';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {


  constructor(private api:ApiserviceService) { }

  ngOnInit(): void {
  }

  search(event:any){
    let searchKey = event.target.value
    this.api.searchKey.next(searchKey)
  }



}
