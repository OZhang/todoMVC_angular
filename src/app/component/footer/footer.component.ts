import { Component, OnInit, ChangeDetectorRef, AfterContentInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements AfterContentInit {
  public left: number;
  public completed: number;
  public currentStatus: any;
  constructor(private todoService: TodoService, private route :ActivatedRoute,private cdref: ChangeDetectorRef) { }

  
  ngAfterContentInit(): void {
    this.todoService.todoList.subscribe(() => this.left = this.todoService.countleft());
    this.todoService.todoList.subscribe(() => this.completed = this.todoService.countcompleted());

    this.route.params.pipe(map(params => params.status))
    .subscribe((status) => {
      this.currentStatus = status || '';
      this.todoService.setCurrentStatus(this.currentStatus);
    });
  } 
  clearCompleted():void{
    this.todoService.clearCompleted();
  }
}
