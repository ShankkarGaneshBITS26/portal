import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonenumbervalidationDirective } from './directives/phonenumbervalidation.directive';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { SideBarComponent } from './component/side-bar/side-bar.component';



@NgModule({
  declarations: [
    PhonenumbervalidationDirective,
    HeaderComponent,
    FooterComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PhonenumbervalidationDirective,
    HeaderComponent,
    FooterComponent,
    SideBarComponent
  ]
})
export class SharedModule { }
