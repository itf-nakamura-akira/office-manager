import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IsDesktopDirective } from 'src/app/shared/directives/is-desktop.directive';
import { IsMobileDirective } from 'src/app/shared/directives/is-mobile.directive';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, IsDesktopDirective, IsMobileDirective],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
