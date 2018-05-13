import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SeptaComponent} from './septa/septa.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DataDetailComponent} from './data-detail/data-detail.component';
import {MapComponent} from './map/map.component';


const routes: Routes = [
  {path: 'heroes', component: SeptaComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'map', component: MapComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'detail/:id', component: DataDetailComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
