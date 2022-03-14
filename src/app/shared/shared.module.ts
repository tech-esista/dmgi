import {NgModule} from "@angular/core";
import {NavigationComponent} from "../navigation/navigation.component";
import {RouterModule} from "@angular/router";
import {LoaderComponent} from './loader/loader.component';
import {StatusTagComponent} from './status-tag/status-tag.component';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
    declarations: [NavigationComponent, LoaderComponent, StatusTagComponent],
    imports: [
        RouterModule,
        FormsModule,
        CommonModule
    ],
    exports: [NavigationComponent, LoaderComponent, StatusTagComponent]
})
export class SharedModule {

}
