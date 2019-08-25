import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {DATATABLE_DATA} from './data-table.const';

@Component({
    selector: 'data-table-example',
    styleUrls: ['data-table.css'],
    templateUrl: 'data-table.html',
  })
  export class DataTableExampleComponent {
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    dataSource = new MatTableDataSource(DATATABLE_DATA);
  
    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }