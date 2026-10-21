# Modeler Toolkit

A collection of texture, UV, modeling and capture tools for **Blockbench 5.2 or newer**. The interface follows Blockbench's language: French for French installations, English otherwise.

## Install

1. Open **File > Plugins** in Blockbench.
2. Choose **Load Plugin from URL** and paste this URL:

   ```text
   https://raw.githubusercontent.com/RushLd/Modeler_Toolkit/main/modeler_toolkit.js
   ```

3. Find the tools in the **Modeler Toolkit** menu. Capture options also appear in the GIF recording dialog.

Alternatively, download [modeler_toolkit.js](https://github.com/RushLd/Modeler_Toolkit/blob/main/modeler_toolkit.js) and use **Load Plugin from File**. Install only one copy. This repository is distributed independently from the official Blockbench plugin catalog.

## Tools

- **Optimize square textures and UVs**: share pixel-identical face regions, including rotated and mirrored matches, and rebuild square textures. Matching includes surrounding padding pixels and transparency. Textures shrink when a compatible layout fits; rebuilding can also keep their dimensions.
- **Share UVs without rebuilding**: reuse matching regions while keeping texture images and dimensions unchanged.
- **Restore original textures and UVs**: restore saved optimization data. Optimization supports Undo and Redo. Backups survive saving and reopening a `.bbmodel` file.
- **Create texture**: open Blockbench's regular texture creation tool.
- **Clean UV edges**: inset selected face UVs to reduce texture bleeding. Original UVs are saved for restoration. Temporary capture cleanup changes rendered UVs only.
- **Inverted cubes and outlines**: create inward-facing cubes named `<name>_inverted` or outline shells named `<name>_outline`. Outlines support cubes and meshes in compatible formats.
- **Dynamic capture shadows**: project a shadow onto an invisible wall or floor using a shadow map. Choose color, opacity, sharpness and light direction, including per-export light presets.
- **Animation recording**: select an animation from the current project when recording, including outside Animate mode.
- **Watermark**: add one configurable line of text with color, font, size, position and margin. Enable it separately for each recording.
- **Java conversion**: choose a target format and supported Java model version, with a copy option. The native conversion action stays available.
- **Layer visibility**: hide or isolate elements and groups whose names contain `_layer`. No keyboard shortcut is assigned by default.

## Defaults and privacy

New installations start with dynamic capture rendering and temporary UV cleanup disabled, and an empty, disabled watermark. Enabling dynamic rendering in the recording dialog enables the configured shadow, initially neutral gray at 35% opacity. Settings can be reset from **Modeler Toolkit > Settings**.

When upgrading from Raven Toolkit or RavenTool, uninstall the old plugin before loading Modeler Toolkit. Existing settings are imported automatically, and earlier project restoration data remains supported. The new plugin identifier is `modeler_toolkit`.

UV cleanup, cube inversion and outlines use implementations developed for this plugin. UV cleanup uses bounded insets and affine contraction; cube inversion matches surface coordinates; mesh outlines solve offset-plane constraints. No source from other plugins is bundled.

The plugin does not upload models, textures or recordings and contains no telemetry or access-key service. Opening its settings discovers locally installed fonts when supported. Browsers may request permission; Windows desktop installations can use the system font list. Font names are cached locally. No fonts are bundled: use fonts you are entitled to use in your exported work.

## Compatibility and limitations

- The texture optimizer preserves box UV layouts, animated textures, layered textures, materials and unsupported element types instead of repacking them. It processes compatible per-face cube UVs and mesh UVs.
- Exact duplicate matching includes the detected surrounding border. Regions with different padding are kept separate. No image resampling or smoothing is applied.
- Slight sampling differences can occur at texel boundaries in the 3D preview after repacking. Keep the original model and use Undo or restoration if needed. Existing source image files are not overwritten automatically.
- Restore before changing topology, replacing optimized textures, changing format or changing UV resolution. Restoration refuses incompatible states rather than guessing.
- Reversible metadata is stored in `.bbmodel` projects. Game exports do not preserve plugin restoration data.
- Partially transparent shadows need an opaque GIF background or an output format with full alpha, such as APNG. GIF transparency cannot represent smooth partial opacity.
- Installed font discovery depends on the operating system and browser. The configured font and Arial remain available as fallbacks; missing fonts can change text appearance.

## License

Modeler Toolkit is released under the [MIT License](LICENSE). No runtime dependencies are bundled; it uses APIs and libraries provided by Blockbench.
