import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddCanauxComponent } from './page-add-canaux.component';

describe('PageAddCanauxComponent', () => {
  let component: PageAddCanauxComponent;
  let fixture: ComponentFixture<PageAddCanauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAddCanauxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAddCanauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
