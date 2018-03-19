import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

 import { AppRoutingModule } from './app.routes';
 import { FormsModule } from '@angular/forms';

 import { DataTableModule } from './data-table/index';

import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/header/header.component';
import { SidebarComponent } from './modules/sidebar/sidebar.component';
import { LayoutComponent } from './modules/layout/layout.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { HomeComponent } from './modules/home/home.component';
import { WeatherService } from './services/chart/weather.service';
import { FinancialComponent } from './modules/financial/financial.component';
import { GstmasterComponent } from './modules/gstmaster/gstmaster.component';
import { UnitmasterComponent } from './modules/unitmaster/unitmaster.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    LayoutComponent,
    DashboardComponent,
    HomeComponent,
    FinancialComponent,
    GstmasterComponent,
    UnitmasterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    DataTableModule

  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
