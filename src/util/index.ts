import type { EncodableString } from '@/types';

export const decode = (obj: EncodableString | null | undefined): string|null => {
  if(!obj) return null;
  if (obj.clearValue) return obj.clearValue;
  if (obj.encodedValue) {
    return atob(obj.encodedValue);
  }
  return null;
};

type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>;
} : T

export function deepDefaults<O extends object>(target: O, ...sources: (DeepPartial<O>)[]): O;
export function deepDefaults<A>(target: A[], ...sources: (A[])[]): A[];
export function deepDefaults<O extends object, A>(target: O|A[], ...sources: (DeepPartial<O>|A[])[]): O|A[] {
  const targetIsArray = target instanceof Array;
  let resultArray: A[], resultObject: O, result: O|A[];
  if(targetIsArray) {
    resultArray = [ ...target ];
    result = resultArray;
  } else {
    resultObject = { ...target };
    result = resultObject;
  }

  sources.forEach(source=>{
    if(source instanceof Array && targetIsArray) {
      for (let i = 0; i < source.length; i += 1) {
        (resultArray as A[])[i] = source[i];
      }
    } else if(source instanceof Array || targetIsArray) {
      throw new Error('Structure of one or more sources does not match structure of target.');
    } else {
      let key: keyof DeepPartial<O>;
      for( key in source) {
        let sourceElement: unknown | undefined = source[key];
        if(sourceElement instanceof Array || sourceElement instanceof Object) {
          sourceElement = deepDefaults(resultObject[key as keyof O] as unknown as object, sourceElement);
        }

        if(sourceElement === undefined) continue;
        resultObject[key as keyof O] = sourceElement as O[keyof O];
      }
    }
  });

  return result;
}
