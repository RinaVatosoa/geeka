import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {RouterModule, Routes} from '@angular/router';
import {HttpLink, HttpLinkModule} from 'apollo-angular-link-http';
import {ApolloModule,Apollo} from 'apollo-angular';
import {HttpClientModule} from '@angular/common/http';
import {InMemoryCache} from 'apollo-cache-inmemory';

import { AppComponent } from './app.component';
import { NavigationComponent } from './Component/navigation/navigation.component';
import { ParalaxComponent } from './Bundle/paralax/paralax.component';
import { Page2Component } from './Bundle/page2/page2.component';
import { FooterComponent } from './Component/footer/footer.component';
import { InscriptionComponent } from './Bundle/inscription/inscription.component';
import { TeamComponent } from './Bundle/team/team.component';
import { CoachComponent } from './Bundle/coach/coach.component';



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
    ),
    HttpClientModule,
    HttpLinkModule,
    ApolloModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(apollo: Apollo, httpLink:HttpLink){
    apollo.create({
        link: httpLink.create({ uri: 'https://api.graph.cool/simple/v1/cjp97444n9rkx0189x5hk04fi' }),
        cache: new InMemoryCache()
    });
  }
}
