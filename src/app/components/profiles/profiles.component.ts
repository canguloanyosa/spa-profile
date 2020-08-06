import { Component, OnInit } from '@angular/core';
import { ProfilesService } from '../../services/profiles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  profiles: any [] = [];

  constructor( 
    private profilesService: ProfilesService,
    private routerProfile: Router
    ) {
    
  }

  ngOnInit(): void {

    this.profiles = this.profilesService.obtenerProfiles();
    console.log(this.profiles);
  }

  detalleProfile( indice: number ) {
    this.routerProfile.navigate(['/profile',indice]);
  }
  
}
