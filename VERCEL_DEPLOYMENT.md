# Vercel Deployment Guide for FHE Swap Desk

This guide provides step-by-step instructions for deploying the FHE Swap Desk application to Vercel.

## Prerequisites

- Vercel account (free tier available)
- GitHub repository access
- Environment variables ready

## Step-by-Step Deployment

### 1. Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click "New Project" or "Import Project"

### 2. Import GitHub Repository

1. Select "Import Git Repository"
2. Choose `LydiaPham/fhe-swap-desk` from your repositories
3. Click "Import"

### 3. Configure Project Settings

#### Framework Preset
- **Framework Preset**: Vite
- **Root Directory**: `./` (default)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

#### Environment Variables
Add the following environment variables in Vercel dashboard:

```env
# Chain Configuration
VITE_CHAIN_ID=11155111
VITE_RPC_URL=https://sepolia.infura.io/v3/b18fb7e6ca7045ac83c41157ab93f990

# Wallet Connect Configuration
VITE_WALLET_CONNECT_PROJECT_ID=2ec9743d0d0cd7fb94dee1a7e6d33475

# Infura Configuration
VITE_INFURA_API_KEY=b18fb7e6ca7045ac83c41157ab93f990
VITE_RPC_URL_ALT=https://1rpc.io/sepolia
```

### 4. Build Configuration

#### Vercel Configuration File
Create `vercel.json` in the project root:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "installCommand": "npm install",
  "devCommand": "npm run dev",
  "regions": ["iad1"],
  "functions": {
    "app/api/**/*.ts": {
      "runtime": "nodejs18.x"
    }
  }
}
```

### 5. Domain Configuration

#### Custom Domain (Optional)
1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS records as instructed by Vercel
4. Wait for SSL certificate provisioning

### 6. Deployment Process

#### Automatic Deployment
- Every push to `main` branch triggers automatic deployment
- Preview deployments for pull requests
- Branch deployments for feature branches

#### Manual Deployment
1. Go to Vercel dashboard
2. Select your project
3. Click "Deploy" button
4. Monitor deployment logs

### 7. Environment-Specific Configuration

#### Production Environment
```env
NODE_ENV=production
VITE_ENVIRONMENT=production
```

#### Preview Environment
```env
NODE_ENV=development
VITE_ENVIRONMENT=preview
```

### 8. Build Optimization

#### Vite Configuration
Ensure `vite.config.ts` is optimized:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          wallet: ['@rainbow-me/rainbowkit', 'wagmi', 'viem']
        }
      }
    }
  }
})
```

### 9. Performance Monitoring

#### Vercel Analytics
1. Enable Vercel Analytics in project settings
2. Monitor Core Web Vitals
3. Track user interactions

#### Error Monitoring
1. Set up error tracking (Sentry, LogRocket, etc.)
2. Configure alerts for critical errors
3. Monitor API response times

### 10. Security Configuration

#### Headers Configuration
Add security headers in `vercel.json`:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        }
      ]
    }
  ]
}
```

### 11. Deployment Checklist

- [ ] Repository connected to Vercel
- [ ] Environment variables configured
- [ ] Build settings optimized
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active
- [ ] Analytics enabled
- [ ] Error monitoring set up
- [ ] Performance monitoring active

### 12. Post-Deployment Testing

#### Functionality Tests
- [ ] Wallet connection works
- [ ] Currency selection functions
- [ ] Swap interface responsive
- [ ] Network switching works
- [ ] Transaction execution

#### Performance Tests
- [ ] Page load speed < 3 seconds
- [ ] First Contentful Paint < 1.5 seconds
- [ ] Largest Contentful Paint < 2.5 seconds
- [ ] Cumulative Layout Shift < 0.1

### 13. Troubleshooting

#### Common Issues

**Build Failures**
- Check Node.js version (18+ required)
- Verify all dependencies installed
- Review build logs for errors

**Environment Variables**
- Ensure all required variables are set
- Check variable names match exactly
- Verify no trailing spaces

**Domain Issues**
- DNS propagation may take 24-48 hours
- Check DNS records configuration
- Verify SSL certificate status

#### Support Resources
- [Vercel Documentation](https://vercel.com/docs)
- [Vite Documentation](https://vitejs.dev/guide/)
- [Vercel Community](https://github.com/vercel/vercel/discussions)

### 14. Maintenance

#### Regular Updates
- Keep dependencies updated
- Monitor security advisories
- Update environment variables as needed

#### Performance Optimization
- Monitor Core Web Vitals
- Optimize images and assets
- Implement caching strategies

## Deployment URLs

After successful deployment, your application will be available at:

- **Production**: `https://fhe-swap-desk.vercel.app`
- **Preview**: `https://fhe-swap-desk-git-[branch].vercel.app`
- **Custom Domain**: `https://your-domain.com` (if configured)

## Success Criteria

✅ Application loads without errors
✅ Wallet connection functional
✅ All pages accessible
✅ Responsive design works
✅ Performance metrics meet standards
✅ SSL certificate active
✅ Analytics tracking functional
