import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { CapitalizePipe } from "./directives/capitalize.pipe";

@NgModule({
    declarations: [
            CapitalizePipe
        ],
    exports: [
        CommonModule,
        CapitalizePipe
        ]
})
export class SharedAppModule{

}