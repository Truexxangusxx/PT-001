import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  constructor() { }

  ngOnInit() {


    $("a").click(function (e) {
      e.preventDefault();
      $(this).find("i").toggle();
      $(this).find("i").toggleClass("active");
      $(this).parent().toggleClass("on");
    });


    $("#showHideButton").click(function () {
      $("#alertDiv").toggleClass("fadedOut");
    })

  }

}
