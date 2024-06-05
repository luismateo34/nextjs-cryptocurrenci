
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Listnamecripto
 * 
 */
export type Listnamecripto = $Result.DefaultSelection<Prisma.$ListnamecriptoPayload>
/**
 * Model DerivateCripto
 * 
 */
export type DerivateCripto = $Result.DefaultSelection<Prisma.$DerivateCriptoPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Listnamecriptos
 * const listnamecriptos = await prisma.listnamecripto.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Listnamecriptos
   * const listnamecriptos = await prisma.listnamecripto.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.listnamecripto`: Exposes CRUD operations for the **Listnamecripto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Listnamecriptos
    * const listnamecriptos = await prisma.listnamecripto.findMany()
    * ```
    */
  get listnamecripto(): Prisma.ListnamecriptoDelegate<ExtArgs>;

  /**
   * `prisma.derivateCripto`: Exposes CRUD operations for the **DerivateCripto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DerivateCriptos
    * const derivateCriptos = await prisma.derivateCripto.findMany()
    * ```
    */
  get derivateCripto(): Prisma.DerivateCriptoDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.15.0
   * Query Engine version: 12e25d8d06f6ea5a0252864dd9a03b1bb51f3022
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Listnamecripto: 'Listnamecripto',
    DerivateCripto: 'DerivateCripto'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'listnamecripto' | 'derivateCripto'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Listnamecripto: {
        payload: Prisma.$ListnamecriptoPayload<ExtArgs>
        fields: Prisma.ListnamecriptoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ListnamecriptoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListnamecriptoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ListnamecriptoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListnamecriptoPayload>
          }
          findFirst: {
            args: Prisma.ListnamecriptoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListnamecriptoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ListnamecriptoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListnamecriptoPayload>
          }
          findMany: {
            args: Prisma.ListnamecriptoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListnamecriptoPayload>[]
          }
          create: {
            args: Prisma.ListnamecriptoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListnamecriptoPayload>
          }
          createMany: {
            args: Prisma.ListnamecriptoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ListnamecriptoCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListnamecriptoPayload>[]
          }
          delete: {
            args: Prisma.ListnamecriptoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListnamecriptoPayload>
          }
          update: {
            args: Prisma.ListnamecriptoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListnamecriptoPayload>
          }
          deleteMany: {
            args: Prisma.ListnamecriptoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ListnamecriptoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ListnamecriptoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListnamecriptoPayload>
          }
          aggregate: {
            args: Prisma.ListnamecriptoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateListnamecripto>
          }
          groupBy: {
            args: Prisma.ListnamecriptoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ListnamecriptoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ListnamecriptoCountArgs<ExtArgs>,
            result: $Utils.Optional<ListnamecriptoCountAggregateOutputType> | number
          }
        }
      }
      DerivateCripto: {
        payload: Prisma.$DerivateCriptoPayload<ExtArgs>
        fields: Prisma.DerivateCriptoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DerivateCriptoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DerivateCriptoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DerivateCriptoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DerivateCriptoPayload>
          }
          findFirst: {
            args: Prisma.DerivateCriptoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DerivateCriptoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DerivateCriptoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DerivateCriptoPayload>
          }
          findMany: {
            args: Prisma.DerivateCriptoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DerivateCriptoPayload>[]
          }
          create: {
            args: Prisma.DerivateCriptoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DerivateCriptoPayload>
          }
          createMany: {
            args: Prisma.DerivateCriptoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DerivateCriptoCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DerivateCriptoPayload>[]
          }
          delete: {
            args: Prisma.DerivateCriptoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DerivateCriptoPayload>
          }
          update: {
            args: Prisma.DerivateCriptoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DerivateCriptoPayload>
          }
          deleteMany: {
            args: Prisma.DerivateCriptoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DerivateCriptoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DerivateCriptoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DerivateCriptoPayload>
          }
          aggregate: {
            args: Prisma.DerivateCriptoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDerivateCripto>
          }
          groupBy: {
            args: Prisma.DerivateCriptoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DerivateCriptoGroupByOutputType>[]
          }
          count: {
            args: Prisma.DerivateCriptoCountArgs<ExtArgs>,
            result: $Utils.Optional<DerivateCriptoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Listnamecripto
   */

  export type AggregateListnamecripto = {
    _count: ListnamecriptoCountAggregateOutputType | null
    _min: ListnamecriptoMinAggregateOutputType | null
    _max: ListnamecriptoMaxAggregateOutputType | null
  }

  export type ListnamecriptoMinAggregateOutputType = {
    id: string | null
    symbol: string | null
    name: string | null
  }

  export type ListnamecriptoMaxAggregateOutputType = {
    id: string | null
    symbol: string | null
    name: string | null
  }

  export type ListnamecriptoCountAggregateOutputType = {
    id: number
    symbol: number
    name: number
    _all: number
  }


  export type ListnamecriptoMinAggregateInputType = {
    id?: true
    symbol?: true
    name?: true
  }

  export type ListnamecriptoMaxAggregateInputType = {
    id?: true
    symbol?: true
    name?: true
  }

  export type ListnamecriptoCountAggregateInputType = {
    id?: true
    symbol?: true
    name?: true
    _all?: true
  }

  export type ListnamecriptoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Listnamecripto to aggregate.
     */
    where?: ListnamecriptoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listnamecriptos to fetch.
     */
    orderBy?: ListnamecriptoOrderByWithRelationInput | ListnamecriptoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListnamecriptoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listnamecriptos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listnamecriptos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Listnamecriptos
    **/
    _count?: true | ListnamecriptoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListnamecriptoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListnamecriptoMaxAggregateInputType
  }

  export type GetListnamecriptoAggregateType<T extends ListnamecriptoAggregateArgs> = {
        [P in keyof T & keyof AggregateListnamecripto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListnamecripto[P]>
      : GetScalarType<T[P], AggregateListnamecripto[P]>
  }




  export type ListnamecriptoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListnamecriptoWhereInput
    orderBy?: ListnamecriptoOrderByWithAggregationInput | ListnamecriptoOrderByWithAggregationInput[]
    by: ListnamecriptoScalarFieldEnum[] | ListnamecriptoScalarFieldEnum
    having?: ListnamecriptoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListnamecriptoCountAggregateInputType | true
    _min?: ListnamecriptoMinAggregateInputType
    _max?: ListnamecriptoMaxAggregateInputType
  }

  export type ListnamecriptoGroupByOutputType = {
    id: string
    symbol: string
    name: string
    _count: ListnamecriptoCountAggregateOutputType | null
    _min: ListnamecriptoMinAggregateOutputType | null
    _max: ListnamecriptoMaxAggregateOutputType | null
  }

  type GetListnamecriptoGroupByPayload<T extends ListnamecriptoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListnamecriptoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListnamecriptoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListnamecriptoGroupByOutputType[P]>
            : GetScalarType<T[P], ListnamecriptoGroupByOutputType[P]>
        }
      >
    >


  export type ListnamecriptoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    symbol?: boolean
    name?: boolean
  }, ExtArgs["result"]["listnamecripto"]>

  export type ListnamecriptoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    symbol?: boolean
    name?: boolean
  }, ExtArgs["result"]["listnamecripto"]>

  export type ListnamecriptoSelectScalar = {
    id?: boolean
    symbol?: boolean
    name?: boolean
  }


  export type $ListnamecriptoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Listnamecripto"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      symbol: string
      name: string
    }, ExtArgs["result"]["listnamecripto"]>
    composites: {}
  }

  type ListnamecriptoGetPayload<S extends boolean | null | undefined | ListnamecriptoDefaultArgs> = $Result.GetResult<Prisma.$ListnamecriptoPayload, S>

  type ListnamecriptoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ListnamecriptoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ListnamecriptoCountAggregateInputType | true
    }

  export interface ListnamecriptoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Listnamecripto'], meta: { name: 'Listnamecripto' } }
    /**
     * Find zero or one Listnamecripto that matches the filter.
     * @param {ListnamecriptoFindUniqueArgs} args - Arguments to find a Listnamecripto
     * @example
     * // Get one Listnamecripto
     * const listnamecripto = await prisma.listnamecripto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ListnamecriptoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ListnamecriptoFindUniqueArgs<ExtArgs>>
    ): Prisma__ListnamecriptoClient<$Result.GetResult<Prisma.$ListnamecriptoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Listnamecripto that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ListnamecriptoFindUniqueOrThrowArgs} args - Arguments to find a Listnamecripto
     * @example
     * // Get one Listnamecripto
     * const listnamecripto = await prisma.listnamecripto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ListnamecriptoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ListnamecriptoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ListnamecriptoClient<$Result.GetResult<Prisma.$ListnamecriptoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Listnamecripto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListnamecriptoFindFirstArgs} args - Arguments to find a Listnamecripto
     * @example
     * // Get one Listnamecripto
     * const listnamecripto = await prisma.listnamecripto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ListnamecriptoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ListnamecriptoFindFirstArgs<ExtArgs>>
    ): Prisma__ListnamecriptoClient<$Result.GetResult<Prisma.$ListnamecriptoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Listnamecripto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListnamecriptoFindFirstOrThrowArgs} args - Arguments to find a Listnamecripto
     * @example
     * // Get one Listnamecripto
     * const listnamecripto = await prisma.listnamecripto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ListnamecriptoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ListnamecriptoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ListnamecriptoClient<$Result.GetResult<Prisma.$ListnamecriptoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Listnamecriptos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListnamecriptoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Listnamecriptos
     * const listnamecriptos = await prisma.listnamecripto.findMany()
     * 
     * // Get first 10 Listnamecriptos
     * const listnamecriptos = await prisma.listnamecripto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const listnamecriptoWithIdOnly = await prisma.listnamecripto.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ListnamecriptoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ListnamecriptoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListnamecriptoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Listnamecripto.
     * @param {ListnamecriptoCreateArgs} args - Arguments to create a Listnamecripto.
     * @example
     * // Create one Listnamecripto
     * const Listnamecripto = await prisma.listnamecripto.create({
     *   data: {
     *     // ... data to create a Listnamecripto
     *   }
     * })
     * 
    **/
    create<T extends ListnamecriptoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ListnamecriptoCreateArgs<ExtArgs>>
    ): Prisma__ListnamecriptoClient<$Result.GetResult<Prisma.$ListnamecriptoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Listnamecriptos.
     * @param {ListnamecriptoCreateManyArgs} args - Arguments to create many Listnamecriptos.
     * @example
     * // Create many Listnamecriptos
     * const listnamecripto = await prisma.listnamecripto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ListnamecriptoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ListnamecriptoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Listnamecriptos and returns the data saved in the database.
     * @param {ListnamecriptoCreateManyAndReturnArgs} args - Arguments to create many Listnamecriptos.
     * @example
     * // Create many Listnamecriptos
     * const listnamecripto = await prisma.listnamecripto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Listnamecriptos and only return the `id`
     * const listnamecriptoWithIdOnly = await prisma.listnamecripto.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends ListnamecriptoCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, ListnamecriptoCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListnamecriptoPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Listnamecripto.
     * @param {ListnamecriptoDeleteArgs} args - Arguments to delete one Listnamecripto.
     * @example
     * // Delete one Listnamecripto
     * const Listnamecripto = await prisma.listnamecripto.delete({
     *   where: {
     *     // ... filter to delete one Listnamecripto
     *   }
     * })
     * 
    **/
    delete<T extends ListnamecriptoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ListnamecriptoDeleteArgs<ExtArgs>>
    ): Prisma__ListnamecriptoClient<$Result.GetResult<Prisma.$ListnamecriptoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Listnamecripto.
     * @param {ListnamecriptoUpdateArgs} args - Arguments to update one Listnamecripto.
     * @example
     * // Update one Listnamecripto
     * const listnamecripto = await prisma.listnamecripto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ListnamecriptoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ListnamecriptoUpdateArgs<ExtArgs>>
    ): Prisma__ListnamecriptoClient<$Result.GetResult<Prisma.$ListnamecriptoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Listnamecriptos.
     * @param {ListnamecriptoDeleteManyArgs} args - Arguments to filter Listnamecriptos to delete.
     * @example
     * // Delete a few Listnamecriptos
     * const { count } = await prisma.listnamecripto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ListnamecriptoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ListnamecriptoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Listnamecriptos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListnamecriptoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Listnamecriptos
     * const listnamecripto = await prisma.listnamecripto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ListnamecriptoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ListnamecriptoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Listnamecripto.
     * @param {ListnamecriptoUpsertArgs} args - Arguments to update or create a Listnamecripto.
     * @example
     * // Update or create a Listnamecripto
     * const listnamecripto = await prisma.listnamecripto.upsert({
     *   create: {
     *     // ... data to create a Listnamecripto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Listnamecripto we want to update
     *   }
     * })
    **/
    upsert<T extends ListnamecriptoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ListnamecriptoUpsertArgs<ExtArgs>>
    ): Prisma__ListnamecriptoClient<$Result.GetResult<Prisma.$ListnamecriptoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Listnamecriptos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListnamecriptoCountArgs} args - Arguments to filter Listnamecriptos to count.
     * @example
     * // Count the number of Listnamecriptos
     * const count = await prisma.listnamecripto.count({
     *   where: {
     *     // ... the filter for the Listnamecriptos we want to count
     *   }
     * })
    **/
    count<T extends ListnamecriptoCountArgs>(
      args?: Subset<T, ListnamecriptoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListnamecriptoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Listnamecripto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListnamecriptoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ListnamecriptoAggregateArgs>(args: Subset<T, ListnamecriptoAggregateArgs>): Prisma.PrismaPromise<GetListnamecriptoAggregateType<T>>

    /**
     * Group by Listnamecripto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListnamecriptoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ListnamecriptoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListnamecriptoGroupByArgs['orderBy'] }
        : { orderBy?: ListnamecriptoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ListnamecriptoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListnamecriptoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Listnamecripto model
   */
  readonly fields: ListnamecriptoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Listnamecripto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ListnamecriptoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Listnamecripto model
   */ 
  interface ListnamecriptoFieldRefs {
    readonly id: FieldRef<"Listnamecripto", 'String'>
    readonly symbol: FieldRef<"Listnamecripto", 'String'>
    readonly name: FieldRef<"Listnamecripto", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Listnamecripto findUnique
   */
  export type ListnamecriptoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listnamecripto
     */
    select?: ListnamecriptoSelect<ExtArgs> | null
    /**
     * Filter, which Listnamecripto to fetch.
     */
    where: ListnamecriptoWhereUniqueInput
  }

  /**
   * Listnamecripto findUniqueOrThrow
   */
  export type ListnamecriptoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listnamecripto
     */
    select?: ListnamecriptoSelect<ExtArgs> | null
    /**
     * Filter, which Listnamecripto to fetch.
     */
    where: ListnamecriptoWhereUniqueInput
  }

  /**
   * Listnamecripto findFirst
   */
  export type ListnamecriptoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listnamecripto
     */
    select?: ListnamecriptoSelect<ExtArgs> | null
    /**
     * Filter, which Listnamecripto to fetch.
     */
    where?: ListnamecriptoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listnamecriptos to fetch.
     */
    orderBy?: ListnamecriptoOrderByWithRelationInput | ListnamecriptoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Listnamecriptos.
     */
    cursor?: ListnamecriptoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listnamecriptos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listnamecriptos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Listnamecriptos.
     */
    distinct?: ListnamecriptoScalarFieldEnum | ListnamecriptoScalarFieldEnum[]
  }

  /**
   * Listnamecripto findFirstOrThrow
   */
  export type ListnamecriptoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listnamecripto
     */
    select?: ListnamecriptoSelect<ExtArgs> | null
    /**
     * Filter, which Listnamecripto to fetch.
     */
    where?: ListnamecriptoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listnamecriptos to fetch.
     */
    orderBy?: ListnamecriptoOrderByWithRelationInput | ListnamecriptoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Listnamecriptos.
     */
    cursor?: ListnamecriptoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listnamecriptos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listnamecriptos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Listnamecriptos.
     */
    distinct?: ListnamecriptoScalarFieldEnum | ListnamecriptoScalarFieldEnum[]
  }

  /**
   * Listnamecripto findMany
   */
  export type ListnamecriptoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listnamecripto
     */
    select?: ListnamecriptoSelect<ExtArgs> | null
    /**
     * Filter, which Listnamecriptos to fetch.
     */
    where?: ListnamecriptoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listnamecriptos to fetch.
     */
    orderBy?: ListnamecriptoOrderByWithRelationInput | ListnamecriptoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Listnamecriptos.
     */
    cursor?: ListnamecriptoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listnamecriptos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listnamecriptos.
     */
    skip?: number
    distinct?: ListnamecriptoScalarFieldEnum | ListnamecriptoScalarFieldEnum[]
  }

  /**
   * Listnamecripto create
   */
  export type ListnamecriptoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listnamecripto
     */
    select?: ListnamecriptoSelect<ExtArgs> | null
    /**
     * The data needed to create a Listnamecripto.
     */
    data: XOR<ListnamecriptoCreateInput, ListnamecriptoUncheckedCreateInput>
  }

  /**
   * Listnamecripto createMany
   */
  export type ListnamecriptoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Listnamecriptos.
     */
    data: ListnamecriptoCreateManyInput | ListnamecriptoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Listnamecripto createManyAndReturn
   */
  export type ListnamecriptoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listnamecripto
     */
    select?: ListnamecriptoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Listnamecriptos.
     */
    data: ListnamecriptoCreateManyInput | ListnamecriptoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Listnamecripto update
   */
  export type ListnamecriptoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listnamecripto
     */
    select?: ListnamecriptoSelect<ExtArgs> | null
    /**
     * The data needed to update a Listnamecripto.
     */
    data: XOR<ListnamecriptoUpdateInput, ListnamecriptoUncheckedUpdateInput>
    /**
     * Choose, which Listnamecripto to update.
     */
    where: ListnamecriptoWhereUniqueInput
  }

  /**
   * Listnamecripto updateMany
   */
  export type ListnamecriptoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Listnamecriptos.
     */
    data: XOR<ListnamecriptoUpdateManyMutationInput, ListnamecriptoUncheckedUpdateManyInput>
    /**
     * Filter which Listnamecriptos to update
     */
    where?: ListnamecriptoWhereInput
  }

  /**
   * Listnamecripto upsert
   */
  export type ListnamecriptoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listnamecripto
     */
    select?: ListnamecriptoSelect<ExtArgs> | null
    /**
     * The filter to search for the Listnamecripto to update in case it exists.
     */
    where: ListnamecriptoWhereUniqueInput
    /**
     * In case the Listnamecripto found by the `where` argument doesn't exist, create a new Listnamecripto with this data.
     */
    create: XOR<ListnamecriptoCreateInput, ListnamecriptoUncheckedCreateInput>
    /**
     * In case the Listnamecripto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListnamecriptoUpdateInput, ListnamecriptoUncheckedUpdateInput>
  }

  /**
   * Listnamecripto delete
   */
  export type ListnamecriptoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listnamecripto
     */
    select?: ListnamecriptoSelect<ExtArgs> | null
    /**
     * Filter which Listnamecripto to delete.
     */
    where: ListnamecriptoWhereUniqueInput
  }

  /**
   * Listnamecripto deleteMany
   */
  export type ListnamecriptoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Listnamecriptos to delete
     */
    where?: ListnamecriptoWhereInput
  }

  /**
   * Listnamecripto without action
   */
  export type ListnamecriptoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listnamecripto
     */
    select?: ListnamecriptoSelect<ExtArgs> | null
  }


  /**
   * Model DerivateCripto
   */

  export type AggregateDerivateCripto = {
    _count: DerivateCriptoCountAggregateOutputType | null
    _avg: DerivateCriptoAvgAggregateOutputType | null
    _sum: DerivateCriptoSumAggregateOutputType | null
    _min: DerivateCriptoMinAggregateOutputType | null
    _max: DerivateCriptoMaxAggregateOutputType | null
  }

  export type DerivateCriptoAvgAggregateOutputType = {
    price_percentage_change_24h: number | null
    index: number | null
    basis: number | null
    spread: number | null
    funding_rate: number | null
    open_interest: number | null
    volume_24h: number | null
    last_traded_at: number | null
    expired_at: number | null
  }

  export type DerivateCriptoSumAggregateOutputType = {
    price_percentage_change_24h: number | null
    index: number | null
    basis: number | null
    spread: number | null
    funding_rate: number | null
    open_interest: number | null
    volume_24h: number | null
    last_traded_at: number | null
    expired_at: number | null
  }

  export type DerivateCriptoMinAggregateOutputType = {
    market: string | null
    symbol: string | null
    index_id: string | null
    price: string | null
    price_percentage_change_24h: number | null
    contract_type: string | null
    index: number | null
    basis: number | null
    spread: number | null
    funding_rate: number | null
    open_interest: number | null
    volume_24h: number | null
    last_traded_at: number | null
    expired_at: number | null
  }

  export type DerivateCriptoMaxAggregateOutputType = {
    market: string | null
    symbol: string | null
    index_id: string | null
    price: string | null
    price_percentage_change_24h: number | null
    contract_type: string | null
    index: number | null
    basis: number | null
    spread: number | null
    funding_rate: number | null
    open_interest: number | null
    volume_24h: number | null
    last_traded_at: number | null
    expired_at: number | null
  }

  export type DerivateCriptoCountAggregateOutputType = {
    market: number
    symbol: number
    index_id: number
    price: number
    price_percentage_change_24h: number
    contract_type: number
    index: number
    basis: number
    spread: number
    funding_rate: number
    open_interest: number
    volume_24h: number
    last_traded_at: number
    expired_at: number
    _all: number
  }


  export type DerivateCriptoAvgAggregateInputType = {
    price_percentage_change_24h?: true
    index?: true
    basis?: true
    spread?: true
    funding_rate?: true
    open_interest?: true
    volume_24h?: true
    last_traded_at?: true
    expired_at?: true
  }

  export type DerivateCriptoSumAggregateInputType = {
    price_percentage_change_24h?: true
    index?: true
    basis?: true
    spread?: true
    funding_rate?: true
    open_interest?: true
    volume_24h?: true
    last_traded_at?: true
    expired_at?: true
  }

  export type DerivateCriptoMinAggregateInputType = {
    market?: true
    symbol?: true
    index_id?: true
    price?: true
    price_percentage_change_24h?: true
    contract_type?: true
    index?: true
    basis?: true
    spread?: true
    funding_rate?: true
    open_interest?: true
    volume_24h?: true
    last_traded_at?: true
    expired_at?: true
  }

  export type DerivateCriptoMaxAggregateInputType = {
    market?: true
    symbol?: true
    index_id?: true
    price?: true
    price_percentage_change_24h?: true
    contract_type?: true
    index?: true
    basis?: true
    spread?: true
    funding_rate?: true
    open_interest?: true
    volume_24h?: true
    last_traded_at?: true
    expired_at?: true
  }

  export type DerivateCriptoCountAggregateInputType = {
    market?: true
    symbol?: true
    index_id?: true
    price?: true
    price_percentage_change_24h?: true
    contract_type?: true
    index?: true
    basis?: true
    spread?: true
    funding_rate?: true
    open_interest?: true
    volume_24h?: true
    last_traded_at?: true
    expired_at?: true
    _all?: true
  }

  export type DerivateCriptoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DerivateCripto to aggregate.
     */
    where?: DerivateCriptoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DerivateCriptos to fetch.
     */
    orderBy?: DerivateCriptoOrderByWithRelationInput | DerivateCriptoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DerivateCriptoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DerivateCriptos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DerivateCriptos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DerivateCriptos
    **/
    _count?: true | DerivateCriptoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DerivateCriptoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DerivateCriptoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DerivateCriptoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DerivateCriptoMaxAggregateInputType
  }

  export type GetDerivateCriptoAggregateType<T extends DerivateCriptoAggregateArgs> = {
        [P in keyof T & keyof AggregateDerivateCripto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDerivateCripto[P]>
      : GetScalarType<T[P], AggregateDerivateCripto[P]>
  }




  export type DerivateCriptoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DerivateCriptoWhereInput
    orderBy?: DerivateCriptoOrderByWithAggregationInput | DerivateCriptoOrderByWithAggregationInput[]
    by: DerivateCriptoScalarFieldEnum[] | DerivateCriptoScalarFieldEnum
    having?: DerivateCriptoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DerivateCriptoCountAggregateInputType | true
    _avg?: DerivateCriptoAvgAggregateInputType
    _sum?: DerivateCriptoSumAggregateInputType
    _min?: DerivateCriptoMinAggregateInputType
    _max?: DerivateCriptoMaxAggregateInputType
  }

  export type DerivateCriptoGroupByOutputType = {
    market: string
    symbol: string
    index_id: string
    price: string
    price_percentage_change_24h: number
    contract_type: string
    index: number | null
    basis: number
    spread: number | null
    funding_rate: number
    open_interest: number | null
    volume_24h: number
    last_traded_at: number
    expired_at: number | null
    _count: DerivateCriptoCountAggregateOutputType | null
    _avg: DerivateCriptoAvgAggregateOutputType | null
    _sum: DerivateCriptoSumAggregateOutputType | null
    _min: DerivateCriptoMinAggregateOutputType | null
    _max: DerivateCriptoMaxAggregateOutputType | null
  }

  type GetDerivateCriptoGroupByPayload<T extends DerivateCriptoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DerivateCriptoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DerivateCriptoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DerivateCriptoGroupByOutputType[P]>
            : GetScalarType<T[P], DerivateCriptoGroupByOutputType[P]>
        }
      >
    >


  export type DerivateCriptoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    market?: boolean
    symbol?: boolean
    index_id?: boolean
    price?: boolean
    price_percentage_change_24h?: boolean
    contract_type?: boolean
    index?: boolean
    basis?: boolean
    spread?: boolean
    funding_rate?: boolean
    open_interest?: boolean
    volume_24h?: boolean
    last_traded_at?: boolean
    expired_at?: boolean
  }, ExtArgs["result"]["derivateCripto"]>

  export type DerivateCriptoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    market?: boolean
    symbol?: boolean
    index_id?: boolean
    price?: boolean
    price_percentage_change_24h?: boolean
    contract_type?: boolean
    index?: boolean
    basis?: boolean
    spread?: boolean
    funding_rate?: boolean
    open_interest?: boolean
    volume_24h?: boolean
    last_traded_at?: boolean
    expired_at?: boolean
  }, ExtArgs["result"]["derivateCripto"]>

  export type DerivateCriptoSelectScalar = {
    market?: boolean
    symbol?: boolean
    index_id?: boolean
    price?: boolean
    price_percentage_change_24h?: boolean
    contract_type?: boolean
    index?: boolean
    basis?: boolean
    spread?: boolean
    funding_rate?: boolean
    open_interest?: boolean
    volume_24h?: boolean
    last_traded_at?: boolean
    expired_at?: boolean
  }


  export type $DerivateCriptoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DerivateCripto"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      market: string
      symbol: string
      index_id: string
      price: string
      price_percentage_change_24h: number
      contract_type: string
      index: number | null
      basis: number
      spread: number | null
      funding_rate: number
      open_interest: number | null
      volume_24h: number
      last_traded_at: number
      expired_at: number | null
    }, ExtArgs["result"]["derivateCripto"]>
    composites: {}
  }

  type DerivateCriptoGetPayload<S extends boolean | null | undefined | DerivateCriptoDefaultArgs> = $Result.GetResult<Prisma.$DerivateCriptoPayload, S>

  type DerivateCriptoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DerivateCriptoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DerivateCriptoCountAggregateInputType | true
    }

  export interface DerivateCriptoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DerivateCripto'], meta: { name: 'DerivateCripto' } }
    /**
     * Find zero or one DerivateCripto that matches the filter.
     * @param {DerivateCriptoFindUniqueArgs} args - Arguments to find a DerivateCripto
     * @example
     * // Get one DerivateCripto
     * const derivateCripto = await prisma.derivateCripto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DerivateCriptoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DerivateCriptoFindUniqueArgs<ExtArgs>>
    ): Prisma__DerivateCriptoClient<$Result.GetResult<Prisma.$DerivateCriptoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DerivateCripto that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DerivateCriptoFindUniqueOrThrowArgs} args - Arguments to find a DerivateCripto
     * @example
     * // Get one DerivateCripto
     * const derivateCripto = await prisma.derivateCripto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DerivateCriptoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DerivateCriptoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DerivateCriptoClient<$Result.GetResult<Prisma.$DerivateCriptoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DerivateCripto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DerivateCriptoFindFirstArgs} args - Arguments to find a DerivateCripto
     * @example
     * // Get one DerivateCripto
     * const derivateCripto = await prisma.derivateCripto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DerivateCriptoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DerivateCriptoFindFirstArgs<ExtArgs>>
    ): Prisma__DerivateCriptoClient<$Result.GetResult<Prisma.$DerivateCriptoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DerivateCripto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DerivateCriptoFindFirstOrThrowArgs} args - Arguments to find a DerivateCripto
     * @example
     * // Get one DerivateCripto
     * const derivateCripto = await prisma.derivateCripto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DerivateCriptoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DerivateCriptoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DerivateCriptoClient<$Result.GetResult<Prisma.$DerivateCriptoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DerivateCriptos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DerivateCriptoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DerivateCriptos
     * const derivateCriptos = await prisma.derivateCripto.findMany()
     * 
     * // Get first 10 DerivateCriptos
     * const derivateCriptos = await prisma.derivateCripto.findMany({ take: 10 })
     * 
     * // Only select the `market`
     * const derivateCriptoWithMarketOnly = await prisma.derivateCripto.findMany({ select: { market: true } })
     * 
    **/
    findMany<T extends DerivateCriptoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DerivateCriptoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DerivateCriptoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DerivateCripto.
     * @param {DerivateCriptoCreateArgs} args - Arguments to create a DerivateCripto.
     * @example
     * // Create one DerivateCripto
     * const DerivateCripto = await prisma.derivateCripto.create({
     *   data: {
     *     // ... data to create a DerivateCripto
     *   }
     * })
     * 
    **/
    create<T extends DerivateCriptoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DerivateCriptoCreateArgs<ExtArgs>>
    ): Prisma__DerivateCriptoClient<$Result.GetResult<Prisma.$DerivateCriptoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DerivateCriptos.
     * @param {DerivateCriptoCreateManyArgs} args - Arguments to create many DerivateCriptos.
     * @example
     * // Create many DerivateCriptos
     * const derivateCripto = await prisma.derivateCripto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends DerivateCriptoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DerivateCriptoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DerivateCriptos and returns the data saved in the database.
     * @param {DerivateCriptoCreateManyAndReturnArgs} args - Arguments to create many DerivateCriptos.
     * @example
     * // Create many DerivateCriptos
     * const derivateCripto = await prisma.derivateCripto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DerivateCriptos and only return the `market`
     * const derivateCriptoWithMarketOnly = await prisma.derivateCripto.createManyAndReturn({ 
     *   select: { market: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends DerivateCriptoCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, DerivateCriptoCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DerivateCriptoPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a DerivateCripto.
     * @param {DerivateCriptoDeleteArgs} args - Arguments to delete one DerivateCripto.
     * @example
     * // Delete one DerivateCripto
     * const DerivateCripto = await prisma.derivateCripto.delete({
     *   where: {
     *     // ... filter to delete one DerivateCripto
     *   }
     * })
     * 
    **/
    delete<T extends DerivateCriptoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DerivateCriptoDeleteArgs<ExtArgs>>
    ): Prisma__DerivateCriptoClient<$Result.GetResult<Prisma.$DerivateCriptoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DerivateCripto.
     * @param {DerivateCriptoUpdateArgs} args - Arguments to update one DerivateCripto.
     * @example
     * // Update one DerivateCripto
     * const derivateCripto = await prisma.derivateCripto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DerivateCriptoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DerivateCriptoUpdateArgs<ExtArgs>>
    ): Prisma__DerivateCriptoClient<$Result.GetResult<Prisma.$DerivateCriptoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DerivateCriptos.
     * @param {DerivateCriptoDeleteManyArgs} args - Arguments to filter DerivateCriptos to delete.
     * @example
     * // Delete a few DerivateCriptos
     * const { count } = await prisma.derivateCripto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DerivateCriptoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DerivateCriptoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DerivateCriptos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DerivateCriptoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DerivateCriptos
     * const derivateCripto = await prisma.derivateCripto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DerivateCriptoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DerivateCriptoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DerivateCripto.
     * @param {DerivateCriptoUpsertArgs} args - Arguments to update or create a DerivateCripto.
     * @example
     * // Update or create a DerivateCripto
     * const derivateCripto = await prisma.derivateCripto.upsert({
     *   create: {
     *     // ... data to create a DerivateCripto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DerivateCripto we want to update
     *   }
     * })
    **/
    upsert<T extends DerivateCriptoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DerivateCriptoUpsertArgs<ExtArgs>>
    ): Prisma__DerivateCriptoClient<$Result.GetResult<Prisma.$DerivateCriptoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DerivateCriptos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DerivateCriptoCountArgs} args - Arguments to filter DerivateCriptos to count.
     * @example
     * // Count the number of DerivateCriptos
     * const count = await prisma.derivateCripto.count({
     *   where: {
     *     // ... the filter for the DerivateCriptos we want to count
     *   }
     * })
    **/
    count<T extends DerivateCriptoCountArgs>(
      args?: Subset<T, DerivateCriptoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DerivateCriptoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DerivateCripto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DerivateCriptoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DerivateCriptoAggregateArgs>(args: Subset<T, DerivateCriptoAggregateArgs>): Prisma.PrismaPromise<GetDerivateCriptoAggregateType<T>>

    /**
     * Group by DerivateCripto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DerivateCriptoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DerivateCriptoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DerivateCriptoGroupByArgs['orderBy'] }
        : { orderBy?: DerivateCriptoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DerivateCriptoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDerivateCriptoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DerivateCripto model
   */
  readonly fields: DerivateCriptoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DerivateCripto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DerivateCriptoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the DerivateCripto model
   */ 
  interface DerivateCriptoFieldRefs {
    readonly market: FieldRef<"DerivateCripto", 'String'>
    readonly symbol: FieldRef<"DerivateCripto", 'String'>
    readonly index_id: FieldRef<"DerivateCripto", 'String'>
    readonly price: FieldRef<"DerivateCripto", 'String'>
    readonly price_percentage_change_24h: FieldRef<"DerivateCripto", 'Float'>
    readonly contract_type: FieldRef<"DerivateCripto", 'String'>
    readonly index: FieldRef<"DerivateCripto", 'Int'>
    readonly basis: FieldRef<"DerivateCripto", 'Float'>
    readonly spread: FieldRef<"DerivateCripto", 'Float'>
    readonly funding_rate: FieldRef<"DerivateCripto", 'Float'>
    readonly open_interest: FieldRef<"DerivateCripto", 'Float'>
    readonly volume_24h: FieldRef<"DerivateCripto", 'Float'>
    readonly last_traded_at: FieldRef<"DerivateCripto", 'Int'>
    readonly expired_at: FieldRef<"DerivateCripto", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DerivateCripto findUnique
   */
  export type DerivateCriptoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DerivateCripto
     */
    select?: DerivateCriptoSelect<ExtArgs> | null
    /**
     * Filter, which DerivateCripto to fetch.
     */
    where: DerivateCriptoWhereUniqueInput
  }

  /**
   * DerivateCripto findUniqueOrThrow
   */
  export type DerivateCriptoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DerivateCripto
     */
    select?: DerivateCriptoSelect<ExtArgs> | null
    /**
     * Filter, which DerivateCripto to fetch.
     */
    where: DerivateCriptoWhereUniqueInput
  }

  /**
   * DerivateCripto findFirst
   */
  export type DerivateCriptoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DerivateCripto
     */
    select?: DerivateCriptoSelect<ExtArgs> | null
    /**
     * Filter, which DerivateCripto to fetch.
     */
    where?: DerivateCriptoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DerivateCriptos to fetch.
     */
    orderBy?: DerivateCriptoOrderByWithRelationInput | DerivateCriptoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DerivateCriptos.
     */
    cursor?: DerivateCriptoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DerivateCriptos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DerivateCriptos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DerivateCriptos.
     */
    distinct?: DerivateCriptoScalarFieldEnum | DerivateCriptoScalarFieldEnum[]
  }

  /**
   * DerivateCripto findFirstOrThrow
   */
  export type DerivateCriptoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DerivateCripto
     */
    select?: DerivateCriptoSelect<ExtArgs> | null
    /**
     * Filter, which DerivateCripto to fetch.
     */
    where?: DerivateCriptoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DerivateCriptos to fetch.
     */
    orderBy?: DerivateCriptoOrderByWithRelationInput | DerivateCriptoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DerivateCriptos.
     */
    cursor?: DerivateCriptoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DerivateCriptos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DerivateCriptos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DerivateCriptos.
     */
    distinct?: DerivateCriptoScalarFieldEnum | DerivateCriptoScalarFieldEnum[]
  }

  /**
   * DerivateCripto findMany
   */
  export type DerivateCriptoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DerivateCripto
     */
    select?: DerivateCriptoSelect<ExtArgs> | null
    /**
     * Filter, which DerivateCriptos to fetch.
     */
    where?: DerivateCriptoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DerivateCriptos to fetch.
     */
    orderBy?: DerivateCriptoOrderByWithRelationInput | DerivateCriptoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DerivateCriptos.
     */
    cursor?: DerivateCriptoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DerivateCriptos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DerivateCriptos.
     */
    skip?: number
    distinct?: DerivateCriptoScalarFieldEnum | DerivateCriptoScalarFieldEnum[]
  }

  /**
   * DerivateCripto create
   */
  export type DerivateCriptoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DerivateCripto
     */
    select?: DerivateCriptoSelect<ExtArgs> | null
    /**
     * The data needed to create a DerivateCripto.
     */
    data: XOR<DerivateCriptoCreateInput, DerivateCriptoUncheckedCreateInput>
  }

  /**
   * DerivateCripto createMany
   */
  export type DerivateCriptoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DerivateCriptos.
     */
    data: DerivateCriptoCreateManyInput | DerivateCriptoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DerivateCripto createManyAndReturn
   */
  export type DerivateCriptoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DerivateCripto
     */
    select?: DerivateCriptoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many DerivateCriptos.
     */
    data: DerivateCriptoCreateManyInput | DerivateCriptoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DerivateCripto update
   */
  export type DerivateCriptoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DerivateCripto
     */
    select?: DerivateCriptoSelect<ExtArgs> | null
    /**
     * The data needed to update a DerivateCripto.
     */
    data: XOR<DerivateCriptoUpdateInput, DerivateCriptoUncheckedUpdateInput>
    /**
     * Choose, which DerivateCripto to update.
     */
    where: DerivateCriptoWhereUniqueInput
  }

  /**
   * DerivateCripto updateMany
   */
  export type DerivateCriptoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DerivateCriptos.
     */
    data: XOR<DerivateCriptoUpdateManyMutationInput, DerivateCriptoUncheckedUpdateManyInput>
    /**
     * Filter which DerivateCriptos to update
     */
    where?: DerivateCriptoWhereInput
  }

  /**
   * DerivateCripto upsert
   */
  export type DerivateCriptoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DerivateCripto
     */
    select?: DerivateCriptoSelect<ExtArgs> | null
    /**
     * The filter to search for the DerivateCripto to update in case it exists.
     */
    where: DerivateCriptoWhereUniqueInput
    /**
     * In case the DerivateCripto found by the `where` argument doesn't exist, create a new DerivateCripto with this data.
     */
    create: XOR<DerivateCriptoCreateInput, DerivateCriptoUncheckedCreateInput>
    /**
     * In case the DerivateCripto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DerivateCriptoUpdateInput, DerivateCriptoUncheckedUpdateInput>
  }

  /**
   * DerivateCripto delete
   */
  export type DerivateCriptoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DerivateCripto
     */
    select?: DerivateCriptoSelect<ExtArgs> | null
    /**
     * Filter which DerivateCripto to delete.
     */
    where: DerivateCriptoWhereUniqueInput
  }

  /**
   * DerivateCripto deleteMany
   */
  export type DerivateCriptoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DerivateCriptos to delete
     */
    where?: DerivateCriptoWhereInput
  }

  /**
   * DerivateCripto without action
   */
  export type DerivateCriptoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DerivateCripto
     */
    select?: DerivateCriptoSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ListnamecriptoScalarFieldEnum: {
    id: 'id',
    symbol: 'symbol',
    name: 'name'
  };

  export type ListnamecriptoScalarFieldEnum = (typeof ListnamecriptoScalarFieldEnum)[keyof typeof ListnamecriptoScalarFieldEnum]


  export const DerivateCriptoScalarFieldEnum: {
    market: 'market',
    symbol: 'symbol',
    index_id: 'index_id',
    price: 'price',
    price_percentage_change_24h: 'price_percentage_change_24h',
    contract_type: 'contract_type',
    index: 'index',
    basis: 'basis',
    spread: 'spread',
    funding_rate: 'funding_rate',
    open_interest: 'open_interest',
    volume_24h: 'volume_24h',
    last_traded_at: 'last_traded_at',
    expired_at: 'expired_at'
  };

  export type DerivateCriptoScalarFieldEnum = (typeof DerivateCriptoScalarFieldEnum)[keyof typeof DerivateCriptoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type ListnamecriptoWhereInput = {
    AND?: ListnamecriptoWhereInput | ListnamecriptoWhereInput[]
    OR?: ListnamecriptoWhereInput[]
    NOT?: ListnamecriptoWhereInput | ListnamecriptoWhereInput[]
    id?: StringFilter<"Listnamecripto"> | string
    symbol?: StringFilter<"Listnamecripto"> | string
    name?: StringFilter<"Listnamecripto"> | string
  }

  export type ListnamecriptoOrderByWithRelationInput = {
    id?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
  }

  export type ListnamecriptoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ListnamecriptoWhereInput | ListnamecriptoWhereInput[]
    OR?: ListnamecriptoWhereInput[]
    NOT?: ListnamecriptoWhereInput | ListnamecriptoWhereInput[]
    symbol?: StringFilter<"Listnamecripto"> | string
    name?: StringFilter<"Listnamecripto"> | string
  }, "id">

  export type ListnamecriptoOrderByWithAggregationInput = {
    id?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    _count?: ListnamecriptoCountOrderByAggregateInput
    _max?: ListnamecriptoMaxOrderByAggregateInput
    _min?: ListnamecriptoMinOrderByAggregateInput
  }

  export type ListnamecriptoScalarWhereWithAggregatesInput = {
    AND?: ListnamecriptoScalarWhereWithAggregatesInput | ListnamecriptoScalarWhereWithAggregatesInput[]
    OR?: ListnamecriptoScalarWhereWithAggregatesInput[]
    NOT?: ListnamecriptoScalarWhereWithAggregatesInput | ListnamecriptoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Listnamecripto"> | string
    symbol?: StringWithAggregatesFilter<"Listnamecripto"> | string
    name?: StringWithAggregatesFilter<"Listnamecripto"> | string
  }

  export type DerivateCriptoWhereInput = {
    AND?: DerivateCriptoWhereInput | DerivateCriptoWhereInput[]
    OR?: DerivateCriptoWhereInput[]
    NOT?: DerivateCriptoWhereInput | DerivateCriptoWhereInput[]
    market?: StringFilter<"DerivateCripto"> | string
    symbol?: StringFilter<"DerivateCripto"> | string
    index_id?: StringFilter<"DerivateCripto"> | string
    price?: StringFilter<"DerivateCripto"> | string
    price_percentage_change_24h?: FloatFilter<"DerivateCripto"> | number
    contract_type?: StringFilter<"DerivateCripto"> | string
    index?: IntNullableFilter<"DerivateCripto"> | number | null
    basis?: FloatFilter<"DerivateCripto"> | number
    spread?: FloatNullableFilter<"DerivateCripto"> | number | null
    funding_rate?: FloatFilter<"DerivateCripto"> | number
    open_interest?: FloatNullableFilter<"DerivateCripto"> | number | null
    volume_24h?: FloatFilter<"DerivateCripto"> | number
    last_traded_at?: IntFilter<"DerivateCripto"> | number
    expired_at?: IntNullableFilter<"DerivateCripto"> | number | null
  }

  export type DerivateCriptoOrderByWithRelationInput = {
    market?: SortOrder
    symbol?: SortOrder
    index_id?: SortOrder
    price?: SortOrder
    price_percentage_change_24h?: SortOrder
    contract_type?: SortOrder
    index?: SortOrderInput | SortOrder
    basis?: SortOrder
    spread?: SortOrderInput | SortOrder
    funding_rate?: SortOrder
    open_interest?: SortOrderInput | SortOrder
    volume_24h?: SortOrder
    last_traded_at?: SortOrder
    expired_at?: SortOrderInput | SortOrder
  }

  export type DerivateCriptoWhereUniqueInput = Prisma.AtLeast<{
    index_id?: string
    AND?: DerivateCriptoWhereInput | DerivateCriptoWhereInput[]
    OR?: DerivateCriptoWhereInput[]
    NOT?: DerivateCriptoWhereInput | DerivateCriptoWhereInput[]
    market?: StringFilter<"DerivateCripto"> | string
    symbol?: StringFilter<"DerivateCripto"> | string
    price?: StringFilter<"DerivateCripto"> | string
    price_percentage_change_24h?: FloatFilter<"DerivateCripto"> | number
    contract_type?: StringFilter<"DerivateCripto"> | string
    index?: IntNullableFilter<"DerivateCripto"> | number | null
    basis?: FloatFilter<"DerivateCripto"> | number
    spread?: FloatNullableFilter<"DerivateCripto"> | number | null
    funding_rate?: FloatFilter<"DerivateCripto"> | number
    open_interest?: FloatNullableFilter<"DerivateCripto"> | number | null
    volume_24h?: FloatFilter<"DerivateCripto"> | number
    last_traded_at?: IntFilter<"DerivateCripto"> | number
    expired_at?: IntNullableFilter<"DerivateCripto"> | number | null
  }, "index_id">

  export type DerivateCriptoOrderByWithAggregationInput = {
    market?: SortOrder
    symbol?: SortOrder
    index_id?: SortOrder
    price?: SortOrder
    price_percentage_change_24h?: SortOrder
    contract_type?: SortOrder
    index?: SortOrderInput | SortOrder
    basis?: SortOrder
    spread?: SortOrderInput | SortOrder
    funding_rate?: SortOrder
    open_interest?: SortOrderInput | SortOrder
    volume_24h?: SortOrder
    last_traded_at?: SortOrder
    expired_at?: SortOrderInput | SortOrder
    _count?: DerivateCriptoCountOrderByAggregateInput
    _avg?: DerivateCriptoAvgOrderByAggregateInput
    _max?: DerivateCriptoMaxOrderByAggregateInput
    _min?: DerivateCriptoMinOrderByAggregateInput
    _sum?: DerivateCriptoSumOrderByAggregateInput
  }

  export type DerivateCriptoScalarWhereWithAggregatesInput = {
    AND?: DerivateCriptoScalarWhereWithAggregatesInput | DerivateCriptoScalarWhereWithAggregatesInput[]
    OR?: DerivateCriptoScalarWhereWithAggregatesInput[]
    NOT?: DerivateCriptoScalarWhereWithAggregatesInput | DerivateCriptoScalarWhereWithAggregatesInput[]
    market?: StringWithAggregatesFilter<"DerivateCripto"> | string
    symbol?: StringWithAggregatesFilter<"DerivateCripto"> | string
    index_id?: StringWithAggregatesFilter<"DerivateCripto"> | string
    price?: StringWithAggregatesFilter<"DerivateCripto"> | string
    price_percentage_change_24h?: FloatWithAggregatesFilter<"DerivateCripto"> | number
    contract_type?: StringWithAggregatesFilter<"DerivateCripto"> | string
    index?: IntNullableWithAggregatesFilter<"DerivateCripto"> | number | null
    basis?: FloatWithAggregatesFilter<"DerivateCripto"> | number
    spread?: FloatNullableWithAggregatesFilter<"DerivateCripto"> | number | null
    funding_rate?: FloatWithAggregatesFilter<"DerivateCripto"> | number
    open_interest?: FloatNullableWithAggregatesFilter<"DerivateCripto"> | number | null
    volume_24h?: FloatWithAggregatesFilter<"DerivateCripto"> | number
    last_traded_at?: IntWithAggregatesFilter<"DerivateCripto"> | number
    expired_at?: IntNullableWithAggregatesFilter<"DerivateCripto"> | number | null
  }

  export type ListnamecriptoCreateInput = {
    id: string
    symbol: string
    name: string
  }

  export type ListnamecriptoUncheckedCreateInput = {
    id: string
    symbol: string
    name: string
  }

  export type ListnamecriptoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ListnamecriptoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ListnamecriptoCreateManyInput = {
    id: string
    symbol: string
    name: string
  }

  export type ListnamecriptoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ListnamecriptoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DerivateCriptoCreateInput = {
    market: string
    symbol: string
    index_id: string
    price: string
    price_percentage_change_24h: number
    contract_type: string
    index?: number | null
    basis: number
    spread?: number | null
    funding_rate: number
    open_interest?: number | null
    volume_24h: number
    last_traded_at: number
    expired_at?: number | null
  }

  export type DerivateCriptoUncheckedCreateInput = {
    market: string
    symbol: string
    index_id: string
    price: string
    price_percentage_change_24h: number
    contract_type: string
    index?: number | null
    basis: number
    spread?: number | null
    funding_rate: number
    open_interest?: number | null
    volume_24h: number
    last_traded_at: number
    expired_at?: number | null
  }

  export type DerivateCriptoUpdateInput = {
    market?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    index_id?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    price_percentage_change_24h?: FloatFieldUpdateOperationsInput | number
    contract_type?: StringFieldUpdateOperationsInput | string
    index?: NullableIntFieldUpdateOperationsInput | number | null
    basis?: FloatFieldUpdateOperationsInput | number
    spread?: NullableFloatFieldUpdateOperationsInput | number | null
    funding_rate?: FloatFieldUpdateOperationsInput | number
    open_interest?: NullableFloatFieldUpdateOperationsInput | number | null
    volume_24h?: FloatFieldUpdateOperationsInput | number
    last_traded_at?: IntFieldUpdateOperationsInput | number
    expired_at?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DerivateCriptoUncheckedUpdateInput = {
    market?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    index_id?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    price_percentage_change_24h?: FloatFieldUpdateOperationsInput | number
    contract_type?: StringFieldUpdateOperationsInput | string
    index?: NullableIntFieldUpdateOperationsInput | number | null
    basis?: FloatFieldUpdateOperationsInput | number
    spread?: NullableFloatFieldUpdateOperationsInput | number | null
    funding_rate?: FloatFieldUpdateOperationsInput | number
    open_interest?: NullableFloatFieldUpdateOperationsInput | number | null
    volume_24h?: FloatFieldUpdateOperationsInput | number
    last_traded_at?: IntFieldUpdateOperationsInput | number
    expired_at?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DerivateCriptoCreateManyInput = {
    market: string
    symbol: string
    index_id: string
    price: string
    price_percentage_change_24h: number
    contract_type: string
    index?: number | null
    basis: number
    spread?: number | null
    funding_rate: number
    open_interest?: number | null
    volume_24h: number
    last_traded_at: number
    expired_at?: number | null
  }

  export type DerivateCriptoUpdateManyMutationInput = {
    market?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    index_id?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    price_percentage_change_24h?: FloatFieldUpdateOperationsInput | number
    contract_type?: StringFieldUpdateOperationsInput | string
    index?: NullableIntFieldUpdateOperationsInput | number | null
    basis?: FloatFieldUpdateOperationsInput | number
    spread?: NullableFloatFieldUpdateOperationsInput | number | null
    funding_rate?: FloatFieldUpdateOperationsInput | number
    open_interest?: NullableFloatFieldUpdateOperationsInput | number | null
    volume_24h?: FloatFieldUpdateOperationsInput | number
    last_traded_at?: IntFieldUpdateOperationsInput | number
    expired_at?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DerivateCriptoUncheckedUpdateManyInput = {
    market?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    index_id?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    price_percentage_change_24h?: FloatFieldUpdateOperationsInput | number
    contract_type?: StringFieldUpdateOperationsInput | string
    index?: NullableIntFieldUpdateOperationsInput | number | null
    basis?: FloatFieldUpdateOperationsInput | number
    spread?: NullableFloatFieldUpdateOperationsInput | number | null
    funding_rate?: FloatFieldUpdateOperationsInput | number
    open_interest?: NullableFloatFieldUpdateOperationsInput | number | null
    volume_24h?: FloatFieldUpdateOperationsInput | number
    last_traded_at?: IntFieldUpdateOperationsInput | number
    expired_at?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ListnamecriptoCountOrderByAggregateInput = {
    id?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
  }

  export type ListnamecriptoMaxOrderByAggregateInput = {
    id?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
  }

  export type ListnamecriptoMinOrderByAggregateInput = {
    id?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DerivateCriptoCountOrderByAggregateInput = {
    market?: SortOrder
    symbol?: SortOrder
    index_id?: SortOrder
    price?: SortOrder
    price_percentage_change_24h?: SortOrder
    contract_type?: SortOrder
    index?: SortOrder
    basis?: SortOrder
    spread?: SortOrder
    funding_rate?: SortOrder
    open_interest?: SortOrder
    volume_24h?: SortOrder
    last_traded_at?: SortOrder
    expired_at?: SortOrder
  }

  export type DerivateCriptoAvgOrderByAggregateInput = {
    price_percentage_change_24h?: SortOrder
    index?: SortOrder
    basis?: SortOrder
    spread?: SortOrder
    funding_rate?: SortOrder
    open_interest?: SortOrder
    volume_24h?: SortOrder
    last_traded_at?: SortOrder
    expired_at?: SortOrder
  }

  export type DerivateCriptoMaxOrderByAggregateInput = {
    market?: SortOrder
    symbol?: SortOrder
    index_id?: SortOrder
    price?: SortOrder
    price_percentage_change_24h?: SortOrder
    contract_type?: SortOrder
    index?: SortOrder
    basis?: SortOrder
    spread?: SortOrder
    funding_rate?: SortOrder
    open_interest?: SortOrder
    volume_24h?: SortOrder
    last_traded_at?: SortOrder
    expired_at?: SortOrder
  }

  export type DerivateCriptoMinOrderByAggregateInput = {
    market?: SortOrder
    symbol?: SortOrder
    index_id?: SortOrder
    price?: SortOrder
    price_percentage_change_24h?: SortOrder
    contract_type?: SortOrder
    index?: SortOrder
    basis?: SortOrder
    spread?: SortOrder
    funding_rate?: SortOrder
    open_interest?: SortOrder
    volume_24h?: SortOrder
    last_traded_at?: SortOrder
    expired_at?: SortOrder
  }

  export type DerivateCriptoSumOrderByAggregateInput = {
    price_percentage_change_24h?: SortOrder
    index?: SortOrder
    basis?: SortOrder
    spread?: SortOrder
    funding_rate?: SortOrder
    open_interest?: SortOrder
    volume_24h?: SortOrder
    last_traded_at?: SortOrder
    expired_at?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ListnamecriptoDefaultArgs instead
     */
    export type ListnamecriptoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ListnamecriptoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DerivateCriptoDefaultArgs instead
     */
    export type DerivateCriptoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DerivateCriptoDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}