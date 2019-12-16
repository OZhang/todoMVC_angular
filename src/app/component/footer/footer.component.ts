import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import { Todo } from 'src/app/model/todo';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public left: number;
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    // this.todoService.countleft().subscribe(a => this.left = a);
    // this.left = this.todoService.countleft();
  }

}
