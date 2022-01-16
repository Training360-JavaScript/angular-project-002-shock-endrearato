import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { FilterPipe } from './pipe/filter.pipe';
import { SorterPipe } from './pipe/sorter.pipe';
import { IconComponent } from './comon/icon/icon.component';
import { ActionButtonComponent } from './comon/action-button/action-button.component';
import { ActionButtonGroupComponent } from './comon/action-button-group/action-button-group.component';
import { DataCellComponent } from './comon/data-cell/data-cell.component';
import { DataRowComponent } from './comon/data-row/data-row.component';
import { DataListComponent } from './comon/data-list/data-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent,
    UserListComponent,
    FilterPipe,
    SorterPipe,
    IconComponent,
    ActionButtonComponent,
    ActionButtonGroupComponent,
    DataCellComponent,
    DataRowComponent,
    DataListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
