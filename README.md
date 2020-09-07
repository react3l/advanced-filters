@react3l/advanced-filters
-------------------------

# Installation

- Add `.npmrc`:

    ```npmrc
    @react3l:registry=https://npm.pkg.github.com
    ```

## IdFilter

For primary key in integer format

```typescript
export declare class IdFilter extends Filter {
    equal?: number;

    notEqual?: number;

    in?: number[];

    notIn?: number[];
}
```

## GuidFilter

For primary key in GUID format

```typescript
export declare class GuidFilter extends Filter {
    equal?: string;

    notEqual?: string;

    in?: string[];

    notIn?: string[];
}
```

## DateFilter

For date/time fields

```typescript
import {Moment} from 'moment';

export declare class DateFilter extends Filter {
    equal?: Moment;

    notEqual?: Moment;

    greater?: Moment;

    greaterEqual?: Moment;

    less?: Moment;

    lessEqual?: Moment;

    range?: [Moment | null, Moment | null];
}
```

## NumberFilter

For number fields

```typescript
import { Filter, FilterType } from 'Filter';

export declare class NumberFilter extends Filter {
    equal?: number;

    notEqual?: number;

    greater?: number;

    greaterEqual?: number;

    less?: number;

    lessEqual?: number;

    range?: [number | undefined, number | undefined];
}
```

## StringFilter

```typescript
import { Filter, FilterType } from 'Filter';
export declare class StringFilter extends Filter {
    startWith?: string;

    notStartWith?: string;

    endWith?: string;

    notEndWith?: string;

    equal?: string;

    notEqual?: string;

    contain?: string;

    notContain?: string;
}
```

&copy; 2020 thanhtunguet <ht@thanhtunguet.info>
