import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-top',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './top.component.html',
    styleUrls: ['./top.component.scss'],
})
export class TopComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
