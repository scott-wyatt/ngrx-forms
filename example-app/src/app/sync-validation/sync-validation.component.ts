import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormGroupState } from 'ngrx-forms';
import { Observable } from 'rxjs/Rx';

import { FormValue, State } from './sync-validation.reducer';

@Component({
  selector: 'ngf-sync-validation',
  templateUrl: './sync-validation.component.html',
  styleUrls: ['./sync-validation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SyncValidationPageComponent {
  formState$: Observable<FormGroupState<FormValue>>;

  constructor(store: Store<State>) {
    this.formState$ = store.select(s => s.syncValidation.formState);
  }
}
