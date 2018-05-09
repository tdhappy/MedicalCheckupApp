import { NgModule } from '@angular/core';
import { ProgressBarComponent } from './progress-bar/progress-bar';
import { AccordionListComponent } from './accordion-list/accordion-list';

@NgModule({
	declarations: [ProgressBarComponent,
    AccordionListComponent],
	imports: [],
	exports: [ProgressBarComponent,
    AccordionListComponent],
})
export class ComponentsModule {}
