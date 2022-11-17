import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFilesItemComponent } from './my-files-item.component';

describe('MyFilesItemComponent', () => {
  let component: MyFilesItemComponent;
  let fixture: ComponentFixture<MyFilesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFilesItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyFilesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
