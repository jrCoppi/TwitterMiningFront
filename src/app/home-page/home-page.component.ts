import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private http: HttpClient, private apiService: ApiService) {}

  ngOnInit(): void {
    // Send Http request

    this.apiService.fetchSearch('overwatch').subscribe(
      posts => {
        console.log(posts);
      },
      error => {
        console.log(error);
      }
    );
  }

}
