import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ToolbarService, HtmlEditorService, RichTextEditorComponent} from '@syncfusion/ej2-angular-richtexteditor';
import { PotfolioServiceService } from '../service/potfolio-service.service';
import { AboutMe } from '../models/aboutMe';
import { ActivatedRoute, Params, Router} from '@angular/router';

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
  
    aboutMe: AboutMe;
  portfolioId: number;
  id: number;
  description: string;


  constructor(private PortfolioService: PotfolioServiceService, private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit(): void {

this._route.params.subscribe(params => {
  this.getAboutMe(params['id']);
  console.log("in oninit in about me comp "+ params['id']);
});
  }


  save(){
    this.aboutMe.description= this.description;
    this.PortfolioService.updateAboutMeById(this.portfolioId, this.aboutMe);
    this.addAboutMe.emit(this.aboutMe);
  }

  getAboutMe(portfolioId: number){
    this.PortfolioService.getAboutMeById(portfolioId).subscribe( data => {
      console.log(data);
     this.aboutMe = data;
     this.description = data.description;

    })
  }
}
