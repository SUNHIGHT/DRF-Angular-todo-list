import { Injectable } from '@angular/core'
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Diary } from '../diary/diary.model'

@Injectable({
    providedIn:'root'
})
export class DiaryService{
    private Url = 'http://127.0.0.1:8000/api/diary';
    private headers = new HttpHeaders({'Content-Type': 'application/json'});

    constructor(private http:HttpClient){}
}
