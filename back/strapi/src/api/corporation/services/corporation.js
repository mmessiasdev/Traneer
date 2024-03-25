'use strict';

/**
 * corporation service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::corporation.corporation');
