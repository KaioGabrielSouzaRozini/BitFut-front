import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './table/table.component';
import { TeamComponent } from './team/team.component';

@NgModule({
  declarations: [AppComponent, TableComponent, TeamComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
