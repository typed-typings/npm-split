import stream = require('stream')

declare function split (mapper: split.Mapper, _?: void, options?: split.Options): stream.Transform;
declare function split (matcher?: RegExp | string, mapper?: split.Mapper, options?: split.Options): stream.Transform;

declare namespace split {
  export interface Options {
    trailing?: boolean;
    maxLength?: number;
  }

  export type Mapper = (line: string) => any;
}

export = split;
