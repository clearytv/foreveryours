# Forever Yours Video Platform

## Initial Setup

After cloning this template, follow these steps:

1. Create three Plasmic projects:
   - Website
   - Admin Panel
   - Customer Portal

2. Connect each Plasmic project to its corresponding app directory via GitHub publishing:
   - Website → `apps/website`
   - Admin Panel → `apps/adminpanel`
   - Customer Portal → `apps/customerportal`

3. Get the project IDs and tokens from Plasmic Studio and update them in:
   - `apps/website/src/plasmic-init.ts`
   - `apps/adminpanel/src/plasmic-init.ts`
   - `apps/customerportal/src/plasmic-init.ts`

## Using as a Template

To use this as a template for other projects:

1. Change directory names in `apps/`:
   - `apps/website` → `apps/your-new-frontend`
   - `apps/adminpanel` → `apps/your-new-admin`
   - `apps/customerportal` → `apps/your-new-portal`

2. Update package names in each app's `package.json`:
   ```json
   {
     "name": "@foreveryours/website" → "@yournewproject/frontend"
     "name": "@foreveryours/adminpanel" → "@yournewproject/admin"
     "name": "@foreveryours/customerportal" → "@yournewproject/portal"
   }
   ```

3. Update root `package.json` scripts:
   ```json
   {
     "scripts": {
       "dev:web": "yarn workspace @yournewproject/frontend dev",
       "dev:admin": "yarn workspace @yournewproject/admin dev",
       "dev:portal": "yarn workspace @yournewproject/portal dev"
     }
   }
   ```

4. Create new Plasmic projects and update IDs/tokens in each `plasmic-init.ts`

## Development

### Initial Setup
1. Install all dependencies:
```bash
yarn install
```

2. Build shared components (required before running any app):
```bash
yarn build:shared
```

3. Start the applications you need:
```bash
# Run admin panel
yarn dev:admin

# Run website
yarn dev:web

# Run customer portal
yarn dev:portal
```

Note: You can run multiple applications simultaneously in different terminal windows.

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
