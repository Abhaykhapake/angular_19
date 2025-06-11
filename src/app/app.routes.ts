import { Routes } from '@angular/router';
import { GetApiComponent } from './get-api/get-api.component';
import { TemplateFormComponent } from './template-form/template-form.component';

export const routes: Routes = [

    {
        path:'getApi',
        component:GetApiComponent
    },
    {
        path:'templateFrom',
        component:TemplateFormComponent
    }
];
