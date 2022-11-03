# ngrx-store-example

NgRx Store is mainly for managing global state across an entire application. In cases where you need to manage temporary or local component state, consider using [NgRx ComponentStore](https://ngrx.io/guide/component-store).

## Installation

Detailed installation instructions can be found on the [Installation](https://ngrx.io/guide/store/install) page.

## instructions

Add store module in app.module.ts 
example: 
import { StoreModule } from '@ngrx/store';

Declare your reducers folder path in NgModule imports
example:
StoreModule.forRoot(reducers)