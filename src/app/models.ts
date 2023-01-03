declare module namespace {

    export interface Gazometre {
        value: string;
    }

    export interface LED {
        name: string;
        value: number;
    }

    export interface Mouvement {
        value: boolean;
    }

    export interface Thermometre {
        value: number;
    }

    export interface Photoelectrique {
        value: number;
    }

    export interface capteur {
        gazometre: Gazometre;
        LED: LED[];
        mouvement: Mouvement;
        thermometre: Thermometre;
        photoelectrique: Photoelectrique;
    }

}
