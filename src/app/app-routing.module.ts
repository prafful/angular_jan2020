import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { NotificationComponent } from './events/notification/notification.component';
import { NorouteComponent } from './notfound/noroute/noroute.component';
import { SuperComponent } from './directive/super/super.component';
import { InbuiltComponent } from './pipe/inbuilt/inbuilt.component';
import { CustompipeComponent } from './pipe/custompipe/custompipe.component';
import { TemplateformComponent } from './forms/templateform/templateform.component';
import { ReactiveformComponent } from './forms/reactiveform/reactiveform.component';
import { ConsumeLocal1Component } from './consume/consume-local1/consume-local1.component';
import { ConsumeLocal2Component } from './consume/consume-local2/consume-local2.component';
import { ConsumeremoteComponent } from './consume/consumeremote/consumeremote.component';
import { ViewcabComponent } from './consume/viewcab/viewcab.component';
import { AddcabComponent } from './consume/addcab/addcab.component';
import { EditcabComponent } from './consume/editcab/editcab.component';
import { ParentComponent } from './eventbinding/parent/parent.component';


const routes: Routes = [
  
  {
    path:'',
    redirectTo:'notify',
    pathMatch:'full'
  },
  {
    path:'homepage',
    component:HomepageComponent
  },
  {
    path:'notify',
    component:NotificationComponent
  } ,
  {
    path:'directive',
    component:SuperComponent
  },
  {
    path:'inbuiltpipe',
    component:InbuiltComponent
  },
  {
    path:'custompipe',
    component:CustompipeComponent
  },
  {
    path:'templateform',
    component:TemplateformComponent
  },
  {
    path:'reactiveform',
    component:ReactiveformComponent
  },
  {
    path:'consume1',
    component:ConsumeLocal1Component
  },
  {
    path:'consume2',
    component:ConsumeLocal2Component
  },
  {
    path:'remote',
    component:ConsumeremoteComponent
  },
  {
    path:'viewcab/:myid',
    component:ViewcabComponent
  },
  {
    path:'openaddcab',
    component:AddcabComponent
  },
  {
    path:'editcab/:editId',
    component:EditcabComponent
  },
  {
    path:'eventbinding',
    component:ParentComponent
  },
  {
    path:'**',
    component:NorouteComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
