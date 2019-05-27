//https://www.concretepage.com/angular-2/angular-2-custom-directives-example
import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({ 
     selector: '[cpIf]' 
})
export class StructureDirectiveShowHide {
	constructor( private templateRef: TemplateRef<any>,
	             private viewContainer: ViewContainerRef) { }
	@Input() set cpIf(condition: boolean) {
	   if (condition) {
		  this.viewContainer.createEmbeddedView(this.templateRef);
	   } else {
		  this.viewContainer.clear();
	   } 
	}
} 