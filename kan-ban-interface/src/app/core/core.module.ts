import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavegationBarComponent } from './navegation-bar/navegation-bar.component';
import { UserMenuComponent } from './user-menu/user-menu.component';



@NgModule({
  declarations: [
    HomeComponent,
    NavegationBarComponent,
    UserMenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    NavegationBarComponent
  ]
})
export class CoreModule { }
