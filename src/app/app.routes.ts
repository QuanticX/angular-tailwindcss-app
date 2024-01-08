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
import { DisplayPositionComponent } from './metrics/display-position/display-position.component';
import { FloatingContainementComponent } from './metrics/floating-containement/floating-containement.component';
import { PaddingMargingComponent } from './metrics/padding-marging/padding-marging.component';
import { PropertiesComponent } from './metrics/properties/properties.component';
import { WidthHeightComponent } from './metrics/width-height/width-height.component';
import { FlexboxComponent } from './layout/flexbox/flexbox.component';
import { GridsComponent } from './layout/grids/grids.component';
import { BoxAlignementComponent } from './layout/box-alignement/box-alignement.component';
import { TransformationsComponent } from './animation/transformations/transformations.component';
import { TransitionsComponent } from './animation/transitions/transitions.component';
import { AnimateComponent } from './animation/animate/animate.component';
import { FilterComponent } from './animation/filter/filter.component';
import { BlendingComponent } from './animation/blending/blending.component';
import { FormsComponent } from './options/forms/forms.component';
import { TablesComponent } from './options/tables/tables.component';
import { SvgComponent } from './options/svg/svg.component';
import { ScreenReadersComponent } from './options/screen-readers/screen-readers.component';
import { InteractiveComponent } from './options/interactive/interactive.component';
import { JitComponent } from './options/jit/jit.component';

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
    
    {path: 'display-position', component: DisplayPositionComponent},
    {path: 'floating-containement', component: FloatingContainementComponent},
    {path: 'padding-marging', component: PaddingMargingComponent},
    {path: 'properties', component: PropertiesComponent},
    {path: 'width-height', component: WidthHeightComponent},

    
    {path: 'flexbox', component: FlexboxComponent},
    {path: 'grids', component: GridsComponent},
    {path: 'box-alignement', component: BoxAlignementComponent},
    
    {path: 'transformations', component: TransformationsComponent},
    {path: 'transitions', component: TransitionsComponent},
    {path: 'animate', component: AnimateComponent},
    {path: 'filter', component: FilterComponent},
    {path: 'blending', component: BlendingComponent},
    
    {path: 'forms', component: FormsComponent},
    {path: 'tables', component: TablesComponent},
    {path: 'svg', component: SvgComponent},
    {path: 'screen-readers', component: ScreenReadersComponent},
    {path: 'interactive', component: InteractiveComponent},
    {path: 'jit', component: JitComponent},
];
