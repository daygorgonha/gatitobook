import { Observable, switchMap } from 'rxjs';
import { Animais } from './../animais';
import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';
import { AnimaisService } from '../animais.service';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.css']
})
export class ListaAnimaisComponent implements OnInit {

  animais$!: Observable<Animais>;

  constructor(
    private usuarioService: UsuarioService,
    private animaisService: AnimaisService
  ) { }

  ngOnInit(): void {
    this.animais$ = this.usuarioService.retornaUsuario().pipe(
      switchMap((usuario) => {
        const username = usuario.name ?? '';
        return this.animaisService.listaDoUsuario(username);
      })
    )
  }

}
