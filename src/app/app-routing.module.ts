import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsComponent} from '../app/components/news/news.component';
import { AboutUsComponent} from '../app/components/about-us/about-us.component';
import { RegisterComponent} from '../app/components/register/register.component';
// import { ContactUsComponent} from '../app/components//contact-us/contact-us.component';
import { HomeComponent} from '../app/components/home/home.component';
import { ByPositionComponent} from '../app/components/players/by-position/by-position.component';
import { ByTeamComponent} from '../app/components/players/by-team/by-team.component';
import { DailyComponent} from '../app/components/players/daily/daily.component';
import { ActivesComponent} from '../app/components/players/actives/actives.component';
import { BiographyComponent} from '../app/components/players/biography/biography.component';
import { PitcherActivesComponent} from '../app/components/players/pitchers/pitcher-actives/pitcher-actives.component';
import { PitcherByTeamComponent} from '../app/components/players/pitchers/pitcher-by-team/pitcher-by-team.component';
import { PitcherBiographyComponent} from '../app/components/players/pitchers/pitcher-biography/pitcher-biography.component';
import { PitcherDailyComponent} from '../app/components/players/pitchers/pitcher-daily/pitcher-daily.component';

const routes: Routes = [
  { path: '',
  component: HomeComponent},
  { path: 'news',
  component: NewsComponent},
  { path: 'aboutUs',
  component: AboutUsComponent},
  { path: 'register',
  component: RegisterComponent},
  { path: 'position',
  component: ByPositionComponent},
  { path: 'team',
  component: ByTeamComponent},
  { path: 'daily',
  component: DailyComponent},
  { path: 'actives',
  component: ActivesComponent},
  { path: 'bioActives',
  component: BiographyComponent},
  { path: 'pitchActives',
  component: PitcherActivesComponent},
  { path: 'pitchTeam',
  component: PitcherByTeamComponent},
  { path: 'pitchBiography',
  component: PitcherBiographyComponent},
  { path: 'pitcherDaily',
  component: PitcherDailyComponent},
  // { path:'contactUs',
  // component: ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
