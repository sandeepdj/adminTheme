 // Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';




import { HeaderComponent } from './modules/header/header.component';
import { SidebarComponent } from './modules/sidebar/sidebar.component';
import { LayoutComponent } from './modules/layout/layout.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { HomeComponent } from './modules/home/home.component';
import { FinancialComponent } from './modules/financial/financial.component';
import { GstmasterComponent } from './modules/gstmaster/gstmaster.component';
import { UnitmasterComponent } from './modules/unitmaster/unitmaster.component';


export const routes: Routes = [
   {path: '', redirectTo: 'Home', pathMatch: 'full'},
    { path: 'Home', component: LayoutComponent,
     children: [
        { path: '', redirectTo: 'Dashboard', pathMatch: 'full' },
        { path: 'Dashboard', component: DashboardComponent },
        { path: 'Overview', component: HomeComponent },
        { path: 'Financial', component: FinancialComponent },
        { path: 'GSTslab', component: GstmasterComponent },
        { path: 'UnitMaster', component: UnitmasterComponent }


        ]
    },
    {path: '**', redirectTo: 'Login', pathMatch: 'full'}
  ];



const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

