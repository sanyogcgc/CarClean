import {Directive,ElementRef,Input,HostListener} from "@angular/core";
@Directive({
    selector:"[abc]"
})
export class HighlighterDirective
{
    //DI
    @Input() tcolor: string;

    constructor(private el:ElementRef)
    {

    }

@HostListener('mouseleave') onmouseleave()
{
this.Highlighter(null);
}
@HostListener('mouseenter') onmouseenter()
{
   this.Highlighter(this.tcolor); 
//this.Highlighter("yellow");  
//this.el.nativeElement.style.font="green";   
}


Highlighter(color:string)
{
    this.el.nativeElement.style.backgroundColor=color;
}

}