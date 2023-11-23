import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  teams: any;
  oneTeam: any;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    let response = this.http.get('http://localhost:8080/api/v2/teams');
    response.subscribe((data) => {
      this.teams = data;
    });
  }

  getTeam(id: any) {
    let response = this.http.get(`http://localhost:8080/api/v2/teams/${id}`);

    response.subscribe((data) => {
      this.oneTeam = data;
    });
  }
}
