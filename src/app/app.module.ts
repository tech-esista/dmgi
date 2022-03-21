import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgxPageScrollCoreModule} from "ngx-page-scroll-core";
import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import {HttpInterceptorService} from "./interceptors/http-interceptor.service";
import {AppComponent} from './app.component';
import {LandingComponent} from './landing/landing.component';

@NgModule({
    declarations: [
        AppComponent,
        LandingComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgxPageScrollCoreModule.forRoot({duration: 500})
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: HttpInterceptorService,
        multi: true
    }],
    exports: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
