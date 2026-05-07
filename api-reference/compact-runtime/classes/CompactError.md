[**@midnight-ntwrk/compact-runtime v0.16.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / CompactError

# Class: CompactError

Compact 컴파일러가 생성한 코드에서 발생하는 오류

## Extends

- `Error`

## Constructors

### Constructor

```ts
new CompactError(msg): CompactError;
```

#### Parameters

##### msg

`string`

#### Returns

`CompactError`

#### Overrides

```ts
Error.constructor
```

## Properties

### message

```ts
message: string;
```

#### Inherited from

```ts
Error.message
```

***

### name

```ts
name: string;
```

#### Inherited from

```ts
Error.name
```

***

### stack?

```ts
optional stack: string;
```

#### Inherited from

```ts
Error.stack
```

***

### stackTraceLimit

```ts
static stackTraceLimit: number;
```

`Error.stackTraceLimit` 프로퍼티는 스택 트레이스가 수집하는 스택 프레임 수를
지정합니다(`new Error().stack` 또는 `Error.captureStackTrace(obj)`로 생성 시 적용).

기본값은 `10`이며 유효한 JavaScript 숫자로 설정할 수 있습니다. 변경 사항은
값이 변경된 _이후에_ 캡처되는 스택 트레이스에 적용됩니다.

숫자가 아닌 값이나 음수로 설정하면 스택 트레이스가 프레임을 캡처하지 않습니다.

#### Inherited from

```ts
Error.stackTraceLimit
```

## Methods

### captureStackTrace()

```ts
static captureStackTrace(targetObject, constructorOpt?): void;
```

`targetObject`에 `.stack` 프로퍼티를 생성합니다. 이 프로퍼티에 접근하면
`Error.captureStackTrace()`가 호출된 코드 위치를 나타내는 문자열을 반환합니다.

```js
const myObject = {};
Error.captureStackTrace(myObject);
myObject.stack;  // Similar to `new Error().stack`
```

트레이스의 첫 번째 줄은 `${myObject.name}: ${myObject.message}` 형식의
접두사가 붙습니다.

선택적 `constructorOpt` 인자는 함수를 받습니다. 이 인자를 지정하면
`constructorOpt`를 포함하여 그 위의 모든 프레임이 생성되는 스택 트레이스에서
생략됩니다.

`constructorOpt` 인자는 오류 생성의 구현 세부사항을 사용자에게
숨기는 데 유용합니다. 예시:

```js
function a() {
  b();
}

function b() {
  c();
}

function c() {
  // Create an error without stack trace to avoid calculating the stack trace twice.
  const { stackTraceLimit } = Error;
  Error.stackTraceLimit = 0;
  const error = new Error();
  Error.stackTraceLimit = stackTraceLimit;

  // Capture the stack trace above function b
  Error.captureStackTrace(error, b); // Neither function c, nor b is included in the stack trace
  throw error;
}

a();
```

#### Parameters

##### targetObject

`object`

##### constructorOpt?

`Function`

#### Returns

`void`

#### Inherited from

```ts
Error.captureStackTrace
```

***

### prepareStackTrace()

```ts
static prepareStackTrace(err, stackTraces): any;
```

#### Parameters

##### err

`Error`

##### stackTraces

`CallSite`[]

#### Returns

`any`

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

```ts
Error.prepareStackTrace
```
