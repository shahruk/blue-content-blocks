import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'content-blocks',
  outputTargets: [
    {
      type: 'docs-readme',
      dir: 'docs',
      footer: '',
    },
    {
      type: 'dist',
      copy: [
        {
          src: 'global',
        }
      ]
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        {
          src: 'global'
        },
      ]
    }
  ],
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/global/_variables.scss', //adds @import 'src/global/mixins.scss' statement,
        'src/global/_mixins.scss', //adds @import 'src/global/mixins.scss' statement,
      ],
    })
  ],
};
