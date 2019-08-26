import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AutoSuggestOptions } from './autocomplete/auto-suggest-options.interface';
import { AutoSuggestFilter } from './autocomplete/auto-suggest-filter.const';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';


export interface User {
  name: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  myControl = new FormControl();
  options: AutoSuggestOptions[] = [
  { name: 'America', type: 'Name' },
  { name: '18.5247663,73.7929271', type: 'Map' },
  { name: '12.9542946,77.4908537', type: 'Map' },
  { name: 'Algeria' , type: 'Name'},
  { name: 'India', type: 'Name' },
  { name: 'Andorra', type: 'Name' },
  { name: 'Angola', type: 'Name' },
  { name: 'Anguilla', type: 'Name' },
  { name: 'Antarctica', type: 'Name' },
  { name: 'Antigua and Barbuda', type: 'Name' },
  { name: 'Argentina', type: 'Name' },
  { name: 'Armenia', type: 'Name' },
  { name: 'Australia', type: 'Name' },
  { name: 'Austria', type: 'Name' },
  { name: 'Azerbaijan', type: 'Name' },
  { name: 'Bahamas', type: 'Name' },
  { name: 'Bahrain', type: 'Name' },
  { name: 'Bangladesh', type: 'Name' },
  { name: 'Barbados', type: 'Name' },
  { name: 'Belarus', type: 'Name' },
  { name: 'Belgium', type: 'Name' },
  { name: 'Belize', type: 'Name' },
  { name: 'Bermuda', type: 'Name' },
  { name: 'Bhutan', type: 'Name' },
  { name: 'Bolivia, Plurinational State of', type: 'Name' },
  { name: 'Bonaire, Sint Eustatius and Saba', type: 'Name' },
  { name: 'Bosnia and Herzegovina', type: 'Name' },
  { name: 'Botswana', type: 'Name' },
  { name: 'Bouvet Island', type: 'Name' },
  { name: 'British Indian Ocean Territory', type: 'Name' },
  { name: 'Brunei Darussalam', type: 'Name' }
  ];
  filteredOptions: Observable<AutoSuggestOptions[]>;
  selectedType = '';

  selectedItem(event) {
    console.log('Selected Item', event.option.value.type);
    this.selectedType = event.option.value.type;
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }

  displayFn(selectedOption?: AutoSuggestOptions): string | undefined {
    return selectedOption ? selectedOption.name : undefined;
  }

  private _filter(name: string): AutoSuggestOptions[] {
    const filterValue = name.toLowerCase();
    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }
}
