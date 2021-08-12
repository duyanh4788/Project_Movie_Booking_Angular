import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { SliderComponent } from './home/slider/slider.component';
import { DropdownComponent } from './home/dropdown/dropdown.component';
import { ListMoveComponent } from './home/listmovie/listmovie.component';
import { NavigationtabComponent } from './home/navigationtab/navigationtab.component';
import { ClientRoutingModule } from './client-routing.module';
import { MaterialModule } from '../core/shared/material/material.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { PipeModule } from '../core/shared/pipe/pipe.module';
import { ComponentModule } from './component/component.module';
import { HeaderresponsiveComponent } from './home/headerresponsive/headerresponsive.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FootercarouselComponent } from './home/footer/footercarousel/footercarousel.component';
import { FooterinfoComponent } from './home/footer/footerinfo/footerinfo.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ClientComponent,
    HomeComponent,
    HeaderComponent,
    HeaderresponsiveComponent,
    FooterComponent,
    SliderComponent,
    DropdownComponent,
    ListMoveComponent,
    NavigationtabComponent,
    FootercarouselComponent,
    FooterinfoComponent,
    SigninComponent,
    SignupComponent,
  ],
  imports: [
    CommonModule,
    ComponentModule,
    ClientRoutingModule,
    MaterialModule,
    SlickCarouselModule,
    PipeModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ClientComponent,
  ]
})
export class ClientModule { }
