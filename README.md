# Forever Yours Monorepo

This monorepo contains three Next.js applications and a shared component library.

## Project Structure
- `adminpanel`: Admin dashboard application (port 3000)
- `website`: Main marketing website (port 3001)
- `customerportal`: Customer portal application (port 3002)
- `shared`: Shared components and utilities

## Development

### Install dependencies
```bash
yarn install
```

### Run development server
```bash
# Run admin panel
yarn dev:admin

# Run website
yarn dev:web

# Run customer portal
yarn dev:portal
```

### Build all packages
```bash
yarn build
```

## Available Scripts
- `yarn dev:admin` - Run admin panel in development mode
- `yarn dev:web` - Run website in development mode
- `yarn dev:portal` - Run customer portal in development mode
- `yarn build:shared` - Build shared components
- `yarn build:admin` - Build admin panel
- `yarn build:web` - Build website
- `yarn build:portal` - Build customer portal
- `yarn build` - Build all packages

## Shared Components
The shared package contains common components and utilities used across all applications. Import them like:
```typescript
import { Button } from '@foreveryours/shared';
```
