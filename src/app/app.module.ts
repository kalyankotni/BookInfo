import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListBookinfoComponent } from './bookinfo/list-bookinfo/list-bookinfo.component';
import { ViewBookinfoComponent } from './bookinfo/view-bookinfo/view-bookinfo.component';
import { AddBookinfoComponent } from './bookinfo/add-bookinfo/add-bookinfo.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
@NgModule({
  declarations: [
    AppComponent,
    ListBookinfoComponent,
    ViewBookinfoComponent,
    AddBookinfoComponent,
  ],
  imports: [
    BrowserModule, MatToolbarModule, MatIconModule, MatCardModule,
    AppRoutingModule, MatTabsModule, MatFormFieldModule, MatInputModule,
    BrowserAnimationsModule, MatTableModule, ReactiveFormsModule, MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
