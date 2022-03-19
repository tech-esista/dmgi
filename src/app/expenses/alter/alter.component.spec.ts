import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ExpenseAlterComponent} from './alter.component';

describe('ExpenseAlterComponent', () => {
    let component: ExpenseAlterComponent;
    let fixture: ComponentFixture<ExpenseAlterComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ExpenseAlterComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ExpenseAlterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
