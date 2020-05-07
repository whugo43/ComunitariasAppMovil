import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'donaciones',
    loadChildren: () => import('./donaciones/donaciones.module').then( m => m.DonacionesPageModule)
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
    loadChildren: () => import('./centro-acopio/centro-acopio.module').then( m => m.CentroAcopioPageModule)
  },
  
  {
    path: 'generar-donacion',
    loadChildren: () => import('./donaciones/generar-donacion/generar-donacion.module').then( m => m.GenerarDonacionPageModule)
  },
  {
    path: 'campaign',
    children:[
      {
        path:'',
        loadChildren: () => import('./campaign/campaign.module').then( m => m.CampaignPageModule)
      },
      {
        path: ':detallecampaign',
        loadChildren: () => import('./campaign/detalle-campaign/detalle-campaign.module').then( m => m.DetalleCampaignPageModule)
      }
  ]
  },  
  {
    path: 'campaignid',
    children:[
      {
        path:'',
        loadChildren: () => import('./campaign/campaign.module').then( m => m.CampaignPageModule)
      },
      {
        path: ':campaignId',
        loadChildren: () => import('./campaign/editar-campaign/editar-campaign.module').then( m => m.EditarCampaignPageModule)
      }
  ]
  },
     
  

  {
    path: 'generar-campaign',
    loadChildren: () => import('./campaign/generar-campaign/generar-campaign.module').then( m => m.GenerarCampaignPageModule)
  },
  {
    path: 'distribucion',
    loadChildren: () => import('./distribucion/distribucion.module').then( m => m.DistribucionPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
