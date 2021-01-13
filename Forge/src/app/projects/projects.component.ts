import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToolbarService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';
import { PotfolioServiceService } from '../service/potfolio-service.service';
import { Project } from '../models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ToolbarService, HtmlEditorService]
})
export class ProjectsComponent implements OnInit {
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
  form: FormGroup;
  submitted = false;

  @Input() project: Project;
  @Output() projectChange = new EventEmitter<Project>();

  projects: Project[] = [];
  portfolioId = Number(localStorage.getItem('portId'));

  constructor(
    private portfolioService: PotfolioServiceService
  ) { }

  ngOnInit(): void {
    this.projects = [];
    this.setProject();
  }

  setProject() {
    this.portfolioService.getProjectById(this.portfolioId).subscribe(data =>{
      console.log(data);
      this.projects = data;
    })
  }

  addProject() {
    this.project = new Project;
    // this.project.id = this.projectNumber;
    this.project.projectName = "Enter Project Name";
    this.project.description = "Enter Project Description";
    this.project.projectResponsibilities = "Enter Project Responsibilities";
    this.project.projectTech = "Enter Project Technologies";
    console.log(this.project);
    this.projects.push(this.project);
    console.log(this.projects);
  }

  deleteProject(index) {
    this.projects.splice(index, 1);
  }

  onSubmit() {
    this.submitted = true;
  }

  save() {
    this.portfolioService.updateProjectById(this.projects).subscribe();
  }
}
