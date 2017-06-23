import { TestBed, inject } from '@angular/core/testing';

import { TodosDataService } from './todos-data.service';
import { TodoBase } from './todo-base';

describe('TodosDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodosDataService]
    });
  });

  it('should ...', inject([TodosDataService], (service: TodosDataService) => {
    expect(service).toBeTruthy();
  }));

 it ("return TodoBase", inject ([TodosDataService], (service: TodosDataService) => {
   expect(service.getTodoBase).toEqual(TodoBase);
 }));

}); 
