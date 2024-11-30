import { MessageService } from 'primeng/api';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { IconeSvgComponent } from './icone/icone-svg/icone-svg.component';
import { HttpClientModule } from '@angular/common/http';
import { IncomeCalcFormComponent } from './income-calc-form/income-calc-form.component';
import { CardModule } from 'primeng/card';
import { InputNumberModule } from 'primeng/inputnumber';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { DividerModule } from 'primeng/divider';
import { ToastModule } from 'primeng/toast';
import { SidebarModule } from 'primeng/sidebar';
import { AlertColorTextPipe } from './core/pipes/alert-color-text/alert-color-text.pipe';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    IconeSvgComponent,
    IncomeCalcFormComponent,
    AlertColorTextPipe,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    CardModule,
    InputNumberModule,
    ChartModule,
    ReactiveFormsModule,
    TableModule,
    DividerModule,
    ToastModule,
    SidebarModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
