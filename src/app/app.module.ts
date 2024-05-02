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
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {HttpClientModule} from "@angular/common/http";
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { EventBubble6Component } from './event-bubble6/event-bubble6.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    Home1Component,
    Exec2Component,
    DiscussionInput3Component,
    DiscussionDisplay4Component,
    Events5Component,
    HeaderComponent,
    FooterComponent,
    EventBubble6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    MatToolbarModule,
    MatExpansionModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatGridListModule,
    CommonModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
