import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {

  @Input() profile: any = {};
  @Input() index: number;

  constructor(
    private routerProfile: Router
  ) { }

  ngOnInit(): void {
  }

  detalleProfile() {
    this.routerProfile.navigate(['/profile',this.index]);
  }

}
