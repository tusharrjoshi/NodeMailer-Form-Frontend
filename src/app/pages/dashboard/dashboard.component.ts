import { Component, OnInit, ElementRef } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dataList:any;
  constructor(private elementRef: ElementRef,private api:ApiService) { }

  ngOnInit(): void {
    this.api.getData().then((res:any)=>{
      this.dataList = res.data;
    })
  }

}
