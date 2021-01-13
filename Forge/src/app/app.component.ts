import { Component } from '@angular/core';
import { ToolbarService,HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ToolbarService, HtmlEditorService]
})
export class AppComponent {
  title = 'Forge';
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
}
