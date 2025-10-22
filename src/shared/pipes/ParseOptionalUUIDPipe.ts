import { ArgumentMetadata, ParseUUIDPipe } from '@nestjs/common';

export class ParseOptionalUUIDPipe extends ParseUUIDPipe {
  override async transform(value: string, metadata: ArgumentMetadata) {
    if (typeof value === 'undefined') {
      return undefined!;
    }
    return await super.transform(value, metadata);
  }
}
