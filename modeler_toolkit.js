(function() {
    const plugin_id = 'modeler_toolkit';
    const messages = {
        "lighting_enabled": "Éclairage personnalisé",
        "lighting_description": "Éclairer temporairement le modèle et le sol avec les mêmes réglages dans l’aperçu et l’export.",
        "light_azimuth": "Direction de la lumière (°)",
        "light_azimuth_description": "0° : depuis la caméra ; -90° : gauche ; 90° : droite ; 180° : arrière. La direction reste fixe pendant la capture.",
        "light_elevation": "Hauteur de la lumière (°)",
        "light_elevation_description": "5° : lumière rasante ; 90° : lumière au-dessus du modèle.",
        "light_tone": "Teinte de la lumière",
        "light_neutral": "Neutre",
        "light_warm": "Chaude",
        "light_cool": "Froide",
        "light_custom": "Couleur personnalisée",
        "light_color": "Couleur de la lumière",
        "light_intensity": "Intensité de la lumière (%)",
        "ambient_intensity": "Lumière ambiante (%)",
        "ambient_description": "Éclairage neutre des faces moins exposées. À 0 %, seule la lumière directionnelle éclaire le modèle.",
        "capture_floor": "Sol de rendu",
        "capture_floor_description": "Ajouter un sol temporaire qui reçoit l’ombre configurée. Un bloc correspond à 16 unités du modèle.",
        "floor_style": "Aspect du sol",
        "floor_tiles": "Dalles",
        "floor_solid": "Uni",
        "floor_width": "Largeur du sol (blocs)",
        "floor_depth": "Profondeur du sol (blocs)",
        "floor_tile_size": "Taille des dalles (blocs)",
        "floor_color": "Couleur du sol",
        "floor_seam_color": "Couleur des joints",
        "floor_thickness": "Épaisseur du sol (unités)",
        "floor_height": "Décalage vertical du sol (unités)",
        "floor_height_description": "Par rapport au bas du modèle à la première image. Le sol reste fixe pendant tout l’enregistrement.",
        "floor_offset_x": "Décalage X du sol (unités)",
        "floor_offset_z": "Décalage Z du sol (unités)",
        "back_to_recording": "Retour à l’enregistrement",
        "close": "Fermer",
        "incompatible_backup_preserved": "Cette sauvegarde ne correspond plus au projet actuel. Elle est conservée sans être appliquée. Vous pouvez relancer l’optimisation depuis les textures et UV actuels.",
        "previous_backups_preserved": "La restauration revient à l’état juste avant cette optimisation. Les sauvegardes antérieures restent dans le projet.",
        "rebuild_textures_and_share_matching_uvs": "Reconstruire les textures et mutualiser les UV identiques",
        "fewer_texture_pixels": " % de pixels de texture en moins.",
        "optimize_texture_and_uvs": "Optimiser la texture et les UV",
        "separate_face_uvs": "Créer une texture avec des UV indépendants",
        "separate_face_uvs_description": "Recréer une texture carrée où chaque face possède sa propre zone UV, avec 1 px transparent entre les zones. Le rendu, les rotations et la transparence des faces sont conservés. La texture peut devenir plus grande.",
        "independent_uvs_created": "Chaque face traitée possède maintenant sa propre zone UV. Les pixels, les rotations et la transparence sont conservés, avec un espacement transparent de 1 px. Aucun fichier image existant n’a été écrasé. Utilisez « Annuler » ou « Restaurer les textures et UV d’origine » pour revenir en arrière.",
        "independent_uvs_unavailable": "Aucune texture compatible n’a pu être reconstruite avec des UV indépendants. Les textures et les UV sont conservés. La limite de l’atlas est de 4096 × 4096 pixels.",
        "enable_dynamic_gif_render": "Activer le rendu GIF dynamique",
        "use_the_dynamic_renderer_by_default_when_recording_a_gif_apng_or": "Utiliser le rendu dynamique par défaut lors de l’enregistrement d’un GIF, d’un APNG ou d’une séquence PNG.",
        "dynamic_shadow": "Ombre dynamique",
        "project_the_animated_model_onto_an_invisible_wall_or_floor_using": "Projeter l’ombre du modèle animé sur un mur ou un sol invisible à l’aide d’une carte d’ombres.",
        "shadow_color_tool_settings": "Couleur de l’ombre / Paramètres des outils",
        "open_the_color_picker_and_all_modeler_toolkit_settings": "Ouvrir le sélecteur de couleur et tous les paramètres de Modeler Toolkit.",
        "shadow_opacity": "Opacité de l’ombre (%)",
        "partial_opacity_needs_an_opaque_gif_background_or_apng_to_retain": "Une opacité partielle nécessite un fond GIF opaque ou le format APNG pour conserver une transparence progressive.",
        "shadow_softness": "Flou de l’ombre",
        "shadow_map_filter_radius_zero_produces_a_sharp_shadow": "Rayon du filtre de la carte d’ombres. Une valeur de zéro produit une ombre nette.",
        "shadow_surface": "Surface de projection de l’ombre",
        "automatic_wall_behind_the_model": "Mur placé automatiquement derrière le modèle",
        "floor_below_the_model": "Sol sous le modèle",
        "surface_distance": "Distance de la surface (%)",
        "extra_distance_from_the_model_relative_to_its_size_placement_is": "Distance supplémentaire par rapport au modèle, proportionnelle à sa taille. Le placement est automatique.",
        "light_horizontal": "Direction horizontale de la lumière (%)",
        "negative_values_light_the_model_from_the_left_and_cast_the_shado": "Les valeurs négatives éclairent le modèle depuis la gauche et projettent l’ombre vers la droite.",
        "light_vertical_direction": "Direction verticale de la lumière (%)",
        "positive_values_light_the_model_from_above_when_using_the_wall": "Les valeurs positives éclairent le modèle depuis le haut lorsque le mur est utilisé.",
        "shadow_map_resolution": "Résolution de la carte d’ombres",
        "watermark_text": "Texte du filigrane",
        "a_single_line_of_text_enable_or_disable_it_in_the_gif_export_dia": "Une seule ligne de texte. Activez ou désactivez le filigrane dans la fenêtre d’export GIF.",
        "watermark_position": "Position du filigrane",
        "bottom_center": "En bas au centre",
        "bottom_left": "En bas à gauche",
        "bottom_right": "En bas à droite",
        "center_left": "Au centre à gauche",
        "center": "Au centre",
        "center_right": "Au centre à droite",
        "top_left": "En haut à gauche",
        "top_center": "En haut au centre",
        "top_right": "En haut à droite",
        "watermark_color": "Couleur du filigrane",
        "watermark_text_size": "Taille du texte du filigrane (%)",
        "font_size_relative_to_the_shorter_side_of_the_final_image_long_t": "Taille de la police proportionnelle au côté le plus court de l’image finale. Les textes longs sont automatiquement réduits pour tenir dans l’image.",
        "watermark_margin": "Marge du filigrane (%)",
        "distance_from_the_final_image_edges_relative_to_its_shorter_side": "Distance par rapport aux bords de l’image finale, proportionnelle à son côté le plus court.",
        "watermark_font": "Police du filigrane",
        "fonts_installed_on_this_computer_including_custom_fonts": "Polices installées sur cet ordinateur, y compris les polices personnalisées.",
        "enable_texture_uv_optimization": "Activer l’optimisation des textures et des UV",
        "rebuild_a_clean_square_texture_share_identical_uv_regions_and_re": "Reconstruire une texture carrée propre, mutualiser les régions UV identiques et réduire les dimensions lorsque c’est possible.",
        "power_of_two_texture_atlas": "Texture carrée en puissance de deux",
        "use_square_sizes_16_32_64_etc_disabled_uses_square_multiples_of": "Utiliser des dimensions carrées de 16, 32, 64, etc. Si cette option est désactivée, utiliser des multiples de 16, comme le générateur natif sans l’option « Puissance de deux ».",
        "enable_inverted_cubes": "Activer les cubes inversés",
        "create_inward_facing_copies_named_name_inverted": "Créer des copies aux faces orientées vers l’intérieur, nommées <nom>_inverted.",
        "enable_outlines": "Activer les contours",
        "create_outline_shells_named_name_outline": "Créer des enveloppes de contour nommées <nom>_outline.",
        "enable_layer_controls": "Activer les outils de calques",
        "toggle_or_isolate_elements_and_groups_containing_layer": "Afficher, masquer ou isoler les éléments et groupes dont le nom contient _layer.",
        "plugin_settings": "Paramètres du plugin",
        "top": "En haut",
        "left": "À gauche",
        "front": "De face",
        "right": "À droite",
        "bottom": "En bas",
        "custom_direction": "Direction personnalisée",
        "local_font_access_is_unavailable_allow_local_font_access_in_your": "L’accès aux polices locales est indisponible. Autorisez cet accès dans votre navigateur.",
        "unavailable": " (indisponible)",
        "margin": "Marge",
        "no_matching_original_uv_backup_exact_restoration_requires_uv_cle": "Aucune sauvegarde correspondante des UV d’origine. Une restauration exacte nécessite d’avoir appliqué le nettoyage avec Modeler Toolkit.",
        "restore_modeler_toolkit_uvs": "Restaurer les UV avec Modeler Toolkit",
        "select_cubes_in_a_format_supporting_per_face_uvs": "Sélectionnez des cubes dans un format prenant en charge les UV par face.",
        "create_modeler_toolkit_inverted_cubes": "Créer des cubes inversés avec Modeler Toolkit",
        "create_modeler_toolkit_outlines": "Créer des contours avec Modeler Toolkit",
        "the_outline_texture_is_no_longer_available": "La texture du contour n’est plus disponible.",
        "generate_solid_color_texture": "Générer une texture de couleur unie",
        "this_format_needs_an_existing_front_sided_texture_for_outlines": "Ce format nécessite une texture existante dont seules les faces avant sont visibles pour créer les contours.",
        "create_outlines": "Créer des contours",
        "thickness": "Épaisseur",
        "outline_color": "Couleur du contour",
        "no_elements_or_groups_containing_layer": "Aucun élément ni groupe dont le nom contient _layer.",
        "modeler_toolkit_texture_optimization": "Modeler Toolkit - Optimisation des textures",
        "box_uv_layouts_preserved": "Dispositions des UV de boîte conservées",
        "textures_still_loading_or_unavailable": "Textures en cours de chargement ou indisponibles",
        "animated_layered_or_material_textures_preserved": "Textures animées, à calques ou associées à un matériau conservées",
        "textures_exceeding_the_safe_comparison_size": "Textures dépassant la taille limite de comparaison",
        "invalid_uv_coordinates": "Coordonnées UV invalides",
        "uvs_outside_the_texture_preserved": "UV situés hors de la texture conservés",
        "no_changes_were_made": "Aucune modification n’a été effectuée. ",
        "no_additional_pixel_identical_uv_regions_were_found_original_tex": "Aucune région UV supplémentaire identique au pixel près n’a été trouvée. Les textures d’origine, leurs dimensions et le rembourrage restent inchangés.",
        "finish_the_current_edit_or_recording_before_rebuilding_textures": "Terminez la modification ou l’enregistrement en cours avant de reconstruire les textures.",
        "layered_texture_compositing_is_active_the_texture_stack_was_pres": "La composition des textures par calques est active. La pile de textures a été conservée.",
        "some_uvs_or_element_types_require_the_original_layout": " : certains UV ou types d’éléments nécessitent la disposition d’origine",
        "no_compatible_square_layout_found_with_the_same_pixels_and_borde": " : aucune disposition carrée compatible trouvée avec les mêmes pixels et un espacement transparent de 1 px",
        "no_compatible_square_texture_could_be_rebuilt_without_enlargemen": "Aucune texture carrée compatible n’a pu être reconstruite avec un espacement transparent de 1 px. Les textures et les UV d’origine ont été conservés. La limite de l’atlas est de 4096 × 4096 pixels.",
        "this_format_shares_a_non_square_uv_resolution_across_several_tex": "Ce format partage une résolution UV non carrée entre plusieurs textures. Leur réorganisation modifierait l’animation des textures ; la disposition d’origine a donc été conservée.",
        "texture_repacking_was_cancelled": "La réorganisation des textures a été annulée. ",
        "dimensions_preserved_rebuilding_does_not_require_a_smaller_textu": "Dimensions conservées : la reconstruction ne nécessite pas de réduire la texture.",
        "texture_grown_for_padding": "Texture agrandie pour conserver tous les pixels des faces et ajouter l’espacement transparent de 1 px.",
        "transparent_faces_disabled": "Faces entièrement transparentes rendues invisibles : ",
        "uv_regions": "\nRégions UV : ",
        "identical_regions_are_shared_including_rotated_or_mirrored_match": "\n\nLes régions identiques sont fusionnées, y compris après rotation ou retournement. Seuls les pixels utilisés par les faces sont recopiés, avec 1 px transparent autour des régions UV. Les UV sont adaptés pour préserver le rendu et l’orientation des faces. Aucun rééchantillonnage ni lissage de l’image.\n\nUtilisez « Annuler » ou « Restaurer les textures et UV d’origine » pour revenir en arrière. Les fichiers image existants ne sont pas écrasés automatiquement.",
        "finish_the_current_edit_or_recording_before_restoring_textures": "Terminez la modification ou l’enregistrement en cours avant de restaurer les textures.",
        "undo_the_project_format_or_uv_resolution_change_before_restoring": "Annulez le changement de format du projet ou de résolution UV avant de restaurer ces textures.",
        "an_optimized_texture_is_missing_or_has_a_different_resolution_un": "Une texture optimisée est manquante ou sa résolution a changé. Annulez son remplacement avant de lancer la restauration.",
        "an_optimized_element_has_different_faces_or_vertices_undo_its_to": "Les faces ou les sommets d’un élément optimisé ont changé. Annulez cette modification de géométrie avant de lancer la restauration.",
        "new_geometry_uses_an_optimized_texture_undo_that_addition_before": "De nouveaux éléments utilisent une texture optimisée. Annulez leur ajout avant de restaurer la disposition d’origine de cette texture.",
        "restore_original_square_atlas_textures_and_uvs": "Restaurer les textures et UV d’origine de l’atlas carré",
        "texture_restoration_was_cancelled": "La restauration des textures a été annulée. ",
        "original_textures_uvs_and_resolution_restored": "Les textures, les UV et la résolution d’origine ont été restaurés.",
        "finish_the_current_edit_or_recording_before_restoring_uvs": "Terminez la modification ou l’enregistrement en cours avant de restaurer les UV.",
        "undo_the_project_format_or_uv_resolution_change_before_restoring_2": "Annulez le changement de format du projet ou de résolution UV avant de restaurer les UV d’origine.",
        "an_original_texture_is_missing_or_has_a_different_resolution_res": "Une texture d’origine est manquante ou sa résolution a changé. Restaurez-la avant de restaurer ces UV.",
        "an_optimized_element_has_different_faces_or_vertices_undo_its_to_2": "Les faces ou les sommets d’un élément optimisé ont changé. Annulez cette modification de géométrie avant de restaurer ces UV.",
        "restore_original_uvs_without_changing_textures": "Restaurer les UV d’origine sans modifier les textures",
        "uv_restoration_was_cancelled": "La restauration des UV a été annulée. ",
        "original_uvs_restored_texture_images_preserved": "Les UV d’origine ont été restaurés. Les images des textures ont été conservées.",
        "this_project_has_no_texture_optimization_backup": "Ce projet ne contient aucune sauvegarde des textures avant optimisation.",
        "the_project_format_or_uv_resolution_has_changed_undo_those_chang": "Le format du projet ou la résolution UV a changé. Annulez ces modifications avant de restaurer les textures d’origine.",
        "an_optimized_element_has_different_faces_or_vertices_undo_its_to_3": "Les faces ou les sommets d’un élément optimisé ont changé. Annulez ces modifications de géométrie avant de restaurer les UV d’origine.",
        "an_original_texture_identifier_is_already_in_use_undo_the_textur": "L’identifiant d’une texture d’origine est déjà utilisé. Annulez le remplacement de cette texture avant de lancer la restauration.",
        "an_original_texture_path_is_already_in_use_undo_the_texture_repl": "Le chemin d’une texture d’origine est déjà utilisé. Annulez le remplacement de cette texture avant de lancer la restauration.",
        "new_geometry_uses_the_optimized_default_texture_undo_that_additi": "De nouveaux éléments utilisent la texture optimisée par défaut. Annulez leur ajout avant de lancer la restauration dans ce format à texture unique.",
        "restore_original_textures_and_uvs": "Restaurer les textures et les UV d’origine",
        "restoration_was_cancelled": "La restauration a été annulée. ",
        "original_textures_and_uvs_restored": "Les textures et les UV d’origine ont été restaurés.",
        "restore_original_textures_uvs": "Restaurer les textures et UV d’origine",
        "restore_original_uvs": "Restaurer les UV d’origine",
        "create_inverted_cubes": "Créer des cubes inversés",
        "modeler_toolkit_settings": "Paramètres de Modeler Toolkit",
        "toggle_layers": "Afficher / masquer les calques",
        "modeler_toolkit": "Modeler Toolkit",
        "available_tools": "Outils disponibles",
        "gif_render_the_invisible_wall_or_floor_only_receives_the_shadow": "L’ombre peut être projetée sur une surface invisible ou un sol de rendu visible. Le sol est temporaire et n’est jamais ajouté au modèle.",
        "the_installed_font_list_is_unavailable_reopen_settings_after_all": "La liste des polices installées est indisponible. Autorisez l’accès aux polices locales, puis rouvrez les paramètres.",
        "preview": "Aperçu",
        "reset_to_defaults": "Rétablir les valeurs par défaut",
        "preview_gif_render": "Aperçu du rendu GIF",
        "back_to_settings": "Retour aux paramètres",
        "modeler_toolkit_watermark": "Filigrane de Modeler Toolkit",
        "unnamed_animation": "Animation sans nom",
        "animation_to_record": "Animation à enregistrer",
        "record_this_animation_from_any_editor_mode": "Enregistrer cette animation depuis n’importe quel mode de l’éditeur.",
        "shadow_light_direction": "Direction de la lumière de l’ombre",
        "choose_where_the_light_comes_from_for_this_export_the_shadow_pro": "Choisissez la provenance de la lumière pour cet export. L’ombre est projetée dans la direction opposée.",
        "negative_light_from_the_left_positive_light_from_the_right": "Valeur négative : lumière depuis la gauche. Valeur positive : lumière depuis la droite.",
        "light_vertical_depth": "Direction verticale / Profondeur de la lumière (%)",
        "negative_light_from_below_positive_light_from_above_on_a_floor_t": "Valeur négative : lumière depuis le bas. Valeur positive : lumière depuis le haut. Sur un sol, ce réglage ajuste la profondeur.",
        "modeler_toolkit_capture_stopped": "L’enregistrement Modeler Toolkit s’est arrêté : ",
        "open_a_model_and_finish_the_current_recording_before_previewing": "Ouvrez un modèle et terminez l’enregistrement en cours avant de lancer l’aperçu.",
        "rebuild_textures_and_uvs_create_outlines_and_record_animations_w": "Reconstruire les textures et les UV, créer des contours et enregistrer des animations avec des ombres et un filigrane personnalisables.",
        "uv_tools_outlines_layer_controls_dynamic_shadows": "Outils UV, contours, calques, ombres dynamiques et filigrane. Voir le dépôt pour le mode d’emploi et la licence MIT.",
        "dynamic_shadow_clean_render": "Ombre dynamique / Rendu propre",
        "use_modeler_toolkit_render_settings_for_this_export": "Utiliser les réglages de rendu de Modeler Toolkit pour cet export.",
        "watermark": "Filigrane",
        "add_your_configured_text_to_every_frame_independently_of_dynamic": "Ajouter le texte configuré à chaque image, indépendamment de l’option « Ombre dynamique / Rendu propre ».",
        "watermark_settings": "Paramètres du filigrane",
        "finish_or_cancel_the_current_gif_recording_first": "Terminez ou annulez d’abord l’enregistrement GIF en cours.",
        "choose_an_animation_available_in_this_project_before_recording": "Choisissez une animation disponible dans ce projet avant de lancer l’enregistrement.",
        "confirm": "Valider",
        "cancel": "Annuler",
        "technical_error": "Une erreur technique est survenue. Les détails sont disponibles dans la console de Blockbench."
    };

    function translate(key) {
        return messages[key];
    }

    function error_message(error) {
        if (Object.values(messages).includes(error?.message)) return error.message;
        console.error('[Modeler Toolkit]', error);
        return translate('technical_error');
    }
    const installed_font_options = {Arial: 'Arial'};
    const setting_definitions = {
        enabled: {name: translate('enable_dynamic_gif_render'), type: 'toggle', value: false, description: translate('use_the_dynamic_renderer_by_default_when_recording_a_gif_apng_or')},
        lighting_enabled: {name: translate('lighting_enabled'), type: 'toggle', value: false, description: translate('lighting_description')},
        light_azimuth: {name: translate('light_azimuth'), type: 'number', value: -45, min: -180, max: 180, step: 5, description: translate('light_azimuth_description')},
        light_elevation: {name: translate('light_elevation'), type: 'number', value: 45, min: 5, max: 90, step: 5, description: translate('light_elevation_description')},
        light_tone: {name: translate('light_tone'), type: 'select', value: 'neutral', options: {neutral: translate('light_neutral'), warm: translate('light_warm'), cool: translate('light_cool'), custom: translate('light_custom')}},
        light_color: {name: translate('light_color'), type: 'click', value: '#ffffff', icon: 'palette', click: open_settings},
        light_intensity: {name: translate('light_intensity'), type: 'number', value: 70, min: 0, max: 200, step: 5},
        ambient_intensity: {name: translate('ambient_intensity'), type: 'number', value: 30, min: 0, max: 200, step: 5, description: translate('ambient_description')},
        shadow_enabled: {name: translate('dynamic_shadow'), type: 'toggle', value: true, description: translate('project_the_animated_model_onto_an_invisible_wall_or_floor_using')},
        color: {name: translate('shadow_color_tool_settings'), type: 'click', value: '#424242', icon: 'palette', description: translate('open_the_color_picker_and_all_modeler_toolkit_settings'), click: open_settings},
        opacity: {name: translate('shadow_opacity'), type: 'number', value: 35, min: 0, max: 100, step: 1, description: translate('partial_opacity_needs_an_opaque_gif_background_or_apng_to_retain')},
        softness: {name: translate('shadow_softness'), type: 'number', value: 0, min: 0, max: 12, step: 0.25, description: translate('shadow_map_filter_radius_zero_produces_a_sharp_shadow')},
        surface: {name: translate('shadow_surface'), type: 'select', value: 'wall', options: {wall: translate('automatic_wall_behind_the_model'), floor: translate('floor_below_the_model')}},
        gap: {name: translate('surface_distance'), type: 'number', value: 10, min: 0, max: 200, step: 1, description: translate('extra_distance_from_the_model_relative_to_its_size_placement_is')},
        light_x: {name: translate('light_horizontal'), type: 'number', value: -60, min: -200, max: 200, step: 5, description: translate('negative_values_light_the_model_from_the_left_and_cast_the_shado')},
        light_y: {name: translate('light_vertical_direction'), type: 'number', value: 80, min: -200, max: 200, step: 5, description: translate('positive_values_light_the_model_from_above_when_using_the_wall')},
        resolution: {name: translate('shadow_map_resolution'), type: 'select', value: '2048', options: {'512': '512', '1024': '1024', '2048': '2048', '4096': '4096'}},
        floor_enabled: {name: translate('capture_floor'), type: 'toggle', value: false, description: translate('capture_floor_description')},
        floor_style: {name: translate('floor_style'), type: 'select', value: 'tiles', options: {tiles: translate('floor_tiles'), solid: translate('floor_solid')}},
        floor_width: {name: translate('floor_width'), type: 'number', value: 4, min: 0.25, max: 64, step: 0.25},
        floor_depth: {name: translate('floor_depth'), type: 'number', value: 4, min: 0.25, max: 64, step: 0.25},
        floor_tile_size: {name: translate('floor_tile_size'), type: 'number', value: 1, min: 0.25, max: 8, step: 0.25},
        floor_color: {name: translate('floor_color'), type: 'click', value: '#777c86', icon: 'palette', click: open_settings},
        floor_seam_color: {name: translate('floor_seam_color'), type: 'click', value: '#555a63', icon: 'palette', click: open_settings},
        floor_thickness: {name: translate('floor_thickness'), type: 'number', value: 1, min: 0, max: 16, step: 0.5},
        floor_height: {name: translate('floor_height'), type: 'number', value: 0, min: -256, max: 256, step: 1, description: translate('floor_height_description')},
        floor_offset_x: {name: translate('floor_offset_x'), type: 'number', value: 0, min: -1024, max: 1024, step: 1},
        floor_offset_z: {name: translate('floor_offset_z'), type: 'number', value: 0, min: -1024, max: 1024, step: 1},
        watermark_text: {name: translate('watermark_text'), type: 'text', value: '', description: translate('a_single_line_of_text_enable_or_disable_it_in_the_gif_export_dia')},
        watermark_position: {name: translate('watermark_position'), type: 'select', value: 'bottom_center', options: {bottom_center: translate('bottom_center'), bottom_left: translate('bottom_left'), bottom_right: translate('bottom_right'), center_left: translate('center_left'), center: translate('center'), center_right: translate('center_right'), top_left: translate('top_left'), top_center: translate('top_center'), top_right: translate('top_right')}},
        watermark_color: {name: translate('watermark_color'), type: 'click', value: '#ffffff', icon: 'palette', click: open_watermark_settings},
        watermark_size: {name: translate('watermark_text_size'), type: 'number', value: 3, min: 0.5, max: 15, step: 0.25, description: translate('font_size_relative_to_the_shorter_side_of_the_final_image_long_t')},
        watermark_margin: {name: translate('watermark_margin'), type: 'number', value: 3, min: 0, max: 25, step: 0.5, description: translate('distance_from_the_final_image_edges_relative_to_its_shorter_side')},
        watermark_font: {name: translate('watermark_font'), type: 'select', value: 'Arial', options: installed_font_options, description: translate('fonts_installed_on_this_computer_including_custom_fonts')},
        atlas: {name: translate('enable_texture_uv_optimization'), type: 'toggle', value: true, description: translate('rebuild_a_clean_square_texture_share_identical_uv_regions_and_re')},
        atlas_power: {name: translate('power_of_two_texture_atlas'), type: 'toggle', value: false, description: translate('use_square_sizes_16_32_64_etc_disabled_uses_square_multiples_of')},
        inverted: {name: translate('enable_inverted_cubes'), type: 'toggle', value: true, description: translate('create_inward_facing_copies_named_name_inverted')},
        outline: {name: translate('enable_outlines'), type: 'toggle', value: true, description: translate('create_outline_shells_named_name_outline')},
        layers: {name: translate('enable_layer_controls'), type: 'toggle', value: true, description: translate('toggle_or_isolate_elements_and_groups_containing_layer')}
    };
    const plugin_settings = {};
    const module_keys = new Set(['atlas', 'atlas_power', 'inverted', 'outline', 'layers']);
    const export_field = 'dynamic_render_enabled';
    const animation_field = 'modeler_toolkit_animation';
    const watermark_field = 'modeler_toolkit_watermark';
    const watermark_settings_field = 'modeler_toolkit_watermark_settings';
    const light_field = 'modeler_toolkit_light_direction';
    const light_x_field = 'modeler_toolkit_light_x';
    const light_y_field = 'modeler_toolkit_light_y';
    const light_presets = {settings: {name: translate('plugin_settings')}, top_left: {name: translate('top_left'), x: -60, y: 80}, top: {name: translate('top'), x: 0, y: 100}, top_right: {name: translate('top_right'), x: 60, y: 80}, left: {name: translate('left'), x: -100, y: 0}, front: {name: translate('front'), x: 0, y: 0}, right: {name: translate('right'), x: 100, y: 0}, bottom_left: {name: translate('bottom_left'), x: -60, y: -80}, bottom: {name: translate('bottom'), x: 0, y: -100}, bottom_right: {name: translate('bottom_right'), x: 60, y: -80}, custom: {name: translate('custom_direction')}};
    const previous_light_fields = new Map();
    const installed_light_fields = new Map();
    const previous_floor_fields = new Map();
    const installed_floor_fields = new Map();
    const floor_keys = Object.keys(setting_definitions).filter(key => key.startsWith('floor_'));
    const lighting_keys = ['lighting_enabled', 'light_azimuth', 'light_elevation', 'light_tone', 'light_color', 'light_intensity', 'ambient_intensity'];
    const light_colors = {neutral: '#ffffff', warm: '#ffdab2', cool: '#b9d7ff'};
    const animation_choices = new WeakMap();
    let active_session = null;
    let pending_preview = null;
    let settings_dialog = null;
    let preview_dialog = null;
    let preview_action = null;
    let previous_create_gif;
    let previous_confirm;
    let previous_open;
    let previous_field;
    let previous_play_field;
    let previous_animation_field;
    let installed_play_field;
    let installed_animation_field;
    let previous_watermark_field;
    let previous_watermark_settings_field;
    let installed_watermark_field;
    let installed_watermark_settings_field;
    let wrapped_create_gif;
    let wrapped_confirm;
    let wrapped_open;
    let tools_menu;
    let font_scan = null;
    let font_process = null;
    let font_refresh_time = 0;
    let font_error = '';
    let plugin_loaded = false;
    let lifecycle = 0;
    const tool_actions = [];
    const tool_dialogs = new Set();
    const uv_properties = [];
    const layer_states = new Map();
    const backup_key = 'raven_tools_uv_backup';
    const atlas_backup_key = 'raven_tools_atlas_backup';

    function module_enabled(key) {
        return !!plugin_settings[key]?.value;
    }

    function ordered_settings() {
        return Object.entries(setting_definitions).sort(([first], [second]) => Number(module_keys.has(second)) - Number(module_keys.has(first)));
    }

    function refresh_tools() {
        if (!module_enabled('layers')) {
            layer_states.forEach(restore_layer_visibility);
            if (Project) Canvas.updateVisibility();
        }
        refresh_layer_icons();
        MenuBar.update();
    }

    function migrate_settings() {
        Object.keys(setting_definitions).forEach(key => {
            const next_id = plugin_id + '_' + key;
            if (Settings.stored[next_id] !== undefined) return;
            const previous_key = key;
            for (const prefix of ['raven_tools', 'gif_dynamic_shadow']) {
                const old_id = prefix + '_' + previous_key;
                const old_setting = settings[old_id];
                const stored = old_setting ? {value: old_setting.master_value} : Settings.stored[old_id];
                if (stored?.value === undefined) continue;
                Settings.stored[next_id] = {value: stored.value};
                break;
            }
        });
        if (Settings.stored.modeler_toolkit_watermark_text === undefined) {
            const previous_line = Settings.stored.modeler_toolkit_watermark_line_1 || Settings.stored.raven_tools_watermark_line_1;
            if (previous_line?.value !== undefined) Settings.stored.modeler_toolkit_watermark_text = {value: previous_line.value};
        }
        const font_aliases = {sans_serif: 'Arial', serif: 'Georgia', monospace: 'Courier New'};
        const stored_font = Settings.stored.modeler_toolkit_watermark_font;
        if (stored_font && font_aliases[stored_font.value]) stored_font.value = font_aliases[stored_font.value];
        const selected_font = stored_font?.value || 'Arial';
        installed_font_options[selected_font] = selected_font;
        if (localStorage.getItem('modeler_toolkit_font_families') === null) {
            const previous_fonts = localStorage.getItem('raven_tools_font_families');
            if (previous_fonts !== null) localStorage.setItem('modeler_toolkit_font_families', previous_fonts);
        }
        ['java_selector', 'atlas_padding', 'watermark_enabled', 'watermark_line_1', 'watermark_line_2', 'watermark_line_3', 'watermark_opacity', 'watermark_bold', 'watermark_outline', 'watermark_outline_color'].forEach(key => delete Settings.stored[plugin_id + '_' + key]);
    }

    async function refresh_installed_fonts() {
        if (font_scan) return font_scan;
        if (Date.now() - font_refresh_time < 5000) return;
        const generation = lifecycle;
        font_scan = (async () => {
            let families = [];
            if (typeof window.queryLocalFonts === 'function' && document.visibilityState === 'visible') {
                try {
                    const fonts = await window.queryLocalFonts();
                    families = fonts.map(font => font.family);
                } catch (error) {
                    if (generation === lifecycle) font_error = error.message;
                }
            }
            if (!families.length && isApp && process.platform === 'win32') {
                families = await new Promise(resolve => {
                    const script = '[Console]::OutputEncoding = [System.Text.UTF8Encoding]::new($false); Add-Type -AssemblyName PresentationCore; @([System.Windows.Media.Fonts]::SystemFontFamilies | ForEach-Object { $_.Source } | Sort-Object -Unique) | ConvertTo-Json -Compress';
                    const child = require('child_process').execFile('powershell.exe', ['-NoLogo', '-NoProfile', '-NonInteractive', '-Command', script], {windowsHide: true, timeout: 20000, maxBuffer: 1024 * 1024, encoding: 'utf8'}, (error, output) => {
                        if (font_process === child) font_process = null;
                        if (generation !== lifecycle) return resolve([]);
                        try {
                            if (error) throw error;
                            const result = JSON.parse(output.replace(/^\uFEFF/, '').trim());
                            resolve(Array.isArray(result) ? result : [result]);
                        } catch (error) {
                            font_error = error.message;
                            resolve([]);
                        }
                    });
                    font_process = child;
                });
            }
            if (!plugin_loaded || generation !== lifecycle) return;
            families = [...new Set(families.filter(family => typeof family === 'string' && family.trim()))].sort((first, second) => first.localeCompare(second));
            if (families.length) {
                Object.keys(installed_font_options).forEach(key => delete installed_font_options[key]);
                families.forEach(family => installed_font_options[family] = family);
                localStorage.setItem('modeler_toolkit_font_families', JSON.stringify(families));
                font_error = '';
            } else if (!font_error) {
                font_error = translate('local_font_access_is_unavailable_allow_local_font_access_in_your');
            }
            font_refresh_time = Date.now();
            if (settings_dialog?.form_config.watermark_font) settings_dialog.setFormValues({watermark_font: settings_dialog.getFormResult().watermark_font});
        })().catch(error => {
            if (generation === lifecycle) font_error = error.message;
        }).finally(() => {
            if (generation === lifecycle) font_scan = null;
        });
        return font_scan;
    }

    function watermark_font_options() {
        const selected = plugin_settings.watermark_font?.value || 'Arial';
        return {...installed_font_options, [selected]: installed_font_options[selected] || selected + translate('unavailable')};
    }

    function watermark_font_css(options, size) {
        return 'normal ' + size + 'px ' + JSON.stringify(options.watermark_font) + ', sans-serif';
    }

    async function prepare_watermark_font(options) {
        if (options.watermark_enabled && options.watermark_text) await document.fonts.load(watermark_font_css(options, 24), options.watermark_text);
    }

    function selected_elements() {
        const elements = new Set();
        function collect(node) {
            if (node instanceof Cube || node instanceof Mesh) elements.add(node);
            if (node instanceof Group) node.children.forEach(collect);
        }
        [...Outliner.selected, ...Group.multi_selected].forEach(collect);
        return [...elements];
    }

    function show_tool_dialog(options) {
        const dialog = new Dialog({
            buttons: [translate('confirm'), translate('cancel')],
            ...options,
            onConfirm(form_data) {
                if (options.onConfirm.call(this, form_data) === false) return false;
                this.hide().delete();
                tool_dialogs.delete(this);
            },
            onCancel() {
                this.hide().delete();
                tool_dialogs.delete(this);
            }
        });
        tool_dialogs.add(dialog);
        return dialog.show();
    }

    function edit_model(label, aspects, callback) {
        Undo.initEdit(aspects);
        try {
            callback();
            Undo.finishEdit(label, aspects);
        } catch (error) {
            Undo.cancelEdit(true);
            throw error;
        }
    }

    function capture_model_uv(element) {
        return {
            version: 1,
            box_uv: element.box_uv,
            mirror_uv: element.mirror_uv,
            autouv: element.autouv,
            uv_offset: element.uv_offset?.slice(),
            faces: Object.fromEntries(Object.entries(element.faces).map(([key, face]) => [key, {
                uv: structuredClone(face.uv),
                vertices: face.vertices?.slice()
            }]))
        };
    }

    function backup_matches(element) {
        const backup = element[backup_key];
        if (backup?.version !== 1 || !backup.faces) return false;
        return Object.keys(element.faces).length === Object.keys(backup.faces).length && Object.entries(element.faces).every(([key, face]) => {
            const saved = backup.faces[key];
            if (!saved) return false;
            return !face.vertices || face.vertices.length === saved.vertices?.length && face.vertices.every(vertex => saved.vertices.includes(vertex));
        });
    }

    function restore_model_uv() {
        const elements = selected_elements().filter(backup_matches);
        if (!elements.length) {
            Blockbench.showQuickMessage(translate('no_matching_original_uv_backup_exact_restoration_requires_uv_cle'), 5000);
            return;
        }
        edit_model(translate('restore_modeler_toolkit_uvs'), {elements}, () => {
            elements.forEach(element => {
                const backup = element[backup_key];
                Object.entries(backup.faces).forEach(([key, face]) => element.faces[key].uv = structuredClone(face.uv));
                if (element instanceof Cube) {
                    element.box_uv = backup.box_uv;
                    element.mirror_uv = backup.mirror_uv;
                    element.autouv = backup.autouv;
                    element.uv_offset = backup.uv_offset.slice();
                }
                element[backup_key] = {};
                element.preview_controller.updateUV(element);
            });
            UVEditor.loadData();
        });
    }

    function generated_name(element, suffix) {
        const base = element.name.replace(/[\s-]+/g, '_') + '_' + suffix;
        const siblings = element.getParentArray();
        const used = new Set(siblings.map(node => node.name));
        let name = base;
        let index = 2;
        while (used.has(name)) name = base + '_' + index++;
        return name;
    }

    function invert_cube(source, suffix, thickness, created) {
        const name = generated_name(source, suffix);
        const cube = source.duplicate();
        created.push(cube);
        if (cube.box_uv) cube.setUVMode(false);
        cube.name = name;
        cube.from = source.to.slice();
        cube.to = source.from.slice();
        cube.origin = source.origin.slice();
        cube.rotation = source.rotation.slice();
        cube.inflate = -source.inflate;
        const opposite = {north: 'south', south: 'north', east: 'west', west: 'east', up: 'down', down: 'up'};
        Object.entries(opposite).forEach(([direction, original_direction]) => {
            const original = source.faces[original_direction];
            const face = cube.faces[direction];
            face.extend(original.getSaveCopy());
            const reference = Object.create(original);
            reference.uv = original.uv.slice();
            for (let axis = 0; axis < 2; axis++) if (Math.abs(reference.uv[axis + 2] - reference.uv[axis]) < 0.00001) reference.uv[axis + 2] = reference.uv[axis] + 1;
            const samples = [[0.25, 0.25], [0.75, 0.25], [0.25, 0.75]].map(([u, v]) => [reference.uv[0] + (reference.uv[2] - reference.uv[0]) * u, reference.uv[1] + (reference.uv[3] - reference.uv[1]) * v]);
            const positions = samples.map(uv => reference.UVToLocal(uv));
            let best = {error: Infinity, mirror: 0, rotation: face.rotation};
            for (let rotation = 0; rotation < 360; rotation += 90) {
                for (let mirror = 0; mirror < 4; mirror++) {
                    face.rotation = rotation;
                    face.uv = [reference.uv[mirror & 1 ? 2 : 0], reference.uv[mirror & 2 ? 3 : 1], reference.uv[mirror & 1 ? 0 : 2], reference.uv[mirror & 2 ? 1 : 3]];
                    const error = samples.reduce((sum, uv, index) => sum + face.UVToLocal(uv).distanceToSquared(positions[index]), 0);
                    if (error < best.error) best = {error, mirror, rotation};
                }
            }
            face.uv = [original.uv[best.mirror & 1 ? 2 : 0], original.uv[best.mirror & 2 ? 3 : 1], original.uv[best.mirror & 1 ? 0 : 2], original.uv[best.mirror & 2 ? 1 : 3]];
            face.rotation = best.rotation;
        });
        cube.from = cube.from.map((value, axis) => value + Math.sign(source.to[axis] - source.from[axis] || 1) * thickness);
        cube.to = cube.to.map((value, axis) => value - Math.sign(source.to[axis] - source.from[axis] || 1) * thickness);
        cube[backup_key] = {};
        cube.sortInBefore(source, 1);
        return cube;
    }

    function create_inverted_cubes() {
        const sources = selected_elements().filter(element => element instanceof Cube && (!element.box_uv || Format.optional_box_uv));
        if (!sources.length) {
            Blockbench.showQuickMessage(translate('select_cubes_in_a_format_supporting_per_face_uvs'), 3000);
            return;
        }
        const created = [];
        edit_model(translate('create_modeler_toolkit_inverted_cubes'), {elements: created, outliner: true, selection: true}, () => {
            sources.forEach(source => invert_cube(source, 'inverted', 0, created));
            Canvas.updateView({elements: created, element_aspects: {transform: true, geometry: true, faces: true, uv: true}, selection: true});
        });
    }

    function outline_texture(form_data, textures) {
        if (form_data.texture !== 'generate') return Texture.all.find(texture => texture.uuid === form_data.texture);
        const color = tinycolor(form_data.color).isValid() ? tinycolor(form_data.color).toHexString() : '#000000';
        const canvas = document.createElement('canvas');
        canvas.width = canvas.height = 16;
        const context = canvas.getContext('2d');
        context.fillStyle = color;
        context.fillRect(0, 0, 16, 16);
        const data_url = canvas.toDataURL();
        const existing = Texture.all.find(texture => texture.source === data_url && texture.render_sides === 'front');
        if (existing) return existing;
        const texture = new Texture({name: 'modeler_toolkit_outline_' + color.slice(1) + '.png', internal: true, keep_size: true, render_sides: 'front', wrap_mode: 'clamp'});
        textures.push(texture);
        texture.fromDataURL(data_url).add(false);
        texture.uv_width = texture.uv_height = 16;
        return texture;
    }

    function create_outlines(sources, form_data) {
        const thickness = Number(form_data.thickness);
        if (!Number.isFinite(thickness) || thickness <= 0) return;
        const created = [];
        const textures = [];
        edit_model(translate('create_modeler_toolkit_outlines'), {elements: created, textures, outliner: true, selection: true}, () => {
            const texture = outline_texture(form_data, textures);
            if (!texture) throw new Error(translate('the_outline_texture_is_no_longer_available'));
            sources.forEach(source => {
                let outline;
                if (source instanceof Cube) {
                    outline = invert_cube(source, 'outline', thickness, created);
                } else {
                    const name = generated_name(source, 'outline');
                    outline = source.duplicate();
                    created.push(outline);
                    outline.name = name;
                    outline[backup_key] = {};
                    const planes = new Map(Object.keys(source.vertices).map(key => [key, []]));
                    Object.values(source.faces).forEach(face => {
                        const normal = new THREE.Vector3().fromArray(face.getNormal(true));
                        if (normal.lengthSq() < 0.5) return;
                        face.vertices.forEach(key => planes.get(key)?.push(normal));
                    });
                    Object.entries(outline.vertices).forEach(([key, vertex]) => {
                        const normals = planes.get(key) || [];
                        const offset = new THREE.Vector3();
                        for (let iteration = 0; iteration < 8; iteration++) normals.forEach(normal => offset.addScaledVector(normal, thickness - offset.dot(normal)));
                        if (offset.length() > thickness * 4) offset.setLength(thickness * 4);
                        vertex[0] += offset.x;
                        vertex[1] += offset.y;
                        vertex[2] += offset.z;
                    });
                    Object.values(outline.faces).forEach(face => face.invert());
                    outline.sortInBefore(source, 1);
                }
                Object.values(outline.faces).forEach(face => {
                    face.texture = texture.uuid;
                    if (Array.isArray(face.uv)) face.uv = [0, 0, 16, 16];
                    else Object.keys(face.uv).forEach(key => face.uv[key] = [8, 8]);
                });
            });
            Canvas.updateView({elements: created, element_aspects: {transform: true, geometry: true, faces: true, uv: true}, selection: true});
        });
    }

    function open_outline() {
        const project = Project;
        const sources = selected_elements().filter(element => !(element instanceof Cube && element.box_uv && !Format.optional_box_uv));
        if (!sources.length) return;
        const textures = {};
        if (!Format.single_texture) textures.generate = translate('generate_solid_color_texture');
        Texture.all.filter(texture => texture.render_sides === 'front' || texture.getMaterial()?.side === THREE.FrontSide).forEach(texture => textures[texture.uuid] = texture.name);
        if (!Object.keys(textures).length) {
            Blockbench.showQuickMessage(translate('this_format_needs_an_existing_front_sided_texture_for_outlines'), 4000);
            return;
        }
        show_tool_dialog({
            id: 'modeler_toolkit_outline_settings',
            title: translate('create_outlines'),
            form: {
                thickness: {label: translate('thickness'), type: 'number', min: 0.001, max: 16, step: 0.05, value: 0.1},
                texture: {label: 'Texture', type: 'select', options: textures, value: Object.keys(textures)[0]},
                color: {label: translate('outline_color'), type: 'color', value: '#000000', condition: form => form.texture === 'generate'}
            },
            onConfirm(form_data) {
                if (Project !== project) return;
                create_outlines(sources.filter(source => Project.elements.includes(source)), form_data);
            }
        });
    }

    function is_layer(node) {
        for (let current = node; current && typeof current === 'object'; current = current.parent) {
            if (current.name?.toLowerCase().includes('_layer')) return true;
        }
        return false;
    }

    function restore_layer_visibility(state) {
        state.hidden_nodes.forEach(node => node.visibility = true);
        state.hidden_nodes.clear();
        state.mode = null;
    }

    function refresh_layer_icons() {
        const state = Project && layer_states.get(Project);
        const toggle = tool_actions.find(action => action.id === 'modeler_toolkit_toggle_layers');
        toggle?.setIcon(state?.mode === 'hide' ? 'visibility' : 'visibility_off');
    }

    function toggle_layer_visibility(mode) {
        if (!Project || !module_enabled('layers')) return;
        if (!layer_states.has(Project)) layer_states.set(Project, {mode: null, hidden_nodes: new Set()});
        const state = layer_states.get(Project);
        const previous_mode = state.mode;
        restore_layer_visibility(state);
        if (previous_mode !== mode) {
            const nodes = [...Group.all, ...Outliner.elements];
            const layers = new Set(nodes.filter(is_layer));
            if (layers.size) {
                const retained = new Set(layers);
                if (mode === 'isolate') {
                    layers.forEach(node => {
                        for (let parent = node.parent; parent && typeof parent === 'object'; parent = parent.parent) retained.add(parent);
                    });
                }
                nodes.forEach(node => {
                    if ((mode === 'hide' ? layers.has(node) : !retained.has(node)) && node.visibility) {
                        state.hidden_nodes.add(node);
                        node.visibility = false;
                    }
                });
                state.mode = mode;
            } else Blockbench.showQuickMessage(translate('no_elements_or_groups_containing_layer'), 3000);
        }
        refresh_layer_icons();
        Canvas.updateVisibility();
        updateInterfacePanels();
    }

    function close_layer_project(event) {
        const state = layer_states.get(event.project);
        if (state) restore_layer_visibility(state);
        layer_states.delete(event.project);
    }

    function capture_atlas_undo({save, aspects}) {
        if (aspects.raven_tools_atlas) save[atlas_backup_key] = structuredClone(Project[atlas_backup_key] || {});
    }

    function load_atlas_undo({save}) {
        if (save[atlas_backup_key]) {
            Project[atlas_backup_key] = structuredClone(save[atlas_backup_key]);
            Object.keys(save.textures || {}).forEach(uuid => {
                const texture = Texture.all.find(item => item.uuid === uuid);
                if (texture?.internal) texture.stopWatcher();
                else if (texture?.path) texture.startWatcher();
            });
        }
    }

    function serialize_square_atlas({model, options}) {
        if (!model.textures) return;
        const optimized_ids = new Set();
        const visited = new Set();
        for (let backup = Project?.[atlas_backup_key]; backup?.version && !visited.has(backup); backup = backup.previous_backup) {
            visited.add(backup);
            if (backup.version === 3) backup.optimized_textures.forEach(texture => optimized_ids.add(texture.uuid));
        }
        for (const saved of model.textures) {
            if (!optimized_ids.has(saved.uuid)) continue;
            const texture = Texture.all.find(item => item.uuid === saved.uuid);
            if (!texture?.internal || !texture.source.startsWith('data:')) continue;
            if (options?.bitmaps !== false) {
                saved.source = texture.getDataURL();
                saved.internal = true;
            }
            delete saved.path;
            delete saved.relative_path;
        }
    }

    function atlas_message(message, error = false) {
        Blockbench.showMessageBox({title: translate('modeler_toolkit_texture_optimization'), message, icon: error ? 'error' : 'info', buttons: [translate('close')]});
        return {changed: false, message};
    }

    function atlas_restore_blocked(reason) {
        const message = reason + '\n\n' + translate('incompatible_backup_preserved');
        Blockbench.showMessageBox({
            title: translate('modeler_toolkit_texture_optimization'),
            message,
            icon: 'info',
            buttons: [translate('close')]
        });
        return {changed: false, message};
    }

    function capture_texture_uv(element) {
        return {
            ...capture_model_uv(element),
            type: element.type,
            plaster_backup: structuredClone(element[backup_key] || {}),
            faces: Object.fromEntries(Object.entries(element.faces).map(([key, face]) => [key, {
                uv: structuredClone(face.uv),
                texture: face.texture,
                rotation: face.rotation,
                vertices: face.vertices?.slice()
            }]))
        };
    }

    function texture_uv_topology_matches(element, saved, removed_faces = {}) {
        return element.type === saved.type && Object.keys(element.faces).length === Object.keys(saved.faces).length - Object.keys(removed_faces).length
            && Object.keys(removed_faces).every(key => element instanceof Mesh && !element.faces[key] && saved.faces[key] && removed_faces[key].vertices.every(vertex => element.vertices[vertex]))
            && Object.entries(element.faces).every(([key, face]) => saved.faces[key] && (!face.vertices
                || face.vertices.length === saved.faces[key].vertices?.length && face.vertices.every(vertex => saved.faces[key].vertices.includes(vertex))));
    }

    function apply_texture_uv(element, saved, removed_faces = {}) {
        element[backup_key] = structuredClone(saved.plaster_backup || {});
        if (element instanceof Cube) {
            element.box_uv = saved.box_uv;
            element.mirror_uv = saved.mirror_uv;
            element.autouv = saved.autouv;
            element.uv_offset = saved.uv_offset.slice();
        }
        if (Object.keys(removed_faces).length) element.faces = Object.fromEntries(Object.keys(saved.faces).map(key => [key, removed_faces[key] ? new MeshFace(element, removed_faces[key]) : element.faces[key]]));
        for (const [key, face] of Object.entries(element.faces)) {
            face.uv = structuredClone(saved.faces[key].uv);
            face.texture = saved.faces[key].texture;
            if (element instanceof Cube) face.rotation = saved.faces[key].rotation;
        }
        if (Object.keys(removed_faces).length) Mesh.preview_controller.updateGeometry(element);
    }

    function uv_region_pixel(region, x, y) {
        const source = region.source;
        let pixel_x = region.x + x;
        let pixel_y = region.y + y;
        if (source.texture.wrap_mode === 'repeat') {
            pixel_x = (pixel_x % source.width + source.width) % source.width;
            pixel_y = (pixel_y % source.height + source.height) % source.height;
        } else {
            pixel_x = Math.max(0, Math.min(source.width - 1, pixel_x));
            pixel_y = Math.max(0, Math.min(source.height - 1, pixel_y));
        }
        return (pixel_y * source.width + pixel_x) * 4;
    }

    function transformed_uv_pixel(region, x, y, transform) {
        let pixel_x = transform & 4 ? y : x;
        let pixel_y = transform & 4 ? x : y;
        if (transform & 1) pixel_x = region.width - 1 - pixel_x;
        if (transform & 2) pixel_y = region.height - 1 - pixel_y;
        return uv_region_pixel(region, pixel_x, pixel_y);
    }

    function hash_uv_region(region, transform = 0) {
        const width = transform & 4 ? region.height : region.width;
        const height = transform & 4 ? region.width : region.height;
        let hash = 2166136261;
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const offset = transformed_uv_pixel(region, x, y, transform);
                const alpha = region.source.pixels[offset + 3];
                for (let channel = 0; channel < 4; channel++) hash = Math.imul(hash ^ (alpha ? region.source.pixels[offset + channel] : 0), 16777619);
            }
        }
        return width + '_' + height + '_' + (hash >>> 0);
    }

    function equal_uv_regions(first, second, transform = 0) {
        if (first.width !== (transform & 4 ? second.height : second.width) || first.height !== (transform & 4 ? second.width : second.height)) return false;
        for (let y = 0; y < first.height; y++) {
            for (let x = 0; x < first.width; x++) {
                const first_offset = uv_region_pixel(first, x, y);
                const second_offset = transformed_uv_pixel(second, x, y, transform);
                const alpha = first.source.pixels[first_offset + 3];
                if (alpha !== second.source.pixels[second_offset + 3]) return false;
                if (!alpha) continue;
                for (let channel = 0; channel < 4; channel++) {
                    if (first.source.pixels[first_offset + channel] !== second.source.pixels[second_offset + channel]) return false;
                }
            }
        }
        return true;
    }

    function triangle_uses_uv_pixel(triangle, x, y) {
        let polygon = triangle.map(point => [point[0] - x, point[1] - y]);
        for (const [axis, edge, direction] of [[0, 0, 1], [0, 1, -1], [1, 0, 1], [1, 1, -1]]) {
            const clipped = [];
            for (let index = 0; index < polygon.length; index++) {
                const current = polygon[index];
                const previous = polygon[(index + polygon.length - 1) % polygon.length];
                const inside = (current[axis] - edge) * direction >= 0;
                const previous_inside = (previous[axis] - edge) * direction >= 0;
                if (inside !== previous_inside) {
                    const ratio = (edge - previous[axis]) / (current[axis] - previous[axis]);
                    const intersection = previous.map((value, coordinate) => value + (current[coordinate] - value) * ratio);
                    intersection[axis] = edge;
                    clipped.push(intersection);
                }
                if (inside) clipped.push(current);
            }
            polygon = clipped;
            if (polygon.length < 3) return false;
        }
        const area = polygon.reduce((total, point, index) => {
            const next = polygon[(index + 1) % polygon.length];
            return total + point[0] * next[1] - next[0] * point[1];
        }, 0);
        return !Number.isFinite(area) || Math.abs(area) > 0;
    }

    function transparent_uv_face(entry) {
        const {element, face, region, scale} = entry;
        let triangles = null;
        if (element instanceof Mesh) {
            if (face.vertices.length < 3 || face.vertices.length > 4) return false;
            const vertices = face.vertices.length === 4 ? face.getSortedVertices() : face.vertices;
            if (vertices.some(vertex => !Array.isArray(face.uv[vertex]))) return false;
            const points = vertices.map(vertex => face.uv[vertex].map((value, axis) => value * scale[axis]));
            triangles = [[points[0], points[1], points[2]]];
            if (points.length === 4) triangles.push([points[0], points[2], points[3]]);
            const area = triangles.reduce((total, triangle) => total + Math.abs((triangle[1][0] - triangle[0][0]) * (triangle[2][1] - triangle[0][1]) - (triangle[1][1] - triangle[0][1]) * (triangle[2][0] - triangle[0][0])), 0);
            if (!Number.isFinite(area) || area === 0) triangles = null;
        }
        for (let y = 0; y < region.height; y++) for (let x = 0; x < region.width; x++) {
            if (region.source.pixels[uv_region_pixel(region, x, y) + 3] === 0) continue;
            if (!triangles || triangles.some(triangle => triangle_uses_uv_pixel(triangle, region.x + x, region.y + y))) return false;
        }
        return true;
    }

    function plan_model_uvs(unique_faces = false) {
        const sources = new Map();
        const skipped = new Map();
        const entries = [];
        function skip(reason) {
            skipped.set(reason, (skipped.get(reason) || 0) + 1);
        }
        for (const element of Outliner.elements) {
            if (!(element instanceof Cube || element instanceof Mesh)) continue;
            if (element instanceof Cube && element.box_uv) {
                skip(translate('box_uv_layouts_preserved'));
                continue;
            }
            for (const [key, face] of Object.entries(element.faces)) {
                const texture = face.getTexture();
                if (!(texture instanceof Texture)) continue;
                if (texture.error || !texture.width || !texture.height || texture.canvas.width !== texture.width || texture.canvas.height !== texture.height) {
                    skip(translate('textures_still_loading_or_unavailable'));
                    continue;
                }
                if ((texture.frameCount || 1) > 1 || texture.layers_enabled || texture.group || texture.render_mode === 'layered') {
                    skip(translate('animated_layered_or_material_textures_preserved'));
                    continue;
                }
                if (texture.width * texture.height > 16777216) {
                    skip(translate('textures_exceeding_the_safe_comparison_size'));
                    continue;
                }
                const points = element instanceof Cube ? [[face.uv[0], face.uv[1]], [face.uv[2], face.uv[3]]] : Object.values(face.uv);
                if (!points.length || points.some(point => !Array.isArray(point) || point.length !== 2 || point.some(value => !Number.isFinite(value)))) {
                    skip(translate('invalid_uv_coordinates'));
                    continue;
                }
                const scale = [texture.width / texture.getUVWidth(), texture.height / texture.getUVHeight()];
                const snap_pixel = value => Math.abs(value - Math.round(value)) < 1e-7 ? Math.round(value) : value;
                const min = [0, 1].map(axis => snap_pixel(Math.min(...points.map(point => point[axis] * scale[axis]))));
                const max = [0, 1].map(axis => snap_pixel(Math.max(...points.map(point => point[axis] * scale[axis]))));
                if (min.some(value => !Number.isFinite(value) || value < 0) || max[0] > texture.width || max[1] > texture.height) {
                    skip(translate('uvs_outside_the_texture_preserved'));
                    continue;
                }
                let source = sources.get(texture);
                if (!source) {
                    source = {texture, width: texture.width, height: texture.height, pixels: texture.ctx.getImageData(0, 0, texture.width, texture.height).data, regions: new Map(), hashes: new Map()};
                    sources.set(texture, source);
                }
                const x = Math.min(source.width - 1, Math.floor(min[0]));
                const y = Math.min(source.height - 1, Math.floor(min[1]));
                const width = Math.max(1, Math.ceil(max[0]) - x);
                const height = Math.max(1, Math.ceil(max[1]) - y);
                const region_key = [x, y, width, height, ...(unique_faces ? [element.uuid, key] : [])].join('_');
                let region = source.regions.get(region_key);
                if (!region) {
                    region = {source, x, y, width, height, key: texture.uuid + '_' + region_key};
                    const hash = unique_faces ? '' : hash_uv_region(region);
                    const matches = source.hashes.get(hash) || [];
                    const match = matches.find(candidate => equal_uv_regions(region, candidate.region, candidate.transform));
                    region.target = match?.region || region;
                    region.transform = match?.transform || 0;
                    if (!unique_faces && region.target === region) {
                        for (let transform = 0; transform < 8; transform++) {
                            const transformed_hash = transform === 0 ? hash : hash_uv_region(region, transform);
                            const candidates = source.hashes.get(transformed_hash) || [];
                            candidates.push({region, transform});
                            source.hashes.set(transformed_hash, candidates);
                        }
                    }
                    source.regions.set(region_key, region);
                }
                const entry = {element, key, face, region, scale, edge_sample: [0, 1].map(axis => min[axis] === max[axis])};
                entry.transparent = !unique_faces && (element instanceof Cube ? region.transparent ??= transparent_uv_face(entry) : transparent_uv_face(entry));
                entries.push(entry);
            }
        }
        return {entries, skipped};
    }

    function remap_texture_uv(entry, placement, width, height) {
        const {region, face, element, scale} = entry;
        const texture = region.source.texture;
        const transform = region.transform;
        const point = uv => {
            const local = [uv[0] * scale[0] - region.x, uv[1] * scale[1] - region.y].map(value => Math.abs(value - Math.round(value)) < 1e-7 ? Math.round(value) : value);
            entry.edge_sample?.forEach((edge, axis) => {if (edge) local[axis] = 0.5;});
            if (transform & 4) local.reverse();
            if (transform & 1) local[0] = region.target.width - local[0];
            if (transform & 2) local[1] = region.target.height - local[1];
            return [(local[0] + placement.x) / width * texture.getUVWidth(), (local[1] + placement.y) / height * texture.getUVHeight()];
        };
        if (element instanceof Cube) {
            const uv = face.uv;
            if (transform & 4) {
                face.uv = [...point([uv[2], uv[1]]), ...point([uv[0], uv[3]])];
                face.rotation = (face.rotation + 90) % 360;
            } else {
                face.uv = [...point([uv[0], uv[1]]), ...point([uv[2], uv[3]])];
            }
        } else {
            Object.keys(face.uv).forEach(vertex => face.uv[vertex] = point(face.uv[vertex]));
        }
    }

    function fit_padded_regions(regions, size, budget) {
        let free = [{x: 1, y: 1, width: size - 1, height: size - 1}];
        const placements = new Map();
        for (const region of regions) {
            const width = region.width + 1;
            const height = region.height + 1;
            let best;
            let best_score = Infinity;
            for (const space of free) {
                if (--budget.remaining < 0) return null;
                if (space.width < width || space.height < height) continue;
                const score = Math.min(space.width - width, space.height - height) * size + Math.max(space.width - width, space.height - height);
                if (score < best_score) {
                    best = {x: space.x, y: space.y, width, height};
                    best_score = score;
                }
            }
            if (!best) return null;
            placements.set(region, {x: best.x, y: best.y});
            const split = [];
            for (const space of free) {
                if (space.x >= best.x + width || space.x + space.width <= best.x || space.y >= best.y + height || space.y + space.height <= best.y) {
                    split.push(space);
                    continue;
                }
                if (best.x > space.x) split.push({...space, width: best.x - space.x});
                if (best.x + width < space.x + space.width) split.push({...space, x: best.x + width, width: space.x + space.width - best.x - width});
                if (best.y > space.y) split.push({...space, height: best.y - space.y});
                if (best.y + height < space.y + space.height) split.push({...space, y: best.y + height, height: space.y + space.height - best.y - height});
            }
            free = [];
            for (let index = 0; index < split.length; index++) {
                const space = split[index];
                let contained = false;
                for (let other_index = 0; other_index < split.length; other_index++) {
                    if (--budget.remaining < 0) return null;
                    if (index === other_index) continue;
                    const other = split[other_index];
                    if (space.x >= other.x && space.y >= other.y && space.x + space.width <= other.x + other.width && space.y + space.height <= other.y + other.height && (other_index < index || space.width !== other.width || space.height !== other.height)) {
                        contained = true;
                        break;
                    }
                }
                if (!contained) free.push(space);
            }
        }
        return placements;
    }

    function plan_padded_texture(entries, power, unique_faces) {
        const source = entries[0].region.source;
        const regions = unique_faces ? entries.map(entry => entry.region) : [...new Set(entries.map(entry => entry.region.target))];
        const area = regions.reduce((total, region) => total + (region.width + 1) * (region.height + 1), 0);
        const minimum = regions.reduce((size, region) => Math.max(size, region.width + 2, region.height + 2), Math.ceil(Math.sqrt(area)) + 1);
        if (minimum > 4096 || area > 4095 * 4095) return null;
        const budget = {remaining: 16000000};
        const orders = [
            regions.slice().sort((first, second) => Math.max(second.width, second.height) - Math.max(first.width, first.height) || second.width * second.height - first.width * first.height),
            regions.slice().sort((first, second) => second.width * second.height - first.width * first.height || second.height - first.height),
            regions.slice().sort((first, second) => second.height - first.height || second.width - first.width)
        ];
        for (let size = power ? Math.max(16, 2 ** Math.ceil(Math.log2(minimum))) : Math.max(16, Math.ceil(minimum / 16) * 16); size <= 4096; size = power ? size * 2 : size + Math.max(16, Math.floor(size / 128) * 16)) {
            let placements = null;
            for (const ordered of orders) {
                placements = fit_padded_regions(ordered, size, budget);
                if (placements) break;
                if (budget.remaining < 0) return null;
            }
            if (!placements) continue;
            const pixels = new Uint32Array(size * size);
            const words = new Uint32Array(source.pixels.buffer, source.pixels.byteOffset, source.pixels.length / 4);
            for (const region of regions) {
                const placement = placements.get(region);
                for (let y = 0; y < region.height; y++) {
                    const offset = uv_region_pixel(region, 0, y) / 4;
                    pixels.set(words.subarray(offset, offset + region.width), (placement.y + y) * size + placement.x);
                }
            }
            return {size, placements, pixels, source, entries, border: 1};
        }
        return null;
    }

    function plan_square_texture(entries, power) {
        return plan_padded_texture(entries, power, false);
    }

    function plan_independent_texture(entries, power) {
        return plan_padded_texture(entries, power, true);
    }

    function refresh_atlas_view() {
        Canvas.updateAllFaces();
        Canvas.updateAllUVs();
        UVEditor.loadData();
        UVEditor.vue.updateTexture();
        updateInterfacePanels();
        MenuBar.update();
    }

    function write_square_bitmap(texture, data_url, size, pixels) {
        texture.stopWatcher();
        texture.path = '';
        texture.sync_to_project = '';
        texture.keep_size = true;
        texture.uv_width = size;
        texture.uv_height = size;
        texture.fromDataURL(data_url);
        texture.width = size;
        texture.height = size;
        texture.canvas.width = size;
        texture.canvas.height = size;
        const image = texture.ctx.createImageData(size, size);
        image.data.set(new Uint8ClampedArray(pixels.buffer, pixels.byteOffset, pixels.byteLength));
        texture.ctx.putImageData(image, 0, 0);
        texture.updateMaterial();
    }

    function optimize_texture_atlas(unique_faces = false) {
        if (!Project) return;
        if (active_session || Undo.current_save) return atlas_message(translate('finish_the_current_edit_or_recording_before_rebuilding_textures'));
        if (Texture.all.some(texture => texture.render_mode === 'layered')) return atlas_message(translate('layered_texture_compositing_is_active_the_texture_stack_was_pres'));
        const previous_backup = structuredClone(Project[atlas_backup_key] || {});
        const skipped = [];
        let plans;
        try {
            const source_plan = plan_model_uvs(unique_faces);
            source_plan.skipped.forEach((count, reason) => skipped.push(reason + ': ' + count));
            const grouped = new Map();
            source_plan.entries.forEach(entry => {
                const texture = entry.region.source.texture;
                if (!grouped.has(texture)) grouped.set(texture, []);
                grouped.get(texture).push(entry);
            });
            plans = [];
            for (const [texture, entries] of grouped) {
                let references = 0;
                let unsupported = false;
                for (const element of Outliner.elements) {
                    if (element instanceof Cube || element instanceof Mesh) references += Object.values(element.faces).filter(face => face.getTexture() === texture).length;
                    else if (element.texture === texture.uuid) unsupported = true;
                }
                if (unsupported || references !== entries.length) {
                    skipped.push(texture.name + translate('some_uvs_or_element_types_require_the_original_layout'));
                    continue;
                }
                const hidden_entries = unique_faces ? [] : entries.filter(entry => entry.transparent);
                const visible_entries = entries.filter(entry => !entry.transparent);
                const planner = unique_faces ? plan_independent_texture : plan_square_texture;
                const plan = visible_entries.length ? planner(visible_entries, !!plugin_settings.atlas_power.value || texture.wrap_mode === 'repeat') : {size: 16, placements: new Map(), pixels: new Uint32Array(256), source: entries[0].region.source, entries: [], border: 1};
                if (plan) plans.push({...plan, hidden_entries});
                else skipped.push(unique_faces ? texture.name + ' : ' + translate('independent_uvs_unavailable') : texture.name + translate('no_compatible_square_layout_found_with_the_same_pixels_and_borde'));
            }
        } catch (error) {
            return atlas_message(translate('no_changes_were_made') + error_message(error), true);
        }
        if (!plans.length) return atlas_message(translate(unique_faces ? 'independent_uvs_unavailable' : 'no_compatible_square_texture_could_be_rebuilt_without_enlargemen') + (skipped.length ? '\n\n' + skipped.join('\n') : ''));
        if (!unique_faces) {
            plans = plans.filter(plan => {
                if (plan.hidden_entries.length) return true;
                if (plan.size !== plan.source.width || plan.size !== plan.source.height) return true;
                if (plan.entries.some(entry => {
                    const region = entry.region;
                    const placement = plan.placements.get(region.target);
                    return region.target !== region || !placement || placement.x !== region.x || placement.y !== region.y;
                })) return true;
                const original = new Uint8Array(plan.source.pixels.buffer, plan.source.pixels.byteOffset, plan.source.pixels.byteLength);
                const rebuilt = new Uint8Array(plan.pixels.buffer, plan.pixels.byteOffset, plan.pixels.byteLength);
                return original.length !== rebuilt.length || original.some((pixel, index) => pixel !== rebuilt[index]);
            });
            if (!plans.length) return atlas_message(translate('no_additional_pixel_identical_uv_regions_were_found_original_tex') + (skipped.length ? '\n\n' + skipped.join('\n') : ''));
        }
        const change_project_size = !Format.per_texture_uv_size && Texture.all.length === 1 && plans.length === 1;
        if (!Format.per_texture_uv_size && !change_project_size && Project.texture_width !== Project.texture_height && Format.animated_textures) return atlas_message(translate('this_format_shares_a_non_square_uv_resolution_across_several_tex'));
        const affected_entries = plans.flatMap(plan => [...plan.entries, ...plan.hidden_entries]);
        const elements = [...new Set(affected_entries.map(entry => entry.element))];
        const textures = plans.map(plan => plan.source.texture);
        const backup = {
            version: 3,
            mode: unique_faces ? 'independent_faces' : 'square_atlas',
            format: Format.id,
            width: Project.texture_width,
            height: Project.texture_height,
            optimized_width: change_project_size ? plans[0].size : Project.texture_width,
            optimized_height: change_project_size ? plans[0].size : Project.texture_height,
            previous_backup,
            textures: textures.map(texture => ({...texture.getUndoCopy(true), image_data: texture.canvas.toDataURL('image/png')})),
            optimized_textures: plans.map(plan => ({uuid: plan.source.texture.uuid, width: plan.size, height: plan.size})),
            elements: Object.fromEntries(elements.map(element => [element.uuid, capture_texture_uv(element)])),
            removed_faces: Object.fromEntries(elements.filter(element => element instanceof Mesh).map(element => [element.uuid, Object.fromEntries(plans.flatMap(plan => plan.hidden_entries).filter(entry => entry.element === element).map(entry => [entry.key, entry.face.getUndoCopy()]))]).filter(([, faces]) => Object.keys(faces).length))
        };
        const aspects = {elements, textures, bitmap: true, uv_only: true, uv_mode: true, raven_tools_atlas: true};
        Undo.initEdit(aspects);
        try {
            if (change_project_size) Project.texture_width = Project.texture_height = plans[0].size;
            for (const plan of plans) {
                const canvas = document.createElement('canvas');
                canvas.width = canvas.height = plan.size;
                const context = canvas.getContext('2d');
                const image = context.createImageData(plan.size, plan.size);
                image.data.set(new Uint8ClampedArray(plan.pixels.buffer));
                context.putImageData(image, 0, 0);
                const texture = plan.source.texture;
                write_square_bitmap(texture, canvas.toDataURL('image/png'), plan.size, plan.pixels);
                for (const entry of plan.entries) {
                    const target = entry.region.target;
                    const placement = plan.placements.get(target);
                    remap_texture_uv(entry, placement, plan.size, plan.size);
                }
                for (const entry of plan.hidden_entries) {
                    if (entry.element instanceof Cube) entry.face.texture = null;
                    else delete entry.element.faces[entry.key];
                }
            }
            elements.forEach(element => element[backup_key] = {});
            elements.filter(element => backup.removed_faces[element.uuid]).forEach(element => Mesh.preview_controller.updateGeometry(element));
            Project[atlas_backup_key] = backup;
            refresh_atlas_view();
            Undo.finishEdit(translate(unique_faces ? 'separate_face_uvs' : 'rebuild_textures_and_share_matching_uvs'), aspects);
        } catch (error) {
            Undo.cancelEdit(true);
            refresh_atlas_view();
            return atlas_message(translate('texture_repacking_was_cancelled') + error_message(error), true);
        }
        const original_pixels = plans.reduce((area, plan) => area + plan.source.width * plan.source.height, 0);
        const atlas_pixels = plans.reduce((area, plan) => area + plan.size * plan.size, 0);
        const regions_before = plans.reduce((count, plan) => count + new Set([...plan.entries, ...plan.hidden_entries].map(entry => entry.region)).size, 0);
        const regions_after = plans.reduce((count, plan) => count + plan.placements.size, 0);
        const faces_disabled = plans.reduce((count, plan) => count + plan.hidden_entries.length, 0);
        const result = {changed: true, mode: unique_faces ? 'independent_faces' : 'square_atlas', original_pixels, atlas_pixels, reduction: 1 - atlas_pixels / original_pixels, regions_before, regions_after, faces_disabled, textures: plans.map(plan => ({name: plan.source.texture.name, before: [plan.source.width, plan.source.height], after: [plan.size, plan.size], border: plan.border, regions: plan.placements.size})), skipped};
        if (unique_faces) {
            atlas_message(result.textures.map(texture => texture.name + ' : ' + texture.before.join(' × ') + ' → ' + texture.after.join(' × ')).join('\n') + '\n\n' + translate('independent_uvs_created') + (previous_backup.version ? '\n\n' + translate('previous_backups_preserved') : '') + (skipped.length ? '\n\n' + skipped.join('\n') : ''));
            return result;
        }
        const dimensions_message = result.reduction > 0 ? (result.reduction * 100).toLocaleString('fr-FR', {maximumFractionDigits: 1}) + translate('fewer_texture_pixels') : translate(result.reduction < 0 ? 'texture_grown_for_padding' : 'dimensions_preserved_rebuilding_does_not_require_a_smaller_textu');
        atlas_message(result.textures.map(texture => texture.name + ' : ' + texture.before.join(' × ') + ' → ' + texture.after.join(' × ')).join('\n') + translate('uv_regions') + regions_before + ' → ' + regions_after + '.\n' + dimensions_message + (faces_disabled ? '\n' + translate('transparent_faces_disabled') + faces_disabled + '.' : '') + translate('identical_regions_are_shared_including_rotated_or_mirrored_match') + (previous_backup.version ? '\n\n' + translate('previous_backups_preserved') : '') + (skipped.length ? '\n\n' + skipped.join('\n') : ''));
        return result;
    }

    function restore_square_atlas(backup) {
        if (active_session || Undo.current_save) return atlas_message(translate('finish_the_current_edit_or_recording_before_restoring_textures'));
        if (backup.format !== Format.id || Project.texture_width !== backup.optimized_width || Project.texture_height !== backup.optimized_height) return atlas_restore_blocked(translate('undo_the_project_format_or_uv_resolution_change_before_restoring'));
        const textures = backup.textures.map(saved => Texture.all.find(texture => texture.uuid === saved.uuid));
        if (textures.some((texture, index) => !texture || texture.width !== backup.optimized_textures[index].width || texture.height !== backup.optimized_textures[index].height)) return atlas_restore_blocked(translate('an_optimized_texture_is_missing_or_has_a_different_resolution_un'));
        const elements = Outliner.elements.filter(element => backup.elements[element.uuid]);
        if (elements.some(element => !texture_uv_topology_matches(element, backup.elements[element.uuid], backup.removed_faces?.[element.uuid]))) return atlas_restore_blocked(translate('an_optimized_element_has_different_faces_or_vertices_undo_its_to'));
        if (Outliner.elements.some(element => !backup.elements[element.uuid] && (element.faces ? Object.values(element.faces).some(face => textures.includes(face.getTexture())) : textures.some(texture => element.texture === texture.uuid)))) return atlas_restore_blocked(translate('new_geometry_uses_an_optimized_texture_undo_that_addition_before'));
        const aspects = {elements, textures, bitmap: true, uv_only: true, uv_mode: true, raven_tools_atlas: true};
        Undo.initEdit(aspects);
        try {
            Project.texture_width = backup.width;
            Project.texture_height = backup.height;
            textures.forEach((texture, index) => {
                const saved = backup.textures[index];
                texture.keep_size = true;
                texture.extend({...saved, internal: true, saved: false});
                texture.path = '';
                texture.sync_to_project = '';
                texture.fromDataURL(saved.image_data || saved.source);
            });
            elements.forEach(element => apply_texture_uv(element, backup.elements[element.uuid], backup.removed_faces?.[element.uuid]));
            Project[atlas_backup_key] = structuredClone(backup.previous_backup || {});
            refresh_atlas_view();
            Undo.finishEdit(translate('restore_original_square_atlas_textures_and_uvs'), aspects);
        } catch (error) {
            Undo.cancelEdit(true);
            refresh_atlas_view();
            return atlas_message(translate('texture_restoration_was_cancelled') + error_message(error), true);
        }
        Blockbench.showQuickMessage(translate('original_textures_uvs_and_resolution_restored'), 4000);
        return {changed: true, textures: textures.length, elements: elements.length};
    }

    function restore_optimized_uvs(backup) {
        if (active_session || Undo.current_save) return atlas_message(translate('finish_the_current_edit_or_recording_before_restoring_uvs'));
        if (backup.format !== Format.id || backup.width !== Project.texture_width || backup.height !== Project.texture_height) return atlas_restore_blocked(translate('undo_the_project_format_or_uv_resolution_change_before_restoring_2'));
        if (backup.textures.some(saved => !Texture.all.some(texture => texture.uuid === saved.uuid && texture.width === saved.width && texture.height === saved.height && texture.getUVWidth() === saved.uv_width && texture.getUVHeight() === saved.uv_height))) return atlas_restore_blocked(translate('an_original_texture_is_missing_or_has_a_different_resolution_res'));
        const elements = Outliner.elements.filter(element => backup.elements[element.uuid]);
        if (elements.some(element => !texture_uv_topology_matches(element, backup.elements[element.uuid]))) return atlas_restore_blocked(translate('an_optimized_element_has_different_faces_or_vertices_undo_its_to_2'));
        const aspects = {elements, uv_only: true, raven_tools_atlas: true};
        Undo.initEdit(aspects);
        try {
            elements.forEach(element => apply_texture_uv(element, backup.elements[element.uuid]));
            Project[atlas_backup_key] = structuredClone(backup.previous_backup || {});
            refresh_atlas_view();
            Undo.finishEdit(translate('restore_original_uvs_without_changing_textures'), aspects);
        } catch (error) {
            Undo.cancelEdit(true);
            refresh_atlas_view();
            return atlas_message(translate('uv_restoration_was_cancelled') + error_message(error), true);
        }
        Blockbench.showQuickMessage(translate('original_uvs_restored_texture_images_preserved'), 4000);
        return {changed: true, elements: elements.length, textures_unchanged: true};
    }

    function restore_texture_atlas() {
        const backup = Project?.[atlas_backup_key];
        if (backup?.version === 3) return restore_square_atlas(backup);
        if (backup?.version === 2) return restore_optimized_uvs(backup);
        if (backup?.version !== 1) return atlas_message(translate('this_project_has_no_texture_optimization_backup'));
        if (active_session || Undo.current_save) return atlas_message(translate('finish_the_current_edit_or_recording_before_restoring_textures'));
        if (backup.format !== Format.id || backup.width !== Project.texture_width || backup.height !== Project.texture_height) return atlas_restore_blocked(translate('the_project_format_or_uv_resolution_has_changed_undo_those_chang'));
        const elements = Outliner.elements.filter(element => backup.elements[element.uuid]);
        for (const element of elements) {
            const saved = backup.elements[element.uuid];
            if (element.type !== saved.type || Object.keys(element.faces).length !== Object.keys(saved.faces).length || Object.entries(element.faces).some(([key, face]) => !saved.faces[key] || face.vertices && (face.vertices.length !== saved.faces[key].vertices?.length || face.vertices.some(vertex => !saved.faces[key].vertices.includes(vertex))))) return atlas_restore_blocked(translate('an_optimized_element_has_different_faces_or_vertices_undo_its_to_3'));
        }
        if (backup.textures.some(saved => Texture.all.some(texture => texture.uuid === saved.uuid))) return atlas_restore_blocked(translate('an_original_texture_identifier_is_already_in_use_undo_the_textur'));
        if (backup.textures.some(saved => saved.path && Texture.all.some(texture => texture.path === saved.path))) return atlas_restore_blocked(translate('an_original_texture_path_is_already_in_use_undo_the_texture_repl'));
        if ((Format.single_texture || Format.single_texture_default) && Outliner.elements.some(element => !backup.elements[element.uuid] && element.faces && Object.values(element.faces).some(face => backup.atlases.includes(face.getTexture()?.uuid)))) return atlas_restore_blocked(translate('new_geometry_uses_the_optimized_default_texture_undo_that_additi'));
        const atlases = Texture.all.filter(texture => backup.atlases.includes(texture.uuid));
        const restored = [];
        const aspects = {elements, textures: atlases, bitmap: true, texture_order: true, selected_texture: true, raven_tools_atlas: true};
        Undo.initEdit(aspects);
        try {
            for (const saved of backup.textures) {
                const texture = new Texture({...saved, internal: true, saved: false, keep_size: true}, saved.uuid);
                restored.push(texture);
                texture.load().add(false);
            }
            for (const element of elements) {
                const saved = backup.elements[element.uuid];
                element[backup_key] = structuredClone(saved.plaster_backup || {});
                if (element instanceof Cube) {
                    element.box_uv = saved.box_uv;
                    element.mirror_uv = saved.mirror_uv;
                    element.autouv = saved.autouv;
                    element.uv_offset = saved.uv_offset.slice();
                }
                for (const [key, face] of Object.entries(element.faces)) {
                    face.uv = structuredClone(saved.faces[key].uv);
                    face.texture = saved.faces[key].texture;
                    if (element instanceof Cube) face.rotation = saved.faces[key].rotation;
                }
            }
            const used = new Set(Outliner.elements.flatMap(element => element.faces ? Object.values(element.faces).map(face => face.getTexture()?.uuid) : [element.texture]));
            const kept = atlases.filter(texture => used.has(texture.uuid));
            atlases.filter(texture => !used.has(texture.uuid)).forEach(texture => texture.remove(true));
            const order = [...backup.order, ...Texture.all.filter(texture => !backup.order.includes(texture.uuid)).map(texture => texture.uuid)];
            Texture.all.sort((first, second) => order.indexOf(first.uuid) - order.indexOf(second.uuid));
            Project[atlas_backup_key] = structuredClone(backup.previous_backup || {});
            (Texture.all.find(texture => texture.uuid === backup.selected) || restored[0])?.select();
            aspects.textures = [...restored, ...kept];
            refresh_atlas_view();
            Undo.finishEdit(translate('restore_original_textures_and_uvs'), aspects);
        } catch (error) {
            aspects.textures = [...atlases, ...restored];
            Undo.cancelEdit(true);
            refresh_atlas_view();
            return atlas_message(translate('restoration_was_cancelled') + error_message(error), true);
        }
        Blockbench.showQuickMessage(translate('original_textures_and_uvs_restored'), 4000);
        return {changed: true, elements: elements.length, textures: restored.length};
    }

    function remove_toolkit_toolbar_actions() {
        const toolbar = Toolbars.outliner;
        if (!toolbar) return;
        const ids = new Set(['modeler_toolkit_toggle_layers', 'modeler_toolkit_show_only_layers']);
        let changed = false;
        for (let index = toolbar.children.length - 1; index >= 0; index--) {
            const child = toolbar.children[index];
            if (!ids.has(typeof child === 'string' ? child : child.id)) continue;
            if (typeof child !== 'string') child.toolbars?.remove(toolbar);
            toolbar.children.splice(index, 1);
            changed = true;
        }
        if (changed) toolbar.update(true).save();
    }

    function setup_tool_modules() {
        remove_toolkit_toolbar_actions();
        [Cube, Mesh].forEach(type => uv_properties.push(new Property(type, 'object', backup_key, {default: {}, exposed: false})));
        uv_properties.push(new Property(ModelProject, 'object', atlas_backup_key, {default: {}, exposed: false}));
        Blockbench.on('create_undo_save', capture_atlas_undo);
        Blockbench.on('load_undo_save', load_atlas_undo);
        Blockbench.on('save_project', serialize_square_atlas);
        const definitions = [
            ['modeler_toolkit_optimize_atlas', {name: translate('optimize_texture_and_uvs'), icon: 'texture', condition: () => module_enabled('atlas') && !!Project && Outliner.elements.length > 0, click: () => optimize_texture_atlas()}],
            ['modeler_toolkit_separate_uv', {name: translate('separate_face_uvs'), description: translate('separate_face_uvs_description'), icon: 'grid_view', condition: () => module_enabled('atlas') && !!Project && Outliner.elements.length > 0, click: () => optimize_texture_atlas(true)}],
            ['modeler_toolkit_restore_atlas', {name: translate('restore_original_textures_uvs'), icon: 'restore', condition: () => module_enabled('atlas') && !!Project && [1, 2, 3].includes(Project[atlas_backup_key]?.version), click: restore_texture_atlas}],
            ['modeler_toolkit_restore_uv', {name: translate('restore_original_uvs'), icon: 'settings_backup_restore', condition: () => !!Project && selected_elements().some(backup_matches), click: restore_model_uv}],
            ['modeler_toolkit_inverted', {name: translate('create_inverted_cubes'), icon: 'flip_to_back', condition: () => module_enabled('inverted') && !!Project && selected_elements().some(element => element instanceof Cube), click: create_inverted_cubes}],
            ['modeler_toolkit_outline', {name: translate('create_outlines'), icon: 'crop_square', condition: () => module_enabled('outline') && !!Project && selected_elements().length > 0, click: open_outline}],
            ['modeler_toolkit_settings', {name: translate('modeler_toolkit_settings'), icon: 'settings', click: open_settings}],
            ['modeler_toolkit_toggle_layers', {name: translate('toggle_layers'), icon: 'visibility_off', condition: () => module_enabled('layers') && !!Project && Outliner.elements.length > 0, click: () => toggle_layer_visibility('hide')}]
        ];
        definitions.forEach(([id, options]) => tool_actions.push(new Action(id, {...options, category: 'edit'})));
        const layer_actions = ['modeler_toolkit_toggle_layers'];
        layer_actions.forEach(id => {
            if (Toolbars.outliner && !Toolbars.outliner.children.some(child => (typeof child === 'string' ? child : child.id) === id)) Toolbars.outliner.add(id);
        });
        tools_menu = new BarMenu('modeler_toolkit', [
            'modeler_toolkit_optimize_atlas', 'modeler_toolkit_separate_uv', 'modeler_toolkit_restore_atlas', 'modeler_toolkit_restore_uv', '_',
            'modeler_toolkit_inverted', 'modeler_toolkit_outline', 'modeler_toolkit_toggle_layers',
            '_', 'modeler_toolkit_preview_shadow', 'modeler_toolkit_settings'
        ], {name: translate('modeler_toolkit'), icon: 'handyman'});
        MenuBar.addMenu(tools_menu, 'tools');
        Blockbench.on('select_project', refresh_layer_icons);
        Blockbench.on('close_project', close_layer_project);
        refresh_layer_icons();
    }

    function cleanup_tool_modules() {
        tool_dialogs.forEach(dialog => dialog.hide().delete());
        tool_dialogs.clear();
        layer_states.forEach(restore_layer_visibility);
        layer_states.clear();
        if (Project) Canvas.updateVisibility();
        Blockbench.removeListener('select_project', refresh_layer_icons);
        Blockbench.removeListener('close_project', close_layer_project);
        Blockbench.removeListener('create_undo_save', capture_atlas_undo);
        Blockbench.removeListener('load_undo_save', load_atlas_undo);
        Blockbench.removeListener('save_project', serialize_square_atlas);
        tools_menu?.delete();
        remove_toolkit_toolbar_actions();
        tool_actions.forEach(action => action.delete());
        tool_actions.length = 0;
        uv_properties.forEach(property => property.delete());
        uv_properties.length = 0;
        MenuBar.update();
    }

    function read_values(overrides = {}) {
        const values = {};
        Object.entries(setting_definitions).forEach(([key, definition]) => {
            let value = overrides[key] ?? plugin_settings[key]?.value ?? definition.value;
            if (definition.type === 'number') {
                value = Number.isFinite(value) ? Math.min(definition.max, Math.max(definition.min, value)) : definition.value;
            } else if (definition.type === 'toggle') {
                value = !!value;
            } else if (key === 'watermark_font') {
                value = typeof value === 'string' && value.trim() ? value.trim() : definition.value;
            } else if (definition.type === 'select' && !Object.hasOwnProperty.call(definition.options, value)) {
                value = definition.value;
            } else if (key === 'color' || key.endsWith('_color')) {
                const color = tinycolor(value);
                value = color.isValid() ? color.toHexString() : definition.value;
            } else if (definition.type === 'text') {
                value = String(value).replace(/[\r\n]+/g, ' ').trim().slice(0, 300);
            }
            values[key] = value;
        });
        return values;
    }

    function open_watermark_settings() {
        return open_settings('watermark');
    }

    async function open_settings(section) {
        const generation = lifecycle;
        const pending_fonts = refresh_installed_fonts();
        if (Object.keys(installed_font_options).length < 2) await pending_fonts;
        if (!plugin_loaded || generation !== lifecycle) return;
        if (settings_dialog) settings_dialog.hide().delete();
        const values = read_values();
        const form = section === 'watermark' ? {} : {modules_heading: {type: 'info', text: translate('available_tools')}};
        ordered_settings().forEach(([key, definition]) => {
            if (section === 'watermark' && !key.startsWith('watermark_')) return;
            if (key === 'enabled') {
                form.render_separator = '_';
                form.information = {type: 'info', text: translate('gif_render_the_invisible_wall_or_floor_only_receives_the_shadow')};
            }
            if (key === 'watermark_text') {
                if (section !== 'watermark') form.watermark_separator = '_';
                if (font_error) form.watermark_information = {type: 'info', text: translate('the_installed_font_list_is_unavailable_reopen_settings_after_all')};
            }
            form[key] = {
                label: definition.name,
                description: definition.description,
                type: definition.type === 'toggle' ? 'checkbox' : key === 'color' || key.endsWith('_color') ? 'color' : definition.type,
                value: values[key],
                options: key === 'watermark_font' ? watermark_font_options : definition.options,
                min: definition.min,
                max: definition.max,
                step: definition.step,
                condition: lighting_keys.includes(key) ? values => lighting_field_visible(key, values)
                    : ['light_x', 'light_y'].includes(key) ? values => !values.lighting_enabled
                    : key.startsWith('floor_') && key !== 'floor_enabled' ? values => floor_field_visible(key, values) : undefined
            };
        });
        form.actions = {
            type: 'buttons',
            buttons: [translate('preview'), translate('reset_to_defaults')],
            async click(index) {
                if (index === 0) {
                    const return_dialog = settings_dialog;
                    const options = read_values(return_dialog.getFormResult());
                    return_dialog.hide();
                    const data_url = await render_preview(options);
                    if (data_url && settings_dialog === return_dialog) {
                        const preview_image = await create_preview_image(data_url);
                        preview_dialog = new Dialog({
                            id: 'modeler_toolkit_preview',
                            title: translate('preview_gif_render'),
                            width: preview_image.width + 40,
                            lines: [preview_image],
                            buttons: [translate('back_to_settings')],
                            onButton() {
                                this.delete();
                                preview_dialog = null;
                                queueMicrotask(() => {
                                    if (settings_dialog === return_dialog) return_dialog.show();
                                });
                            }
                        }).show();
                    } else if (settings_dialog === return_dialog) return_dialog.show();
                } else {
                    settings_dialog.setFormValues(Object.fromEntries(Object.entries(setting_definitions).map(([key, definition]) => [key, definition.value])));
                }
            }
        };
        settings_dialog = new Dialog({
            id: 'modeler_toolkit_settings',
            title: section === 'watermark' ? translate('modeler_toolkit_watermark') : translate('modeler_toolkit_settings'),
            width: 600,
            form,
            buttons: [translate('confirm'), translate('cancel')],
            onConfirm(form_data) {
                const next_values = read_values(form_data);
                Object.keys(form_data).filter(key => plugin_settings[key]).forEach(key => plugin_settings[key].set(next_values[key]));
                Settings.save();
                this.hide().delete();
                settings_dialog = null;
            },
            onCancel() {
                this.hide().delete();
                settings_dialog = null;
            }
        }).show();
    }

    function capture_form() {
        const form = Screencam.gif_options_dialog.form;
        if (!form?.buildForm) return null;
        return {
            values: Object.fromEntries(Object.entries(form.getResult()).map(([key, value]) => [key, value?.toHex8String ? value.toHex8String() : value])),
            toggles: Object.fromEntries(Object.entries(form.form_data).filter(([, field]) => field.input_toggle).map(([key, field]) => [key, field.input_toggle.checked]))
        };
    }

    function rebuild_form(state) {
        const form = Screencam.gif_options_dialog.form;
        if (!form?.buildForm) return;
        form.buildForm();
        if (!state) return;
        form.setValues(state.values, false);
        form.setToggles(state.toggles);
    }

    function capture_animations() {
        return Project ? Animator.animations : [];
    }

    function animation_options() {
        return Object.fromEntries(capture_animations().map(animation => [animation.uuid, animation.name || translate('unnamed_animation')]));
    }

    function setup_animation_fields() {
        const form = Screencam.gif_options_dialog.form_config;
        previous_play_field = form.play;
        previous_animation_field = form[animation_field];
        installed_play_field = {...previous_play_field, condition: () => capture_animations().length > 0};
        installed_animation_field = {
            label: translate('animation_to_record'),
            type: 'select',
            options: animation_options,
            condition: values => !!values.play && capture_animations().length > 0,
            description: translate('record_this_animation_from_any_editor_mode')
        };
        const fields = Object.entries(form).filter(([key]) => key !== animation_field);
        Object.keys(form).forEach(key => delete form[key]);
        fields.forEach(([key, field]) => {
            form[key] = key === 'play' ? installed_play_field : field;
            if (key === 'play') form[animation_field] = installed_animation_field;
        });
    }

    function setup_light_fields() {
        const values = read_values();
        const visible = form => !form[plugin_id + '_lighting_enabled'] && (!!form[export_field] || !!form[plugin_id + '_floor_enabled']) && !!plugin_settings.shadow_enabled.value;
        const custom = form => visible(form) && form[light_field] === 'custom';
        const definitions = {
            [light_field]: {label: translate('shadow_light_direction'), type: 'select', value: 'settings', options: Object.fromEntries(Object.entries(light_presets).map(([key, preset]) => [key, preset.name])), condition: visible, description: translate('choose_where_the_light_comes_from_for_this_export_the_shadow_pro')},
            [light_x_field]: {label: translate('light_horizontal'), type: 'number', value: values.light_x, min: -200, max: 200, step: 5, condition: custom, description: translate('negative_light_from_the_left_positive_light_from_the_right')},
            [light_y_field]: {label: translate('light_vertical_depth'), type: 'number', value: values.light_y, min: -200, max: 200, step: 5, condition: custom, description: translate('negative_light_from_below_positive_light_from_above_on_a_floor_t')}
        };
        lighting_keys.forEach(key => {
            const definition = setting_definitions[key];
            definitions[plugin_id + '_' + key] = {
                label: definition.name,
                description: definition.description,
                type: definition.type === 'toggle' ? 'checkbox' : definition.type === 'click' ? 'color' : definition.type,
                value: values[key],
                min: definition.min,
                max: definition.max,
                step: definition.step,
                options: definition.options,
                condition: form => lighting_field_visible(key, {lighting_enabled: form[plugin_id + '_lighting_enabled'], light_tone: form[plugin_id + '_light_tone']})
            };
        });
        Object.entries(definitions).forEach(([key, field]) => {
            previous_light_fields.set(key, Screencam.gif_options_dialog.form_config[key]);
            installed_light_fields.set(key, field);
            Screencam.gif_options_dialog.form_config[key] = field;
        });
    }

    function capture_light_values(options, values) {
        const preset = light_presets[options[light_field]] || light_presets.settings;
        if (preset === light_presets.custom) {
            const x = options[light_x_field];
            const y = options[light_y_field];
            return {light_x: Number.isFinite(x) ? Math.min(200, Math.max(-200, x)) : values.light_x, light_y: Number.isFinite(y) ? Math.min(200, Math.max(-200, y)) : values.light_y};
        }
        return {light_x: preset.x ?? values.light_x, light_y: preset.y ?? values.light_y};
    }

    function floor_field_visible(key, values) {
        if (!values.floor_enabled) return false;
        return !['floor_tile_size', 'floor_seam_color'].includes(key) || values.floor_style === 'tiles';
    }

    function lighting_field_visible(key, values) {
        if (key === 'lighting_enabled') return true;
        return !!values.lighting_enabled && (key !== 'light_color' || values.light_tone === 'custom');
    }

    function capture_render_values(options) {
        const overrides = Object.fromEntries([...floor_keys, ...lighting_keys].map(key => [key, options[plugin_id + '_' + key]]));
        const values = read_values(overrides);
        const render_enabled = options[export_field] ?? values.enabled;
        return {...values, ...capture_light_values(options, values), shadow_enabled: (render_enabled || values.floor_enabled || values.lighting_enabled) && values.shadow_enabled, watermark_enabled: options[watermark_field] ?? false};
    }

    function setup_floor_fields() {
        const values = read_values();
        const definitions = {};
        floor_keys.forEach(key => {
            const definition = setting_definitions[key];
            definitions[plugin_id + '_' + key] = {
                label: definition.name,
                description: definition.description,
                type: definition.type === 'toggle' ? 'checkbox' : definition.type === 'click' ? 'color' : definition.type,
                value: values[key],
                min: definition.min,
                max: definition.max,
                step: definition.step,
                options: definition.options,
                condition: key === 'floor_enabled' ? undefined : form => floor_field_visible(key, {floor_enabled: form[plugin_id + '_floor_enabled'], floor_style: form[plugin_id + '_floor_style']})
            };
        });
        definitions[plugin_id + '_capture_preview'] = {
            type: 'buttons',
            buttons: [translate('preview_gif_render')],
            async click() {
                if (active_session || pending_preview || document.getElementById('gif_recording_frame')) {
                    Blockbench.showQuickMessage(translate('finish_or_cancel_the_current_gif_recording_first'), 3000);
                    return;
                }
                const recording_dialog = Screencam.gif_options_dialog;
                const form_state = capture_form();
                const project = Project;
                const return_to_recording = () => {
                    if (!plugin_loaded || Project !== project) return;
                    recording_dialog.show();
                    if (form_state) {
                        recording_dialog.setFormValues(form_state.values);
                        recording_dialog.form.setToggles(form_state.toggles);
                    }
                };
                const data_url = await render_recording_preview(recording_dialog.getFormResult());
                if (!data_url) {
                    return_to_recording();
                    return;
                }
                if (preview_dialog) preview_dialog.hide().delete();
                const preview_image = await create_preview_image(data_url);
                preview_dialog = new Dialog({
                    id: 'modeler_toolkit_capture_preview',
                    title: translate('preview_gif_render'),
                    width: preview_image.width + 40,
                    lines: [preview_image],
                    buttons: [translate('back_to_recording')],
                    onButton() {
                        this.hide().delete();
                        preview_dialog = null;
                        queueMicrotask(return_to_recording);
                    }
                }).show();
            }
        };
        Object.entries(definitions).forEach(([key, field]) => {
            previous_floor_fields.set(key, Screencam.gif_options_dialog.form_config[key]);
            installed_floor_fields.set(key, field);
            Screencam.gif_options_dialog.form_config[key] = field;
        });
    }

    function update_animation_fields(dialog) {
        const animations = capture_animations();
        const current = Project && (animation_choices.get(Project) || dialog.getFormResult()?.[animation_field]);
        const selected = animations.find(animation => animation.uuid === current) || animations.find(animation => animation === Animation.selected) || animations[0];
        const values = {[animation_field]: selected?.uuid || ''};
        if (!animations.length) values.play = false;
        dialog.setFormValues(values);
    }

    function prepare_capture_animation(session, animation) {
        const items = AnimationItem.all.map(item => ({item, selected: item.selected, playing: item.playing}));
        session.animation_state = {
            project: Project,
            selected: AnimationItem.selected,
            items,
            time: Timeline.time,
            playing: Timeline.playing,
            length: Timeline.vue.animation_length,
            markers: Timeline.vue.markers,
            animators: new Map(capture_animations().map(item => [item, new Set(Object.keys(item.animators))])),
            transforms: [...Group.all, ...Outliner.elements].filter(node => node.mesh).map(node => ({
                mesh: node.mesh,
                position: node.mesh.position.clone(),
                quaternion: node.mesh.quaternion.clone(),
                scale: node.mesh.scale.clone()
            })),
            model_scale: Project.model_3d.scale.clone(),
            texture_frames: Texture.all.map(texture => ({texture, frame: texture.currentFrame})),
            selected_texture: Texture.selected,
            ground_position: Canvas.ground_plane?.position.clone(),
            grid_position: three_grid.position.clone()
        };
        if (Timeline.playing) Timeline.pause();
        items.forEach(({item}) => {
            item.selected = item === animation;
            item.playing = item === animation;
        });
        AnimationItem.selected = animation;
        Timeline.vue.animation_length = animation.length;
        Timeline.vue.markers = animation.markers;
        Animator.MolangParser.resetVariables();
        BarItems.slider_animation_length.update();
    }

    function restore_capture_animation(session) {
        const state = session.animation_state;
        if (!state) return;
        session.animation_state = null;
        state.items.forEach(({item, selected, playing}) => {
            item.selected = selected;
            item.playing = playing;
        });
        if (Project !== state.project) return;
        AnimationItem.selected = state.selected;
        Timeline.vue.animation_length = state.length;
        Timeline.vue.markers = state.markers;
        Timeline.setTime(state.time);
        Animator.MolangParser.resetVariables();
        if (Animator.open) Animator.preview();
        else Animator.showDefaultPose();
        state.transforms.forEach(({mesh, position, quaternion, scale}) => {
            mesh.position.copy(position);
            mesh.quaternion.copy(quaternion);
            mesh.scale.copy(scale);
        });
        Project.model_3d.scale.copy(state.model_scale);
        const textures = state.texture_frames.filter(({texture, frame}) => texture.currentFrame !== frame);
        textures.forEach(({texture, frame}) => texture.currentFrame = frame);
        if (textures.length) TextureAnimator.update(textures.map(({texture}) => texture));
        if (state.selected_texture && Texture.all.includes(state.selected_texture) && Texture.selected !== state.selected_texture) state.selected_texture.select();
        if (state.ground_position) Canvas.ground_plane.position.copy(state.ground_position);
        three_grid.position.copy(state.grid_position);
        state.animators.forEach((keys, animation) => {
            Object.keys(animation.animators).forEach(key => {
                const animator = animation.animators[key];
                if (!keys.has(key) && Object.keys(animator.channels || {}).every(channel => !animator[channel]?.length)) delete animation.animators[key];
            });
        });
        Canvas.scene.updateMatrixWorld();
        BarItems.slider_animation_length.update();
        if (state.playing && Animation.selected) Timeline.start();
    }

    function is_visible(mesh) {
        for (let node = mesh; node; node = node.parent) {
            if (!node.visible) return false;
        }
        return true;
    }

    function get_render_elements(project) {
        return project.elements.filter(element => (element instanceof Cube || element instanceof Mesh) && element.mesh?.geometry?.attributes?.position && is_visible(element.mesh));
    }

    function get_bounds(elements) {
        const bounds = new THREE.Box3();
        elements.forEach(element => {
            const mesh = element.mesh;
            mesh.updateWorldMatrix(true, false);
            const mesh_bounds = new THREE.Box3().setFromBufferAttribute(mesh.geometry.attributes.position).applyMatrix4(mesh.matrixWorld);
            bounds.union(mesh_bounds);
        });
        return bounds;
    }

    function create_watermark_canvas(width, height, options) {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const context = canvas.getContext('2d');
        const shorter_side = Math.min(canvas.width, canvas.height);
        const margin = shorter_side * options.watermark_margin / 100;
        let font_size = shorter_side * options.watermark_size / 100;
        context.save();
        try {
            context.textBaseline = 'alphabetic';
            context.textAlign = 'left';
            function measure_text() {
                context.font = watermark_font_css(options, font_size);
                const metric = context.measureText(options.watermark_text);
                const ink_left = Math.min(0, -metric.actualBoundingBoxLeft || 0);
                const width = Math.max(metric.width, metric.actualBoundingBoxRight || 0) - ink_left;
                const ascent = Math.max(font_size * 0.8, metric.actualBoundingBoxAscent || 0);
                const descent = Math.max(font_size * 0.2, metric.actualBoundingBoxDescent || 0);
                return {ink_left, width, ascent, height: ascent + descent};
            }
            let layout = measure_text();
            const scale = Math.min(1, (canvas.width - margin * 2) / Math.max(layout.width, 1), (canvas.height - margin * 2) / Math.max(layout.height, 1));
            if (scale < 1) {
                font_size *= scale;
                layout = measure_text();
            }
            const position = options.watermark_position;
            const left = position.endsWith('_left') ? margin
                : position.endsWith('_right') ? canvas.width - margin - layout.width
                : (canvas.width - layout.width) / 2;
            const top = position.startsWith('top_') ? margin
                : position.startsWith('bottom_') ? canvas.height - margin - layout.height
                : (canvas.height - layout.height) / 2;
            context.globalCompositeOperation = 'source_over';
            context.fillStyle = options.watermark_color;
            context.fillText(options.watermark_text, left - layout.ink_left, top + layout.ascent);
        } finally {
            context.restore();
        }
        return canvas;
    }

    function draw_watermark(canvas, options, session) {
        if (!options.watermark_enabled || !options.watermark_text || !canvas.width || !canvas.height) return;
        if (!session.watermark_canvas || session.watermark_canvas.width !== canvas.width || session.watermark_canvas.height !== canvas.height) {
            session.watermark_canvas = create_watermark_canvas(canvas.width, canvas.height, options);
        }
        const context = canvas.getContext('2d');
        context.save();
        try {
            context.globalAlpha = 1;
            context.globalCompositeOperation = 'source_over';
            context.drawImage(session.watermark_canvas, 0, 0);
        } finally {
            context.restore();
        }
    }

    function create_floor(session) {
        const options = session.options;
        const width = options.floor_width * 16;
        const depth = options.floor_depth * 16;
        session.floor = new THREE.Group();
        session.floor.name = 'modeler_toolkit_floor';
        const material = new THREE.MeshBasicMaterial({color: options.floor_color, toneMapped: false});
        if (options.floor_style === 'tiles') {
            const canvas = document.createElement('canvas');
            canvas.width = canvas.height = 128;
            const context = canvas.getContext('2d');
            context.fillStyle = options.floor_color;
            context.fillRect(0, 0, 128, 128);
            context.fillStyle = options.floor_seam_color;
            context.fillRect(0, 0, 128, 2);
            context.fillRect(0, 0, 2, 128);
            session.floor_texture = new THREE.CanvasTexture(canvas);
            session.floor_texture.wrapS = session.floor_texture.wrapT = THREE.RepeatWrapping;
            session.floor_texture.repeat.set(options.floor_width / options.floor_tile_size, options.floor_depth / options.floor_tile_size);
            session.floor_texture.magFilter = THREE.NearestFilter;
            material.map = session.floor_texture;
            material.color.set(0xffffff);
        }
        const top = new THREE.Mesh(new THREE.PlaneGeometry(width, depth), material);
        top.rotation.x = -Math.PI / 2;
        session.floor.add(top);
        if (options.floor_thickness > 0) {
            const side_material = new THREE.MeshBasicMaterial({color: new THREE.Color(options.floor_color).multiplyScalar(0.72), toneMapped: false});
            const edge_geometry = new THREE.BoxGeometry(width, options.floor_thickness, depth);
            edge_geometry.setIndex(Array.from(edge_geometry.index.array).filter((value, index) => index < 12 || index >= 18));
            edge_geometry.clearGroups();
            const edge = new THREE.Mesh(edge_geometry, side_material);
            edge.position.y = -options.floor_thickness / 2;
            session.floor.add(edge);
        }
    }

    function position_floor(session, camera, bounds) {
        if (!session.anchor) session.anchor = bounds.clone();
        const options = session.options;
        const center = session.anchor.getCenter(new THREE.Vector3());
        session.floor.position.set(center.x + options.floor_offset_x, session.anchor.min.y + options.floor_height - 0.01, center.z + options.floor_offset_z);
        if (!session.floor_right) {
            session.floor_right = new THREE.Vector3(1, 0, 0).applyQuaternion(camera.quaternion);
            session.floor_right.y = 0;
            if (session.floor_right.lengthSq() < 0.0001) session.floor_right.set(1, 0, 0);
            session.floor_right.normalize();
        }
    }

    function create_session(options, project = Project) {
        const session = {options, project, depth_materials: new Map(), lighting_materials: new Map(), frame: null, observer: null, disposed: false, anchor: null};
        if (options.lighting_enabled) {
            session.lighting_uniforms = {
                modeler_light_direction: {value: new THREE.Vector3()},
                modeler_light_color: {value: new THREE.Color(light_colors[options.light_tone] || options.light_color)},
                modeler_light_intensity: {value: options.light_intensity / 100},
                modeler_ambient_intensity: {value: options.ambient_intensity / 100}
            };
        }
        if (options.floor_enabled) create_floor(session);
        if (options.shadow_enabled) {
            session.receiver = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.ShadowMaterial({color: options.color, opacity: options.opacity / 100, depthWrite: false, side: THREE.DoubleSide}));
            session.receiver.name = 'modeler_toolkit_receiver';
            session.receiver.receiveShadow = true;
            session.receiver.material.toneMapped = false;
            if (options.lighting_enabled) session.receiver.material.opacity *= options.light_intensity / Math.max(options.light_intensity + options.ambient_intensity, 0.001);
            session.light = new THREE.DirectionalLight(0xffffff, 0);
            session.light.name = 'modeler_toolkit_light';
            session.light.castShadow = true;
            session.light.shadow.mapSize.set(Number(options.resolution), Number(options.resolution));
            session.light.shadow.radius = options.softness;
            session.light.shadow.bias = -0.0001;
        }
        return session;
    }

    function position_lighting(session, camera) {
        if (!session.lighting_direction) {
            const front = camera.getWorldDirection(new THREE.Vector3()).negate();
            front.y = 0;
            if (front.lengthSq() < 0.0001) front.set(0, 0, 1);
            front.normalize();
            const right = new THREE.Vector3().crossVectors(new THREE.Vector3(0, 1, 0), front);
            const azimuth = THREE.MathUtils.degToRad(session.options.light_azimuth);
            const elevation = THREE.MathUtils.degToRad(session.options.light_elevation);
            session.lighting_direction = front.multiplyScalar(Math.cos(azimuth) * Math.cos(elevation)).addScaledVector(right, Math.sin(azimuth) * Math.cos(elevation));
            session.lighting_direction.y = Math.sin(elevation);
            session.lighting_direction.normalize();
        }
        camera.updateMatrixWorld(true);
        session.lighting_uniforms.modeler_light_direction.value.copy(session.lighting_direction).transformDirection(camera.matrixWorldInverse);
    }

    function get_lighting_material(session, source) {
        if (source.uniforms?.EMISSIVE?.value || source.isRawShaderMaterial) return source;
        let entry = session.lighting_materials.get(source);
        if (entry && entry.version !== source.version) {
            entry.material.dispose();
            session.lighting_materials.delete(source);
            entry = null;
        }
        if (!entry) {
            const material = source.clone();
            if (source.uniforms) material.uniforms = Object.fromEntries(Object.entries(source.uniforms).map(([key, uniform]) => [key, {...uniform}]));
            material.onBeforeCompile = function(shader, renderer) {
                source.onBeforeCompile.call(this, shader, renderer);
                Object.assign(shader.uniforms, session.lighting_uniforms);
                shader.vertexShader = 'varying vec3 modeler_light_normal;\n' + shader.vertexShader.replace(/void\s+main\s*\([^)]*\)\s*\{/, match => match + '\nmodeler_light_normal = normalMatrix * normal;\n');
                const declarations = 'varying vec3 modeler_light_normal;\nuniform vec3 modeler_light_direction;\nuniform vec3 modeler_light_color;\nuniform float modeler_light_intensity;\nuniform float modeler_ambient_intensity;\n';
                const lighting = '\nvec3 modeler_normal = normalize(modeler_light_normal);\nif (!gl_FrontFacing) modeler_normal = -modeler_normal;\nfloat modeler_diffuse = max(dot(modeler_normal, modeler_light_direction), 0.0);\ngl_FragColor.rgb *= vec3(modeler_ambient_intensity) + modeler_light_color * modeler_light_intensity * modeler_diffuse;\n';
                const end = shader.fragmentShader.lastIndexOf('}');
                shader.fragmentShader = declarations + shader.fragmentShader.slice(0, end) + lighting + shader.fragmentShader.slice(end);
            };
            material.customProgramCacheKey = () => 'modeler_toolkit_lighting_1_' + source.customProgramCacheKey();
            entry = {material, version: source.version};
            session.lighting_materials.set(source, entry);
        }
        const material = entry.material;
        if (source.uniforms) {
            Object.entries(source.uniforms).forEach(([key, uniform]) => {
                material.uniforms[key] = {...uniform};
            });
            if (material.uniforms.SHADE) material.uniforms.SHADE.value = false;
            if (material.uniforms.LIGHTCOLOR) material.uniforms.LIGHTCOLOR.value = new THREE.Color(0xffffff);
        }
        material.opacity = source.opacity;
        material.visible = source.visible;
        material.clippingPlanes = source.clippingPlanes;
        material.clipIntersection = source.clipIntersection;
        material.clipShadows = source.clipShadows;
        if (source.map) material.map = source.map;
        if (source.color) material.color.copy(source.color);
        return material;
    }

    function position_shadow(session, camera, bounds) {
        if (!session.anchor) session.anchor = bounds.clone();
        const center = session.anchor.getCenter(new THREE.Vector3());
        const radius = Math.max(session.anchor.getSize(new THREE.Vector3()).length() / 2, 0.5);
        const normal = session.floor || session.options.surface === 'floor' ? new THREE.Vector3(0, 1, 0) : camera.getWorldDirection(new THREE.Vector3()).negate();
        const right = session.floor_right?.clone() || new THREE.Vector3(1, 0, 0).applyQuaternion(camera.quaternion);
        right.addScaledVector(normal, -right.dot(normal));
        if (right.lengthSq() < 0.0001) right.set(1, 0, 0);
        right.normalize();
        const up = new THREE.Vector3().crossVectors(normal, right).normalize();
        let back = Infinity;
        for (const x of [session.anchor.min.x, session.anchor.max.x]) {
            for (const y of [session.anchor.min.y, session.anchor.max.y]) {
                for (const z of [session.anchor.min.z, session.anchor.max.z]) {
                    back = Math.min(back, new THREE.Vector3(x, y, z).sub(center).dot(normal));
                }
            }
        }
        session.receiver.position.copy(center).addScaledVector(normal, back - radius * session.options.gap / 100 - radius * 0.002);
        session.receiver.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), normal);
        const extent = Math.max(radius * 4, bounds.getSize(new THREE.Vector3()).length() * 2, bounds.getCenter(new THREE.Vector3()).distanceTo(center) * 2);
        session.receiver.scale.set(extent * 4, extent * 4, 1);
        if (session.floor) {
            session.receiver.position.copy(session.floor.position).addScaledVector(normal, 0.002);
            session.receiver.rotation.set(-Math.PI / 2, 0, 0);
            session.receiver.scale.set(session.options.floor_width * 16, session.options.floor_depth * 16, 1);
        }
        const direction = session.lighting_direction?.clone() || normal.clone().addScaledVector(right, session.options.light_x / 100).addScaledVector(up, session.options.light_y / 100).normalize();
        const shadow_camera = session.light.shadow.camera;
        const camera_up = Math.abs(direction.y) > 0.99 ? new THREE.Vector3(0, 0, 1) : new THREE.Vector3(0, 1, 0);
        const light_right = new THREE.Vector3().crossVectors(camera_up, direction).normalize();
        const light_up = new THREE.Vector3().crossVectors(direction, light_right).normalize();
        const light_bounds = new THREE.Box3();
        for (const x of [bounds.min.x, bounds.max.x]) {
            for (const y of [bounds.min.y, bounds.max.y]) {
                for (const z of [bounds.min.z, bounds.max.z]) {
                    const point = new THREE.Vector3(x, y, z).sub(center);
                    light_bounds.expandByPoint(new THREE.Vector3(point.dot(light_right), point.dot(light_up), point.dot(direction)));
                }
            }
        }
        const padding = radius * 0.15;
        if (!session.shadow_bounds) session.shadow_bounds = light_bounds.clone().expandByScalar(padding);
        else if (!session.shadow_bounds.containsBox(light_bounds)) session.shadow_bounds.union(light_bounds.clone().expandByScalar(padding));
        const coverage = session.shadow_bounds;
        const width = coverage.max.x - coverage.min.x;
        const height = coverage.max.y - coverage.min.y;
        const texel_x = width / session.light.shadow.mapSize.x;
        const texel_y = height / session.light.shadow.mapSize.y;
        const center_x = Math.round((coverage.min.x + coverage.max.x) / 2 / texel_x) * texel_x;
        const center_y = Math.round((coverage.min.y + coverage.max.y) / 2 / texel_y) * texel_y;
        const distance = Math.max(radius * 4, coverage.max.z + radius * 4);
        let receiver_depth = radius * (2 + session.options.gap / 100) / Math.max(direction.dot(normal), 0.1) + radius;
        if (session.floor) {
            let nearest_receiver = Infinity;
            for (const x of [-0.5, 0.5]) {
                for (const y of [-0.5, 0.5]) {
                    const point = new THREE.Vector3(x * session.receiver.scale.x, y * session.receiver.scale.y, 0).applyQuaternion(session.receiver.quaternion).add(session.receiver.position).sub(center);
                    nearest_receiver = Math.min(nearest_receiver, point.dot(direction));
                }
            }
            receiver_depth = Math.max(receiver_depth, coverage.min.z - nearest_receiver + padding);
        }
        session.light.position.copy(center).addScaledVector(direction, distance);
        session.light.target.position.copy(center);
        shadow_camera.up.copy(camera_up);
        Object.assign(shadow_camera, {left: center_x - width / 2, right: center_x + width / 2, top: center_y + height / 2, bottom: center_y - height / 2, near: Math.max(0.01, distance - coverage.max.z - padding), far: distance - coverage.min.z + receiver_depth});
        shadow_camera.updateProjectionMatrix();
        session.light.shadow.normalBias = radius * 0.0001;
    }

    function get_depth_material(session, source) {
        let material = session.depth_materials.get(source);
        const map = source.map || source.uniforms?.map?.value || null;
        if (!material) {
            material = new THREE.MeshDepthMaterial({depthPacking: THREE.RGBADepthPacking, map, alphaTest: Math.max(source.alphaTest || 0, 0.01), side: THREE.DoubleSide});
            session.depth_materials.set(source, material);
        }
        if (material.map !== map) {
            material.map = map;
            material.needsUpdate = true;
        }
        material.opacity = source.opacity ?? 1;
        material.visible = source.visible;
        material.clippingPlanes = source.clippingPlanes;
        material.clipIntersection = source.clipIntersection;
        material.clipShadows = source.clipShadows;
        return material;
    }

    function render_frame(session, renderer, render_scene, camera, render) {
        if (session.disposed || Project !== session.project) return render();
        const elements = get_render_elements(session.project);
        const bounds = get_bounds(elements);
        if (bounds.isEmpty()) return render();
        const cast_snapshots = new Map();
        const shadow_state = {enabled: renderer.shadowMap.enabled, type: renderer.shadowMap.type, autoUpdate: renderer.shadowMap.autoUpdate, needsUpdate: renderer.shadowMap.needsUpdate};
        const original_buffer_render = renderer.renderBufferDirect;
        const casters = new Set(elements.map(element => element.mesh));
        const lit_meshes = new Set(casters);
        let buffer_wrapper;
        try {
            if (session.lighting_uniforms) position_lighting(session, camera);
            if (session.floor) {
                position_floor(session, camera, bounds);
                render_scene.add(session.floor);
                session.floor.traverse(node => {if (node.isMesh) lit_meshes.add(node);});
            }
            if (session.light) {
                position_shadow(session, camera, bounds);
                render_scene.traverse(node => {
                    if (node.isMesh || node.isLight) {
                        cast_snapshots.set(node, node.castShadow);
                        node.castShadow = casters.has(node);
                    }
                });
                Object.assign(renderer.shadowMap, {enabled: true, type: THREE.PCFShadowMap, autoUpdate: true, needsUpdate: true});
                render_scene.add(session.receiver, session.light, session.light.target);
            }
            if (session.light || session.lighting_uniforms) {
                buffer_wrapper = function(render_camera, scene_argument, geometry, material, object, group) {
                    if (render_camera === session.light?.shadow.camera && casters.has(object)) {
                        const source = Array.isArray(object.material) ? object.material[group?.materialIndex || 0] : object.material;
                        if (source) material = get_depth_material(session, source);
                    } else if (render_camera === camera && session.lighting_uniforms && lit_meshes.has(object)) {
                        material = get_lighting_material(session, material);
                    }
                    return original_buffer_render.call(this, render_camera, scene_argument, geometry, material, object, group);
                };
                renderer.renderBufferDirect = buffer_wrapper;
            }
            return render();
        } finally {
            if (session.floor) render_scene.remove(session.floor);
            if (session.light) {
                render_scene.remove(session.receiver, session.light, session.light.target);
            }
            if (renderer.renderBufferDirect === buffer_wrapper) renderer.renderBufferDirect = original_buffer_render;
            cast_snapshots.forEach((value, node) => node.castShadow = value);
            Object.assign(renderer.shadowMap, shadow_state);
        }
    }

    function dispose_session(session) {
        if (!session || session.disposed) return;
        session.disposed = true;
        session.observer?.disconnect();
        if (session.live_request) cancelAnimationFrame(session.live_request);
        session.live_canvas?.remove();
        if (session.live_buffer) session.live_buffer.width = session.live_buffer.height = 0;
        session.live_background = null;
        if (session.watermark_canvas) {
            session.watermark_canvas.width = 0;
            session.watermark_canvas = null;
        }
        if (session.gif_format && session.gif_format.frameRendered === session.frame_wrapper) {
            if (session.had_frame_handler) session.gif_format.frameRendered = session.previous_frame_handler;
            else delete session.gif_format.frameRendered;
        }
        if (session.gif_format && session.gif_format.process === session.process_wrapper) session.gif_format.process = session.previous_process;
        if (session.renderer && session.renderer.render === session.render_wrapper) session.renderer.render = session.original_render;
        if (session.floor) {
            session.floor.removeFromParent();
            session.floor.traverse(node => {
                node.geometry?.dispose();
                node.material?.dispose();
            });
            session.floor_texture?.dispose();
        }
        if (session.light) {
            session.receiver.removeFromParent();
            session.light.removeFromParent();
            session.light.target.removeFromParent();
            session.receiver.geometry.dispose();
            session.receiver.material.dispose();
            session.light.shadow.map?.dispose();
            session.light.shadow.mapPass?.dispose();
        }
        session.depth_materials.forEach(material => material.dispose());
        session.depth_materials.clear();
        session.lighting_materials.forEach(entry => entry.material.dispose());
        session.lighting_materials.clear();
        if (active_session === session) active_session = null;
        restore_capture_animation(session);
        if (session.preview_request) {
            session.preview_request.restore();
            if (!session.preview_request.processing) session.preview_request.finish(null);
        }
    }

    function abort_recording() {
        const session = active_session;
        if (!session) return;
        try {
            if (session.frame?.isConnected) session.frame.querySelector('#gif_recording_controls')?.lastElementChild?.click();
        } finally {
            dispose_session(session);
        }
    }

    function capture_error(session, error) {
        queueMicrotask(() => {
            if (active_session === session) abort_recording();
            Blockbench.showQuickMessage(translate('modeler_toolkit_capture_stopped') + error_message(error), 5000);
        });
    }

    function attach_recording(session, options) {
        session.frame = document.getElementById('gif_recording_frame');
        if (!session.frame) {
            dispose_session(session);
            return;
        }
        session.view = Preview.selected;
        session.capture_options = options;
        session.floor_right = null;
        session.anchor = null;
        session.live_canvas = document.createElement('canvas');
        session.live_canvas.className = 'checkerboard';
        session.live_canvas.dataset.modeler_toolkit_capture = 'true';
        Object.assign(session.live_canvas.style, {position: 'absolute', inset: '0', width: '100%', height: '100%', pointerEvents: 'none'});
        session.frame.prepend(session.live_canvas);
        session.start_capture = () => {
            session.anchor = null;
            session.floor_right = null;
            session.shadow_bounds = null;
            session.lighting_direction = null;
        };
        session.gif_format = ScreencamGIFFormats[options.format || 'gif'];
        session.had_frame_handler = Object.hasOwnProperty.call(session.gif_format, 'frameRendered');
        session.previous_frame_handler = session.gif_format.frameRendered;
        session.frame_wrapper = function(vars, canvas) {
            if (vars.frame !== session.frame) {
                if (session.previous_frame_handler) return session.previous_frame_handler.apply(this, arguments);
                vars.frame_canvases.push(canvas);
                return;
            }
            try {
                if (!session.disposed && Project === session.project) {
                    draw_watermark(canvas, session.options, session);
                    update_live_canvas(session, canvas);
                }
                if (session.previous_frame_handler) return session.previous_frame_handler.apply(this, arguments);
                vars.frame_canvases.push(canvas);
            } catch (error) {
                capture_error(session, error);
                throw error;
            }
        };
        session.gif_format.frameRendered = session.frame_wrapper;
        if (session.preview_request) {
            session.previous_process = session.gif_format.process;
            session.process_wrapper = async function(vars, capture_options) {
                if (vars.frame !== session.frame) return session.previous_process.apply(this, arguments);
                session.preview_request.processing = true;
                try {
                    session.preview_request.finish(vars.frame_canvases[0]?.toDataURL('image/png') || null);
                } catch (error) {
                    session.preview_request.finish(null);
                    Blockbench.showQuickMessage(translate('modeler_toolkit_capture_stopped') + error_message(error), 5000);
                }
            };
            session.gif_format.process = session.process_wrapper;
        }
        session.renderer = Screencam.NoAAPreview.renderer;
        session.original_render = session.renderer.render;
        session.render_wrapper = function(render_scene, camera) {
            if (render_scene !== Canvas.scene || !session.rendering_live && !session.frame.classList.contains('recording')) return session.original_render.apply(this, arguments);
            try {
                return render_frame(session, this, render_scene, camera, () => session.original_render.call(this, render_scene, camera));
            } catch (error) {
                capture_error(session, error);
                throw error;
            }
        };
        session.renderer.render = session.render_wrapper;
        session.observer = new MutationObserver(() => {
            if (!session.frame.isConnected) dispose_session(session);
            else if (session.frame.classList.contains('recording') && !session.recording_started) {
                session.recording_started = true;
                session.start_capture();
            }
        });
        session.observer.observe(session.frame.parentNode, {childList: true});
        session.observer.observe(session.frame, {attributes: true, attributeFilter: ['class']});
        try {
            update_live_canvas(session, render_capture_frame(session));
        } catch (error) {
            capture_error(session, error);
        }
        const update = time => {
            if (session.disposed || !session.frame.isConnected) return;
            if (!session.frame.classList.contains('recording') && (!session.last_live_time || time - session.last_live_time >= 100)) {
                session.last_live_time = time;
                try {
                    update_live_canvas(session, render_capture_frame(session));
                } catch (error) {
                    capture_error(session, error);
                    return;
                }
            }
            session.live_request = requestAnimationFrame(update);
        };
        session.live_request = requestAnimationFrame(update);
    }

    function update_live_canvas(session, canvas) {
        const target = session.live_canvas;
        if (!target || session.disposed) return;
        if (target.width !== canvas.width || target.height !== canvas.height) {
            target.width = canvas.width;
            target.height = canvas.height;
        }
        const context = target.getContext('2d');
        context.clearRect(0, 0, target.width, target.height);
        context.drawImage(canvas, 0, 0);
    }

    function render_capture_frame(session) {
        session.start_capture();
        const options = session.capture_options;
        const view = session.view;
        const preview = Screencam.NoAAPreview;
        const crop = Screencam.gif_crop;
        const ratio = window.devicePixelRatio;
        const width = Math.round(Math.min(4000, Math.max(24, (view.width - crop.left - crop.right) * ratio)));
        const height = Math.round(Math.min(4000, Math.max(24, (view.height - crop.top - crop.bottom) * ratio)));
        const custom = options.resolution && (options.resolution[0] > view.width || options.resolution[1] > view.height) && Math.abs(width - options.resolution[0]) < 1 && Math.abs(height - options.resolution[1]) < 1;
        const pixelate = options.pixelate || 1;
        preview.resize(custom ? width / pixelate : view.width * ratio / pixelate, custom ? height / pixelate : view.height * ratio / pixelate);
        preview.setProjectionMode(view.isOrtho);
        preview.controls.unlinked = view.controls.unlinked;
        preview.controls.target.copy(view.controls.target);
        preview.camera.position.copy(view.camera.position);
        preview.camera.quaternion.copy(view.camera.quaternion);
        if (view.isOrtho) {
            for (const key of ['zoom', 'top', 'bottom', 'right', 'left']) preview.camera[key] = view.camera[key];
            preview.camera.updateProjectionMatrix();
        } else if (options.zoom) {
            preview.camera.setFocalLength(options.zoom);
        } else {
            preview.setFOV(view.camPers.fov);
        }
        const canvas = session.live_buffer || (session.live_buffer = document.createElement('canvas'));
        if (canvas.width !== width || canvas.height !== height) {
            canvas.width = width;
            canvas.height = height;
        }
        const context = canvas.getContext('2d');
        let render_error;
        const render = () => {
            session.rendering_live = true;
            try {
                preview.render();
                context.clearRect(0, 0, width, height);
                context.imageSmoothingEnabled = false;
                if (options.background) {
                    context.fillStyle = options.background;
                    context.fillRect(0, 0, width, height);
                }
                if (session.live_background) context.drawImage(session.live_background, 0, 0, width, height);
                context.drawImage(preview.canvas, custom ? 0 : Math.round(-crop.left * ratio), custom ? 0 : Math.round(-crop.top * ratio), Math.round(preview.width * pixelate), Math.round(preview.height * pixelate));
                draw_watermark(canvas, session.options, session);
            } catch (error) {
                render_error = error;
            } finally {
                session.rendering_live = false;
                preview.controls.unlinked = false;
            }
        };
        if (options.show_gizmos) render();
        else Canvas.withoutGizmos(render);
        if (render_error) throw render_error;
        return canvas;
    }

    async function load_capture_background(source) {
        if (!source || typeof source !== 'string') return null;
        const image = new Image();
        image.src = /^(data:|blob:|file:|https?:)/i.test(source) || !isApp ? source : require('url').pathToFileURL(source).href;
        try {
            await image.decode();
            return image;
        } catch (error) {
            return null;
        }
    }

    async function create_preview_image(data_url) {
        const image = document.createElement('img');
        image.src = data_url;
        await image.decode();
        const scale = Math.min(1, 640 / image.naturalWidth, (window.innerWidth - 100) / image.naturalWidth, (window.innerHeight - 180) / image.naturalHeight);
        image.width = Math.max(1, Math.round(image.naturalWidth * scale));
        image.height = Math.max(1, Math.round(image.naturalHeight * scale));
        image.className = 'checkerboard';
        return image;
    }

    async function render_recording_preview(form_data, render_values) {
        if (!Project || active_session || pending_preview || document.getElementById('gif_recording_frame')) {
            Blockbench.showQuickMessage(translate('open_a_model_and_finish_the_current_recording_before_previewing'), 3000);
            return null;
        }
        const view = Preview.selected;
        const project = Project;
        const generation = lifecycle;
        const crop = {...Screencam.gif_crop};
        const perspective = view.camPers.clone();
        const orthogonal = view.camOrtho.clone();
        const target = view.controls.target.clone();
        const orthographic = view.isOrtho;
        const controls = Object.fromEntries(['autoRotate', 'autoRotateSpeed', 'autoRotateProgress'].map(key => [key, view.controls[key]]));
        let resolve_preview;
        const completion = new Promise(resolve => resolve_preview = resolve);
        const request = {
            render_values,
            processing: false,
            restored: false,
            finished: false,
            restore() {
                if (this.restored) return;
                this.restored = true;
                Object.assign(Screencam.gif_crop, crop);
                if (Project !== project) return;
                view.setProjectionMode(orthographic);
                view.camPers.copy(perspective);
                view.camOrtho.copy(orthogonal);
                view.controls.target.copy(target);
                Object.assign(view.controls, controls);
                view.controls.update();
            },
            finish(data_url) {
                if (this.finished) return;
                this.finished = true;
                this.restore();
                if (pending_preview === this) pending_preview = null;
                resolve_preview(plugin_loaded && generation === lifecycle && Project === project ? data_url : null);
            }
        };
        pending_preview = request;
        const color = form_data.color && tinycolor(form_data.color);
        const options = {...form_data, format: 'gif', length_mode: 'frames', length: 1, turnspeed: 0, silent: true, background: color && color.getAlpha() > 0 ? color.toHexString() : undefined};
        Screencam.gif_options_dialog.hide();
        try {
            await wrapped_create_gif(options, data_url => request.finish(data_url), request);
            if (active_session?.preview_request === request && active_session.frame?.isConnected) {
                active_session.frame.querySelector('.gif_record_button')?.click();
            } else request.finish(null);
        } catch (error) {
            request.finish(null);
            Blockbench.showQuickMessage(translate('modeler_toolkit_capture_stopped') + error_message(error), 5000);
        }
        return completion;
    }

    async function render_preview(options = read_values()) {
        if (!Screencam.gif_options_dialog.form) Screencam.gif_options_dialog.build();
        return render_recording_preview(Screencam.gif_options_dialog.getFormResult(), {...options, watermark_enabled: options.watermark_enabled ?? true});
    }

    BBPlugin.register(plugin_id, {
        title: translate('modeler_toolkit'),
        author: 'Raven Studio',
        description: translate('rebuild_textures_and_uvs_create_outlines_and_record_animations_w'),
        about: translate('uv_tools_outlines_layer_controls_dynamic_shadows'),
        icon: 'handyman',
        variant: 'both',
        version: '3.5.3',
        min_version: '5.2.0',
        repository: 'https://github.com/RushLd/ModelerToolkit',
        bug_tracker: 'https://github.com/RushLd/ModelerToolkit/issues',
        onload() {
            plugin_loaded = true;
            lifecycle++;
            font_scan = null;
            font_refresh_time = 0;
            migrate_settings();
            try {
                const families = JSON.parse(localStorage.getItem('modeler_toolkit_font_families') || '[]');
                if (Array.isArray(families)) families.filter(family => typeof family === 'string' && family.trim()).forEach(family => installed_font_options[family] = family);
            } catch (error) {
                localStorage.removeItem('modeler_toolkit_font_families');
            }
            const form_state = capture_form();
            ordered_settings().forEach(([key, definition]) => {
                plugin_settings[key] = new Setting(plugin_id + '_' + key, {...definition, plugin: plugin_id, category: 'export', onChange: refresh_tools});
            });
            previous_field = Screencam.gif_options_dialog.form_config[export_field];
            Screencam.gif_options_dialog.form_config[export_field] = {
                label: translate('dynamic_shadow_clean_render'),
                type: 'checkbox',
                value: read_values().enabled,
                description: translate('use_modeler_toolkit_render_settings_for_this_export')
            };
            previous_watermark_field = Screencam.gif_options_dialog.form_config[watermark_field];
            previous_watermark_settings_field = Screencam.gif_options_dialog.form_config[watermark_settings_field];
            installed_watermark_field = {
                label: translate('watermark'),
                type: 'checkbox',
                value: false,
                description: translate('add_your_configured_text_to_every_frame_independently_of_dynamic')
            };
            installed_watermark_settings_field = {
                type: 'buttons',
                buttons: [translate('watermark_settings')],
                click: open_watermark_settings
            };
            Screencam.gif_options_dialog.form_config[watermark_field] = installed_watermark_field;
            Screencam.gif_options_dialog.form_config[watermark_settings_field] = installed_watermark_settings_field;
            setup_floor_fields();
            setup_light_fields();
            setup_animation_fields();
            previous_open = Screencam.gif_options_dialog.onOpen;
            wrapped_open = function(...args) {
                const result = previous_open?.apply(this, args);
                const values = read_values();
                this.setFormValues({[export_field]: values.enabled, ...Object.fromEntries(lighting_keys.map(key => [plugin_id + '_' + key, values[key]]))});
                update_animation_fields(this);
                return result;
            };
            Screencam.gif_options_dialog.onOpen = wrapped_open;
            previous_confirm = Screencam.gif_options_dialog.onConfirm;
            wrapped_confirm = function(form_data) {
                if (Project && form_data[animation_field]) animation_choices.set(Project, form_data[animation_field]);
                return previous_confirm.call(this, form_data[export_field] || form_data[plugin_id + '_floor_enabled'] || form_data[plugin_id + '_lighting_enabled'] ? {...form_data, shadow_enabled: false} : form_data);
            };
            Screencam.gif_options_dialog.onConfirm = wrapped_confirm;
            previous_create_gif = Screencam.createGif;
            wrapped_create_gif = async function(options = {}, callback, preview_request) {
                if (pending_preview && pending_preview !== preview_request) {
                    Blockbench.showQuickMessage(translate('finish_or_cancel_the_current_gif_recording_first'), 3000);
                    return;
                }
                if (active_session) {
                    if (active_session.frame?.isConnected) {
                        Blockbench.showQuickMessage(translate('finish_or_cancel_the_current_gif_recording_first'), 3000);
                        return;
                    }
                    dispose_session(active_session);
                }
                const animations = capture_animations();
                const animation = options.play ? options[animation_field]
                    ? animations.find(item => item.uuid === options[animation_field])
                    : animations.find(item => item === Animation.selected) || animations[0] : null;
                if (options.play && !animation) {
                    Blockbench.showQuickMessage(translate('choose_an_animation_available_in_this_project_before_recording'), 4000);
                    return;
                }
                const render_values = preview_request?.render_values || capture_render_values(options);
                const project = Project;
                const generation = lifecycle;
                const [, background] = await Promise.all([prepare_watermark_font(render_values), load_capture_background(options.background_image)]);
                if (!plugin_loaded || generation !== lifecycle || Project !== project) return;
                if (active_session) {
                    Blockbench.showQuickMessage(translate('finish_or_cancel_the_current_gif_recording_first'), 3000);
                    return;
                }
                const session = create_session(render_values);
                session.preview_request = preview_request;
                session.live_background = background;
                active_session = session;
                try {
                    if (animation) {
                        prepare_capture_animation(session, animation);
                        Timeline.setTime(0);
                        Animator.preview(true);
                    }
                    const result = await previous_create_gif.call(this, options, callback);
                    if (!session.disposed) attach_recording(session, options);
                    return result;
                } catch (error) {
                    dispose_session(session);
                    throw error;
                }
            };
            Screencam.createGif = wrapped_create_gif;
            preview_action = new Action('modeler_toolkit_preview_shadow', {
                name: translate('preview_gif_render'),
                icon: 'wb_shade',
                condition: () => !!Project,
                async click() {
                    if (!Screencam.gif_options_dialog.form) Screencam.gif_options_dialog.build();
                    await Screencam.gif_options_dialog.form_config[plugin_id + '_capture_preview'].click();
                }
            });
            setup_tool_modules();
            Blockbench.on('unselect_project', abort_recording);
            Blockbench.on('close_project', abort_recording);
            rebuild_form(form_state);
        },
        onunload() {
            plugin_loaded = false;
            lifecycle++;
            font_process?.kill();
            font_process = null;
            abort_recording();
            pending_preview?.finish(null);
            const form_state = capture_form();
            if (Screencam.createGif === wrapped_create_gif) Screencam.createGif = previous_create_gif;
            if (Screencam.gif_options_dialog.onConfirm === wrapped_confirm) Screencam.gif_options_dialog.onConfirm = previous_confirm;
            if (Screencam.gif_options_dialog.onOpen === wrapped_open) Screencam.gif_options_dialog.onOpen = previous_open;
            if (previous_field === undefined) delete Screencam.gif_options_dialog.form_config[export_field];
            else Screencam.gif_options_dialog.form_config[export_field] = previous_field;
            if (Screencam.gif_options_dialog.form_config.play === installed_play_field) Screencam.gif_options_dialog.form_config.play = previous_play_field;
            if (Screencam.gif_options_dialog.form_config[animation_field] === installed_animation_field) {
                if (previous_animation_field === undefined) delete Screencam.gif_options_dialog.form_config[animation_field];
                else Screencam.gif_options_dialog.form_config[animation_field] = previous_animation_field;
            }
            if (Screencam.gif_options_dialog.form_config[watermark_field] === installed_watermark_field) {
                if (previous_watermark_field === undefined) delete Screencam.gif_options_dialog.form_config[watermark_field];
                else Screencam.gif_options_dialog.form_config[watermark_field] = previous_watermark_field;
            }
            if (Screencam.gif_options_dialog.form_config[watermark_settings_field] === installed_watermark_settings_field) {
                if (previous_watermark_settings_field === undefined) delete Screencam.gif_options_dialog.form_config[watermark_settings_field];
                else Screencam.gif_options_dialog.form_config[watermark_settings_field] = previous_watermark_settings_field;
            }
            installed_light_fields.forEach((field, key) => {
                if (Screencam.gif_options_dialog.form_config[key] !== field) return;
                const previous = previous_light_fields.get(key);
                if (previous === undefined) delete Screencam.gif_options_dialog.form_config[key];
                else Screencam.gif_options_dialog.form_config[key] = previous;
            });
            installed_light_fields.clear();
            previous_light_fields.clear();
            installed_floor_fields.forEach((field, key) => {
                if (Screencam.gif_options_dialog.form_config[key] !== field) return;
                const previous = previous_floor_fields.get(key);
                if (previous === undefined) delete Screencam.gif_options_dialog.form_config[key];
                else Screencam.gif_options_dialog.form_config[key] = previous;
            });
            installed_floor_fields.clear();
            previous_floor_fields.clear();
            if (preview_dialog) preview_dialog.hide().delete();
            preview_dialog = null;
            if (settings_dialog) settings_dialog.hide().delete();
            settings_dialog = null;
            cleanup_tool_modules();
            preview_action?.delete();
            Blockbench.removeListener('unselect_project', abort_recording);
            Blockbench.removeListener('close_project', abort_recording);
            Object.entries(plugin_settings).forEach(([key, setting]) => {
                Settings.stored[setting.id] = {value: setting.master_value};
                setting.delete();
                delete plugin_settings[key];
            });
            rebuild_form(form_state);
        }
    });
})();
