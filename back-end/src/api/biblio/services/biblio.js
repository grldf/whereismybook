'use strict';

/**
 * biblio service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::biblio.biblio');
