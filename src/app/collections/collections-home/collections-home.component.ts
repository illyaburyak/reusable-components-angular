import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-collections-home',
    templateUrl: './collections-home.component.html',
    styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
    data = [
        {name: 'Illya', age: 22, job: 'Engineer'},
        {name: 'Amanda', age: 23, job: 'Designer'},
        {name: 'Tolik', age: 23, job: 'Cook'},
    ];
    headers = [
        {key: 'name', label: 'Name'},
        {key: 'age', label: 'Age'},
        {key: 'job', label: 'Job'},
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
