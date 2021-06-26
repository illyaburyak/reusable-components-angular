import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-mods-home',
    templateUrl: './mods-home.component.html',
    styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
    modalOpen = false;
    items = [
        {title: 'Why is the sky blue', content: 'just because'},
        {title: 'How are you bro?', content: 'I am good bro how are you my friend?!'},
        {title: 'Why is the sky blue', content: 'just because'},
        {title: 'Why is the sky blue', content: 'just because'},
    ];

    constructor() {
    }

    ngOnInit() {
    }

    onClick() {
        this.modalOpen = !this.modalOpen;
    }

}
