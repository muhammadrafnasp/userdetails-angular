import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../service/apiservice.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchTerm:string = '';

  constructor(private api: ApiserviceService) { }
 
  // display user details
  userDetails: any = [];

  ngOnInit(): void {
    this.api.userData().subscribe((result:any) => {
      console.log(result.data);
      this.userDetails = result.data;

    })

    this.api.searchKey.subscribe(
      (result:any)=>{
        this.searchTerm = result
      }
    )
  }

}
