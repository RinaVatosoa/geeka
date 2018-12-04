import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './Component/navigation/navigation.component';
import { ParalaxComponent } from './Bundle/paralax/paralax.component';
import { Page2Component } from './Bundle/page2/page2.component';
import { FooterComponent } from './Component/footer/footer.component';
import { InscriptionComponent } from './Bundle/inscription/inscription.component';
import { TeamComponent } from './Component/team/team.component';
import { CoachComponent } from './Component/coach/coach.component';



const appRoutes: Routes = [
    { path: '', component: ParalaxComponent },
    { path: 'page2', component: Page2Component },
    { path: 'inscription', component: InscriptionComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ParalaxComponent,
    Page2Component,
    FooterComponent,
    InscriptionComponent,
    TeamComponent,
    CoachComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
      RouterModule.forRoot(
          appRoutes,
          {enableTracing: true }
      )
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
