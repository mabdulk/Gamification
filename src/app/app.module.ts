import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './core/material.module';
import { NavigationComponent } from './navigation/navigation.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { MatTableModule, MatFormFieldModule, MatInputModule, MatCardModule } from '@angular/material';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { TeamManageComponent } from './team-manage/team-manage.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MainPageComponent,
    ViewProfileComponent,
    TeamDetailComponent,
    TeamManageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule
  ],
  exports: [
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
