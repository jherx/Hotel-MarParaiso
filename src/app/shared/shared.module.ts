import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [
        NavbarComponent,
        FooterComponent,
        HeaderComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
         TranslateModule
    ],
    exports: [
        NavbarComponent,
        FooterComponent,
        HeaderComponent,
        CommonModule,
        RouterModule
    ]
})
export class SharedModule { }
