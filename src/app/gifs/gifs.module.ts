import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { GifsBusquedaComponent } from './gifs-busqueda/gifs-busqueda.component';
import { GifsResultadoComponent } from './gifs-resultado/gifs-resultado.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    GifsBusquedaComponent,
    GifsResultadoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GifsPageComponent
  ]
})
export class GifsModule { }
