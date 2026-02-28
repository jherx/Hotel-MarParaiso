// import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
// import { NgModule } from "@angular/core";

// const APP_ROUTES: Routes = [
//   {
//     path: 'home',
//     loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
//   },
//   {
//     path: '',
//     loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule)
//   },
//   { path: "**", redirectTo: 'home' }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(APP_ROUTES, { preloadingStrategy: PreloadAllModules })],
//   exports: [RouterModule],
// })
// export class AppRoutingModule { }



import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './features/home/body/body.component';
import { ReservationSuccessComponent } from './features/reservations/pages/reservation-success/reservation-success.component';


const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: BodyComponent },
    { path: 'success', component: ReservationSuccessComponent },
    { path: 'reservations', loadChildren: () => import('./features/reservations/reservations.module').then(m => m.ReservationsModule) },
    { path: '**', redirectTo: 'home' }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }