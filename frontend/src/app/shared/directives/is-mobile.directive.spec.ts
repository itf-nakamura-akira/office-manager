import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IsMobileDirective } from './is-mobile.directive';

describe('IsMobileDirective', () => {
    let fixture: ComponentFixture<TestComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [IsMobileDirective, TestComponent],
        }).compileComponents();
        fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
    });

    it('window.innerWidth >= 980pxでcomponentが表示されていないこと。', () => {
        window.innerWidth = 980;
        window.dispatchEvent(new Event('resize'));

        const element: DebugElement = fixture.debugElement.query(By.css('div'));
        expect(element).toBeNull();
    });

    it('window.innerWidth < 980pxでcomponentが表示されていること。', () => {
        window.innerWidth = 979;
        window.dispatchEvent(new Event('resize'));

        const element: DebugElement = fixture.debugElement.query(By.css('div'));
        expect(element).not.toBeNull();
    });
});

@Component({
    template: `<div *appIsMobile>TEST</div>`,
    imports: [IsMobileDirective],
    standalone: true,
})
class TestComponent {}
