import { Component, OnInit, Input } from '@angular/core';
import { FilemanageService } from '../../service/filemanage.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { FileItem } from '../doctype/fileitem';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-analyres',
  templateUrl: './analyres.component.html',
  styleUrls: ['./analyres.component.css']
})
export class AnalyresComponent implements OnInit {

  fileitem: Observable<FileItem>;

  constructor(private fms:FilemanageService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.fileitem = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.fms.getFile(params.get('id')))
    );
  }

  @Input() result: String;

}
