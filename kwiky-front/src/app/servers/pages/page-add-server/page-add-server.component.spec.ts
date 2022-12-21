import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddServerComponent } from './page-add-server.component';

describe('PageAddServerComponent', () => {
  let component: PageAddServerComponent;
  let fixture: ComponentFixture<PageAddServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAddServerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAddServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
