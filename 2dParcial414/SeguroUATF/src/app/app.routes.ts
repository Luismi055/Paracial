import { Routes } from '@angular/router';
import { DatosGeneralesComponent } from './institucional/datos-generales/datos-generales.component';
import { SituacionGeograficaComponent } from './institucional/situacion-geografica/situacion-geografica.component';
import { PlanEjecutivoComponent } from './institucional/plan-ejecutivo/plan-ejecutivo.component';
import { EstructuraOrganicaComponent } from './institucional/estructura-organica/estructura-organica.component';
import { DirectorioComponent } from './institucional/directorio/directorio.component';
import { InicioComponent } from './inicio/inicio.component';

export const routes: Routes = [
{
   path:'',
   children:[
    {
        path:'inicio',
        component:InicioComponent
    },
    {
        path:'institucional',
        children:[
            {
                path:'datos_generales',
                component: DatosGeneralesComponent
            },
            {
                path:'situacion_geografica',
                component: SituacionGeograficaComponent
            },
            {
                path:'plan_ejecutivo',
                component: PlanEjecutivoComponent
            },
            {
                path:'estructura_organica',
                component:EstructuraOrganicaComponent
            },
            {
                path:'directorio',
                component: DirectorioComponent
            }
        ],
    },
    {
        path:'servicio',
        children:[
    
        ],
    },
   ],

},
];
