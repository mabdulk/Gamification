import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './core/material.module';
import { NavigationComponent } from './navigation/navigation.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
<<<<<<< HEAD
import { MatTableModule, MatFormFieldModule, MatInputModule } from '@angular/material';
=======
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { MatInputModule } from '@angular/material/input';
>>>>>>> 27639f05d9a18232bc33721be4bd77f9cf1d3a5c

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MainPageComponent,
    ViewProfileComponent,
    TeamDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
