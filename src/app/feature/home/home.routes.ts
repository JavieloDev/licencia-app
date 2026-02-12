import {Routes} from '@angular/router';
import {Home} from './home';
import {Examen1} from '../examen-1/examen-1';
import {Examen2} from '../examen-2/examen-2';
import {Examen10} from '../examen-10/examen-10';
import {Examen9} from '../examen-9/examen-9';
import {Examen8} from '../examen-8/examen-8';
import {Examen7} from '../examen-7/examen-7';
import {Examen6} from '../examen-6/examen-6';
import {Examen5} from '../examen-5/examen-5';
import {Examen4} from '../examen-4/examen-4';
import {Examen3} from '../examen-3/examen-3';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    children: [
      {
        path: 'examen-1',
        component: Examen1,
      },
      {
        path: 'examen-2',
        component: Examen2,
      },
      {
        path: 'examen-3',
        component: Examen3,
      },
      {
        path: 'examen-4',
        component: Examen4,
      },
      {
        path: 'examen-5',
        component: Examen5,
      },
      {
        path: 'examen-6',
        component: Examen6,
      },
      {
        path: 'examen-7',
        component: Examen7,
      },
      {
        path: 'examen-8',
        component: Examen8,
      },
      {
        path: 'examen-9',
        component: Examen9,
      },
      {
        path: 'examen-10',
        component: Examen10,
      },
    ],
  },
];
