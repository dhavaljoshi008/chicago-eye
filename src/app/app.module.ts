import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CrimeStatsComponent } from './crime-stats/crime-stats.component';

import { CrimeRecordService } from './crime-record/crime-record.service';

@NgModule({
  declarations: [
    AppComponent, 
    DashboardComponent,
    CrimeStatsComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    routing
  ],
  providers: [CrimeRecordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
