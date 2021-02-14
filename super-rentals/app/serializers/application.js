import JSONAPISerializer from '@ember-data/serializer/json-api'

// because we added an application adapter we were forced to add this file
export default class ApplicationSerializer extends JSONAPISerializer {}
