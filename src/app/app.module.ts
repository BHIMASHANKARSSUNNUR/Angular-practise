import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesComponent } from './pipes/pipes/pipes.component';
import { ConversionPipe } from './pipes/conversion.pipe';
import { DirectivesComponent } from './directives/directives/directives.component';
import { DirectiveDirective } from './directives/directive.directive';
import { ReactiveformsComponent } from './ReactiveForms/reactiveforms/reactiveforms.component';
import { ServicesComponent } from './services/services/services.component';
import { ApiComponent } from './api/api/api.component';
import { HttpClientModule } from '@angular/common/http';
import { ChildComponent } from './child/child/child.component';
@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    ConversionPipe,
    DirectivesComponent,
    DirectiveDirective,
    ReactiveformsComponent,
    ServicesComponent,
    ApiComponent,
    ChildComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
