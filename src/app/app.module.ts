import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { addCoinReducer } from './reducers/blockchain.reducer';

@NgModule({
  declarations: [
    AppComponent,
    BlockchainComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({blockchain: addCoinReducer}),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
