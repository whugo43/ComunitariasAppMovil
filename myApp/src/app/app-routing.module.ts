import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
 
  {
    path: 'contacts',
    loadChildren: () => import('./contacts/contacts.module').then( m => m.ContactsPageModule)
  },
  {
    path: 'empresas',
    loadChildren: () => import('./empresas/empresas.module').then( m => m.EmpresasPageModule)
  },
  {
    path: 'categoria',
    children:[
      {
        path:'',
        loadChildren: () => import('./categoria/categoria.module').then( m => m.CategoriaPageModule)
      },
      {
        path: ':categoriaId',
        loadChildren: () => import('./categoria/editar-categoria/editar-categoria.module').then( m => m.EditarCategoriaPageModule)
      }
  ]
  },
  {
    path: 'generar-categoria',
    loadChildren: () => import('./categoria/generar-categoria/generar-categoria.module').then( m => m.GenerarCategoriaPageModule)
  },
  {
    path: 'centro-acopio',
    children:[
      {
        path:'',
        loadChildren: () => import('./centro-acopio/centro-acopio.module').then( m => m.CentroAcopioPageModule)
      },
      {
        path: ':centro-acopioId',
        loadChildren: () => import('./centro-acopio/ubicacion/ubicacion.module').then( m => m.UbicacionPageModule)
      }
  ]
  },  
  {
    path: 'campaign',
    children:[
      {
        path:'',
        loadChildren: () => import('./campaign/campaign.module').then( m => m.CampaignPageModule)
      },
      {
        path: 'editarcampaign/:id',
        loadChildren: () => import('./campaign/editar-campaign/editar-campaign.module').then( m => m.EditarCampaignPageModule)
      },
      {
        path: 'detallecampaign/:id',
        loadChildren: () => import('./campaign/detalle-campaign/detalle-campaign.module').then( m => m.DetalleCampaignPageModule)
      }, 
      {
        path: 'generar-campaign',
        loadChildren: () => import('./campaign/generar-campaign/generar-campaign.module').then( m => m.GenerarCampaignPageModule)
      }
    ]
  },

  {
    path: 'donaciones',
    children:[
      {
        path:'',
        loadChildren: () => import('./donaciones/donaciones.module').then( m => m.DonacionesPageModule)
      },

      {
        path: 'editardonacion/:id',
        loadChildren: () => import('./donaciones/editar-donacion/editar-donacion.module').then( m => m.EditarDonacionPageModule)
      },
      {
        path: 'detalledonacion/:id',
        loadChildren: () => import('./donaciones/detalle-donacion/detalle-donacion.module').then( m => m.DetalleDonacionPageModule)
      },
      {
        path: 'generar-donacion',
        loadChildren: () => import('./donaciones/generar-donacion/generar-donacion.module').then( m => m.GenerarDonacionPageModule)
      }
    ]
  },

  {
    path: 'distribucion',
    loadChildren: () => import('./distribucion/distribucion.module').then( m => m.DistribucionPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'grupos-de-apoyo',
    loadChildren: () => import('./grupos-de-apoyo/grupos-de-apoyo.module').then( m => m.GruposDeApoyoPageModule)
  },
  {
    path: 'proveedor',
    loadChildren: () => import('./proveedor/proveedor.module').then( m => m.ProveedorPageModule)
  },
  {
    path: 'generarproveedor',
    loadChildren: () => import('./proveedor/generarproveedor/generarproveedor.module').then( m => m.GenerarproveedorPageModule)
  },
  {
    path: 'volunteer',
    loadChildren: () => import('./volunteer/volunteer.module').then( m => m.VolunteerPageModule)
  },
  {
    path: 'generarvolunteer',
    loadChildren: () => import('./volunteer/generarvolunteer/generarvolunteer.module').then( m => m.GenerarvolunteerPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}