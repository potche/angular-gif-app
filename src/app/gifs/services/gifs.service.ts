import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _tagsHistory: string[] = [];
  private serviceUrl: string;
  private apiKey: string;
  public gifList: Gif[];

  constructor(private httpClient: HttpClient) {
    this.serviceUrl = 'http://api.giphy.com/v1/gifs';
    this.apiKey = 'J0elr5m0KagXL22w41U6pBkJkyGZnpy1';
    this.gifList = [];
    this.loadLocalStorage();
  }

  get tagHistory(): string[] {
    return [...this._tagsHistory];
  }

  searchTag(tag: string): void {
    if (!tag.length) return;
    this.organizeHistory(tag);
    console.log('tagHistory =>', this.tagHistory);
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', 10)
      .set('q', tag);

    this.httpClient
      .get<SearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe((resp) => {
        console.log(resp.data);
        console.log(resp.meta);
        console.log(resp.pagination);

        this.gifList = resp.data;
      });
  }

  organizeHistory(tag: string): void {
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this.tagHistory.splice(0, 10);
    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage(): void {
    const temporal = localStorage.getItem('history');
    if (temporal?.length) {
      this._tagsHistory = JSON.parse(temporal);
      this.searchTag(this._tagsHistory[0]);
    }
  }
}
