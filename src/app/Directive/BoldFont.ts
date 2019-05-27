import {Directive,ElementRef,AfterViewInit} from '@angular/core';

@Directive({
    selector:"[boldFont]"
})
export class BoldFont implements AfterViewInit {
    constructor(private eRef:ElementRef){

    }

    ngAfterViewInit():void{
    this.eRef.nativeElement.style.color='blue';
    this.eRef.nativeElement.style.fontsize='10px';
    //this.eRef.nativeElement.style.
    }

}
