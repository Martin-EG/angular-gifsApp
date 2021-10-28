import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey     : string   = "Q7k3ywM2bYCz8m2O5KTQX29wxnIwCpRm";
  private servicioUrl: string   = "https://api.giphy.com/v1/gifs";
  private _historial : string[] = [];
  
  public resultados: Gif[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor( private http: HttpClient ) {
    this._historial = JSON.parse(localStorage.getItem("gifsHistorial")!) || [];
    this.resultados = JSON.parse(localStorage.getItem("gifsResultados")!) || [];
  }

  buscarGifs( query: string = '' ) {

    query = query.trim().toLocaleLowerCase();

    if(!this._historial.includes( query )) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);

      localStorage.setItem("gifsHistorial", JSON.stringify(this._historial));
    }

    const params = new HttpParams()
        .set("api_key", this.apiKey)
        .set("q", query)
        .set("limit", '10');

    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`, { params })
      .subscribe( (resp) => {
        this.resultados = resp.data;
        localStorage.setItem("gifsResultados", JSON.stringify(this.resultados));
      })

    

    // fetch(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=10`)
    //   .then( resp => {
    //     resp.json().then(data => {
    //       console.log(data);
    //     })
    //   })

  }

}