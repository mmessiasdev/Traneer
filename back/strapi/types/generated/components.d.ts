import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedBanner extends Schema.Component {
  collectionName: 'components_shared_banners';
  info: {
    displayName: 'banner';
    icon: 'dashboard';
  };
  attributes: {
    bannerurl: Attribute.Text;
    bannertitle: Attribute.String;
    bannerdesc: Attribute.Text;
    videoid: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.banner': SharedBanner;
    }
  }
}
