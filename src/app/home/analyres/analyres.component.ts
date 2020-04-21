import { Component, OnInit, Input } from '@angular/core';
import { FilemanageService } from '../../service/filemanage.service';

@Component({
  selector: 'app-analyres',
  templateUrl: './analyres.component.html',
  styleUrls: ['./analyres.component.css']
})
export class AnalyresComponent implements OnInit {

  constructor(public fm:FilemanageService) { }

  ngOnInit(): void {
  }

  @Input() result: String;

}
