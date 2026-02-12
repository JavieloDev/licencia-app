import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../../src/app/feature/home/home.routes').then(
        childRoutes => childRoutes.routes
      ),
  },
];
