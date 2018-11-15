import { Injectable } from '@angular/core';
import { Stats } from '../../interfaces/stats';
import { APIResponse } from '../../interfaces/response';
import { Players } from '../../interfaces/players';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { StatsDayliPlayer } from '../../interfaces/stats-dayli-player';



@Injectable({
  providedIn: 'root'
})
export class DataPlayersService {
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
    650402,
    660670,
    542583,
    514888,
    503556,
    542255,
    444489,
  ]

  private gameCode = [
    531368,
    // 531824,
    // 531829,
    // 531825,
    // 531833,
    // 531835,  
  ]


  private _url6 = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode +  '&season=2018&hydrate=stats(type=gameLog)';
  // private _url6 = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2018&hydrate=stats(type=season=2018),%20team(currentteam)';


  constructor(private http: HttpClient) { }

  getDataPlayers(): Observable<Players[]> {
    return this.http.get<Players[]>(this._url6);
  }

    //Obtencion de los datos diarios de un solo jugador
  getPlayerDaily2(): Observable<StatsDayliPlayer> {
    return this.http.get<StatsDayliPlayer>(this._url6);
  }



  // Para colocar todos los Json en un solo array. Genera Obsrvables
  getAllPlayersDaily2(): Observable<StatsDayliPlayer | undefined>[] {
    let dataAllPlayers2: Observable<StatsDayliPlayer | undefined>[] = [];
    for (let code of this.playersCode) {
      this._url6 = this._url6.replace(this.playerCode.toString(), code.toString())
      let dataP2 = this.getPlayerDaily2();
      dataAllPlayers2.push(dataP2);
      this.playerCode = code;
    }
    return dataAllPlayers2
  }


}






