import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TransactionAlterComponent} from './alter.component';

describe('TransactionAlterComponent', () => {
    let component: TransactionAlterComponent;
    let fixture: ComponentFixture<TransactionAlterComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TransactionAlterComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TransactionAlterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
