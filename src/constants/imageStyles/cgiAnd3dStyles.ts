import { ImageStyleOption } from './types';

export const CGI_AND_3D_STYLES: ImageStyleOption[] = [
  {
    id: 'cgi_octane_cinematic',
    label: 'Octane / Cinema 4D Cinematic 3D Render',
    category: 'CGI & 3D Rendering',
    description: 'Hyper-realistic subsurface scattering, ray-traced global illumination, metallic & glass materials',
    promptModifier: 'Hyper-detailed 3D render, Octane Render and Cinema 4D quality, physically based rendering (PBR), ray-traced global illumination, realistic subsurface skin scattering, volumetric lighting, 8k resolution',
    std1Modifier: 'Octane 3D render, crisp ray-traced lighting, realistic materials and skin subsurface scattering, 16:9 composition',
    std2Modifier: 'High-fashion 3D digital render, studio lighting setup, sleek PBR fabric textures, sharp specular highlights, 16:9 widescreen',
    std3Modifier: 'Warm interior 3D render, volumetric god-rays, atmospheric dust motes, realistic global illumination, 16:9 composition'
  },
  {
    id: 'cgi_unreal_engine_5',
    label: 'Unreal Engine 5 (Lumen & Nanite)',
    category: 'CGI & 3D Rendering',
    description: 'Next-gen video game cinematic, real-time Lumen global illumination, photorealistic assets',
    promptModifier: 'Next-gen video game cinematic still, Unreal Engine 5 render, real-time Lumen dynamic global illumination, Nanite micro-polygon geometry, realistic hair shaders, cinematic depth of field, 8k',
    std1Modifier: 'Unreal Engine 5 cinematic screenshot, dynamic Lumen lighting, rich environmental textures, 16:9 widescreen',
    std2Modifier: 'AAA game character showcase, ultra-sharp normal maps, cinematic rim lighting, photoreal Unreal 5 aesthetic, 16:9',
    std3Modifier: 'Atmospheric game cinematic scene, volumetric fog, dynamic point lights, high-fidelity real-time render, 16:9 composition'
  },
  {
    id: 'cgi_claymation_stopmotion',
    label: 'Claymation & Stop-Motion (Aardman / Laika)',
    category: 'CGI & 3D Rendering',
    description: 'Tactile Plasticine clay figures, visible artisan thumbprints, miniature studio lighting',
    promptModifier: 'Tactile stop-motion clay animation still, Aardman and Laika Studios aesthetic, authentic Plasticine modeling clay textures with subtle artisan thumbprints, miniature set lighting, macro depth of field',
    std1Modifier: 'Claymation stop-motion group scene, charming handmade Plasticine character models, warm miniature lighting, 16:9 composition',
    std2Modifier: 'Artisan claymation fashion portrait, delicate sculpted clay garments, tactile felt and clay textures, 16:9 widescreen',
    std3Modifier: 'Cozy miniature claymation interior, soft studio softbox glow, tangible handmade stop-motion charm, 16:9 composition'
  },
  {
    id: 'cgi_isometric_lowpoly',
    label: 'Isometric Low-Poly 3D Diorama',
    category: 'CGI & 3D Rendering',
    description: 'Clean geometric polygonal facets, isometric tilt-shift perspective, pastel toy-like aesthetic',
    promptModifier: 'Charming low-poly 3D isometric diorama, clean flat-shaded polygon facets, soft ambient occlusion, pastel color palette, tilt-shift miniature camera angle, clean digital art',
    std1Modifier: 'Isometric low-poly diorama scene, crisp geometric characters, colorful clean polygon models, 16:9 composition',
    std2Modifier: 'Stylized 3D low-poly fashion diorama, minimal geometric silhouettes, vibrant modern color blocking, 16:9 widescreen',
    std3Modifier: 'Cozy isometric room diorama, glowing low-poly lamps, charming miniature voxel and polygon atmosphere, 16:9 composition'
  },
  {
    id: 'cgi_pixar_3d_animation',
    label: 'Pixar / Disney 3D Feature Animation',
    category: 'CGI & 3D Rendering',
    description: 'Appealing stylized 3D character design, luminous subsurface scattering, cinematic warmth',
    promptModifier: 'Modern 3D feature animated film still, Pixar and Walt Disney Animation Studios quality, appealing expressive character design, warm luminous subsurface scattering, cinematic lighting, rich textures',
    std1Modifier: '3D feature animation movie still, joyful expressive character interaction, warm studio lighting, 16:9 composition',
    std2Modifier: 'Stylized 3D animated character portrait, charming large eyes, realistic cloth simulation, rich color palette, 16:9 widescreen',
    std3Modifier: 'Heartwarming 3D animated group moment, soft golden hour lighting, cinematic emotional warmth, 16:9 composition'
  },
  {
    id: 'cgi_vaporwave_3d',
    label: 'Vaporwave 3D Glitch & Dreamscape',
    category: 'CGI & 3D Rendering',
    description: 'Greek marble statues, pastel pink & teal skies, nostalgic Windows 95 aesthetics',
    promptModifier: 'Surreal Vaporwave 3D dreamscape, classical Greek marble statues, pastel pink and teal gradient sky, nostalgic 1990s CGI grid floor, palm tree silhouettes, surreal ethereal aesthetic',
    std1Modifier: 'Vaporwave 3D aesthetic scene, glowing wireframe horizon, soft pastel neon reflections, dreamy retro-surrealism, 16:9 composition',
    std2Modifier: 'High-fashion Vaporwave editorial, marble textures, iridescent chrome accessories, pastel holographic lighting, 16:9 widescreen',
    std3Modifier: 'Intimate surreal group portrait in Vaporwave aesthetic, soft pink and cyan ambient glow, nostalgic 90s digital dream, 16:9'
  }
];
