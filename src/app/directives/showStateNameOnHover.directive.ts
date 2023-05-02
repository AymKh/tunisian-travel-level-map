import { Directive, ElementRef, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
    selector: '[ShowStateNameOnHover]'
})
export class ShowStateNameOnHover {

    @Input() tooltipBody = '';

    constructor(
        private element: ElementRef,
        private renderer: Renderer2
    ) { }

    createTooltip(): HTMLElement {
        const tooltip = this.renderer.createElement('div');
        const tooltipText = this.renderer.createText(this.tooltipBody);
        this.renderer.appendChild(tooltip, tooltipText);
        this.renderer.addClass(tooltip, 'tooltip');
        this.renderer.setStyle(tooltip, 'position', 'absolute');
        return tooltip;
    }


    @HostListener('mouseenter')
    onMouseEnter(): void {
        const tooltip = this.createTooltip();
        this.renderer.appendChild(this.element.nativeElement, tooltip);
    }

    @HostListener('mouseout')
    onMouseLeave(): void {
        setTimeout(() => {
            const tootlip = this.element.nativeElement.querySelector('.tooltip');
            this.renderer.removeChild(this.element.nativeElement, tootlip);
        }, 200);
    }
}

