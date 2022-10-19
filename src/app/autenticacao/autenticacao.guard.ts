import { UsuarioService } from './usuario/usuario.service';
import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoGuard implements CanLoad {

  constructor(private usuarioService: UsuarioService, private route: Router) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
    ):
      Observable<boolean | UrlTree>
      | Promise<boolean | UrlTree>
      | boolean
      | UrlTree {

      if(!this.usuarioService.estaLogado()) {
        this.route.navigate(['']);
        return false;
      }

      return true;
  }
}
