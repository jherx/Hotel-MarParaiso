import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body/body.component';
import { SharedModule } from '../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [BodyComponent],
    imports: [
        CommonModule,
        SharedModule,
        TranslateModule
    ]
})
export class HomeModule { }