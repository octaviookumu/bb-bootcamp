import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { IconModule, LayoutModule, LogoModule } from '@backbase/ui-ang';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    IconModule,
    LayoutModule,
    HttpClientModule,
    LogoModule,
    NgbDropdownModule,
  ],
  providers: [...(environment.mockProviders || [])],
  bootstrap: [AppComponent],
})
export class AppModule {}
