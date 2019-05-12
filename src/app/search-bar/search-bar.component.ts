import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search/search.service';
import { FormControl } from '@angular/forms';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  SearchResults: any[] = [];
  queryField: FormControl = new FormControl();

  constructor(private _searchService: SearchService) { }

  ngOnInit() {
    this.queryField.valueChanges
    .subscribe( SearchResults => console.log (SearchResults));

  }

}
