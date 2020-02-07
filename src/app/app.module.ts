import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './home/header/header.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { NotificationComponent } from './events/notification/notification.component';
import { NorouteComponent } from './notfound/noroute/noroute.component';
import { SuperComponent } from './directive/super/super.component';
import { InbuiltComponent } from './pipe/inbuilt/inbuilt.component';
import { CustompipeComponent } from './pipe/custompipe/custompipe.component';
import { SuperstringPipe } from './custompipe/superstring.pipe';
import { TemplateformComponent } from './forms/templateform/templateform.component';
import { ReactiveformComponent } from './forms/reactiveform/reactiveform.component';
import { ConsumeLocal1Component } from './consume/consume-local1/consume-local1.component';
import { ConsumeLocal2Component } from './consume/consume-local2/consume-local2.component';
import { ConsumeremoteComponent } from './consume/consumeremote/consumeremote.component';
import { ViewcabComponent } from './consume/viewcab/viewcab.component';
import { AddcabComponent } from './consume/addcab/addcab.component';
import { EditcabComponent } from './consume/editcab/editcab.component';
import { ParentComponent } from './eventbinding/parent/parent.component';
import { Child1Component } from './eventbinding/child1/child1.component';
import { Child2Component } from './eventbinding/child2/child2.component';
import { AnimatetextComponent } from './animation/animatetext/animatetext.component';
import { Route1Component } from './events/route1/route1.component';
import { Route2Component } from './events/route2/route2.component';
import { Route3Component } from './events/route3/route3.component';


// @ -> decorator
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
                    ConsumeLocal2Component,
                    ConsumeremoteComponent,
                    ViewcabComponent,
                    AddcabComponent,
                    EditcabComponent,
                    ParentComponent,
                    Child1Component,
                    Child2Component,
                    AnimatetextComponent,
                    Route1Component,
                    Route2Component,
                    Route3Component
                  ],
    imports: [
                BrowserModule,
                AppRoutingModule,
                FormsModule,
                ReactiveFormsModule,
                HttpClientModule,
                BrowserAnimationsModule

              ],
    providers: [],
    bootstrap: [RootComponent]

  })
export class RootModule { }
