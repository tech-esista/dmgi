import {NgModule} from "@angular/core";
import {NavigationComponent} from "../navigation/navigation.component";
import {RouterModule} from "@angular/router";
import { LoaderComponent } from './loader/loader.component';

@NgModule({
    declarations: [NavigationComponent, LoaderComponent],
    imports: [
        RouterModule
    ],
    exports: [NavigationComponent, LoaderComponent]
})
export class SharedModule {

}
