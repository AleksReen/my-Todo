import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoAuthorComponent } from './todo-author.component';

describe('TodoAuthorComponent', () => {
  let component: TodoAuthorComponent;
  let fixture: ComponentFixture<TodoAuthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoAuthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
