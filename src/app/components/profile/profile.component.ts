import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfilesService } from '../../services/profiles.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private profilesService: ProfilesService
  ) {
    this.activatedRoute.params.subscribe(( parametros ) => {
      this.profile  = this.profilesService.obtenerProfile(parametros['indice']);
    })
  }

  ngOnInit(): void {
  }

}
