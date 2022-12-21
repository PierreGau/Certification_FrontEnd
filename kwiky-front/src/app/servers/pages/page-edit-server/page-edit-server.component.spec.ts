import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEditServerComponent } from './page-edit-server.component';

describe('PageEditServerComponent', () => {
  let component: PageEditServerComponent;
  let fixture: ComponentFixture<PageEditServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEditServerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageEditServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
