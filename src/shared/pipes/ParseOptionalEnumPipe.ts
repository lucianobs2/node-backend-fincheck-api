import { ArgumentMetadata, ParseEnumPipe } from '@nestjs/common';

export class ParseOptionalEnumPipe<T> extends ParseEnumPipe<T> {
  override async transform(value: T, metadata: ArgumentMetadata) {
    if (typeof value === 'undefined') {
      return undefined!;
    }
    return await super.transform(value, metadata);
  }
}
