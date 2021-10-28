import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-gifs-resultado',
  templateUrl: './gifs-resultado.component.html',
  styles: [
  ]
})
export class GifsResultadoComponent{

  get resultados() {
    return this.gifsService.resultados;
  }

  constructor( private gifsService: GifsService) { }


}
