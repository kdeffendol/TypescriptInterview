import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CustomerRecord, CUSTOMER_RECORDS } from 'src/app/constants/customer-records';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit {

  public records: CustomerRecord[] = CUSTOMER_RECORDS;
  public recordsTableData = new MatTableDataSource(this.records);

  public readonly columnsToDisplay = [
    'FirstName',
    'LastName',
    'Age',
    'ViewDetails'
  ]
  
  constructor() { }

  @ViewChild(MatSort) sort: MatSort = new MatSort;

  ngAfterViewInit(): void {
    this.recordsTableData.sort = this.sort;
  }
}
