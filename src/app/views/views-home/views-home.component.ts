import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-views-home',
    templateUrl: './views-home.component.html',
    styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {
    stats = [
        {value: 2, label: '# of users'},
        {value: 42, label: 'Revenue'},
        {value: 82, label: 'Reviews'},
    ];
    items = [
        {
            // tslint:disable-next-line:max-line-length
            image: 'https://images.unsplash.com/flagged/photo-1561805108-04d5124771dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',
            title: 'Lake Louise',
            description: 'Cool View',
        },
        {
            // tslint:disable-next-line:max-line-length
            image: 'https://images.unsplash.com/photo-1588673255813-d26903c028fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
            title: 'Lake Louise',
            description: 'Cool View',
        },
    ];


    constructor() {
    }

    ngOnInit() {
    }

}

// Seies of steps for creating a modual with
