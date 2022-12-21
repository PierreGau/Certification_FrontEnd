import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListCanauxComponent } from './page-list-canaux.component';

describe('PageListCanauxComponent', () => {
  let component: PageListCanauxComponent;
  let fixture: ComponentFixture<PageListCanauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListCanauxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageListCanauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
