import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";


import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './home/header/header.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { NotificationComponent } from './events/notification/notification.component';
import { NorouteComponent } from './notfound/noroute/noroute.component';
import { SuperComponent } from './directive/super/super.component';
import { InbuiltComponent } from './pipe/inbuilt/inbuilt.component';
import { CustompipeComponent } from "./pipe/custompipe/custompipe.component";
import { SuperstringPipe } from './custompipe/superstring.pipe';
import { TemplateformComponent } from './forms/templateform/templateform.component';
import { ReactiveformComponent } from './forms/reactiveform/reactiveform.component';
import { ConsumeLocal1Component } from './consume/consume-local1/consume-local1.component';
import { ConsumeLocal2Component } from './consume/consume-local2/consume-local2.component';

//@ -> decorator
@NgModule(
  {
    declarations: [
                    RootComponent,
                    HomepageComponent,
                    HeaderComponent,
                    SidebarComponent,
                    NotificationComponent,
                    NorouteComponent,
                    SuperComponent,
                    InbuiltComponent,
                    CustompipeComponent,
                    SuperstringPipe,
                    TemplateformComponent,
                    ReactiveformComponent,
                    ConsumeLocal1Component,
                    ConsumeLocal2Component
                  ],
    imports: [
                BrowserModule,
                AppRoutingModule,
                FormsModule,
                ReactiveFormsModule
                
              ],
    providers: [],
    bootstrap: [RootComponent]

  })
export class RootModule { }
