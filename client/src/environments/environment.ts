// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  PROVIDER_URL:
    'https://compatible-bitter-thunder.matic-testnet.quiknode.pro/55aaf4df295c255581bea7723fe96dc70dc81ab9/',
  MAGIC_API_KEY: 'pk_live_F961216011ACF2B8',
  IPFS_URL: 'https://ipfs.shiro.network',
  MINIMAL_FORWARDER_ADDRESS: '0x8C41c613256f8f857F8E907D40420A34e521D560',
  SHIRO_SHARE_ADDRESS: '0xb977F7B7d9D63d174C700c8852662642f3c5Da70',
  DEFENDER_WEBHOOK_URL:
    'https://api.defender.openzeppelin.com/autotasks/a356b2cf-2e8d-4140-8fe2-e67de8ff25d9/runs/webhook/c4a749c2-80c6-43cf-8d1e-3bc4aa544987/UBBdMkDMKGDbUXiWUeQAyS',
  SHIRO_STORE_API: 'https://storage.shiro.network',
  DEFAULT_VALIDITY: 24 * 3600,
  DEFAULT_PROVIDER: 'ipfs',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
