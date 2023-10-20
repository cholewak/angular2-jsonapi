/*
 * Public API Surface of my-lib
 */

export * from './lib/converters/json-model/json-model.converter';

export * from './lib/decorators/has-many.decorator';
export * from './lib/decorators/belongs-to.decorator';
export * from './lib/decorators/attribute.decorator';
export * from './lib/decorators/nested-attribute.decorator';
export * from './lib/decorators/json-attribute.decorator';
export * from './lib/decorators/json-api-model-config.decorator';
export * from './lib/decorators/json-api-datastore-config.decorator';

export * from './lib/models/json-api-meta.model';
export * from './lib/models/json-api.model';
export * from './lib/models/json-nested.model';
export * from './lib/models/error-response.model';
export * from './lib/models/json-api-query-data';

export * from './lib/interfaces/overrides.interface';
export * from './lib/interfaces/json-model-converter-config.interface';
export * from './lib/interfaces/datastore-config.interface';
export * from './lib/interfaces/model-config.interface';
export * from './lib/interfaces/attribute-decorator-options.interface';
export * from './lib/interfaces/property-converter.interface';

export * from './lib/providers';

export * from './lib/lib.module';

