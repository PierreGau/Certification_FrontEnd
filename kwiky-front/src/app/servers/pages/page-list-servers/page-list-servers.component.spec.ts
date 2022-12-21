import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListServersComponent } from './page-list-servers.component';

describe('PageListServersComponent', () => {
  let component: PageListServersComponent;
  let fixture: ComponentFixture<PageListServersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListServersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageListServersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
