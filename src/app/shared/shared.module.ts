import {NgModule} from "@angular/core";
import {NavigationComponent} from "../navigation/navigation.component";
import {RouterModule} from "@angular/router";
import { LoaderComponent } from './loader/loader.component';
import { StatusTagComponent } from './status-tag/status-tag.component';

@NgModule({
    declarations: [NavigationComponent, LoaderComponent, StatusTagComponent],
    imports: [
        RouterModule
    ],
    exports: [NavigationComponent, LoaderComponent, StatusTagComponent]
})
export class SharedModule {

}
