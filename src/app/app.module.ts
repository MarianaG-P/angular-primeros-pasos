import { DbzModule } from './dbz/dbz.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CounterModule } from './counter/components/counter.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './heroes/hero/hero.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
  ],
  imports: [
    BrowserModule,
    CounterModule,
    DbzModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
