import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { Routes } from '@angular/router';
import { ExtractComponent } from "./extract/extract.component";
import { NewTransferComponent } from "./new-transfer/new-transfer.component";

export const routes: Routes = [
    {path: '', redirectTo: 'extract', pathMatch: 'full'},
    {path: 'extract', component: ExtractComponent},
    {path: 'new-transfer', component: NewTransferComponent}
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:  [RouterModule]
})
export class AppRoutingModule{}