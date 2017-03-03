import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Http, Response} from "@angular/http";
import {MasterURlService} from "../services/master-url.service";

@Component({
  selector: 'app-pokemon',
  templateUrl: 'pokemon.component.html',
  styleUrls: ['pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  private _parametros: any;
  pokemons=[];
  nuevoPokemon= {};
  constructor(private _ActivatedRoute: ActivatedRoute,
              private _http:Http,
              private _masterURL:MasterURlService) {
  }

  ngOnInit() {

    this._ActivatedRoute
      .params
      .subscribe(parametros => {
        this._parametros = parametros;
        this._http.get(this._masterURL.url+'Pokemon?idTienda='+this._parametros.idTienda)
          .subscribe(
            (res:Response)=>{
              this.pokemons = res.json();
            },
            (err)=>{
              console.log(err)
            }
          )

      });

  }
  crearPokemon(nombre:string){
    let pokemon = {
      nombre:nombre,
      idTienda:this._parametros.idTienda
    };
    this._http.post(this._masterURL.url+'Pokemon',pokemon)
      .subscribe(
        (res:Response)=>{
          this.pokemons.push(res.json());
          this.nuevoPokemon = {};
        },
        (err)=>{
          console.log(err)
        }
      )
  }

}
