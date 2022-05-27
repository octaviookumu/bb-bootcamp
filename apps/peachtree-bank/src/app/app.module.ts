import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

import { IconModule, LayoutModule, LogoModule } from '@backbase/ui-ang';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    IconModule,
    LayoutModule,
    HttpClientModule,
    LogoModule,
    NgbDropdownModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
