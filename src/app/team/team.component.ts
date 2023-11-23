import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent {
  oneTeam: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getTeam(13);
  }

  getTeam(id: any) {
    let response = this.http.get(`http://localhost:8080/api/v2/teams/${id}`);

    response.subscribe((data) => {
      this.oneTeam = data;
    });
  }
}
