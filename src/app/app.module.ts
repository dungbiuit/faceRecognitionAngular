import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageDetectionComponent } from './components/image-detection/image-detection.component';
import {FileUploadModule} from 'primeng/fileupload';
import { ImageShowComponent } from './components/image-show/image-show.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageDetectionComponent,
    ImageShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
