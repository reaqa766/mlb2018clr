import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivesComponent } from './components/players/actives/actives.component';
import { BiographyComponent } from './components/players/biography/biography.component';
import { ByPositionComponent } from './components/players/by-position/by-position.component';
import { ByTeamComponent } from './components/players/by-team/by-team.component';
import { DailyComponent } from './components/players/daily/daily.component';
import { PitchersComponent } from './components/players/pitchers/pitchers.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { RegisterComponent } from './components/register/register.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { NewsComponent } from './components/news/news.component';
import { PitcherActivesComponent } from './components/players/pitchers/pitcher-actives/pitcher-actives.component';
import { PitcherByTeamComponent } from './components/players/pitchers/pitcher-by-team/pitcher-by-team.component';
import { PitcherDailyComponent } from './components/players/pitchers/pitcher-daily/pitcher-daily.component';
import { PitcherBiographyComponent } from './components/players/pitchers/pitcher-biography/pitcher-biography.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivesComponent,
    BiographyComponent,
    ByPositionComponent,
    ByTeamComponent,
    DailyComponent,
    PitchersComponent,
    HomeComponent,
    AboutUsComponent,
    RegisterComponent,
    FooterComponent,
    MenuComponent,
    NewsComponent,
    PitcherActivesComponent,
    PitcherByTeamComponent,
    PitcherDailyComponent,
    PitcherBiographyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
