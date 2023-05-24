import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './modules/contact/contact.component';
import { LayoutComponent } from './modules/main-layout/layout/layout.component';
import { NavigationComponent } from './modules/main-layout/navigation/navigation.component';
import { FooterComponent } from './modules/main-layout/footer/footer.component';
import { HomeComponent } from './modules/home/home.component';
import { AuthModule } from './modules/auth/auth.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './modules/group-modules/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialLegacyModule } from './modules/group-modules/material/material-legacy.module';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { InWorkComponent } from './modules/in-work/in-work.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    LayoutComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    InWorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MaterialLegacyModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
