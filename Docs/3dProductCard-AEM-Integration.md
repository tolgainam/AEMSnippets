# 3D Product Card - AEM Integration Guide

## Overview
The 3D Product Card snippet can be embedded in AEM using the standard iframe component with Key/Value parameters. This approach is more flexible and CMS-friendly than encoding entire JSON configurations in the URL.

## Method 1: Simple URL Parameters (Recommended for AEM)

### Basic Setup
1. Add an **iframe component** to your AEM page
2. Set the **iframe URL** to:
   ```
   https://tolgainam.github.io/AEMSnippets/3dProductCard/embed.html
   ```
3. Add **Key/Value pairs** in the iframe component configuration

### Required Parameters
| Parameter | Type | Description | Example |
|-----------|------|-------------|---------|
| `modelPath` | string | Path to your GLB 3D model file | `/AEMSnippets/assets/sample3d-BU4c2ZxL.glb` |

### Optional Parameters
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `title` | string | "Welcome" | Main title text displayed in overlay |
| `message` | string | "Configure..." | Description/message text |
| `brand` | string | "iqos" | Brand theme: `iqos`, `zyn`, or `veev` |
| `theme` | string | "dark" | Color theme: `light` or `dark` |
| `animationFrames` | number | 360 | Total animation frames |
| `animationFps` | number | 30 | Animation frames per second |
| `overlayPosition` | string | "right" | Position: `left`, `right`, `center`, or `bottom` |
| `titleTypography` | string | - | Typography preset: `h1`, `h2`, `h3`, or `h4` |
| `messageTypography` | string | - | Typography preset: `body1`, `body2`, or `body3` |

### Example: Simple Configuration
Configure your AEM iframe with these Key/Value pairs:

```
URL: https://tolgainam.github.io/AEMSnippets/3dProductCard/embed.html

Key/Value Pairs:
modelPath     = /AEMSnippets/assets/sample3d-BU4c2ZxL.glb
title         = Discover IQOS ILUMA
message       = Experience the future of heated tobacco with innovative technology
brand         = iqos
theme         = dark
overlayPosition = right
```

This generates the URL:
```
https://tolgainam.github.io/AEMSnippets/3dProductCard/embed.html?modelPath=/AEMSnippets/assets/sample3d-BU4c2ZxL.glb&title=Discover%20IQOS%20ILUMA&message=Experience%20the%20future...&brand=iqos&theme=dark&overlayPosition=right
```

### Advanced: Multiple Keyframes

For multiple keyframes (content shown at different animation frames), use numbered keyframe parameters with JSON values:

```
keyframe0 = {"frame":60,"title":"Innovation","message":"Cutting-edge design"}
keyframe1 = {"frame":180,"title":"Quality","message":"Premium materials","button":{"text":"Learn More","url":"https://example.com"}}
keyframe2 = {"frame":300,"title":"Get Started","message":"Available now"}
```

Each keyframe can include:
- `frame` (number): Which animation frame to display this content
- `title` (string): Title text
- `message` (string): Description text
- `button` (object, optional): `{"text": "...", "url": "..."}`

## Method 2: Base64 Configuration

For complex configurations, use the configurator tool to generate a Base64-encoded config:

1. Visit https://tolgainam.github.io/AEMSnippets/
2. Navigate to 3D Product Card configurator
3. Configure all settings (keyframes, camera, styling)
4. Click "Generate Embed Code"
5. Copy the generated iframe code

The URL will look like:
```
https://tolgainam.github.io/AEMSnippets/3dProductCard/embed.html?config=eyJtb2RlbFBhdGgiOi...
```

## Hosting Your Own 3D Models

### Option 1: AEM DAM
1. Upload your GLB file to AEM DAM
2. Use the published DAM path as `modelPath`:
   ```
   modelPath = /content/dam/yourproject/models/product.glb
   ```

### Option 2: External CDN
1. Upload your GLB to a CDN (Cloudflare, AWS S3, etc.)
2. Enable CORS headers on your CDN
3. Use the full URL as `modelPath`:
   ```
   modelPath = https://cdn.example.com/models/product.glb
   ```

**Important**: The model file must be accessible via HTTPS and have proper CORS headers configured.

## Responsive Design

The iframe will automatically adapt to mobile/desktop viewport:
- On mobile: Overlay repositions to bottom
- On desktop: Overlay stays at configured position
- Camera angles can be customized per device in advanced configuration

### Recommended Iframe Settings
```html
<iframe
  src="..."
  width="100%"
  height="600"
  frameborder="0"
  style="display: block; max-width: 1400px; margin: 0 auto;">
</iframe>
```

## Troubleshooting

### Model doesn't load
- Check that the `modelPath` is correct and accessible
- Verify CORS headers are configured on the hosting server
- Ensure the file is a valid GLB format (not GLTF + bin)

### Configuration not working
- Verify all parameter names are spelled correctly (case-sensitive)
- Check that JSON in keyframe parameters is valid
- Use browser DevTools console to see error messages

### Styling issues
- Make sure `brand` value is one of: `iqos`, `zyn`, `veev`
- Verify `theme` is either `light` or `dark`
- Check that typography presets match available options

## Support

For issues or questions:
- GitHub Issues: https://github.com/tolgainam/AEMSnippets/issues
- Documentation: https://github.com/tolgainam/AEMSnippets
