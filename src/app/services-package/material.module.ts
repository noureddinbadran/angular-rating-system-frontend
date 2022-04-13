import {NgModule} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatBadgeModule} from "@angular/material/badge";
import {MatButtonModule} from "@angular/material/button";
import {MatNativeDateModule, MatOptionModule} from "@angular/material/core";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatTreeModule} from "@angular/material/tree";

@NgModule({
    declarations: [],
    imports: [],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatBadgeModule,
        MatFormFieldModule,
        MatInputModule,
        MatListModule,
        MatDatepickerModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
        MatSidenavModule,
        MatToolbarModule,
        MatNativeDateModule,
        MatSelectModule,
        MatOptionModule,
        MatCheckboxModule,
        MatRadioModule,
        BrowserAnimationsModule,
        MatGridListModule,
        MatTabsModule,
        MatDialogModule,
        MatMenuModule,
        MatTreeModule,
        MatTooltipModule
    ]
})
export class MaterialModule {
}
