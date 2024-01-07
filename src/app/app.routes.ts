import { Routes } from '@angular/router';
import { BouttonComponent } from './boutton/boutton.component';
import { FontDirectivesComponent } from './font-directives/font-directives.component';
import { TextDirectivesComponent } from './text-directives/text-directives.component';
import { ListStylesComponent } from './list-styles/list-styles.component';
import { SpacingTypographyComponent } from './spacing-typography/spacing-typography.component';

export const routes: Routes = [
    {path: 'boutton', component: BouttonComponent},
    {path: 'font-directives', component: FontDirectivesComponent},
    {path: 'text-directives', component: TextDirectivesComponent},
    {path: 'list-styles', component: ListStylesComponent},
    {path: 'spacing-typography', component: SpacingTypographyComponent},
];
