/**
 * Contentstack Delivery SDK plugin
 * 
 * This plugin initializes the Contentstack Delivery SDK
 * Key Features:
 * 1. Sets up the Contentstack stack instance with provided configuration
 * 2. Provides the stack instance to the application
 * 
 * Configuration is loaded from the Nuxt public config and includes:
 * - API Key
 * - Delivery Token
 * - Region
 * - Environment
 */

import contentstack, { Region } from "@contentstack/delivery-sdk"
import { getContentstackEndpoints, getRegionForString } from "@timbenniks/contentstack-endpoints";

export default defineNuxtPlugin((nuxtApp) => {
  const {
    apiKey,
    deliveryToken,
    region,
    environment
  } = nuxtApp.$config.public;

  const regionEnum: Region = getRegionForString(region)
  const endpoints = getContentstackEndpoints(regionEnum, true)

  const stack = contentstack.stack({
    apiKey,
    deliveryToken,
    environment,
    region: regionEnum
  });

  return {
    provide: {
      stack
    },
  };
});