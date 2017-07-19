import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { EditorComponent } from './chat/editor/editor.component';
import { ModalComponent } from './chat/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    EditorComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
