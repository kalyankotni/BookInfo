import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListBookinfoComponent } from './bookinfo/list-bookinfo/list-bookinfo.component';
import { AddBookinfoComponent } from './bookinfo/add-bookinfo/add-bookinfo.component';
import { ViewBookinfoComponent } from './bookinfo/view-bookinfo/view-bookinfo.component';


const routes: Routes = [
  {path:'',component:ListBookinfoComponent},
  { path: 'list', component: ListBookinfoComponent },
  { path: 'add', component: AddBookinfoComponent },
  { path: 'view', component: ViewBookinfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
