import { Directive, HostListener, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appIsMobile]',
    standalone: true,
})
export class IsMobileDirective implements OnInit {
    private hasView = false;

    constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {}

    ngOnInit(): void {
        this.windowResize(window.innerWidth);
    }

    @HostListener('window:resize', ['$event.srcElement.innerWidth'])
    windowResize(innerWidth: number) {
        if (this.hasView && innerWidth >= 980) {
            this.viewContainerRef.clear();
            this.hasView = false;
        } else if (!this.hasView && innerWidth < 980) {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
            this.hasView = true;
        }
    }
}
