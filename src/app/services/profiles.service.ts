import { Injectable, DefaultIterableDiffer } from '@angular/core';

@Injectable()
export class ProfilesService {

    private profiles: Profile [] = [
        {
            nombre: 'Elki Guerrero',
            info: 'El trabajador del mes',
            image: 'assets/img/profile01.png',
            inicio: '2010-01-01',
            empresa: 'GNB'
        },
        {
            nombre: 'Cesar Villcas',
            info: 'El trabajador del año',
            image: 'assets/img/profile02.png',
            inicio: '2000-01-01',
            empresa: 'BCP'
        },
        {
            nombre: 'Cristian Angulo',
            info: 'El trabajador del día',
            image: 'assets/img/profile03.png',
            inicio: '2017-01-01',
            empresa: 'ATPSAC'
        }
    ];

    constructor() {
        console.log('Servicio listo!!!');
    }

    obtenerProfiles(): Profile[] {
        return this.profiles;
    }

    obtenerProfile( indice: number ) {
        return this.profiles[indice];
    }

}

export interface Profile {
    nombre: string,
    info: string,
    image: string,
    inicio: string,
    empresa: string
}


