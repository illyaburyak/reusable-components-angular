import {Component, OnInit, ElementRef, OnDestroy, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {
    //  define event that we gonna trigger. This event we gonna watch for on the parent component
    @Output() close = new EventEmitter();

    constructor(private el: ElementRef) {
    }

    ngOnInit() {
        document.body.appendChild(this.el.nativeElement);
    }

    ngOnDestroy() {
        this.el.nativeElement.remove();
    }

    onCloseClick() {
        //
        this.close.emit();
    }

}

// ElementRef -> give us access to the host element of our components, when using inside constructor
// nativeElement -> is a reference to the actual HTML element that is displaing our component in the DOM

/*



*/
