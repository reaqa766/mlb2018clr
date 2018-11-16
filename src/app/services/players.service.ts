import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Players } from '../../interfaces/players';
import { StatsDayliPlayer } from '../../interfaces/stats-dayli-player';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  playerCode = 596115;
  // gameCode = 563385;


  // playersList = [
  //   {name:"Jose Altuve",
  //   position : "segunda base"},

  //   {name : "Gleyber Torres",
  //   position : "segunda base"},

  //   {name : "Ronald Acuña Jr.",
  //   position : "Leftfield"},

  //   {name : "Ender Inciarte",
  //   position : "Centerfield"}

  // ]



  // Array de Codigo de Jugadores
  private playersCode = [
    650402, 660670, 542583, 514888, 503556,
    542255, 444489, 501303, 462101,
    516472, 606115, 553902, 641319,
    620439, 453923, 593993, 452678,
    408234, 605612, 465041,
    455139, 575929,
    553869, 444876, 500871, 527038,
    520471, 541645, 554054, 471865,
    503556, 492802, 514917,
    491676, 546318, 506702,
    446653, 553988, 500874,
    400121, 471083,
    553882, 600524, 596059, 542364, 591741,
    467827, 444482, 606299, 542208,
    541650, 521692, 463610,
    517369, 445988, 467092, 622682,
    500743,
    602922, 506703, 570560,
    467055, 623993, 596143,
    500208, 553993, 491696, 542513,
    624636, 591720, 472528, 591971, 545121,
    622713


  ]
  // private playersCode = [
  //   650402, 660670, 542583, 514888, 503556,
  //   542255, 444489, 501303, 621237, 462101,
  //   516472, 606115, 553902, 641319, 501593,
  //   620439, 453923, 611093, 593993, 452678,
  //   408234, 471911, 620454, 605612, 465041,
  //   468504, 455139, 630023, 575929, 571035,
  //   553869, 444876, 500871, 527038, 521655,
  //   520471, 541645, 491646, 554054, 471865,
  //   503556, 492802, 448855, 514917, 622694,
  //   433587, 491676, 546318, 500872, 506702,
  //   446653, 641154, 553988, 608566, 500874,
  //   400121, 622795, 471083, 591672, 622382,
  //   553882, 600524, 596059, 542364, 591741,
  //   622161, 467827, 444482, 606299, 542208,
  //   541650, 527048, 521692, 463610, 433589,
  //   517369, 445988, 591693, 467092, 622682,
  //   593958, 600965, 500743, 541652, 444468,
  //   602922, 614179, 506703, 434671, 570560,
  //   467055, 623993, 596143, 622608, 462515,
  //   500208, 553993, 624133, 491696, 542513,
  //   624636, 591720, 472528, 591971, 545121,
  //   553878, 622713


  // ]

  private gameCode = [
    531368,
    // 531824,
    // 531829,
    // 531825,
    // 531833,
    // 531835,
  ]


  // Url del Api con los datos de cada juego para un Jugador particular
  // private _url = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2018&hydrate=stats(group=hitting,type=gameLog)';
  // private _url = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2018&hydrate=stats(group=[hitting,pitching],type=[career,statSplits],sitCodes=a,sportId=12)';
  private _url5 = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2018&hydrate=stats(group=[hitting],type=[pecota],sportId=12)';
  private _url1 = 'http://statsapi.mlb.com/api/v1/people/' + this.playerCode + '/stats/game/' + this.gameCode ;
  private _url4 = 'https://statsapi.mlb.com/api/v1/teams/109/roster?hydrate=person(stats(type=season,season=2018),education)&rosterType=Active';
  private _url = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2018&hydrate=stats(type=season=2018),%20team(currentteam)';
  private _url6 = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode +  '&season=2018&hydrate=stats(type=gameLog)';


  constructor(private http: HttpClient) { }

  //Obtencion de los datos de temporada de un solo jugador
  getPlayeActive(): Observable<StatsDayliPlayer> {
    return this.http.get<StatsDayliPlayer>(this._url);
  }

  // Para colocar todos los Json en un solo array. Genera Observables
  getAllPlayersActives(): Observable<StatsDayliPlayer | undefined>[] {
    let dataAllPlayers: Observable<StatsDayliPlayer | undefined>[] = [];
    for (let code of this.playersCode) {
      this._url = this._url.replace(this.playerCode.toString(), code.toString())
      let dataP = this.getPlayeActive();
      dataAllPlayers.push(dataP);
      this.playerCode = code;
    }
    return dataAllPlayers
  }

}
