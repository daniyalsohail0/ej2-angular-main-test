import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import {PageSettingsModel, SortSettingsModel, EditSettingsModel, ColumnChooserService } from '@syncfusion/ej2-angular-treegrid';
import { CommandModel } from '@syncfusion/ej2-grids';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';
import { TreeGridComponent, FreezeService, ResizeService } from '@syncfusion/ej2-angular-treegrid';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ColumnChooserService, FreezeService, ResizeService]
})
export class AppComponent implements OnInit {

  public data: Object[];
  public sortSettings: SortSettingsModel;
  public pageSettings: PageSettingsModel;
  public editSettings: EditSettingsModel;
  public toolbar: string[];
  public numericParams: Object;
  public commands: CommandModel[];
  @ViewChild('treegrid')
  public treeGridObj: TreeGridComponent;
  public rowDrop: Object;
  public selectionSettings: Object;
  
  ngOnInit(): void {
      this.data = sampleData;
      this.sortSettings = { 
        columns: [{ field: 'taskName', direction: 'Ascending' }, 
        { field: 'taskID', direction: 'Descending' }
        ]  
      };
      this.pageSettings = { pageSize: 100 };
      this.editSettings = {
        showDeleteConfirmDialog: true,
        allowEditing:true,
        allowAdding:true,
        allowDeleting:true,
        mode:'Dialog'
      }
      this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search', 'PdfExport', 'Print', 'ExcelExport', 'CsvExport', 'ColumnChooser'];
      this.numericParams = { params: { format: 'n' }};
      this.commands = [
        {
          type: 'Edit',
          buttonOption: { iconCss: 'e-icons e-edit', cssClass: 'e-flat' }
        },
        {
          type: 'Delete',
          buttonOption: { iconCss: 'e-icons e-delete', cssClass: 'e-flat' }
        },
        {
          type: 'Save',
          buttonOption: { iconCss: 'e-icons e-save', cssClass: 'e-flat' }
        },
        {
          type: 'Cancel',
          buttonOption: { iconCss: 'e-icons e-cancel', cssClass: 'e-flat' }
        }
      ];
  }
  onDataBound() {
    this.treeGridObj.autoFitColumns(['taskName']);
  }
  show() {
    this.treeGridObj.showColumns(['Task ID', 'Duration']); //show by HeaderText
}

  hide() {
    this.treeGridObj.hideColumns(['Task ID', 'Duration']); //hide by HeaderText
}
}

  