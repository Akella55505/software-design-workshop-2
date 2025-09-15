# TypeScript Utilities Library

Невелика навчальна бібліотека на **TypeScript**, яка демонструє:\
- роботу з `package.json`, залежностями та скриптами;\
- використання змінних оточення через `.env` (валідація з `zod`);\
- базові можливості TypeScript (типи, інтерфейси, класи, generics);\
- налаштування інструментів для якості коду (ESLint, Prettier, Husky,
Commitlint);\
- семантичне версіонування з git-тегами.

Проєкт розвивається крок за кроком, від найпростішого коду з `any` до
стабільного API та breaking changes.

------------------------------------------------------------------------

## Як запустити

1.  Клонувати репозиторій:\

``` bash
git clone <url>
cd <repo>
```

2.  Встановити залежності:\

``` bash
npm install
```

3.  Запустити демо:\

``` bash
npm run demo
```

4.  Перевірки:\

``` bash
npm run typecheck
npm run lint
npm run format:check
```

5.  Зібрати білд:\

``` bash
npm run build
```

------------------------------------------------------------------------

## Еволюція версій

-   **0.1.0** -- базові функції `add`, `capitalize` з `any`,
    демонстрація лінтингу.\
-   **0.2.0** -- ті ж функції, але з конкретними типами (`number`,
    `string`).\
-   **0.3.0** -- додано `formatNumber` з `NumberFormatOptions` та
    роботою зі змінними оточення.\
-   **0.4.0** -- додано `User` та generic-функцію `groupBy<T>`.\
-   **0.5.0** -- клас `Logger`, валідація `.env` через `zod`, інтеграція
    APP_PRECISION.\
-   **1.0.0** -- стабілізація публічного API, заборона `any`, додано
    `exports` у `package.json`.\
-   **2.0.0** -- breaking change: `add` тепер приймає `number[]`.

------------------------------------------------------------------------

## Приклади використання

``` ts
import { add, capitalize, formatNumber, groupBy, Logger, type User, config } from 'my-lib';

// add (версія 2.0.0+)
console.log(add([1, 2, 3])); // 6

// capitalize
console.log(capitalize('hello')); // "Hello"

// formatNumber (precision з .env або переданих опцій)
console.log(formatNumber(123.456, { precision: 2 })); // "123.46"

// groupBy
const users: User[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];
console.log(groupBy(users, 'name'));
// { Alice: [{id:1, name:'Alice'}], Bob: [{id:2, name:'Bob'}] }

// Logger з рівнем з .env
const logger = new Logger(config.LOG_LEVEL);
logger.info('Application started');
logger.debug('Extra debug info');
```

------------------------------------------------------------------------

## Змінні оточення

Файл `.env` (не комітиться в git):

``` env
APP_PRECISION=3
LOG_LEVEL=debug
```

-   **APP_PRECISION** -- число від 0 до 10, кількість знаків після
    коми.\
-   **LOG_LEVEL** -- рівень логування: `silent` \| `info` \| `debug`.

------------------------------------------------------------------------

## Релізи

Усі версії позначені git-тегами:\
- [v0.1.0](../../releases/tag/v0.1.0)
- [v0.2.0](../../releases/tag/v0.2.0)
- [v0.3.0](../../releases/tag/v0.3.0)
- [v0.4.0](../../releases/tag/v0.4.0)
- [v0.5.0](../../releases/tag/v0.5.0)
- [v1.0.0](../../releases/tag/v1.0.0)
- [v2.0.0](../../releases/tag/v2.0.0)