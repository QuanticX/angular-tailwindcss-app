import { Routes } from '@angular/router';
import { BouttonComponent } from './boutton/boutton.component';
import { FontDirectivesComponent } from './typography/font-directives/font-directives.component';
import { TextDirectivesComponent } from './typography/text-directives/text-directives.component';
import { ListStylesComponent } from './typography/list-styles/list-styles.component';
import { SpacingTypographyComponent } from './typography/spacing-typography/spacing-typography.component';
import { BackgroundsComponent } from './object-properties/backgrounds/backgrounds.component';
import { BordersComponent } from './object-properties/borders/borders.component';
import { BoxShadowComponent } from './object-properties/box-shadow/box-shadow.component';
import { DivideComponent } from './object-properties/divide/divide.component';
import { RingsComponent } from './object-properties/rings/rings.component';

export const routes: Routes = [
    {path: 'boutton', component: BouttonComponent},
    {path: 'font-directives', component: FontDirectivesComponent},
    {path: 'text-directives', component: TextDirectivesComponent},
    {path: 'list-styles', component: ListStylesComponent},
    {path: 'spacing-typography', component: SpacingTypographyComponent},
    {path: 'backgrounds', component: BackgroundsComponent},
    {path: 'borders', component: BordersComponent},
    {path: 'box-shadow', component: BoxShadowComponent},
    {path: 'divide', component: DivideComponent},
    {path: 'rings', component: RingsComponent},
];
