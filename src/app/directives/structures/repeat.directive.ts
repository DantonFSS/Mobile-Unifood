import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRepeat]',
})
export class RepeatElementDirective {
  @Input('appRepeat') set repeat(count: number) {
    this.viewContainer.clear();
    for (let i = 0; i < count; i++) {
      const context = { $implicit: i, index: i };
      this.viewContainer.createEmbeddedView(this.templateRef, context);
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}
}
