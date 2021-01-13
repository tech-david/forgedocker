import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToolbarService,HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
  selector: 'app-admin-about-me',
  templateUrl: './admin-about-me.component.html',
  styleUrls: ['./admin-about-me.component.css'],
  providers: [ToolbarService,HtmlEditorService]
})
export class AdminAboutMeComponent implements OnInit {
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
