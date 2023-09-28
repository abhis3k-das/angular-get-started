import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
})
export class DataComponent implements OnInit {
  
  message:string;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.fetchData().subscribe((data: any) => {
      this.message = data.message;
    });
  }
}
