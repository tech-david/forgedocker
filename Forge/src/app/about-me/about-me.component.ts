import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ToolbarService, HtmlEditorService, RichTextEditorComponent} from '@syncfusion/ej2-angular-richtexteditor';
import { PotfolioServiceService } from '../service/potfolio-service.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
  providers: [ToolbarService,HtmlEditorService]
})
export class AboutMeComponent implements OnInit {

  @Input() inputAboutMe: []; // decorate the property with @Input()
  @Output() addAboutMe = new EventEmitter<any>();
  
  public tools: object = {
    type: 'Expand',
        items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
    'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
    'LowerCase', 'UpperCase', '|',
    'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
    'Outdent', 'Indent', '|',
    'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
    'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
    }; 
  
  aboutMe = [];
  content: string = "Potatoes";

  constructor() { }

  ngOnInit(): void {

  }
  ngOnChanges(){
    this.content = this.inputAboutMe['description'];
  }

  save(){
    this.addAboutMe.emit(this.content);
    //console.log(this.content);
  }

  getData(){
    return this.content;
  }
}
