import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid';
import { PageService, 
  SortService, 
  FilterService, 
  EditService, 
  ToolbarService, 
  ColumnChooserService,
  FreezeService
} from '@syncfusion/ej2-angular-treegrid';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {ButtonModule} from '@syncfusion/ej2-angular-buttons';
import {NumericTextBoxAllModule} from '@syncfusion/ej2-angular-inputs';
import {DatePickerAllModule} from '@syncfusion/ej2-angular-calendars';
import {CheckBoxAllModule} from '@syncfusion/ej2-angular-buttons';
import { RowDDService } from '@syncfusion/ej2-angular-treegrid';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TreeGridModule,
    FormsModule,
    NumericTextBoxAllModule,
    DatePickerAllModule,
    CheckBoxAllModule,
    ButtonModule,
    DropDownListAllModule
  ],
  providers: [ 
    PageService, 
    SortService, 
    FilterService, 
    EditService, 
    ToolbarService, 
    ColumnChooserService, 
    FreezeService, 
    RowDDService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
