import { initPlasmicLoader } from '@plasmicapp/loader-react';
import { AnimatedCard } from './components/AnimatedCard';

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "your-project-id",
      token: "your-token"
    }
  ]
});

PLASMIC.registerComponent(AnimatedCard, {
  name: 'AnimatedCard',
  importPath: './components/AnimatedCard',
  props: {
    children: {
      type: 'slot',
      defaultValue: undefined
    },
    className: {
      type: 'string',
      defaultValue: undefined
    },
    variant: {
      type: 'choice',
      options: ['default', 'elevated', 'highlighted']
    },
    onClick: {
      type: 'eventHandler',
      argTypes: []
    }
  }
}); 