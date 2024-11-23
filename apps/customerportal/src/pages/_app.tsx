import { PlasmicRootProvider } from '@plasmicapp/loader-nextjs';
import { PLASMIC } from '../plasmic-init';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlasmicRootProvider loader={PLASMIC}>
      <Component {...pageProps} />
    </PlasmicRootProvider>
  );
}

export default MyApp; 