import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
import { MaterialModule } from './app.material';

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
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    DataTableModule,
    MaterialModule

  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
