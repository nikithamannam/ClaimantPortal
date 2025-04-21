import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitDocumentsComponent } from './submit-documents.component';

describe('SubmitDocumentsComponent', () => {
  let component: SubmitDocumentsComponent;
  let fixture: ComponentFixture<SubmitDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmitDocumentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
