import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEditCanauxComponent } from './page-edit-canaux.component';

describe('PageEditCanauxComponent', () => {
  let component: PageEditCanauxComponent;
  let fixture: ComponentFixture<PageEditCanauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEditCanauxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageEditCanauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
