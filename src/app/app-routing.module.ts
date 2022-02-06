import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoinGrillaComponent } from './Components/coin-grilla/coin-grilla.component';
import { NavComponent } from './Components/nav/nav.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'index',
        component: CoinGrillaComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
