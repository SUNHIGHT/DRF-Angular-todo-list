import { Component,OnInit,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Diary } from './diary.model'
import { DiaryService } from '../service/diary.service';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrl: './diary.component.scss'
})
export class DiaryComponent {
  diaries : Diary[]= [];
  newdiaries: Diary[] = [];
  @Input() diary: Diary = new Diary();
  
  constructor(
    private diaryService:DiaryService,
  ){}

  ngOnInit(): void {
    this.diaryService.getAllDiary()
      .then(diaries => this.diaries = diaries);
  }
  
}
