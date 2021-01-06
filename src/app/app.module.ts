import { BrowserModule, Meta, } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule implements OnInit {

	constructor(private meta: Meta) {

		//Set Open Graph
	  	this.meta.updateTag({property: 'og:title', content: 'title'});
	  	this.meta.updateTag({property: 'og:image', content: 'image'});
	  	this.meta.updateTag({property: 'og:url', content: 'example.com'})
	}

	ngOnInit(): void {}
}