import {Model} from 'models';
import {ErrorMap} from 'interfaces/react3l-core-interfaces';

export class FormService {
  public getValidationStatus<T extends Model>(errors: ErrorMap<T>, field: string) {
    if (typeof errors === 'object' && errors !== null) {
      if (errors.hasOwnProperty(field)) {
        if (typeof errors[field] === 'string' && errors[field] !== '') {
          return 'error';
        }
      }
    }
    return '';
  }
}

export const formService: FormService = new FormService();
