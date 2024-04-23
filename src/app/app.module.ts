import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { Home1Component } from './home1/home1.component';
import { Exec2Component } from './exec2/exec2.component';
import { DiscussionInput3Component } from './discussion-input3/discussion-input3.component';
import { DiscussionDisplay4Component } from './discussion-display4/discussion-display4.component';
import { Events5Component } from './events5/events5.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    Home1Component,
    Exec2Component,
    DiscussionInput3Component,
    DiscussionDisplay4Component,
    Events5Component,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
