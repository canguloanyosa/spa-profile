import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfilesService, Profile } from '../../services/profiles.service'

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  profiles: Profile[] = [];
  textoBusqueda: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private profileService: ProfilesService,
    private routerProfile: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.textoBusqueda = params['texto'];
      this.profiles = this.profileService.buscarProfile(params['texto']);
      console.log(this.profiles);
    });
  }

  detalleProfile( indice: number ) {
    this.routerProfile.navigate(['/profile',indice]);
  }

}
