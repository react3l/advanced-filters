react3l-advanced-filters
------------------------

## IdFilter

For primary key in integer format

```typescript
export declare class IdFilter extends Filter {
    static types(filter?: IdFilter): FilterType<IdFilter>[];

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
    static types(filter?: GuidFilter): FilterType<GuidFilter>[];

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
    static types(filter?: DateFilter): FilterType<DateFilter>[];

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
    static types(filter?: NumberFilter): FilterType<NumberFilter>[];
   
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
    static types(filter?: StringFilter): FilterType<StringFilter>[];
    
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

## Translation file

```json
{
  "filters.equal": "",
  "filters.notEqual": "",
  "filters.greater": "",
  "filters.greaterEqual": "",
  "filters.less": "",
  "filters.lessEqual": "",
  "filters.range": "",
  "filters.in": "",
  "filters.notIn": "",
  "filters.startWith": "",
  "filters.notStartWith": "",
  "filters.endWith": "",
  "filters.notEndWith": "",
  "filters.contain": "",
  "filters.notContain": ""
}
```

&copy; 2020 thanhtunguet <ht@thanhtunguet.info>
