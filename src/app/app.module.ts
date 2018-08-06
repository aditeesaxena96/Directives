import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomdirectiveDirective } from './customdirective.directive';
import { DirectivecomponentComponent } from './directivecomponent/directivecomponent.component';
import { RouterModule, Routes, Router} from '@angular/router'
import { FormsModule } from "@angular/forms"
const route: Routes=[
  {
  path :'direct',
  component : DirectivecomponentComponent,
  }
]

@NgModule({
  declarations: [
    AppComponent,
    CustomdirectiveDirective,
    DirectivecomponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
