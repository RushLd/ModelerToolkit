(function() {
    const plugin_id = 'modeler_toolkit';
    const french_messages = {
        "language": "Langue / Language",
        "language_description": "Langue de Modeler Toolkit uniquement, sans changer la langue de Blockbench.",
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
        "optimize_texture_and_uvs": "Optimiser la texture et les UV",
        "merge_textures_into_atlas": "Fusionner les textures en un atlas",
        "optimize_texture_variants": "Optimiser les variantes de texture",
        "atlas_variants_shared_layout": "Les variantes gardent leurs textures et leurs réglages de lecture. Leurs UV ont été optimisés ensemble.",
        "atlas_variants_need_one_uv_layout": "Les variantes doivent partager une résolution UV et des dimensions d’image proportionnelles. Dans un format à plusieurs textures, toutes les faces texturées doivent pointer vers la même variante de base.",
        "atlas_variants_unavailable_for_independent_faces": "Utilisez « Optimiser la texture et les UV » pour traiter les variantes ensemble dans ce format.",
        "atlas_variants_set_changed": "La liste des variantes a changé depuis l’optimisation.",
        "atlas_merge_incompatible_rendering": "Certaines textures utilisent des réglages de rendu ou des matériaux différents. Un atlas unique ne pourrait pas reproduire le rendu.",
        "atlas_merge_single_texture_format": "Ce format utilise une seule texture active. Les autres textures sont des variantes du modèle. Ouvrez un format qui permet plusieurs textures sur le même modèle pour les fusionner.",
        "atlas_merge_unmapped_faces": "Certaines faces ou certains éléments ne peuvent pas être transférés avec leurs UV actuels.",
        "atlas_merge_box_density": "La densité commune des boîtes UV dépasserait les limites de taille ou demanderait de rééchantillonner leurs pixels.",
        "atlas_merge_incompatible_animation": "Les cadences, durées par image ou modes d’interpolation de ces flipbooks ne peuvent pas être conservés dans un seul atlas.",
        "atlas_merge_animation_too_large": "Le cycle commun des flipbooks dépasse la taille d’atlas compatible.",
        "atlas_merge_name": "Atlas",
        "atlas_merge_cycle_frames": " images dans le cycle commun",
        "separate_face_uvs": "Créer une texture avec des UV indépendants",
        "separate_face_uvs_description": "Recréer une texture carrée où chaque face possède sa propre zone UV, avec 1 px transparent entre les zones. Le rendu, les rotations et la transparence des faces sont conservés. La texture peut devenir plus grande.",
        "independent_uvs_created": "Chaque face traitée possède maintenant sa propre zone UV. Les pixels, les rotations et la transparence sont conservés, avec un espacement transparent de 1 px. Aucun fichier image existant n’a été écrasé. Utilisez « Annuler » ou « Restaurer les textures et UV d’origine » pour revenir en arrière.",
        "independent_uvs_unavailable": "Aucune texture compatible n’a pu être reconstruite avec des UV indépendants. Les textures et les UV sont conservés. La limite de l’atlas est de 4096 × 4096 pixels.",
        "enable_dynamic_gif_render": "Activer le rendu GIF dynamique",
        "use_the_dynamic_renderer_by_default_when_recording_a_gif_apng_or": "Utiliser le rendu dynamique par défaut lors de l’enregistrement d’un GIF, d’un APNG ou d’une séquence PNG.",
        "dynamic_shadow": "Ombre dynamique",
        "project_the_animated_model_onto_an_invisible_wall_or_floor_using": "Projeter l’ombre du modèle animé sur un mur ou un sol invisible à l’aide d’une carte d’ombres.",
        "shadow_color_tool_settings": "Couleur de l’ombre",
        "open_the_color_picker_and_all_modeler_toolkit_settings": "Choisir la couleur de l’ombre dans les paramètres de rendu.",
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
        "rebuild_a_clean_square_texture_share_identical_uv_regions_and_re": "Reconstruire les textures, y compris les flipbooks compatibles, et mutualiser les régions UV identiques en conservant le nombre de pixels par bloc.",
        "power_of_two_texture_atlas": "Texture carrée en puissance de deux",
        "use_square_sizes_16_32_64_etc_disabled_uses_square_multiples_of": "Utiliser des dimensions carrées de 16, 32, 64, etc. quand le format et la densité le permettent. Option désactivée, privilégier les multiples de 16.",
        "enable_inverted_cubes": "Activer les cubes inversés",
        "create_inward_facing_copies_named_name_inverted": "Créer des copies aux faces orientées vers l’intérieur, nommées <nom>_inverted.",
        "enable_outlines": "Activer les contours",
        "create_outline_shells_named_name_outline": "Créer des enveloppes de contour nommées <nom>_outline.",
        "enable_layer_controls": "Activer les outils de calques",
        "toggle_or_isolate_elements_and_groups_containing_layer": "Afficher ou masquer les éléments et groupes dont le nom contient _layer.",
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
        "box_uv_modes_preserved": "\n\nLes modes UV sont conservés : les faces indépendantes restent indépendantes et les boîtes UV restent liées. Les dépliages en boîte identiques sont fusionnés sans rotation, avec 1 px transparent autour de chaque dépliage complet.",
        "textures_still_loading_or_unavailable": "Textures en cours de chargement ou indisponibles",
        "layered_or_material_textures_preserved": "Textures à calques ou associées à un matériau conservées",
        "animated_textures_preserved_when_separating_uvs": "Textures animées conservées lors de la séparation des UV",
        "flipbooks_with_fractional_frame_heights_preserved": "Flipbooks conservés car la hauteur de leurs images n’est pas un nombre entier de pixels",
        "flipbook_frame_layout_incompatible": "La disposition modifierait le nombre d’images de la texture.",
        "flipbook_frames_preserved": " images conservées",
        "textures_exceeding_the_safe_comparison_size": "Textures dépassant la taille limite de comparaison",
        "invalid_uv_coordinates": "Coordonnées UV invalides",
        "uvs_outside_the_texture_preserved": "UV situés hors de la texture conservés",
        "no_changes_were_made": "Aucune modification n’a été effectuée. ",
        "no_additional_pixel_identical_uv_regions_were_found_original_tex": "Aucune région UV supplémentaire identique au pixel près n’a été trouvée. Les textures d’origine, leurs dimensions et le rembourrage restent inchangés.",
        "finish_the_current_edit_or_recording_before_rebuilding_textures": "Terminez la modification ou l’enregistrement en cours avant de reconstruire les textures.",
        "layered_texture_compositing_is_active_the_texture_stack_was_pres": "La composition des textures par calques est active. La pile de textures a été conservée.",
        "some_uvs_or_element_types_require_the_original_layout": " : certains UV ou types d’éléments nécessitent la disposition d’origine",
        "no_compatible_square_texture_could_be_rebuilt_without_enlargemen": "Aucune texture compatible n’a pu être reconstruite avec un espacement transparent de 1 px. Les textures et les UV d’origine ont été conservés.",
        "texture_repacking_was_cancelled": "La réorganisation des textures a été annulée. ",
        "model_uv_density_preserved": "Densité du modèle conservée (pixels par bloc).",
        "layout_does_not_fit_original_density": "Le placement avec 1 px transparent ne tient pas à la densité d’origine.",
        "transparent_faces_disabled": "Faces entièrement transparentes rendues invisibles : ",
        "uv_regions": "\nRégions UV : ",
        "identical_regions_are_shared_including_rotated_or_mirrored_match": "\n\nLes régions identiques sont fusionnées, y compris après rotation ou retournement. Seuls les pixels utilisés par les faces sont recopiés, avec 1 px transparent autour des régions UV. Les UV sont adaptés pour préserver le rendu et l’orientation des faces. Aucun rééchantillonnage ni lissage de l’image.\n\nUtilisez « Annuler » ou « Restaurer les textures et UV d’origine » pour revenir en arrière. Les fichiers image existants ne sont pas écrasés automatiquement.",
        "finish_the_current_edit_or_recording_before_restoring_textures": "Terminez la modification ou l’enregistrement en cours avant de restaurer les textures.",
        "undo_the_project_format_or_uv_resolution_change_before_restoring": "Annulez le changement de format du projet ou de résolution UV avant de restaurer ces textures.",
        "an_optimized_texture_is_missing_or_has_a_different_resolution_un": "Une texture optimisée est manquante ou sa résolution a changé. Annulez son remplacement avant de lancer la restauration.",
        "an_optimized_element_has_different_faces_or_vertices_undo_its_to": "Les faces ou les sommets d’un élément optimisé ont changé. Annulez cette modification de géométrie avant de lancer la restauration.",
        "new_geometry_uses_an_optimized_texture_undo_that_addition_before": "De nouveaux éléments utilisent une texture optimisée. Annulez leur ajout avant de restaurer la disposition d’origine de cette texture.",
        "restore_original_square_atlas_textures_and_uvs": "Restaurer les textures et UV d’origine",
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
        "tint_preview": "Aperçu de teinte",
        "show_tint_preview": "Afficher l’aperçu de teinte",
        "tint_selected_faces": "Teinter les faces sélectionnées",
        "tint_entire_cube": "Teinter le cube entier",
        "tint_preview_color": "Couleur de l’aperçu",
        "change_minecraft_tint": "Modifier la teinte Minecraft",
        "modeler_toolkit_settings": "Paramètres de Modeler Toolkit",
        "toggle_layers": "Afficher / masquer les calques",
        "modeler_toolkit": "Modeler Toolkit",
        "the_installed_font_list_is_unavailable_reopen_settings_after_all": "La liste des polices installées est indisponible. Autorisez l’accès aux polices locales, puis rouvrez les paramètres.",
        "preview": "Aperçu",
        "preview_gif_render": "Aperçu du rendu GIF",
        "back_to_settings": "Retour aux paramètres",
        "modeler_toolkit_watermark": "Filigrane de Modeler Toolkit",
        "unnamed_animation": "Animation sans nom",
        "animation_to_record": "Animations à enregistrer",
        "record_this_animation_from_any_editor_mode": "Enregistrer une ou plusieurs animations depuis n’importe quel mode de l’éditeur. Elles sont jouées à la suite, dans l’ordre de la liste.",
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
        "show_reference_images": "Afficher les images de référence",
        "reference_library": "Modèles d’aperçu personnalisés",
        "reference_library_description": "Importer et gérer les modèles disponibles dans le menu Modèles d’aperçu de la vue 3D.",
        "reference_import": "Importer un .bbmodel",
        "reference_import_files": "Modèle Blockbench et textures",
        "reference_import_hint": "Sélectionne un .bbmodel et, si nécessaire, ses images de texture. Les références s’affichent dans le menu du clic droit de la vue 3D.",
        "reference_empty": "Aucun modèle d’aperçu importé.",
        "reference_invalid_model": "Sélectionne un seul fichier .bbmodel valide.",
        "reference_unsupported_format": "Le format de ce modèle est indisponible dans Blockbench.",
        "reference_missing_texture": "Texture introuvable ou illisible : ",
        "reference_no_geometry": "Ce modèle ne contient pas de géométrie visible.",
        "reference_busy": "Chargement de la bibliothèque…",
        "reference_error": "La bibliothèque de modèles d’aperçu est indisponible.",
        "reference_rename": "Renommer",
        "reference_remove": "Retirer",
        "reference_name": "Nom du modèle d’aperçu",
        "capture_visible_reference_images": "Inclure les images de référence visibles dans le cadre de capture, l’aperçu et l’export.",
        "capture_configuration_storage_failed": "Les réglages GIF sont conservés pour cette session, mais leur sauvegarde locale a échoué. Ils risquent d’être perdus à la fermeture de Blockbench.",
        "settings_tools": "Outils",
        "settings_render": "Rendu",
        "settings_lighting": "Éclairage",
        "settings_floor": "Sol",
        "settings_advanced": "Options avancées",
        "settings_reset_section": "Réinitialiser cette rubrique",
        "settings_capture_defaults": "Les valeurs modifiées ici s’appliquent à la fenêtre GIF dès la validation. Les autres choix de capture sont conservés.",
        "capture_reset_render_settings": "Reprendre les réglages du plugin",
        "finish_or_cancel_the_current_gif_recording_first": "Terminez ou annulez d’abord l’enregistrement GIF en cours.",
        "choose_an_animation_available_in_this_project_before_recording": "Choisissez au moins une animation disponible dans ce projet avant de lancer l’enregistrement.",
        "confirm": "Valider",
        "cancel": "Annuler",
        "technical_error": "Une erreur technique est survenue. Les détails sont disponibles dans la console de Blockbench."
    };

    const english_messages = {
        "language": "Language / Langue",
        "language_description": "Language for Modeler Toolkit only, without changing the Blockbench language.",
        "lighting_enabled": "Custom lighting",
        "lighting_description": "Temporarily light the model and floor with matching settings in the preview and export.",
        "light_azimuth": "Light direction (°)",
        "light_azimuth_description": "0°: from the camera; -90°: left; 90°: right; 180°: behind. The direction stays fixed during capture.",
        "light_elevation": "Light elevation (°)",
        "light_elevation_description": "5°: grazing light; 90°: light directly above the model.",
        "light_tone": "Light tint",
        "light_neutral": "Neutral",
        "light_warm": "Warm",
        "light_cool": "Cool",
        "light_custom": "Custom color",
        "light_color": "Light color",
        "light_intensity": "Light intensity (%)",
        "ambient_intensity": "Ambient light (%)",
        "ambient_description": "Neutral lighting for less exposed faces. At 0%, only the directional light illuminates the model.",
        "capture_floor": "Render floor",
        "capture_floor_description": "Add a temporary floor that receives the configured shadow. One block equals 16 model units.",
        "floor_style": "Floor appearance",
        "floor_tiles": "Tiles",
        "floor_solid": "Solid",
        "floor_width": "Floor width (blocks)",
        "floor_depth": "Floor depth (blocks)",
        "floor_tile_size": "Tile size (blocks)",
        "floor_color": "Floor color",
        "floor_seam_color": "Seam color",
        "floor_thickness": "Floor thickness (units)",
        "floor_height": "Floor vertical offset (units)",
        "floor_height_description": "Relative to the bottom of the model in the first frame. The floor stays fixed throughout the recording.",
        "floor_offset_x": "Floor X offset (units)",
        "floor_offset_z": "Floor Z offset (units)",
        "back_to_recording": "Back to recording",
        "close": "Close",
        "incompatible_backup_preserved": "This backup no longer matches the current project. It has been kept without being applied. You can optimize again using the current textures and UVs.",
        "previous_backups_preserved": "Restoring returns to the state just before this optimization. Earlier backups remain in the project.",
        "rebuild_textures_and_share_matching_uvs": "Rebuild textures and share matching UVs",
        "optimize_texture_and_uvs": "Optimize texture and UVs",
        "merge_textures_into_atlas": "Merge textures into one atlas",
        "optimize_texture_variants": "Optimize texture variants",
        "atlas_variants_shared_layout": "Each variant keeps its own texture and playback settings. Their shared UVs were optimized together.",
        "atlas_variants_need_one_uv_layout": "Variants must share a UV resolution and proportional frame dimensions. In a multi-texture format, all textured faces must point to the same base variant.",
        "atlas_variants_unavailable_for_independent_faces": "Use ‘Optimize texture and UVs’ to process all variants together in this format.",
        "atlas_variants_set_changed": "The set of variants has changed since optimization.",
        "atlas_merge_incompatible_rendering": "Some textures use different render settings or materials. One atlas could not reproduce their appearance.",
        "atlas_merge_single_texture_format": "This format uses one active texture. The other textures are model variants. Use a format that supports multiple textures on the same model to merge them.",
        "atlas_merge_unmapped_faces": "Some faces or elements cannot be transferred with their current UVs.",
        "atlas_merge_box_density": "A common density for the box UVs would exceed the size limits or require resampling their pixels.",
        "atlas_merge_incompatible_animation": "The playback rates, per-frame durations or interpolation modes of these flipbooks cannot be preserved in one atlas.",
        "atlas_merge_animation_too_large": "The combined playback cycle exceeds the supported atlas size.",
        "atlas_merge_name": "Atlas",
        "atlas_merge_cycle_frames": " frames in the combined cycle",
        "separate_face_uvs": "Create a texture with independent UVs",
        "separate_face_uvs_description": "Rebuild a square texture with a separate UV region for each face and 1 px of transparent spacing. Appearance, rotation and face transparency are preserved. The texture may become larger.",
        "independent_uvs_created": "Each processed face now has its own UV region. Pixels, rotation and transparency are preserved, with 1 px of transparent spacing. No existing image file was overwritten. Use Undo or Restore original textures and UVs to go back.",
        "independent_uvs_unavailable": "No compatible texture could be rebuilt with independent UVs. Textures and UVs have been preserved. The atlas limit is 4096 × 4096 pixels.",
        "enable_dynamic_gif_render": "Enable dynamic GIF rendering",
        "use_the_dynamic_renderer_by_default_when_recording_a_gif_apng_or": "Use dynamic rendering by default when recording a GIF, APNG or PNG sequence.",
        "dynamic_shadow": "Dynamic shadow",
        "project_the_animated_model_onto_an_invisible_wall_or_floor_using": "Project the animated model's shadow onto an invisible wall or floor using a shadow map.",
        "shadow_color_tool_settings": "Shadow color",
        "open_the_color_picker_and_all_modeler_toolkit_settings": "Choose the shadow color in the rendering settings.",
        "shadow_opacity": "Shadow opacity (%)",
        "partial_opacity_needs_an_opaque_gif_background_or_apng_to_retain": "Partial opacity requires an opaque GIF background or APNG to preserve gradual transparency.",
        "shadow_softness": "Shadow softness",
        "shadow_map_filter_radius_zero_produces_a_sharp_shadow": "Shadow map filter radius. Zero produces a sharp shadow.",
        "shadow_surface": "Shadow projection surface",
        "automatic_wall_behind_the_model": "Automatic wall behind the model",
        "floor_below_the_model": "Floor below the model",
        "surface_distance": "Surface distance (%)",
        "extra_distance_from_the_model_relative_to_its_size_placement_is": "Extra distance from the model, relative to its size. Placement is automatic.",
        "light_horizontal": "Horizontal light direction (%)",
        "negative_values_light_the_model_from_the_left_and_cast_the_shado": "Negative values light the model from the left and cast its shadow to the right.",
        "light_vertical_direction": "Vertical light direction (%)",
        "positive_values_light_the_model_from_above_when_using_the_wall": "Positive values light the model from above when using the wall.",
        "shadow_map_resolution": "Shadow map resolution",
        "watermark_text": "Watermark text",
        "a_single_line_of_text_enable_or_disable_it_in_the_gif_export_dia": "A single line of text. Enable or disable the watermark in the GIF export window.",
        "watermark_position": "Watermark position",
        "bottom_center": "Bottom center",
        "bottom_left": "Bottom left",
        "bottom_right": "Bottom right",
        "center_left": "Center left",
        "center": "Center",
        "center_right": "Center right",
        "top_left": "Top left",
        "top_center": "Top center",
        "top_right": "Top right",
        "watermark_color": "Watermark color",
        "watermark_text_size": "Watermark text size (%)",
        "font_size_relative_to_the_shorter_side_of_the_final_image_long_t": "Font size relative to the shorter side of the final image. Long text is automatically reduced to fit.",
        "watermark_margin": "Watermark margin (%)",
        "distance_from_the_final_image_edges_relative_to_its_shorter_side": "Distance from the final image edges, relative to its shorter side.",
        "watermark_font": "Watermark font",
        "fonts_installed_on_this_computer_including_custom_fonts": "Fonts installed on this computer, including custom fonts.",
        "enable_texture_uv_optimization": "Enable texture and UV optimization",
        "rebuild_a_clean_square_texture_share_identical_uv_regions_and_re": "Rebuild textures, including compatible flipbooks, and share identical UV regions while keeping the same pixels per block.",
        "power_of_two_texture_atlas": "Power of two square texture",
        "use_square_sizes_16_32_64_etc_disabled_uses_square_multiples_of": "Use square sizes of 16, 32, 64, etc. when the format and pixel density allow it. When disabled, prefer multiples of 16.",
        "enable_inverted_cubes": "Enable inverted cubes",
        "create_inward_facing_copies_named_name_inverted": "Create copies with inward facing surfaces, named <name>_inverted.",
        "enable_outlines": "Enable outlines",
        "create_outline_shells_named_name_outline": "Create outline shells named <name>_outline.",
        "enable_layer_controls": "Enable layer controls",
        "toggle_or_isolate_elements_and_groups_containing_layer": "Show or hide elements and groups whose names contain _layer.",
        "plugin_settings": "Plugin settings",
        "top": "Top",
        "left": "Left",
        "front": "Front",
        "right": "Right",
        "bottom": "Bottom",
        "custom_direction": "Custom direction",
        "local_font_access_is_unavailable_allow_local_font_access_in_your": "Local font access is unavailable. Allow it in your browser.",
        "unavailable": " (unavailable)",
        "margin": "Margin",
        "no_matching_original_uv_backup_exact_restoration_requires_uv_cle": "No matching original UV backup was found. Exact restoration requires having applied cleanup with Modeler Toolkit.",
        "restore_modeler_toolkit_uvs": "Restore UVs with Modeler Toolkit",
        "select_cubes_in_a_format_supporting_per_face_uvs": "Select cubes in a format that supports per-face UVs.",
        "create_modeler_toolkit_inverted_cubes": "Create inverted cubes with Modeler Toolkit",
        "create_modeler_toolkit_outlines": "Create outlines with Modeler Toolkit",
        "the_outline_texture_is_no_longer_available": "The outline texture is no longer available.",
        "generate_solid_color_texture": "Generate a solid color texture",
        "this_format_needs_an_existing_front_sided_texture_for_outlines": "This format needs an existing texture with front faces only to create outlines.",
        "create_outlines": "Create outlines",
        "thickness": "Thickness",
        "outline_color": "Outline color",
        "no_elements_or_groups_containing_layer": "No elements or groups have _layer in their names.",
        "modeler_toolkit_texture_optimization": "Modeler Toolkit - Texture optimization",
        "box_uv_layouts_preserved": "Box UV layouts preserved",
        "box_uv_modes_preserved": "\n\nUV modes are preserved: independent faces remain independent and box UVs remain linked. Identical box layouts are shared without rotation, with 1 px of transparent spacing around each complete layout.",
        "textures_still_loading_or_unavailable": "Textures still loading or unavailable",
        "layered_or_material_textures_preserved": "Layered or material textures preserved",
        "animated_textures_preserved_when_separating_uvs": "Animated textures preserved when separating UVs",
        "flipbooks_with_fractional_frame_heights_preserved": "Flipbooks with fractional pixel frame heights preserved",
        "flipbook_frame_layout_incompatible": "The layout would change the texture’s frame count.",
        "flipbook_frames_preserved": " frames preserved",
        "textures_exceeding_the_safe_comparison_size": "Textures exceeding the safe comparison size",
        "invalid_uv_coordinates": "Invalid UV coordinates",
        "uvs_outside_the_texture_preserved": "UVs outside the texture preserved",
        "no_changes_were_made": "No changes were made. ",
        "no_additional_pixel_identical_uv_regions_were_found_original_tex": "No additional UV regions with identical pixels were found. Original textures, dimensions and padding remain unchanged.",
        "finish_the_current_edit_or_recording_before_rebuilding_textures": "Finish the current edit or recording before rebuilding textures.",
        "layered_texture_compositing_is_active_the_texture_stack_was_pres": "Layered texture compositing is active. The texture stack has been preserved.",
        "some_uvs_or_element_types_require_the_original_layout": ": some UVs or element types require the original layout",
        "no_compatible_square_texture_could_be_rebuilt_without_enlargemen": "No compatible texture could be rebuilt with 1 px of transparent spacing. Original textures and UVs have been preserved.",
        "texture_repacking_was_cancelled": "Texture repacking was cancelled. ",
        "model_uv_density_preserved": "Model pixel density preserved (pixels per block).",
        "layout_does_not_fit_original_density": "The layout with 1 px of transparent spacing does not fit at the original pixel density.",
        "transparent_faces_disabled": "Fully transparent faces made invisible: ",
        "uv_regions": "\nUV regions: ",
        "identical_regions_are_shared_including_rotated_or_mirrored_match": "\n\nIdentical regions are shared, including rotated or mirrored matches. Only pixels used by faces are copied, with 1 px of transparent spacing around UV regions. UVs are adjusted to preserve face appearance and orientation. No image resampling or smoothing.\n\nUse Undo or Restore original textures and UVs to go back. Existing image files are not overwritten automatically.",
        "finish_the_current_edit_or_recording_before_restoring_textures": "Finish the current edit or recording before restoring textures.",
        "undo_the_project_format_or_uv_resolution_change_before_restoring": "Undo the project format or UV resolution change before restoring these textures.",
        "an_optimized_texture_is_missing_or_has_a_different_resolution_un": "An optimized texture is missing or its resolution has changed. Undo its replacement before restoring.",
        "an_optimized_element_has_different_faces_or_vertices_undo_its_to": "The faces or vertices of an optimized element have changed. Undo this geometry change before restoring.",
        "new_geometry_uses_an_optimized_texture_undo_that_addition_before": "New elements use an optimized texture. Undo their addition before restoring that texture's original layout.",
        "restore_original_square_atlas_textures_and_uvs": "Restore original textures and UVs",
        "texture_restoration_was_cancelled": "Texture restoration was cancelled. ",
        "original_textures_uvs_and_resolution_restored": "Original textures, UVs and resolution restored.",
        "finish_the_current_edit_or_recording_before_restoring_uvs": "Finish the current edit or recording before restoring UVs.",
        "undo_the_project_format_or_uv_resolution_change_before_restoring_2": "Undo the project format or UV resolution change before restoring the original UVs.",
        "an_original_texture_is_missing_or_has_a_different_resolution_res": "An original texture is missing or its resolution has changed. Restore it before restoring these UVs.",
        "an_optimized_element_has_different_faces_or_vertices_undo_its_to_2": "The faces or vertices of an optimized element have changed. Undo this geometry change before restoring these UVs.",
        "restore_original_uvs_without_changing_textures": "Restore original UVs without changing textures",
        "uv_restoration_was_cancelled": "UV restoration was cancelled. ",
        "original_uvs_restored_texture_images_preserved": "Original UVs restored. Texture images have been preserved.",
        "this_project_has_no_texture_optimization_backup": "This project has no texture backup from before optimization.",
        "the_project_format_or_uv_resolution_has_changed_undo_those_chang": "The project format or UV resolution has changed. Undo those changes before restoring the original textures.",
        "an_optimized_element_has_different_faces_or_vertices_undo_its_to_3": "The faces or vertices of an optimized element have changed. Undo these geometry changes before restoring the original UVs.",
        "an_original_texture_identifier_is_already_in_use_undo_the_textur": "An original texture identifier is already in use. Undo the texture replacement before restoring.",
        "an_original_texture_path_is_already_in_use_undo_the_texture_repl": "An original texture path is already in use. Undo the texture replacement before restoring.",
        "new_geometry_uses_the_optimized_default_texture_undo_that_additi": "New elements use the optimized default texture. Undo their addition before restoring in this single-texture format.",
        "restore_original_textures_and_uvs": "Restore original textures and UVs",
        "restoration_was_cancelled": "Restoration was cancelled. ",
        "original_textures_and_uvs_restored": "Original textures and UVs restored.",
        "restore_original_textures_uvs": "Restore original textures and UVs",
        "restore_original_uvs": "Restore original UVs",
        "create_inverted_cubes": "Create inverted cubes",
        "tint_preview": "Tint preview",
        "show_tint_preview": "Show tint preview",
        "tint_selected_faces": "Tint selected faces",
        "tint_entire_cube": "Tint entire cube",
        "tint_preview_color": "Preview color",
        "change_minecraft_tint": "Change Minecraft tint",
        "modeler_toolkit_settings": "Modeler Toolkit settings",
        "toggle_layers": "Show / hide layers",
        "modeler_toolkit": "Modeler Toolkit",
        "the_installed_font_list_is_unavailable_reopen_settings_after_all": "The installed font list is unavailable. Allow local font access, then reopen settings.",
        "preview": "Preview",
        "preview_gif_render": "GIF render preview",
        "back_to_settings": "Back to settings",
        "modeler_toolkit_watermark": "Modeler Toolkit watermark",
        "unnamed_animation": "Unnamed animation",
        "animation_to_record": "Animations to record",
        "record_this_animation_from_any_editor_mode": "Record one or more animations from any editor mode. They play one after another, in list order.",
        "shadow_light_direction": "Shadow light direction",
        "choose_where_the_light_comes_from_for_this_export_the_shadow_pro": "Choose where the light comes from for this export. The shadow is projected in the opposite direction.",
        "negative_light_from_the_left_positive_light_from_the_right": "Negative: light from the left. Positive: light from the right.",
        "light_vertical_depth": "Vertical light direction / Depth (%)",
        "negative_light_from_below_positive_light_from_above_on_a_floor_t": "Negative: light from below. Positive: light from above. On a floor, this adjusts depth.",
        "modeler_toolkit_capture_stopped": "Modeler Toolkit recording stopped: ",
        "open_a_model_and_finish_the_current_recording_before_previewing": "Open a model and finish the current recording before previewing.",
        "rebuild_textures_and_uvs_create_outlines_and_record_animations_w": "Rebuild textures and UVs, create outlines and record animations with customizable shadows and a watermark.",
        "uv_tools_outlines_layer_controls_dynamic_shadows": "UV tools, outlines, layer controls, dynamic shadows and watermark. See the repository for instructions and the MIT license.",
        "dynamic_shadow_clean_render": "Dynamic shadow / Clean rendering",
        "use_modeler_toolkit_render_settings_for_this_export": "Use Modeler Toolkit render settings for this export.",
        "watermark": "Watermark",
        "add_your_configured_text_to_every_frame_independently_of_dynamic": "Add the configured text to every frame, independently of Dynamic shadow / Clean rendering.",
        "watermark_settings": "Watermark settings",
        "show_reference_images": "Show reference images",
        "reference_library": "Custom preview models",
        "reference_library_description": "Import and manage models available in the 3D viewport’s Preview Models menu.",
        "reference_import": "Import a .bbmodel",
        "reference_import_files": "Blockbench model and textures",
        "reference_import_hint": "Select a .bbmodel and its texture images if needed. References are available in the 3D viewport’s right-click menu.",
        "reference_empty": "No preview models imported.",
        "reference_invalid_model": "Select one valid .bbmodel file.",
        "reference_unsupported_format": "This model’s format is unavailable in Blockbench.",
        "reference_missing_texture": "Missing or unreadable texture: ",
        "reference_no_geometry": "This model has no visible geometry.",
        "reference_busy": "Loading the library…",
        "reference_error": "The preview model library is unavailable.",
        "reference_rename": "Rename",
        "reference_remove": "Remove",
        "reference_name": "Preview model name",
        "capture_visible_reference_images": "Include visible reference images in the recording frame, preview and export.",
        "capture_configuration_storage_failed": "GIF settings are kept for this session, but saving them locally failed. They may be lost when Blockbench closes.",
        "settings_tools": "Tools",
        "settings_render": "Rendering",
        "settings_lighting": "Lighting",
        "settings_floor": "Floor",
        "settings_advanced": "Advanced options",
        "settings_reset_section": "Reset this section",
        "settings_capture_defaults": "Changes made here apply to the GIF window as soon as you confirm. Other capture choices are kept.",
        "capture_reset_render_settings": "Use plugin settings",
        "finish_or_cancel_the_current_gif_recording_first": "Finish or cancel the current GIF recording first.",
        "choose_an_animation_available_in_this_project_before_recording": "Choose at least one animation available in this project before recording.",
        "confirm": "Confirm",
        "cancel": "Cancel",
        "technical_error": "A technical error occurred. Details are available in the Blockbench console."
    };
    const translations = {fr: french_messages, en: english_messages};
    let interface_language = Settings.stored[plugin_id + '_language']?.value === 'en' ? 'en' : 'fr';

    function translate(key) {
        return translations[interface_language][key] ?? french_messages[key] ?? key;
    }

    function error_message(error) {
        for (const messages of Object.values(translations)) {
            const key = Object.keys(messages).find(key => messages[key] === error?.message);
            if (key) return translate(key);
        }
        console.error('[Modeler Toolkit]', error);
        return translate('technical_error');
    }
    const installed_font_options = {Arial: 'Arial'};
    const setting_definitions = create_setting_definitions();

    function create_setting_definitions() {
        return {
            language: {name: translate('language'), type: 'select', value: 'fr', options: {fr: 'Français', en: 'English'}, description: translate('language_description')},
            enabled: {name: translate('enable_dynamic_gif_render'), type: 'toggle', value: false, description: translate('use_the_dynamic_renderer_by_default_when_recording_a_gif_apng_or')},
            lighting_enabled: {name: translate('lighting_enabled'), type: 'toggle', value: false, description: translate('lighting_description')},
            light_azimuth: {name: translate('light_azimuth'), type: 'number', value: -45, min: -180, max: 180, step: 5, description: translate('light_azimuth_description')},
            light_elevation: {name: translate('light_elevation'), type: 'number', value: 45, min: 5, max: 90, step: 5, description: translate('light_elevation_description')},
            light_tone: {name: translate('light_tone'), type: 'select', value: 'neutral', options: {neutral: translate('light_neutral'), warm: translate('light_warm'), cool: translate('light_cool'), custom: translate('light_custom')}},
            light_color: {name: translate('light_color'), type: 'click', value: '#ffffff', icon: 'palette', click: () => open_settings('lighting')},
            light_intensity: {name: translate('light_intensity'), type: 'number', value: 70, min: 0, max: 200, step: 5},
            ambient_intensity: {name: translate('ambient_intensity'), type: 'number', value: 30, min: 0, max: 200, step: 5, description: translate('ambient_description')},
            shadow_enabled: {name: translate('dynamic_shadow'), type: 'toggle', value: true, description: translate('project_the_animated_model_onto_an_invisible_wall_or_floor_using')},
            color: {name: translate('shadow_color_tool_settings'), type: 'click', value: '#424242', icon: 'palette', description: translate('open_the_color_picker_and_all_modeler_toolkit_settings'), click: () => open_settings('render')},
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
            floor_color: {name: translate('floor_color'), type: 'click', value: '#777c86', icon: 'palette', click: () => open_settings('floor')},
            floor_seam_color: {name: translate('floor_seam_color'), type: 'click', value: '#555a63', icon: 'palette', click: () => open_settings('floor')},
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
    }
    const plugin_settings = {};
    const module_keys = new Set(['atlas', 'atlas_power', 'inverted', 'outline', 'layers']);
    const export_field = 'dynamic_render_enabled';
    const animation_field = 'modeler_toolkit_animation';
    const reference_images_field = 'modeler_toolkit_reference_images';
    const watermark_field = 'modeler_toolkit_watermark';
    const watermark_settings_field = 'modeler_toolkit_watermark_settings';
    const light_field = 'modeler_toolkit_light_direction';
    const light_x_field = 'modeler_toolkit_light_x';
    const light_y_field = 'modeler_toolkit_light_y';
    const light_presets = create_light_presets();

    function create_light_presets() {
        return {settings: {name: translate('plugin_settings')}, top_left: {name: translate('top_left'), x: -60, y: 80}, top: {name: translate('top'), x: 0, y: 100}, top_right: {name: translate('top_right'), x: 60, y: 80}, left: {name: translate('left'), x: -100, y: 0}, front: {name: translate('front'), x: 0, y: 0}, right: {name: translate('right'), x: 100, y: 0}, bottom_left: {name: translate('bottom_left'), x: -60, y: -80}, bottom: {name: translate('bottom'), x: 0, y: -100}, bottom_right: {name: translate('bottom_right'), x: 60, y: -80}, custom: {name: translate('custom_direction')}};
    }
    const previous_light_fields = new Map();
    const installed_light_fields = new Map();
    const previous_floor_fields = new Map();
    const installed_floor_fields = new Map();
    const previous_shadow_fields = new Map();
    const installed_shadow_fields = new Map();
    const shadow_capture_fields = {color: 'modeler_toolkit_shadow_color', opacity: 'modeler_toolkit_shadow_opacity'};
    const floor_keys = Object.keys(setting_definitions).filter(key => key.startsWith('floor_'));
    const lighting_keys = ['lighting_enabled', 'light_azimuth', 'light_elevation', 'light_tone', 'light_color', 'light_intensity', 'ambient_intensity'];
    const capture_default_fields = {
        enabled: export_field,
        ...shadow_capture_fields,
        light_x: light_x_field,
        light_y: light_y_field,
        ...Object.fromEntries([...floor_keys, ...lighting_keys].map(key => [key, plugin_id + '_' + key]))
    };
    const capture_reset_field = plugin_id + '_capture_reset';
    const settings_sections = create_settings_sections();

    function create_settings_sections() {
        return {
            tools: {label: translate('settings_tools'), icon: 'handyman'},
            render: {label: translate('settings_render'), icon: 'wb_shade'},
            lighting: {label: translate('settings_lighting'), icon: 'light_mode'},
            floor: {label: translate('settings_floor'), icon: 'grid_on'},
            watermark: {label: translate('watermark'), icon: 'text_fields'}
        };
    }
    const light_colors = {neutral: '#ffffff', warm: '#ffdab2', cool: '#b9d7ff'};
    const animation_choices = new WeakMap();
    const capture_configuration_key = 'modeler_toolkit_capture_configuration';
    let capture_configuration = null;
    let restoring_capture_configuration = false;
    let capture_storage_error_reported = false;
    let active_session = null;
    let pending_preview = null;
    let settings_dialog = null;
    let restore_language_property = null;
    let preview_dialog = null;
    let preview_action = null;
    let previous_create_gif;
    let previous_confirm;
    let previous_open;
    let previous_form_change;
    let previous_button;
    let previous_field;
    let previous_reference_images_field;
    let installed_reference_images_field;
    let previous_play_field;
    let previous_animation_field;
    let installed_play_field;
    let installed_animation_field;
    let previous_turnspeed_sync_field;
    let installed_turnspeed_sync_field;
    let previous_watermark_field;
    let previous_watermark_settings_field;
    let installed_watermark_field;
    let installed_watermark_settings_field;
    let wrapped_create_gif;
    let wrapped_confirm;
    let wrapped_open;
    let wrapped_form_change;
    let wrapped_button;
    let tools_menu;
    let tint_menu;
    let tint_refresh_pending = false;
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
    const tint_materials = new Map();
    const tinted_meshes = new Map();
    const tint_color_key = 'modeler_toolkit_tint_color';
    const default_tint_color = '#8eb45a';
    const tint_mask = 'modeler_toolkit_tint_mask';
    const tint_uniform = {value: new THREE.Vector3(1, 1, 1)};
    const tint_refresh_events = ['select_project', 'finish_edit', 'undo', 'redo'];
    const backup_key = 'raven_tools_uv_backup';
    const atlas_backup_key = 'raven_tools_atlas_backup';

    function module_enabled(key) {
        return !!plugin_settings[key]?.value;
    }

    function ordered_settings() {
        const priority = key => key === 'language' ? 2 : Number(module_keys.has(key));
        return Object.entries(setting_definitions).sort(([first], [second]) => priority(second) - priority(first));
    }

    function update_field_labels(field, definition) {
        if (!field) return;
        for (const key of ['label', 'description', 'options', 'buttons']) {
            if (Object.hasOwn(definition, key)) field[key] = definition[key];
        }
    }

    function change_language(value, force = false) {
        const next_language = value === 'en' ? 'en' : 'fr';
        if (!force && interface_language === next_language) return;
        interface_language = next_language;
        Object.assign(setting_definitions, create_setting_definitions());
        Object.assign(light_presets, create_light_presets());
        Object.assign(settings_sections, create_settings_sections());
        Object.entries(plugin_settings).forEach(([key, setting]) => {
            const definition = setting_definitions[key];
            setting.name = definition.name;
            setting.description = definition.description || '';
            if (definition.options) setting.options = definition.options;
        });
        if (reference_setting) {
            reference_setting.name = translate('reference_library');
            reference_setting.description = translate('reference_library_description');
        }
        tool_definitions().forEach(([id, definition]) => {
            const action = tool_actions.find(action => action.id === id);
            if (!action) return;
            action.setName(definition.name);
            action.description = definition.description || '';
            if (action.menu_node) action.menu_node.title = action.description;
            action.nodes.forEach(node => {
                node.querySelectorAll('.tooltip_description').forEach(label => label.textContent = action.description);
                node.querySelectorAll('.toolbar_label').forEach(label => label.textContent = action.name);
            });
        });
        if (tint_menu) tint_menu.name = translate('tint_preview');
        preview_action?.setName(translate('preview_gif_render'));
        const plugin = Plugins.all.find(plugin => plugin.id === plugin_id);
        if (plugin) {
            plugin.description = translate('rebuild_textures_and_uvs_create_outlines_and_record_animations_w');
            plugin.about = translate('uv_tools_outlines_layer_controls_dynamic_shadows');
        }
        const form = Screencam.gif_options_dialog.form_config;
        update_field_labels(form[export_field], {label: translate('dynamic_shadow_clean_render'), description: translate('use_modeler_toolkit_render_settings_for_this_export')});
        update_field_labels(installed_reference_images_field, {label: translate('show_reference_images'), description: translate('capture_visible_reference_images')});
        update_field_labels(installed_watermark_field, {label: translate('watermark'), description: translate('add_your_configured_text_to_every_frame_independently_of_dynamic')});
        update_field_labels(installed_watermark_settings_field, {buttons: [translate('watermark_settings')]});
        update_field_labels(installed_animation_field, {label: translate('animation_to_record'), description: translate('record_this_animation_from_any_editor_mode')});
        setup_shadow_fields(true);
        setup_floor_fields(true);
        setup_light_fields(true);
        const was_restoring = restoring_capture_configuration;
        restoring_capture_configuration = true;
        try {
            rebuild_form(capture_form(true));
        } finally {
            restoring_capture_configuration = was_restoring;
        }
        Settings.dialog?.content_vue?.$forceUpdate();
        const plugins_view = Plugins.dialog?.content_vue;
        if (plugins_view?.selected_plugin?.id === plugin_id) {
            const selected_plugin = plugins_view.selected_plugin;
            plugins_view.selected_plugin = null;
            plugins_view.selected_plugin = selected_plugin;
        }
        plugins_view?.$forceUpdate();
        MenuBar.update();
    }

    function observe_language_setting() {
        const setting = plugin_settings.language;
        const descriptor = Object.getOwnPropertyDescriptor(setting, 'master_value');
        let stored_value = setting.master_value;
        const generation = lifecycle;
        Object.defineProperty(setting, 'master_value', {
            configurable: true,
            enumerable: true,
            get() {
                return descriptor.get ? descriptor.get.call(setting) : stored_value;
            },
            set(value) {
                const previous = this.master_value;
                if (descriptor.set) descriptor.set.call(setting, value);
                else stored_value = value;
                if (previous === this.master_value) return;
                queueMicrotask(() => {
                    if (!plugin_loaded || generation !== lifecycle) return;
                    change_language(setting.value);
                    Settings.saveLocalStorages();
                });
            }
        });
        restore_language_property = () => {
            const value = setting.master_value;
            Object.defineProperty(setting, 'master_value', descriptor.get ? descriptor : {...descriptor, value});
        };
        change_language(setting.value, true);
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
            if (backup.version === 3 || backup.version === 4) backup.optimized_textures.forEach(texture => optimized_ids.add(texture.uuid));
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

    const atlas_pixel_limit = 4096 ** 2;

    function uv_region_pixel(region, x, y, frame) {
        const source = region.source;
        let pixel_x = region.x + Math.floor(x / (region.pixel_scale?.[0] || 1));
        let pixel_y = region.y + Math.floor(y / (region.pixel_scale?.[1] || 1)) + (source.atlas_frames?.[frame] ?? frame) * source.frame_height;
        if (source.texture.wrap_mode === 'repeat') {
            pixel_x = (pixel_x % source.width + source.width) % source.width;
            pixel_y = (pixel_y % source.height + source.height) % source.height;
        } else {
            pixel_x = Math.max(0, Math.min(source.width - 1, pixel_x));
            pixel_y = Math.max(0, Math.min(source.height - 1, pixel_y));
        }
        return pixel_y * source.width + pixel_x;
    }

    function uv_mask_contains(region, x, y) {
        const scale = region.mask_scale || 1;
        return !region.mask || region.mask[Math.floor(y / scale) * (region.width / scale) + Math.floor(x / scale)];
    }

    function variant_uv_regions(region) {
        return region.variant_regions ??= region.source.variants.map(({source, scale}) => ({
            source, x: region.x * scale, y: region.y * scale, width: region.width * scale, height: region.height * scale,
            mask: region.mask, mask_scale: scale
        }));
    }

    function uv_region_word(region, x, y, frame, transform) {
        let pixel_x = transform & 4 ? y : x;
        let pixel_y = transform & 4 ? x : y;
        if (transform & 1) pixel_x = region.width - 1 - pixel_x;
        if (transform & 2) pixel_y = region.height - 1 - pixel_y;
        if (!uv_mask_contains(region, pixel_x, pixel_y)) return 0;
        const index = uv_region_pixel(region, pixel_x, pixel_y, frame);
        return region.source.pixels[index * 4 + 3] ? region.source.words[index] : 0;
    }

    function hash_uv_region(region, transform = 0) {
        if (region.source.variants) return variant_uv_regions(region).map(region => hash_uv_region(region, transform)).join('|');
        const width = transform & 4 ? region.height : region.width;
        const height = transform & 4 ? region.width : region.height;
        let hash = 2166136261;
        for (let frame = 0; frame < (region.source.atlas_frames?.length ?? region.source.frame_count); frame++) {
            for (let y = 0; y < height; y++) for (let x = 0; x < width; x++) {
                hash = Math.imul(hash ^ uv_region_word(region, x, y, frame, transform), 16777619);
            }
        }
        return width + '_' + height + '_' + (hash >>> 0);
    }

    function equal_uv_regions(first, second, transform = 0) {
        if (first.width !== (transform & 4 ? second.height : second.width) || first.height !== (transform & 4 ? second.width : second.height)) return false;
        if (first.source.variants) {
            if (first.source !== second.source) return false;
            const second_regions = variant_uv_regions(second);
            return variant_uv_regions(first).every((region, index) => equal_uv_regions(region, second_regions[index], transform));
        }
        const frame_count = first.source.atlas_frames?.length ?? first.source.frame_count;
        if (frame_count !== (second.source.atlas_frames?.length ?? second.source.frame_count)) return false;
        for (let frame = 0; frame < frame_count; frame++) {
            for (let y = 0; y < first.height; y++) for (let x = 0; x < first.width; x++) {
                if (uv_region_word(first, x, y, frame, 0) !== uv_region_word(second, x, y, frame, transform)) return false;
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
        if (region.source.variants) return variant_uv_regions(region).every((member, index) => transparent_uv_face({
            ...entry, region: member, scale: scale.map(value => value * region.source.variants[index].scale)
        }));
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
            for (let frame = 0; frame < region.source.frame_count; frame++) {
                if (!uv_region_word(region, x, y, frame, 0)) continue;
                if (!triangles || triangles.some(triangle => triangle_uses_uv_pixel(triangle, region.x + x, region.y + y))) return false;
                break;
            }
        }
        return true;
    }

    function atlas_source_error(texture) {
        if (texture.error || !texture.width || !texture.height || texture.canvas.width !== texture.width || texture.canvas.height !== texture.height) {
            return 'textures_still_loading_or_unavailable';
        }
        if (texture.layers_enabled || texture.group || texture.render_mode === 'layered') return 'layered_or_material_textures_preserved';
        if (!Number.isInteger(texture.height / (texture.frameCount || 1))) return 'flipbooks_with_fractional_frame_heights_preserved';
        if (texture.width * texture.height > atlas_pixel_limit) return 'textures_exceeding_the_safe_comparison_size';
        return null;
    }

    function read_atlas_source(texture) {
        const pixels = texture.ctx.getImageData(0, 0, texture.width, texture.height).data;
        const words = new Uint32Array(pixels.buffer, pixels.byteOffset, pixels.length / 4);
        const frame_count = texture.frameCount || 1;
        return {texture, width: texture.width, height: texture.height, frame_count,
            frame_height: texture.height / frame_count, pixels, words, regions: new Map(), hashes: new Map()};
    }

    function share_matching_region(region, hashes, rotate) {
        const hash = hash_uv_region(region);
        const match = hashes.get(hash)?.find(candidate => equal_uv_regions(region, candidate.region, candidate.transform));
        region.target = match?.region || region;
        region.transform = match?.transform || 0;
        if (match) return;
        for (let transform = 0; transform < (rotate ? 8 : 1); transform++) {
            const key = transform ? hash_uv_region(region, transform) : hash;
            if (!hashes.has(key)) hashes.set(key, []);
            hashes.get(key).push({region, transform});
        }
    }

    function plan_model_uvs(unique_faces = false, variant_source = null) {
        const sources = new Map();
        const skipped = new Map();
        const entries = [];
        function skip(reason) {
            skipped.set(reason, (skipped.get(reason) || 0) + 1);
        }
        for (const element of Outliner.elements) {
            if (!(element instanceof Cube || element instanceof Mesh)) continue;
            if (element instanceof Cube && element.box_uv && unique_faces) {
                skip(translate('box_uv_layouts_preserved'));
                continue;
            }
            for (const [key, face] of Object.entries(element.faces)) {
                if (face.texture === null) continue;
                const texture = face.getTexture();
                if (!(texture instanceof Texture)) continue;
                const source_error = atlas_source_error(texture);
                if (source_error) {
                    skip(translate(source_error));
                    continue;
                }
                const frame_count = variant_source?.frame_count || texture.frameCount || 1;
                const frame_height = variant_source?.frame_height ?? texture.height / frame_count;
                const frame_width = variant_source?.width ?? texture.width;
                if (unique_faces && frame_count > 1) {
                    skip(translate('animated_textures_preserved_when_separating_uvs'));
                    continue;
                }
                const points = element instanceof Cube ? [[face.uv[0], face.uv[1]], [face.uv[2], face.uv[3]]] : Object.values(face.uv);
                if (!points.length || points.some(point => !Array.isArray(point) || point.length !== 2 || point.some(value => !Number.isFinite(value)))) {
                    skip(translate('invalid_uv_coordinates'));
                    continue;
                }
                const scale = [frame_width / texture.getUVWidth(), frame_height / texture.getUVHeight()];
                const snap_pixel = value => Math.abs(value - Math.round(value)) < 1e-7 ? Math.round(value) : value;
                const min = [0, 1].map(axis => snap_pixel(Math.min(...points.map(point => point[axis] * scale[axis]))));
                const max = [0, 1].map(axis => snap_pixel(Math.max(...points.map(point => point[axis] * scale[axis]))));
                if (min.some(value => !Number.isFinite(value) || value < 0) || max[0] > frame_width || max[1] > frame_height) {
                    skip(translate('uvs_outside_the_texture_preserved'));
                    continue;
                }
                let source = sources.get(texture);
                if (!source) {
                    source = variant_source || read_atlas_source(texture);
                    sources.set(texture, source);
                }
                const sample_frame_edge = (variant_source || frame_count > 1) && !element.box_uv;
                const x = sample_frame_edge ? Math.floor(min[0]) : Math.min(source.width - 1, Math.floor(min[0]));
                const y = sample_frame_edge ? Math.floor(min[1]) : Math.min(frame_height - 1, Math.floor(min[1]));
                const width = Math.max(1, Math.ceil(max[0]) - x);
                const height = Math.max(1, Math.ceil(max[1]) - y);
                const independent = unique_faces || element.box_uv;
                const region_key = [x, y, width, height, ...(independent ? [element.uuid, key] : [])].join('_');
                let region = source.regions.get(region_key);
                if (!region) {
                    region = {source, x, y, width, height, key: texture.uuid + '_' + region_key};
                    region.target = region;
                    region.transform = 0;
                    if (!independent) share_matching_region(region, source.hashes, true);
                    source.regions.set(region_key, region);
                }
                const entry = {element, key, face, region, scale, edge_sample: [0, 1].map(axis => min[axis] === max[axis])};
                entry.transparent = !unique_faces && (element instanceof Cube ? region.transparent ??= transparent_uv_face(entry) : transparent_uv_face(entry));
                entries.push(entry);
            }
        }
        if (!unique_faces) group_box_uv_regions(entries);
        return {entries, skipped, sources};
    }

    function group_box_uv_regions(entries) {
        const boxes = new Map();
        const hashes = new Map();
        for (const entry of entries) {
            if (!(entry.element instanceof Cube) || !entry.element.box_uv) continue;
            if (!boxes.has(entry.element)) boxes.set(entry.element, []);
            boxes.get(entry.element).push(entry);
        }
        for (const [element, faces] of boxes) {
            const source = faces[0].region.source;
            const referenced = Object.values(element.faces).filter(face => face.texture !== null && face.getTexture() instanceof Texture);
            if (referenced.length !== faces.length || faces.some(entry => entry.region.source !== source)) {
                faces.forEach(entry => entry.unsupported_box = true);
                continue;
            }
            const visible = faces.filter(entry => !entry.transparent);
            if (!visible.length) continue;
            const x = Math.min(...visible.map(entry => entry.region.x));
            const y = Math.min(...visible.map(entry => entry.region.y));
            const width = Math.max(...visible.map(entry => entry.region.x + entry.region.width)) - x;
            const height = Math.max(...visible.map(entry => entry.region.y + entry.region.height)) - y;
            let region = {source, x, y, width, height, key: source.texture.uuid + '_box_' + element.uuid, mask: new Uint8Array(width * height), transform: 0};
            for (const entry of visible) {
                const face = entry.region;
                for (let row = 0; row < face.height; row++) region.mask.fill(1, (face.y - y + row) * width + face.x - x, (face.y - y + row) * width + face.x - x + face.width);
            }
            const hash = source.texture.uuid + '_' + hash_uv_region(region);
            const matches = hashes.get(hash) || [];
            region.target = matches.find(candidate => equal_uv_regions(region, candidate)) || region;
            if (region.target === region) {
                matches.push(region);
                hashes.set(hash, matches);
            } else if (region.target.x === x && region.target.y === y) region = region.target;
            const layout = {element, region, scale: faces[0].scale.slice(), offset: element.uv_offset.slice()};
            for (const entry of visible) {
                entry.region = region;
                entry.box_layout = layout;
            }
        }
    }

    function remap_texture_uv(entry, placement, plan) {
        const {region, face, element, scale} = entry;
        const transform = region.transform;
        const point = uv => {
            const local = [uv[0] * scale[0] - region.x, uv[1] * scale[1] - region.y].map(value => Math.abs(value - Math.round(value)) < 1e-7 ? Math.round(value) : value);
            entry.edge_sample?.forEach((edge, axis) => {
                if (edge) local[axis] = region.source.variants ? Math.max(local[axis], 0.5 / region.source.maximum_scale) : 0.5;
            });
            if (transform & 4) local.reverse();
            if (transform & 1) local[0] = region.target.width - local[0];
            if (transform & 2) local[1] = region.target.height - local[1];
            return [(local[0] + placement.x) / plan.width * plan.uv_width, (local[1] + placement.y) / plan.frame_height * plan.uv_height];
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

    function fit_padded_regions(regions, frame_width, frame_height, budget) {
        let free = [{x: 1, y: 1, width: frame_width - 1, height: frame_height - 1}];
        const placements = new Map();
        const size = Math.max(frame_width, frame_height);
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

    function greatest_common_divisor(first, second) {
        while (second) [first, second] = [second, first % second];
        return first;
    }

    function atlas_layout_limits(frame_count, scale = 1) {
        const max_side = Math.min(16384, Preview.selected?.renderer?.capabilities?.maxTextureSize || 16384);
        return {
            width: Math.floor(Math.min(4096, max_side) / scale),
            height: Math.floor(Math.min(4096, max_side / frame_count) / scale),
            area: Math.floor(atlas_pixel_limit / (frame_count * scale ** 2))
        };
    }

    function find_padded_layout(source, regions, {power, fixed_size, frame_ratio, allow_size}) {
        const area = regions.reduce((total, region) => total + (region.width + 1) * (region.height + 1), 0);
        const min_width = regions.reduce((width, region) => Math.max(width, region.width + 2), 1);
        const min_height = regions.reduce((height, region) => Math.max(height, region.height + 2), 1);
        const {width: max_width, height: max_height, area: max_area} = source.layout_limits || atlas_layout_limits(source.frame_count);
        if (min_width > max_width || min_height > max_height || area > max_area) return null;
        const budget = {remaining: 16000000};
        const orders = [
            regions.slice().sort((first, second) => Math.max(second.width, second.height) - Math.max(first.width, first.height) || second.width * second.height - first.width * first.height),
            regions.slice().sort((first, second) => second.width * second.height - first.width * first.height || second.height - first.height),
            regions.slice().sort((first, second) => second.height - first.height || second.width - first.width)
        ];
        const try_layout = (width, frame_height) => {
            if (allow_size && !allow_size(width, frame_height)) return null;
            for (const ordered of orders) {
                const placements = fit_padded_regions(ordered, width, frame_height, budget);
                if (placements) return {width, frame_height, placements};
                if (budget.remaining < 0) return null;
            }
            return null;
        };
        const round_up = size => Math.ceil(size / 16) * 16;
        const grow = size => size + Math.max(16, Math.floor(size / 128) * 16);
        const min_square = Math.max(min_width, min_height, Math.ceil(Math.sqrt(area)) + 1);
        const max_square = Math.min(max_width, max_height, Math.floor(Math.sqrt(max_area)));
        if (fixed_size) {
            const [width, frame_height] = fixed_size;
            return width >= min_width && frame_height >= min_height && width <= max_width && frame_height <= max_height
                && width * frame_height <= max_area ? try_layout(width, frame_height) : null;
        }
        if (frame_ratio) {
            const factor = greatest_common_divisor(...frame_ratio);
            const [unit_width, unit_height] = frame_ratio.map(size => size / factor);
            let multiple = Math.max(1, Math.ceil(min_width / unit_width), Math.ceil(min_height / unit_height));
            if (power) multiple = 2 ** Math.ceil(Math.log2(multiple));
            const maximum = Math.min(max_width / unit_width, max_height / unit_height,
                Math.sqrt(max_area / (unit_width * unit_height)));
            for (; multiple <= maximum && budget.remaining > 0; multiple = power ? multiple * 2 : multiple + 1) {
                const layout = try_layout(unit_width * multiple, unit_height * multiple);
                if (layout) return layout;
            }
            return null;
        }
        const start_size = Math.max(16, power ? 2 ** Math.ceil(Math.log2(min_square)) : round_up(min_square));
        for (let size = start_size; size <= max_square && budget.remaining > 0; size = power ? size * 2 : grow(size)) {
            const layout = try_layout(size, size);
            if (layout) return layout;
        }
        if (power || source.frame_count === 1 || !Format.per_texture_uv_size) return null;
        const lowest = round_up(Math.max(min_height, area / (max_width - 1) + 1));
        const highest = Math.floor(Math.min(max_height, max_area / round_up(min_width)) / 16) * 16;
        if (lowest > highest) return null;
        const preferred = Math.max(lowest, Math.min(highest, round_up(Math.sqrt(area) + 1)));
        let best = null;
        let best_area = max_area + 1;
        for (const frame_height of new Set([preferred, lowest, highest])) {
            const width_limit = Math.min(max_width, Math.floor((best_area - 1) / frame_height));
            for (let width = round_up(Math.max(min_width, area / (frame_height - 1) + 1)); width <= width_limit && budget.remaining > 0; width = grow(width)) {
                const layout = try_layout(width, frame_height);
                if (!layout) continue;
                best = layout;
                best_area = width * frame_height;
                break;
            }
        }
        return best;
    }

    function plan_padded_texture(source, entries, {unique_faces = false, extra_regions = [], ...layout_options}) {
        const regions = [...new Set([...entries.map(entry => unique_faces ? entry.region : entry.region.target), ...extra_regions])];
        const layout = find_padded_layout(source, regions, layout_options);
        return layout ? bake_padded_texture(source, layout) : null;
    }

    function bake_padded_texture(source, layout) {
        const {width, frame_height, placements} = layout;
        const height = frame_height * source.frame_count;
        const pixels = new Uint32Array(width * height);
        for (const [region, placement] of placements) {
            const original = region.source;
            const contiguous = !region.pixel_scale && region.x + region.width <= original.width;
            for (let frame = 0; frame < source.frame_count; frame++) {
                for (let y = 0; y < region.height; y++) {
                    const offset = uv_region_pixel(region, 0, y, frame);
                    const destination = (frame * frame_height + placement.y + y) * width + placement.x;
                    if (contiguous && !region.mask) {
                        pixels.set(original.words.subarray(offset, offset + region.width), destination);
                    } else {
                        for (let x = 0; x < region.width; x++) {
                            if (!uv_mask_contains(region, x, y)) continue;
                            const index = contiguous ? offset + x : uv_region_pixel(region, x, y, frame);
                            pixels[destination + x] = original.words[index];
                        }
                    }
                }
            }
        }
        return {...layout, height, pixels, source, border: 1};
    }

    function refresh_atlas_view() {
        Canvas.updateAllFaces();
        Canvas.updateAllUVs();
        const animated_textures = Texture.all.filter(texture => texture.frameCount > 1);
        if (animated_textures.length) TextureAnimator.update(animated_textures);
        UVEditor.loadData();
        UVEditor.vue.updateTexture();
        updateInterfacePanels();
        MenuBar.update();
    }

    function write_atlas_bitmap(texture, data_url, {width, height, pixels, uv_width, uv_height}) {
        texture.stopWatcher();
        texture.path = '';
        texture.sync_to_project = '';
        texture.keep_size = true;
        if (Format.per_texture_uv_size) {
            texture.uv_width = uv_width;
            texture.uv_height = uv_height;
        }
        texture.fromDataURL(data_url);
        texture.width = width;
        texture.height = height;
        texture.canvas.width = width;
        texture.canvas.height = height;
        const image = texture.ctx.createImageData(width, height);
        image.data.set(new Uint8ClampedArray(pixels.buffer, pixels.byteOffset, pixels.byteLength));
        texture.ctx.putImageData(image, 0, 0);
        texture.updateMaterial();
    }

    function atlas_data_url(plan) {
        const canvas = document.createElement('canvas');
        canvas.width = plan.width;
        canvas.height = plan.height;
        const context = canvas.getContext('2d');
        const image = context.createImageData(plan.width, plan.height);
        image.data.set(new Uint8ClampedArray(plan.pixels.buffer));
        context.putImageData(image, 0, 0);
        return canvas.toDataURL('image/png');
    }

    function apply_atlas_uvs(plan, texture = null) {
        const moved_boxes = new Set();
        for (const entry of plan.entries) {
            const placement = plan.placements.get(entry.region.target);
            if (entry.box_layout) {
                const layout = entry.box_layout;
                if (!moved_boxes.has(layout)) {
                    const density = [plan.width / plan.uv_width, plan.frame_height / plan.uv_height];
                    layout.element.uv_offset = layout.offset.map((value, axis) =>
                        value + [placement.x, placement.y][axis] / density[axis] - [layout.region.x, layout.region.y][axis] / layout.scale[axis]);
                    moved_boxes.add(layout);
                }
            } else remap_texture_uv(entry, placement, plan);
            if (texture) entry.face.texture = texture.uuid;
        }
        for (const entry of plan.hidden_entries) {
            if (entry.element instanceof Cube) entry.face.texture = null;
            else delete entry.element.faces[entry.key];
        }
    }

    function preserves_flipbook_frames(source, width, frame_height, [uv_width, uv_height]) {
        const candidate = Object.create(source.texture, {
            width: {value: width}, height: {value: frame_height * source.frame_count},
            getUVWidth: {value: () => uv_width}, getUVHeight: {value: () => uv_height}
        });
        return (candidate.frameCount || 1) === source.frame_count;
    }

    function find_texture_repack_layout(source, entries, {power, unique_faces = false, preserve_size = false, allow_size}) {
        const uv_width = source.texture.getUVWidth();
        const uv_height = source.texture.getUVHeight();
        const original_uv_size = [uv_width, uv_height];
        const frame_ratio = Format.animated_textures && uv_width !== uv_height ? [uv_width, uv_height] : null;
        const original_size = [source.width, source.frame_height];
        const uv_size_for = (width, frame_height) => [width, frame_height].map((size, axis) =>
            size === original_size[axis] ? original_uv_size[axis] : size * original_uv_size[axis] / original_size[axis]);
        const compatible_size = (width, frame_height) => {
            const uv_size = uv_size_for(width, frame_height);
            return uv_size.every((size, axis) => size > 0 && Number.isFinite(size) &&
                (size === original_uv_size[axis] || Number.isSafeInteger(size))) && allow_size(width, frame_height, uv_size);
        };
        const keep_frame_size = preserve_size || entries.some(entry => entry.box_layout) ||
            (frame_ratio && Format.texture_mcmeta && source.frame_count > 1) ||
            frame_ratio?.some(size => !Number.isSafeInteger(size) || size < 1);
        const fixed_size = keep_frame_size ? original_size : null;
        const regions = [...new Set(entries.map(entry => unique_faces ? entry.region : entry.region.target))];
        const layout = find_padded_layout(source, regions, {power, frame_ratio, fixed_size, allow_size: compatible_size}) ||
            (!fixed_size && !unique_faces && find_padded_layout(source, regions, {fixed_size: original_size, allow_size: compatible_size}));
        if (!layout) return null;
        const [optimized_uv_width, optimized_uv_height] = uv_size_for(layout.width, layout.frame_height);
        return {...layout, uv_width: optimized_uv_width, uv_height: optimized_uv_height};
    }

    function plan_texture_repack({source, entries, hidden_entries}, unique_faces, preserve_size) {
        const layout = find_texture_repack_layout(source, entries, {
            power: !!plugin_settings.atlas_power.value || source.texture.wrap_mode === 'repeat',
            unique_faces,
            preserve_size,
            allow_size: (width, height, uv_size) => preserves_flipbook_frames(source, width, height, uv_size)
        });
        return layout ? {...layout, source, entries, hidden_entries} : null;
    }

    function optimize_texture_atlas(unique_faces = false) {
        if (!Project) return;
        if (active_session || Undo.current_save) return atlas_message(translate('finish_the_current_edit_or_recording_before_rebuilding_textures'));
        if (Texture.all.some(texture => texture.render_mode === 'layered')) return atlas_message(translate('layered_texture_compositing_is_active_the_texture_stack_was_pres'));
        if (Texture.all.length > 1 && Format.single_texture && !Format.per_group_texture) {
            return unique_faces ? atlas_message(translate('atlas_variants_unavailable_for_independent_faces')) : optimize_texture_variants();
        }
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
            const candidates = [];
            for (const [texture, entries] of grouped) {
                let references = 0;
                let unsupported = false;
                for (const element of Outliner.elements) {
                    if (element instanceof Cube || element instanceof Mesh) references += Object.values(element.faces).filter(face => face.texture !== null && face.getTexture() === texture).length;
                    else if (element.texture === texture.uuid) unsupported = true;
                }
                if (unsupported || references !== entries.length || entries.some(entry => entry.unsupported_box)) {
                    skipped.push(texture.name + translate('some_uvs_or_element_types_require_the_original_layout'));
                    continue;
                }
                candidates.push({
                    source: entries[0].region.source, entries: entries.filter(entry => !entry.transparent),
                    hidden_entries: unique_faces ? [] : entries.filter(entry => entry.transparent)
                });
            }

            plans = candidates.map(candidate => plan_texture_repack(candidate, unique_faces));
            if (!Format.per_texture_uv_size && Texture.all.length > 1 &&
                (plans.length !== Texture.all.length || plans.some(plan => !plan ||
                    plan.uv_width !== plans[0].uv_width || plan.uv_height !== plans[0].uv_height))) {
                plans = candidates.map(candidate => plan_texture_repack(candidate, unique_faces, true));
            }
            plans = plans.filter((plan, index) => {
                if (plan) return true;
                const reason = unique_faces ? 'independent_uvs_unavailable' : 'layout_does_not_fit_original_density';
                skipped.push(candidates[index].source.texture.name + ' - ' + translate(reason));
                return false;
            }).map(plan => bake_padded_texture(plan.source, plan));
        } catch (error) {
            return atlas_message(translate('no_changes_were_made') + error_message(error), true);
        }
        if (!plans.length) return atlas_message(translate(unique_faces ? 'independent_uvs_unavailable' : 'no_compatible_square_texture_could_be_rebuilt_without_enlargemen') + (skipped.length ? '\n\n' + skipped.join('\n') : ''));
        if (!unique_faces) {
            const shared_grid_changes = !Format.per_texture_uv_size &&
                plans.some(plan => plan.uv_width !== Project.texture_width || plan.uv_height !== Project.texture_height);
            if (!shared_grid_changes) plans = plans.filter(plan => texture_plan_changes(plan) || uv_plan_changes(plan));
            if (!plans.length) return atlas_message(translate('no_additional_pixel_identical_uv_regions_were_found_original_tex') + (skipped.length ? '\n\n' + skipped.join('\n') : ''));
        }
        return commit_texture_optimization(plans, {unique_faces, previous_backup, skipped});
    }

    function uv_plan_changes(plan) {
        if (plan.hidden_entries.length) return true;
        return plan.entries.some(entry => {
            const region = entry.region;
            const placement = plan.placements.get(region.target);
            return region.target !== region || !placement || placement.x !== region.x || placement.y !== region.y;
        });
    }

    function texture_plan_changes(plan) {
        if (plan.width !== plan.source.width || plan.height !== plan.source.height) return true;
        return plan.source.words.some((pixel, index) => pixel !== plan.pixels[index]);
    }

    function commit_texture_optimization(plans, {unique_faces = false, previous_backup, skipped = [], shared_uv_plan}) {
        const uv_plans = shared_uv_plan ? [shared_uv_plan] : plans;
        const mode = shared_uv_plan ? 'texture_variants' : unique_faces ? 'independent_faces' : 'square_atlas';
        const affected_entries = uv_plans.flatMap(plan => [...plan.entries, ...plan.hidden_entries]);
        const elements = [...new Set(affected_entries.map(entry => entry.element))];
        const textures = plans.map(plan => plan.source.texture);
        const optimized_width = Format.per_texture_uv_size ? Project.texture_width : uv_plans[0].uv_width;
        const optimized_height = Format.per_texture_uv_size ? Project.texture_height : uv_plans[0].uv_height;
        const backup = {
            version: 3,
            mode,
            format: Format.id,
            width: Project.texture_width,
            height: Project.texture_height,
            optimized_width,
            optimized_height,
            previous_backup,
            textures: textures.map(texture => ({...texture.getUndoCopy(true), image_data: texture.canvas.toDataURL('image/png')})),
            optimized_textures: plans.map(plan => ({
                uuid: plan.source.texture.uuid, width: plan.width, height: plan.height,
                uv_width: plan.uv_width, uv_height: plan.uv_height
            })),
            elements: Object.fromEntries(elements.map(element => [element.uuid, capture_texture_uv(element)])),
            removed_faces: Object.fromEntries(elements.filter(element => element instanceof Mesh).map(element => [element.uuid, Object.fromEntries(uv_plans.flatMap(plan => plan.hidden_entries).filter(entry => entry.element === element).map(entry => [entry.key, entry.face.getUndoCopy()]))]).filter(([, faces]) => Object.keys(faces).length))
        };
        const aspects = {elements, textures, bitmap: true, uv_only: true, uv_mode: true, raven_tools_atlas: true};
        Undo.initEdit(aspects);
        try {
            Project.texture_width = optimized_width;
            Project.texture_height = optimized_height;
            for (const plan of plans) {
                write_atlas_bitmap(plan.source.texture, atlas_data_url(plan), plan);
            }
            uv_plans.forEach(plan => apply_atlas_uvs(plan));
            elements.forEach(element => element[backup_key] = {});
            elements.filter(element => backup.removed_faces[element.uuid]).forEach(element => Mesh.preview_controller.updateGeometry(element));
            Project[atlas_backup_key] = backup;
            refresh_atlas_view();
            Undo.finishEdit(translate(shared_uv_plan ? 'optimize_texture_variants' : unique_faces ? 'separate_face_uvs' : 'rebuild_textures_and_share_matching_uvs'), aspects);
        } catch (error) {
            Undo.cancelEdit(true);
            refresh_atlas_view();
            return atlas_message(translate('texture_repacking_was_cancelled') + error_message(error), true);
        }
        const original_pixels = plans.reduce((area, plan) => area + plan.source.width * plan.source.height, 0);
        const atlas_pixels = plans.reduce((area, plan) => area + plan.width * plan.height, 0);
        const regions_before = uv_plans.reduce((count, plan) => count + new Set([...plan.entries, ...plan.hidden_entries].map(entry => entry.region)).size, 0);
        const regions_after = uv_plans.reduce((count, plan) => count + plan.placements.size, 0);
        const faces_disabled = uv_plans.reduce((count, plan) => count + plan.hidden_entries.length, 0);
        const box_layouts = new Set(uv_plans.flatMap(plan => plan.entries.filter(entry => entry.box_layout).map(entry => entry.element))).size;
        const result = {changed: true, mode, original_pixels, atlas_pixels, reduction: 1 - atlas_pixels / original_pixels, regions_before, regions_after, faces_disabled, box_layouts, textures: plans.map(plan => ({name: plan.source.texture.name, before: [plan.source.width, plan.source.height], after: [plan.width, plan.height], frame_count: plan.source.frame_count, border: plan.border, regions: plan.placements.size})), skipped};
        const dimensions = result.textures.map(texture => texture.name + ' : ' + texture.before.join(' × ') + ' → ' + texture.after.join(' × ') + (texture.frame_count > 1 ? ' (' + texture.frame_count + translate('flipbook_frames_preserved') + ')' : '')).join('\n');
        if (unique_faces) {
            atlas_message(dimensions + '\n\n' + translate('independent_uvs_created') + (previous_backup.version ? '\n\n' + translate('previous_backups_preserved') : '') + (skipped.length ? '\n\n' + skipped.join('\n') : ''));
            return result;
        }
        atlas_message(dimensions + translate('uv_regions') + regions_before + ' → ' + regions_after + '.\n' + translate('model_uv_density_preserved') + (faces_disabled ? '\n' + translate('transparent_faces_disabled') + faces_disabled + '.' : '') + translate('identical_regions_are_shared_including_rotated_or_mirrored_match') + (box_layouts ? translate('box_uv_modes_preserved') : '') + (shared_uv_plan ? '\n\n' + translate('atlas_variants_shared_layout') : '') + (previous_backup.version ? '\n\n' + translate('previous_backups_preserved') : '') + (skipped.length ? '\n\n' + skipped.join('\n') : ''));
        return result;
    }

    function plan_texture_variants(textures) {
        const referenced = new Set();
        for (const element of Outliner.elements) {
            const faces = Object.values(element.faces || {});
            if (!(element instanceof Cube || element instanceof Mesh)) {
                if (textures.some(texture => element.texture === texture || element.texture === texture.uuid) ||
                    faces.some(face => face.texture !== null && face.getTexture?.() instanceof Texture)) {
                    throw new Error(translate('atlas_merge_unmapped_faces'));
                }
                continue;
            }
            for (const face of faces) {
                if (face.texture === null) continue;
                const texture = face.getTexture();
                if (texture instanceof Texture) referenced.add(texture);
                else if (typeof face.texture === 'string') throw new Error(translate('atlas_merge_unmapped_faces'));
            }
        }
        const [reference] = referenced;
        if (referenced.size !== 1 || !textures.includes(reference)) throw new Error(translate('atlas_variants_need_one_uv_layout'));
        for (const texture of textures) {
            const reason = atlas_source_error(texture);
            if (reason) throw new Error(texture.name + ' - ' + translate(reason));
            if (texture.getUVWidth() !== reference.getUVWidth() || texture.getUVHeight() !== reference.getUVHeight()) {
                throw new Error(translate('atlas_variants_need_one_uv_layout'));
            }
        }
        const sources = textures.map(read_atlas_source);
        const width = sources.map(source => source.width).reduce(greatest_common_divisor);
        const frame_height = sources.map(source => source.frame_height).reduce(greatest_common_divisor);
        const variants = sources.map(source => ({source, scale: source.width / width}));
        if (variants.some(({source, scale}) => scale !== source.frame_height / frame_height)) {
            throw new Error(translate('atlas_variants_need_one_uv_layout'));
        }
        const limits = variants.map(({source, scale}) => atlas_layout_limits(source.frame_count, scale));
        const shared = {
            texture: reference, width, frame_height, frame_count: Math.max(...sources.map(source => source.frame_count)),
            regions: new Map(), hashes: new Map(), variants, maximum_scale: Math.max(...variants.map(variant => variant.scale)),
            layout_limits: Object.fromEntries(['width', 'height', 'area'].map(key => [key, Math.min(...limits.map(limit => limit[key]))]))
        };
        const {entries, skipped} = plan_model_uvs(false, shared);
        if (skipped.size || entries.some(entry => entry.unsupported_box)) {
            throw new Error(translate('atlas_merge_unmapped_faces') + (skipped.size ? '\n' + [...skipped.keys()].join('\n') : ''));
        }
        const visible_entries = entries.filter(entry => !entry.transparent);
        const hidden_entries = entries.filter(entry => entry.transparent);
        const layout = find_texture_repack_layout(shared, visible_entries, {
            power: !!plugin_settings.atlas_power.value || textures.some(texture => texture.wrap_mode === 'repeat'),
            allow_size: (width, height, uv_size) => variants.every(({source, scale}) =>
                preserves_flipbook_frames(source, width * scale, height * scale, uv_size))
        });
        if (!layout) throw new Error(translate('layout_does_not_fit_original_density'));
        const plans = variants.map(({source, scale}, index) => {
            const width = layout.width * scale;
            const frame_height = layout.frame_height * scale;
            const placements = new Map([...layout.placements].map(([region, location]) => [
                variant_uv_regions(region)[index], {x: location.x * scale, y: location.y * scale}
            ]));
            return bake_padded_texture(source, {width, frame_height, placements, uv_width: layout.uv_width, uv_height: layout.uv_height});
        });
        return {plans, shared_uv_plan: {...layout, entries: visible_entries, hidden_entries}};
    }

    function optimize_texture_variants() {
        if (!Project || Texture.all.length < 2) return;
        if (active_session || Undo.current_save) return atlas_message(translate('finish_the_current_edit_or_recording_before_rebuilding_textures'));
        let prepared;
        try {
            prepared = plan_texture_variants(Texture.all.slice());
        } catch (error) {
            return atlas_message(translate('no_changes_were_made') + error_message(error), true);
        }
        const {plans, shared_uv_plan} = prepared;
        if (!plans.some(texture_plan_changes) && !uv_plan_changes(shared_uv_plan)) {
            return atlas_message(translate('no_additional_pixel_identical_uv_regions_were_found_original_tex'));
        }
        return commit_texture_optimization(plans, {
            shared_uv_plan,
            previous_backup: structuredClone(Project[atlas_backup_key] || {})
        });
    }

    function merge_flipbook_frames(sources) {
        const animated = sources.filter(source => source.frame_count > 1);
        const texture = (animated[0] || sources[0]).texture;
        const mode = {fps: texture.fps, frame_time: texture.frame_time, frame_order_type: texture.frame_order_type,
            frame_order: texture.frame_order, frame_interpolate: texture.frame_interpolate};
        const clock = Format.texture_mcmeta ? 'frame_time' : 'fps';
        const same_order = source => source.texture.frame_order_type === texture.frame_order_type &&
            (texture.frame_order_type !== 'custom' || source.texture.frame_order === texture.frame_order);
        const playback = animated.map(source => {
            const order = source.texture.getAnimationFrameIndices() ?? Array.from({length: source.frame_count}, (_, index) => index);
            const valid = order.length && order.every(index => Number.isInteger(typeof index === 'object' ? index.index : index) &&
                (typeof index === 'object' ? index.index : index) >= 0 && (typeof index === 'object' ? index.index : index) < source.frame_count &&
                (typeof index !== 'object' || Number.isSafeInteger(index.time) && index.time > 0));
            if (!valid) throw new Error(translate('atlas_merge_incompatible_animation'));
            return {source, order, speed: source.texture[clock]};
        });
        let frame_count = animated[0]?.frame_count || 1;
        if (frame_count > 1024) throw new Error(translate('atlas_merge_animation_too_large'));
        if (animated.every(source => source.frame_count === frame_count && source.texture[clock] === texture[clock] &&
            source.texture.frame_interpolate === texture.frame_interpolate && same_order(source))) {
            for (const source of sources) source.atlas_frames = Array.from({length: frame_count}, (_, index) => source.frame_count === 1 ? 0 : index);
            return {frame_count, mode};
        }
        if (playback.some(({source, order, speed}) => source.texture.frame_interpolate !== mode.frame_interpolate ||
            order.some(index => typeof index === 'object') || !Number.isSafeInteger(speed) || speed < 1) ||
            mode.frame_interpolate && playback.some(({speed}) => speed !== mode[clock])) {
            throw new Error(translate('atlas_merge_incompatible_animation'));
        }
        const lcm = (first, second) => first / greatest_common_divisor(first, second) * second;
        mode[clock] = playback.map(entry => entry.speed).reduce(Format.texture_mcmeta ? greatest_common_divisor : lcm);
        if (!Number.isSafeInteger(mode[clock])) throw new Error(translate('atlas_merge_animation_too_large'));
        const steps = playback.map(entry => Format.texture_mcmeta ? entry.speed / mode[clock] : mode[clock] / entry.speed);
        frame_count = playback.reduce((count, entry, index) => lcm(count, steps[index] * entry.order.length), 1);
        if (!Number.isSafeInteger(frame_count) || frame_count > 1024) throw new Error(translate('atlas_merge_animation_too_large'));
        for (const source of sources) {
            const index = playback.findIndex(entry => entry.source === source);
            source.atlas_frames = index < 0 ? Array(frame_count).fill(0)
                : Array.from({length: frame_count}, (_, frame) => playback[index].order[Math.floor(frame / steps[index]) % playback[index].order.length]);
        }
        mode.frame_order_type = 'loop';
        mode.frame_order = '';
        return {frame_count, mode};
    }

    function merged_box_density(box_entries) {
        if (!box_entries.length) return [1, 1];
        return [0, 1].map(axis => {
            const maximum = Math.max(...box_entries.map(entry => entry.scale[axis]));
            for (let multiple = 1; multiple <= 16; multiple++) {
                const density = maximum * multiple;
                if (box_entries.every(entry => {
                    const factor = density / entry.scale[axis];
                    return Number.isFinite(factor) && Math.abs(factor - Math.round(factor)) < 1e-9;
                })) return density;
            }
            throw new Error(translate('atlas_merge_box_density'));
        });
    }

    function scale_box_regions(box_entries, density, frame_count) {
        const scaled = new Map();
        for (const entry of box_entries) {
            const original = entry.region;
            if (!scaled.has(original)) {
                const pixel_scale = density.map((value, axis) => Math.round(value / entry.scale[axis]));
                if (pixel_scale.every(scale => scale === 1)) {
                    scaled.set(original, original);
                } else {
                    const width = original.width * pixel_scale[0], height = original.height * pixel_scale[1];
                    if (width > 4096 || height > 4096 || width * height * frame_count > atlas_pixel_limit) {
                        throw new Error(translate('atlas_merge_box_density'));
                    }
                    const mask = new Uint8Array(width * height);
                    for (let y = 0; y < height; y++) for (let x = 0; x < width; x++) {
                        mask[y * width + x] = original.mask[Math.floor(y / pixel_scale[1]) * original.width + Math.floor(x / pixel_scale[0])];
                    }
                    scaled.set(original, {...original, width, height, mask, pixel_scale});
                }
            }
            entry.region = scaled.get(original);
        }
    }

    function plan_merged_atlas(textures) {
        const first = textures[0];
        const settings = ['render_mode', 'render_sides', 'wrap_mode', 'force_translucent', 'pbr_channel', 'scope'];
        if (textures.some(texture => settings.some(key => texture[key] !== first[key]))) {
            throw new Error(translate('atlas_merge_incompatible_rendering'));
        }
        for (const texture of textures) {
            const reason = atlas_source_error(texture);
            if (reason) throw new Error(texture.name + ' - ' + translate(reason));
        }
        const {entries, sources, skipped} = plan_model_uvs();
        const unmapped = Outliner.elements.some(element => {
            const faces = Object.values(element.faces || {});
            if (!(element instanceof Cube || element instanceof Mesh)) {
                return textures.some(texture => element.texture === texture || element.texture === texture.uuid) ||
                    faces.some(face => face.texture !== null && face.getTexture?.() instanceof Texture);
            }
            return faces.some(face => face.texture !== null && typeof face.texture === 'string' && !(face.getTexture() instanceof Texture));
        });
        if (skipped.size || unmapped || entries.some(entry => entry.unsupported_box)) {
            throw new Error(translate('atlas_merge_unmapped_faces') + (skipped.size ? '\n' + [...skipped.keys()].join('\n') : ''));
        }
        const box_entries = entries.filter(entry => entry.box_layout);
        const box_scale = merged_box_density(box_entries);
        const unused_regions = [];
        for (const texture of textures) {
            if (sources.has(texture)) continue;
            const source = read_atlas_source(texture);
            sources.set(texture, source);
            const region = {source, x: 0, y: 0, width: source.width, height: source.frame_height};
            region.target = region;
            unused_regions.push(region);
        }
        const playback = merge_flipbook_frames([...sources.values()]);
        scale_box_regions(box_entries, box_scale, playback.frame_count);
        const visible = entries.filter(entry => !entry.transparent);
        const hashes = new Map();
        const box_hashes = new Map();
        for (const region of new Set(visible.map(entry => entry.region))) {
            const is_box = !!region.mask;
            share_matching_region(region, is_box ? box_hashes : hashes, !is_box);
        }
        const power = !!plugin_settings.atlas_power.value || first.wrap_mode === 'repeat';
        const uv_width = first.getUVWidth();
        const uv_height = first.getUVHeight();
        const frame_ratio = Format.animated_textures && uv_width !== uv_height ? [uv_width, uv_height] : null;
        const frame_size = box_entries.length ? [uv_width * box_scale[0], uv_height * box_scale[1]] : frame_ratio;
        const explicit_mcmeta_size = frame_ratio && Format.texture_mcmeta && playback.frame_count > 1;
        const fixed_size = box_entries.length || explicit_mcmeta_size ? frame_size : null;
        if (frame_ratio?.some(size => !Number.isInteger(size) || size < 1) ||
            fixed_size?.some(size => !Number.isSafeInteger(size) || size < 1) ||
            (explicit_mcmeta_size && fixed_size.some((size, axis) => size !== frame_ratio[axis]))) {
            throw new Error(translate('flipbook_frame_layout_incompatible'));
        }
        const plan = plan_padded_texture(playback, visible, {power, fixed_size, frame_ratio, extra_regions: unused_regions});
        if (!plan) throw new Error(translate(playback.frame_count > 1 ? 'atlas_merge_animation_too_large'
            : 'no_compatible_square_texture_could_be_rebuilt_without_enlargemen'));
        const candidate = Object.create(first, {
            width: {value: plan.width}, height: {value: plan.height},
            getUVWidth: {value: () => uv_width}, getUVHeight: {value: () => uv_height}
        });
        if ((candidate.frameCount || 1) !== playback.frame_count) throw new Error(translate('flipbook_frame_layout_incompatible'));
        return {...plan, entries: visible, uv_width, uv_height, hidden_entries: entries.filter(entry => entry.transparent), ...playback};
    }

    function merge_texture_atlas() {
        if (!Project || Texture.all.length < 2) return;
        if (active_session || Undo.current_save) return atlas_message(translate('finish_the_current_edit_or_recording_before_rebuilding_textures'));
        if (Format.single_texture && !Format.per_group_texture) return atlas_message(translate('atlas_merge_single_texture_format'));
        const textures = Texture.all.slice();
        const ids = new Set(textures.map(texture => texture.uuid));
        let plan;
        let data_url;
        try {
            plan = plan_merged_atlas(textures);
            data_url = atlas_data_url(plan);
        } catch (error) {
            return atlas_message(translate('no_changes_were_made') + error_message(error), true);
        }
        const elements = [...new Set([...plan.entries, ...plan.hidden_entries].map(entry => entry.element))];
        const groups = Group.all.filter(group => ids.has(group.texture));
        const first = textures[0];
        const atlas = new Texture({
            name: translate('atlas_merge_name') + '.png', folder: first.folder, namespace: first.namespace, scope: first.scope,
            uv_width: plan.uv_width, uv_height: plan.uv_height,
            render_mode: first.render_mode, render_sides: first.render_sides, wrap_mode: first.wrap_mode, pbr_channel: first.pbr_channel,
            force_translucent: first.force_translucent, particle: textures.some(texture => texture.particle),
            use_as_default: textures.some(texture => texture.use_as_default), ...plan.mode
        });
        const backup = {
            version: 4, format: Format.id, width: Project.texture_width, height: Project.texture_height,
            optimized_width: Project.texture_width, optimized_height: Project.texture_height,
            previous_backup: structuredClone(Project[atlas_backup_key] || {}),
            order: [...ids], selected: Texture.selected?.uuid || null,
            textures: textures.map(texture => ({...texture.getUndoCopy(true), image_data: texture.canvas.toDataURL('image/png')})),
            optimized_textures: [{uuid: atlas.uuid, width: plan.width, height: plan.height}],
            groups: Object.fromEntries(groups.map(group => [group.uuid, group.texture])),
            elements: Object.fromEntries(elements.map(element => [element.uuid, capture_texture_uv(element)])),
            removed_faces: Object.fromEntries(elements.filter(element => element instanceof Mesh)
                .map(element => [element.uuid, Object.fromEntries(plan.hidden_entries.filter(entry => entry.element === element)
                    .map(entry => [entry.key, entry.face.getUndoCopy()]))]).filter(([, faces]) => Object.keys(faces).length))
        };
        const aspects = {elements, groups, textures, bitmap: true, uv_only: true, uv_mode: true, texture_order: true, selected_texture: true, raven_tools_atlas: true};
        Undo.initEdit(aspects);
        try {
            write_atlas_bitmap(atlas, data_url, plan);
            atlas.add(false);
            apply_atlas_uvs(plan, atlas);
            groups.forEach(group => group.texture = atlas.uuid);
            textures.forEach(texture => texture.remove(true));
            atlas.select();
            elements.forEach(element => element[backup_key] = {});
            elements.filter(element => backup.removed_faces[element.uuid]).forEach(element => Mesh.preview_controller.updateGeometry(element));
            Project[atlas_backup_key] = backup;
            refresh_atlas_view();
            Undo.finishEdit(translate('merge_textures_into_atlas'), {...aspects, textures: [atlas]});
        } catch (error) {
            aspects.textures = Texture.all.filter(texture => ids.has(texture.uuid) || texture === atlas);
            Undo.cancelEdit(true);
            refresh_atlas_view();
            return atlas_message(translate('texture_repacking_was_cancelled') + error_message(error), true);
        }
        atlas_message(textures.length + ' → 1\u00a0: ' + plan.width + ' × ' + plan.height +
            (plan.frame_count > 1 ? ' (' + plan.frame_count + translate('atlas_merge_cycle_frames') + ')' : ''));
        return {changed: true, textures: textures.length, frame_count: plan.frame_count, atlas: atlas.uuid};
    }

    function restore_merged_atlas(backup) {
        if (active_session || Undo.current_save) return atlas_message(translate('finish_the_current_edit_or_recording_before_restoring_textures'));
        if (backup.format !== Format.id || Project.texture_width !== backup.optimized_width || Project.texture_height !== backup.optimized_height) {
            return atlas_restore_blocked(translate('undo_the_project_format_or_uv_resolution_change_before_restoring'));
        }
        const [optimized] = backup.optimized_textures;
        const atlas = Texture.all.find(texture => texture.uuid === optimized.uuid);
        if (!atlas || atlas.width !== optimized.width || atlas.height !== optimized.height) {
            return atlas_restore_blocked(translate('an_optimized_texture_is_missing_or_has_a_different_resolution_un'));
        }
        if (backup.textures.some(saved => Texture.all.some(texture => texture.uuid === saved.uuid))) {
            return atlas_restore_blocked(translate('an_original_texture_identifier_is_already_in_use_undo_the_textur'));
        }
        const groups = Group.all.filter(group => Object.hasOwn(backup.groups, group.uuid));
        const elements = Outliner.elements.filter(element => Object.hasOwn(backup.elements, element.uuid));
        if (elements.some(element => !texture_uv_topology_matches(element, backup.elements[element.uuid], backup.removed_faces?.[element.uuid]))) {
            return atlas_restore_blocked(translate('an_optimized_element_has_different_faces_or_vertices_undo_its_to'));
        }
        const shared_size_changed = !Format.per_texture_uv_size && (backup.width !== backup.optimized_width || backup.height !== backup.optimized_height);
        const new_reference = Outliner.elements.some(element => !backup.elements[element.uuid] && (element.faces
            ? Object.values(element.faces).some(face => face.getTexture() === atlas || shared_size_changed && face.getTexture() instanceof Texture)
            : element.texture === atlas.uuid));
        if (new_reference || Group.all.some(group => !Object.hasOwn(backup.groups, group.uuid) && group.texture === atlas.uuid)) {
            return atlas_restore_blocked(translate('new_geometry_uses_an_optimized_texture_undo_that_addition_before'));
        }
        const restored = [];
        const aspects = {elements, groups, textures: [atlas], bitmap: true, uv_only: true, uv_mode: true, texture_order: true, selected_texture: true, raven_tools_atlas: true};
        Undo.initEdit(aspects);
        try {
            Project.texture_width = backup.width;
            Project.texture_height = backup.height;
            for (const saved of backup.textures) {
                const texture = new Texture({...saved, path: '', sync_to_project: '', saved: false}, saved.uuid);
                texture.keep_size = true;
                texture.fromDataURL(saved.image_data || saved.source).add(false);
                restored.push(texture);
            }
            groups.forEach(group => group.texture = backup.groups[group.uuid]);
            elements.forEach(element => apply_texture_uv(element, backup.elements[element.uuid], backup.removed_faces?.[element.uuid]));
            atlas.remove(true);
            const order = [...backup.order, ...Texture.all.filter(texture => !backup.order.includes(texture.uuid)).map(texture => texture.uuid)];
            Texture.all.sort((first, second) => order.indexOf(first.uuid) - order.indexOf(second.uuid));
            (Texture.all.find(texture => texture.uuid === backup.selected) || restored[0])?.select();
            Project[atlas_backup_key] = structuredClone(backup.previous_backup || {});
            refresh_atlas_view();
            Undo.finishEdit(translate('restore_original_textures_and_uvs'), {...aspects, textures: restored});
        } catch (error) {
            aspects.textures = Texture.all.filter(texture => texture === atlas || restored.includes(texture));
            Undo.cancelEdit(true);
            refresh_atlas_view();
            return atlas_message(translate('texture_restoration_was_cancelled') + error_message(error), true);
        }
        Blockbench.showQuickMessage(translate('original_textures_and_uvs_restored'), 4000);
        return {changed: true, textures: restored.length, elements: elements.length};
    }

    function restore_square_atlas(backup) {
        if (active_session || Undo.current_save) return atlas_message(translate('finish_the_current_edit_or_recording_before_restoring_textures'));
        if (backup.mode === 'texture_variants' && Texture.all.length !== backup.textures.length) {
            return atlas_restore_blocked(translate('atlas_variants_set_changed'));
        }
        if (backup.format !== Format.id || Project.texture_width !== backup.optimized_width || Project.texture_height !== backup.optimized_height) return atlas_restore_blocked(translate('undo_the_project_format_or_uv_resolution_change_before_restoring'));
        const textures = backup.textures.map(saved => Texture.all.find(texture => texture.uuid === saved.uuid));
        if (textures.some((texture, index) => {
            const expected = backup.optimized_textures[index];
            return !texture || texture.width !== expected.width || texture.height !== expected.height ||
                (expected.uv_width !== undefined && texture.getUVWidth() !== expected.uv_width) ||
                (expected.uv_height !== undefined && texture.getUVHeight() !== expected.uv_height);
        })) return atlas_restore_blocked(translate('an_optimized_texture_is_missing_or_has_a_different_resolution_un'));
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
        if (backup?.version === 4) return restore_merged_atlas(backup);
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

    function supports_tint_preview() {
        return !!(Project && Format.java_face_properties);
    }

    function tint_scope(cube, entire_cube) {
        const faces = entire_cube ? Object.values(cube.faces) : UVEditor.getSelectedFaces(cube).map(side => cube.faces[side]);
        return faces.filter(face => face && face.texture !== null);
    }

    function sync_tint_toggles() {
        if (!supports_tint_preview()) return;
        for (const [id, entire_cube] of [['modeler_toolkit_tint_faces', false], ['modeler_toolkit_tint_cube', true]]) {
            const toggle = BarItems[id];
            if (!toggle) continue;
            const faces = Cube.selected.flatMap(cube => tint_scope(cube, entire_cube));
            toggle.value = faces.length > 0 && faces.every(face => face.tint >= 0);
            toggle.updateEnabledState();
        }
    }

    function change_selected_tint(enabled, entire_cube) {
        if (!supports_tint_preview() || Undo.current_save) {
            sync_tint_toggles();
            return;
        }
        const changes = new Map();
        for (const cube of Cube.selected) {
            const faces = tint_scope(cube, entire_cube).filter(face => (face.tint >= 0) !== enabled);
            if (faces.length) changes.set(cube, faces);
        }
        if (changes.size) {
            edit_model(translate('change_minecraft_tint'), {elements: [...changes.keys()], uv_only: true}, () => {
                changes.forEach(faces => faces.forEach(face => face.tint = enabled ? 0 : -1));
            });
            UVEditor.displayTools();
        }
        sync_tint_toggles();
    }

    function open_tint_color() {
        const project = Project;
        show_tool_dialog({
            id: 'modeler_toolkit_tint_color_dialog',
            title: translate('tint_preview'),
            form: {color: {label: translate('tint_preview_color'), type: 'color', value: project[tint_color_key] || default_tint_color}},
            onConfirm({color}) {
                if (Project !== project) return;
                const preview_color = tinycolor(color).toHexString();
                if (preview_color === (project[tint_color_key] || default_tint_color)) return;
                project[tint_color_key] = preview_color;
                project.saved = false;
                refresh_tint_preview();
            }
        });
    }

    function tint_preview_material(source) {
        if (!source?.isShaderMaterial || source.isRawShaderMaterial || !source.uniforms?.map ||
            !/void\s+main\s*\([^)]*\)\s*\{/.test(source.vertexShader) || !source.fragmentShader.includes('gl_FragColor')) return source;
        let material = tint_materials.get(source);
        if (!material) {
            material = source.clone();
            material.onBeforeCompile = source.onBeforeCompile;
            const vertex_shader = source.vertexColors && BarItems.toggle_tint_preview
                ? source.vertexShader.replace(/\bvColor\s*=\s*color\s*;/, 'vColor = vec3(1.0);')
                : source.vertexShader;
            material.vertexShader = 'attribute float modeler_toolkit_tint_mask;\nvarying float modeler_toolkit_tint_weight;\n' +
                vertex_shader.replace(/void\s+main\s*\([^)]*\)\s*\{/, main => main + '\nmodeler_toolkit_tint_weight = modeler_toolkit_tint_mask;\n');
            const fragment_end = source.fragmentShader.lastIndexOf('}');
            material.fragmentShader = 'uniform vec3 modeler_toolkit_tint_color;\nvarying float modeler_toolkit_tint_weight;\n' +
                source.fragmentShader.slice(0, fragment_end) +
                '\ngl_FragColor.rgb *= mix(vec3(1.0), modeler_toolkit_tint_color, modeler_toolkit_tint_weight);\n' +
                source.fragmentShader.slice(fragment_end);
            tint_materials.set(source, material);
        }
        material.uniforms = {...source.uniforms, modeler_toolkit_tint_color: tint_uniform};
        material.map = source.map;
        material.side = source.side;
        material.blending = source.blending;
        material.opacity = source.opacity;
        return material;
    }

    function restore_tint_mesh(mesh, state) {
        state.geometry.deleteAttribute(tint_mask);
        if (mesh.material === state.preview) mesh.material = state.original;
        tinted_meshes.delete(mesh);
    }

    function clear_tint_preview() {
        tinted_meshes.forEach((state, mesh) => restore_tint_mesh(mesh, state));
        tint_materials.forEach(material => material.dispose());
        tint_materials.clear();
    }

    function apply_cube_tint({element}) {
        const mesh = element.mesh;
        const previous = tinted_meshes.get(mesh);
        const geometry = mesh?.geometry;
        const vertex_count = geometry?.getAttribute('position')?.count;
        const visible = supports_tint_preview() && BarItems.modeler_toolkit_show_tint?.value &&
            Project.view_mode === 'textured' && vertex_count === Canvas.face_order.length * 4;
        const tinted_faces = visible ? Canvas.face_order.map(side => {
            const face = element.faces[side];
            return face.texture !== null && face.tint >= 0 && face.getTexture() instanceof Texture;
        }) : [];
        if (!tinted_faces.some(Boolean)) {
            if (previous) restore_tint_mesh(mesh, previous);
            return;
        }
        if (previous && previous.geometry !== geometry) restore_tint_mesh(mesh, previous);
        const original = previous && mesh.material === previous.preview ? previous.original : mesh.material;
        const preview = Array.isArray(original) ? original.map(tint_preview_material) : tint_preview_material(original);
        if (preview === original || (Array.isArray(preview) && preview.every((material, index) => material === original[index]))) {
            if (previous) restore_tint_mesh(mesh, previous);
            return;
        }
        let weights = geometry.getAttribute(tint_mask);
        if (!weights) {
            weights = new THREE.BufferAttribute(new Float32Array(vertex_count), 1);
            geometry.setAttribute(tint_mask, weights);
        }
        tinted_faces.forEach((enabled, index) => weights.array.fill(Number(enabled), index * 4, (index + 1) * 4));
        weights.needsUpdate = true;
        mesh.material = preview;
        tinted_meshes.set(mesh, {geometry, original, preview});
    }

    function refresh_tint_preview() {
        sync_tint_toggles();
        if (!supports_tint_preview() || !BarItems.modeler_toolkit_show_tint?.value) {
            clear_tint_preview();
            return;
        }
        const {r, g, b} = tinycolor(Project[tint_color_key] || default_tint_color).toRgb();
        tint_uniform.value.set(r / 255, g / 255, b / 255);
        tinted_meshes.forEach((state, mesh) => {
            if (!Project.nodes_3d[mesh.name] || Project.nodes_3d[mesh.name] !== mesh) restore_tint_mesh(mesh, state);
        });
        for (const cube of Cube.all) {
            if (tinted_meshes.has(cube.mesh) || Object.values(cube.faces).some(face => face.texture !== null && face.tint >= 0)) {
                cube.preview_controller.updateFaces(cube);
            }
        }
    }

    function schedule_tint_refresh() {
        if (tint_refresh_pending) return;
        tint_refresh_pending = true;
        queueMicrotask(() => {
            tint_refresh_pending = false;
            if (plugin_loaded) refresh_tint_preview();
        });
    }

    function tool_definitions() {
        return [
            ['modeler_toolkit_optimize_atlas', {name: translate('optimize_texture_and_uvs'), icon: 'texture', condition: () => module_enabled('atlas') && !!Project && Outliner.elements.length > 0, click: () => optimize_texture_atlas()}],
            ['modeler_toolkit_optimize_variants', {name: translate('optimize_texture_variants'), icon: 'collections', condition: () => module_enabled('atlas') && !!Project && Texture.all.length > 1 && (!Format.single_texture || Format.per_group_texture), click: optimize_texture_variants}],
            ['modeler_toolkit_merge_atlas', {name: translate('merge_textures_into_atlas'), icon: 'layers', condition: () => module_enabled('atlas') && !!Project && Texture.all.length > 1, click: merge_texture_atlas}],
            ['modeler_toolkit_separate_uv', {name: translate('separate_face_uvs'), description: translate('separate_face_uvs_description'), icon: 'grid_view', condition: () => module_enabled('atlas') && !!Project && Outliner.elements.length > 0, click: () => optimize_texture_atlas(true)}],
            ['modeler_toolkit_restore_atlas', {name: translate('restore_original_textures_uvs'), icon: 'restore', condition: () => module_enabled('atlas') && !!Project && [1, 2, 3, 4].includes(Project[atlas_backup_key]?.version), click: restore_texture_atlas}],
            ['modeler_toolkit_restore_uv', {name: translate('restore_original_uvs'), icon: 'settings_backup_restore', condition: () => !!Project && selected_elements().some(backup_matches), click: restore_model_uv}],
            ['modeler_toolkit_inverted', {name: translate('create_inverted_cubes'), icon: 'flip_to_back', condition: () => module_enabled('inverted') && !!Project && selected_elements().some(element => element instanceof Cube), click: create_inverted_cubes}],
            ['modeler_toolkit_outline', {name: translate('create_outlines'), icon: 'crop_square', condition: () => module_enabled('outline') && !!Project && selected_elements().length > 0, click: open_outline}],
            ['modeler_toolkit_tint_faces', {name: translate('tint_selected_faces'), condition: () => supports_tint_preview() && !Undo.current_save && Cube.selected.some(cube => tint_scope(cube, false).length), onChange: enabled => change_selected_tint(enabled, false)}],
            ['modeler_toolkit_tint_cube', {name: translate('tint_entire_cube'), condition: () => supports_tint_preview() && !Undo.current_save && Cube.selected.some(cube => tint_scope(cube, true).length), onChange: enabled => change_selected_tint(enabled, true)}],
            ['modeler_toolkit_show_tint', {name: translate('show_tint_preview'), condition: supports_tint_preview, default: true, save_on_restart: true, onChange: refresh_tint_preview}],
            ['modeler_toolkit_tint_color', {name: translate('tint_preview_color'), icon: 'palette', condition: supports_tint_preview, click: open_tint_color}],
            ['modeler_toolkit_settings', {name: translate('modeler_toolkit_settings'), icon: 'settings', click: open_settings}],
            ['modeler_toolkit_toggle_layers', {name: translate('toggle_layers'), icon: 'visibility_off', condition: () => module_enabled('layers') && !!Project && Outliner.elements.length > 0, click: () => toggle_layer_visibility('hide')}]
        ];
    }

    function setup_tool_modules() {
        remove_toolkit_toolbar_actions();
        [Cube, Mesh].forEach(type => uv_properties.push(new Property(type, 'object', backup_key, {default: {}, exposed: false})));
        uv_properties.push(new Property(ModelProject, 'object', atlas_backup_key, {default: {}, exposed: false}));
        uv_properties.push(new Property(ModelProject, 'string', tint_color_key, {default: default_tint_color, exposed: false}));
        Blockbench.on('create_undo_save', capture_atlas_undo);
        Blockbench.on('load_undo_save', load_atlas_undo);
        Blockbench.on('save_project', serialize_square_atlas);
        tool_definitions().forEach(([id, options]) => {
            const Item = options.onChange ? Toggle : Action;
            tool_actions.push(new Item(id, {...options, category: 'edit'}));
        });
        const layer_actions = ['modeler_toolkit_toggle_layers'];
        layer_actions.forEach(id => {
            if (Toolbars.outliner && !Toolbars.outliner.children.some(child => (typeof child === 'string' ? child : child.id) === id)) Toolbars.outliner.add(id);
        });
        tint_menu = {
            id: 'modeler_toolkit_tint_menu',
            name: translate('tint_preview'),
            icon: 'palette',
            condition: supports_tint_preview,
            children: ['modeler_toolkit_tint_faces', 'modeler_toolkit_tint_cube', '_', 'modeler_toolkit_show_tint', 'modeler_toolkit_tint_color']
        };
        Cube.prototype.menu.addAction(tint_menu);
        UVEditor.menu.addAction(tint_menu);
        Cube.preview_controller.on('update_faces', apply_cube_tint);
        Blockbench.on('update_selection', sync_tint_toggles);
        Blockbench.on('unselect_project', clear_tint_preview);
        tint_refresh_events.forEach(event => Blockbench.on(event, schedule_tint_refresh));
        tools_menu = new BarMenu('modeler_toolkit', [
            'modeler_toolkit_optimize_atlas', 'modeler_toolkit_optimize_variants', 'modeler_toolkit_merge_atlas', 'modeler_toolkit_separate_uv', 'modeler_toolkit_restore_atlas', 'modeler_toolkit_restore_uv', '_',
            'modeler_toolkit_inverted', 'modeler_toolkit_outline', tint_menu, 'modeler_toolkit_toggle_layers',
            '_', 'modeler_toolkit_preview_shadow', 'modeler_toolkit_settings'
        ], {name: translate('modeler_toolkit'), icon: 'handyman'});
        MenuBar.addMenu(tools_menu, 'tools');
        Blockbench.on('select_project', refresh_layer_icons);
        Blockbench.on('close_project', close_layer_project);
        refresh_layer_icons();
        refresh_tint_preview();
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
        Blockbench.removeListener('update_selection', sync_tint_toggles);
        Blockbench.removeListener('unselect_project', clear_tint_preview);
        tint_refresh_events.forEach(event => Blockbench.removeListener(event, schedule_tint_refresh));
        Cube.preview_controller.removeListener('update_faces', apply_cube_tint);
        Cube.prototype.menu.removeAction(tint_menu);
        UVEditor.menu.removeAction(tint_menu);
        tint_menu = null;
        clear_tint_preview();
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

    function settings_section(key) {
        if (key === 'language') return 'personal';
        if (module_keys.has(key)) return 'tools';
        if (lighting_keys.includes(key)) return 'lighting';
        if (key.startsWith('floor_')) return 'floor';
        if (key.startsWith('watermark_')) return 'watermark';
        return 'render';
    }

    function settings_field_visible(key, values, section) {
        if (key === 'language') return true;
        if (settings_section(key) !== section) return false;
        if (key === 'atlas_power') return !!values.atlas;
        if (lighting_keys.includes(key)) return lighting_field_visible(key, values);
        if (key.startsWith('floor_')) return key === 'floor_enabled' || floor_field_visible(key, values);
        if (section !== 'render' || ['enabled', 'shadow_enabled'].includes(key)) return true;
        if (!values.shadow_enabled) return false;
        if (['gap', 'resolution', 'light_x', 'light_y'].includes(key) && !values.advanced_render) return false;
        if (['light_x', 'light_y'].includes(key) && values.lighting_enabled) return false;
        if (['surface', 'gap'].includes(key) && values.floor_enabled) return false;
        return true;
    }

    async function open_settings(section) {
        const generation = lifecycle;
        const pending_fonts = refresh_installed_fonts();
        if (Object.keys(installed_font_options).length < 2) await pending_fonts;
        if (!plugin_loaded || generation !== lifecycle) return;
        if (settings_dialog) settings_dialog.hide().delete();
        const values = read_values();
        const watermark_only = section === 'watermark';
        let selected_section = Object.hasOwn(settings_sections, section) ? section : 'tools';
        const form = {};
        ordered_settings().forEach(([key, definition]) => {
            if (watermark_only && !key.startsWith('watermark_')) return;
            if (key === 'watermark_text') {
                if (font_error) form.watermark_information = {type: 'info', text: translate('the_installed_font_list_is_unavailable_reopen_settings_after_all'), condition: () => selected_section === 'watermark'};
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
                condition: values => settings_field_visible(key, values, selected_section)
            };
            if (key === 'language') form.capture_defaults = {type: 'info', text: translate('settings_capture_defaults'), condition: () => ['render', 'lighting', 'floor'].includes(selected_section)};
        });
        if (!watermark_only) form.advanced_render = {type: 'checkbox', label: translate('settings_advanced'), value: false, condition: values => selected_section === 'render' && values.shadow_enabled};
        form.actions = {
            type: 'buttons',
            buttons: [translate('preview')],
            condition: () => selected_section !== 'tools',
            async click() {
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
            }
        };
        form.reset_section = {
            type: 'buttons',
            buttons: [translate('settings_reset_section')],
            click() {
                settings_dialog.setFormValues(Object.fromEntries(Object.entries(setting_definitions).filter(([key]) => settings_section(key) === selected_section).map(([key, definition]) => [key, definition.value])));
            }
        };
        settings_dialog = new Dialog({
            id: 'modeler_toolkit_settings',
            title: section === 'watermark' ? translate('modeler_toolkit_watermark') : translate('modeler_toolkit_settings'),
            width: watermark_only ? 600 : 740,
            sidebar: watermark_only ? undefined : {
                pages: settings_sections,
                page: selected_section,
                onPageSwitch(page) {
                    selected_section = page;
                    settings_dialog.form.updateValues({cause: 'setup'});
                }
            },
            form,
            buttons: [translate('confirm'), translate('cancel')],
            onConfirm(form_data) {
                const next_values = read_values(form_data);
                this.hide().delete();
                settings_dialog = null;
                Object.keys(form_data).filter(key => key !== 'language' && plugin_settings[key]).forEach(key => plugin_settings[key].set(next_values[key]));
                if (Object.hasOwn(form_data, 'language')) plugin_settings.language.set(next_values.language);
                Settings.save();
            },
            onCancel() {
                this.hide().delete();
                settings_dialog = null;
            }
        }).show();
    }

    function capture_form(include_disabled = false) {
        const form = Screencam.gif_options_dialog.form;
        if (!form?.buildForm) return null;
        const values = include_disabled ? Object.fromEntries(Object.entries(form.form_data).map(([key, field]) => [key, field.getValue()])) : form.getResult();
        return {
            values: Object.fromEntries(Object.entries(values).map(([key, value]) => [key, value?.toHex8String ? value.toHex8String() : value])),
            toggles: Object.fromEntries(Object.entries(form.form_data).filter(([, field]) => field.input_toggle).map(([key, field]) => [key, field.input_toggle.checked]))
        };
    }

    function normalize_capture_configuration(state) {
        if (!state || state.version !== 1 || !state.values || typeof state.values !== 'object') return null;
        const values = {};
        const toggles = {};
        Object.entries(Screencam.gif_options_dialog.form_config).forEach(([key, field]) => {
            if (!field || typeof field !== 'object' || key === animation_field) return;
            const value = state.values[key];
            if (field.type === 'checkbox' && typeof value === 'boolean') values[key] = value;
            if (['number', 'range'].includes(field.type) && Number.isFinite(value)) values[key] = Math.min(field.max ?? Infinity, Math.max(field.min ?? -Infinity, value));
            if (field.type === 'vector' && Array.isArray(value) && value.length === (field.dimensions || 3) && value.every(Number.isFinite)) values[key] = value.slice();
            if (field.type === 'color' && typeof value === 'string' && tinycolor(value).isValid()) values[key] = tinycolor(value).toHex8String();
            if (['text', 'textarea', 'file'].includes(field.type) && typeof value === 'string' && !value.startsWith('blob:')) values[key] = value;
            if (field.type === 'select' && typeof value === 'string') {
                const options = typeof field.options === 'function' ? field.options() : field.options;
                if (options && Object.hasOwn(options, value)) values[key] = value;
            }
            if (field.toggle_enabled && typeof state.toggles?.[key] === 'boolean') toggles[key] = state.toggles[key];
        });
        const remembered = Array.isArray(state.animations) ? state.animations : state.animation ? [state.animation] : [];
        const animations = remembered.filter(item => item && typeof item.uuid === 'string' && typeof item.name === 'string').map(item => ({uuid: item.uuid, name: item.name}));
        return Object.keys(values).length ? {version: 1, values, toggles, animations: animations.length ? animations : undefined} : null;
    }

    function load_capture_configuration() {
        try {
            return normalize_capture_configuration(JSON.parse(localStorage.getItem(capture_configuration_key) || 'null'));
        } catch (error) {
            return null;
        }
    }

    function capture_defaults() {
        const values = read_values();
        return {
            [reference_images_field]: false,
            [light_field]: 'settings',
            ...Object.fromEntries(Object.entries(capture_default_fields).map(([key, field]) => [field, values[key]]))
        };
    }

    function persist_capture_configuration(state) {
        capture_configuration = state;
        try {
            const stored = localStorage.getItem(capture_configuration_key);
            if (!state) {
                if (stored !== null) localStorage.removeItem(capture_configuration_key);
            } else {
                const serialized = JSON.stringify(state);
                if (stored !== serialized) localStorage.setItem(capture_configuration_key, serialized);
            }
            capture_storage_error_reported = false;
        } catch (error) {
            if (!capture_storage_error_reported) Blockbench.showQuickMessage(translate('capture_configuration_storage_failed'), 6000);
            capture_storage_error_reported = true;
        }
    }

    function save_capture_configuration() {
        if (!plugin_loaded || restoring_capture_configuration) return;
        const form_state = capture_form(true);
        if (!form_state) return;
        const animations = capture_animations();
        const selected = selected_capture_animations(form_state.values[animation_field]);
        const references = capture_animation_references(selected);
        if (!animations.length && typeof capture_configuration?.values.play === 'boolean') form_state.values.play = capture_configuration.values.play;
        const state = normalize_capture_configuration({version: 1, ...form_state, animations: references.length ? references : capture_configuration?.animations});
        if (!state) return;
        if (references.length && Project) animation_choices.set(Project, references);
        const defaults = normalize_capture_configuration({version: 1, values: capture_defaults()});
        for (const [field, value] of Object.entries(defaults?.values || {})) {
            if (state.values[field] === value) delete state.values[field];
        }
        persist_capture_configuration(state);
    }

    function restore_capture_configuration(dialog) {
        if (!dialog.form) return;
        const state = normalize_capture_configuration(capture_configuration);
        dialog.setFormValues({...capture_defaults(), ...state?.values}, false);
        if (state) dialog.form.setToggles(state.toggles, false);
        dialog.form.updateValues({cause: 'setup'});
    }

    function reset_capture_settings(fields) {
        const defaults = capture_defaults();
        const values = Object.fromEntries(fields.map(field => [field, defaults[field]]));
        if (capture_configuration) {
            const remaining = {...capture_configuration.values};
            fields.forEach(field => delete remaining[field]);
            persist_capture_configuration(normalize_capture_configuration({...capture_configuration, values: remaining}));
        }
        const dialog = Screencam.gif_options_dialog;
        if (!dialog.form) return;
        dialog.setFormValues(values, false);
        dialog.form.updateValues({cause: 'setup'});
    }

    function update_capture_setting(key) {
        const field = capture_default_fields[key];
        if (field) reset_capture_settings(key === 'light_x' || key === 'light_y' ? [field, light_field] : [field]);
        else if (key === 'shadow_enabled') Screencam.gif_options_dialog.form?.updateValues({cause: 'setup'});
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

    function selected_animation_uuids(value) {
        if (Array.isArray(value)) return value.filter(uuid => typeof uuid === 'string');
        return typeof value === 'string' && value ? [value] : [];
    }

    function selected_capture_animations(value) {
        const uuids = selected_animation_uuids(value);
        return capture_animations().filter(animation => uuids.includes(animation.uuid));
    }

    function capture_animation_references(animations) {
        return animations.map(({uuid, name}) => ({uuid, name}));
    }

    function resolve_capture_animations(animations, references = []) {
        const by_uuid = new Map(animations.map(animation => [animation.uuid, animation]));
        const selected = new Set(references.map(reference => by_uuid.get(reference.uuid)).filter(Boolean));
        for (const reference of references) {
            if (by_uuid.has(reference.uuid)) continue;
            const match = animations.find(animation => animation.name === reference.name && !selected.has(animation));
            if (match) selected.add(match);
        }
        return animations.filter(animation => selected.has(animation));
    }

    function sequence_length(sequence) {
        return sequence.reduce((total, animation) => total + animation.length, 0);
    }

    function sequence_duration(sequence) {
        const speed = Number.isFinite(Timeline.playback_speed) && Timeline.playback_speed > 0 ? Timeline.playback_speed / 100 : 1;
        return sequence_length(sequence) / speed;
    }

    function setup_animation_fields() {
        const form = Screencam.gif_options_dialog.form_config;
        previous_play_field = form.play;
        previous_animation_field = form[animation_field];
        previous_turnspeed_sync_field = form.turnspeed_o;
        installed_play_field = {...previous_play_field, condition: () => capture_animations().length > 0};
        installed_animation_field = {
            label: translate('animation_to_record'),
            type: 'multi_select',
            get options() {
                return animation_options();
            },
            value: [],
            condition: values => !!values.play && capture_animations().length > 0,
            description: translate('record_this_animation_from_any_editor_mode')
        };
        installed_turnspeed_sync_field = previous_turnspeed_sync_field && {
            ...previous_turnspeed_sync_field,
            condition: values => !!values.play && selected_capture_animations(values[animation_field]).length > 0,
            click() {
                const dialog = Screencam.gif_options_dialog;
                const duration = sequence_duration(selected_capture_animations(dialog.getFormResult()[animation_field]));
                dialog.setFormValues({turnspeed: 60 / (duration || 1)});
            }
        };
        const fields = Object.entries(form).filter(([key]) => key !== animation_field);
        Object.keys(form).forEach(key => delete form[key]);
        fields.forEach(([key, field]) => {
            form[key] = key === 'play' ? installed_play_field : key === 'turnspeed_o' && installed_turnspeed_sync_field ? installed_turnspeed_sync_field : field;
            if (key === 'play') form[animation_field] = installed_animation_field;
        });
    }

    function setup_light_fields(labels_only = false) {
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
            if (labels_only) return update_field_labels(installed_light_fields.get(key), field);
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
        Object.entries(shadow_capture_fields).forEach(([key, field]) => overrides[key] = options[field]);
        const values = read_values(overrides);
        const render_enabled = options[export_field] ?? values.enabled;
        return {...values, ...capture_light_values(options, values), clean_uv: !!render_enabled, shadow_enabled: (render_enabled || values.floor_enabled || values.lighting_enabled) && values.shadow_enabled, watermark_enabled: options[watermark_field] ?? false};
    }

    function setup_shadow_fields(labels_only = false) {
        const values = read_values();
        Object.entries(shadow_capture_fields).forEach(([key, field]) => {
            const definition = setting_definitions[key];
            const installed = {
                label: definition.name,
                type: key === 'color' ? 'color' : 'number',
                value: values[key],
                min: definition.min,
                max: definition.max,
                step: definition.step,
                description: key === 'opacity' ? definition.description : undefined,
                condition: form => !!plugin_settings.shadow_enabled.value && !!(form[export_field] || form[plugin_id + '_floor_enabled'] || form[plugin_id + '_lighting_enabled'])
            };
            if (labels_only) return update_field_labels(installed_shadow_fields.get(field), installed);
            previous_shadow_fields.set(field, Screencam.gif_options_dialog.form_config[field]);
            installed_shadow_fields.set(field, installed);
            Screencam.gif_options_dialog.form_config[field] = installed;
        });
    }

    function setup_floor_fields(labels_only = false) {
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
        definitions[capture_reset_field] = {
            type: 'buttons',
            buttons: [translate('capture_reset_render_settings')],
            click() {
                reset_capture_settings([light_field, ...Object.values(capture_default_fields)]);
            }
        };
        definitions[plugin_id + '_capture_preview'] = {
            type: 'buttons',
            buttons: [translate('preview_gif_render')],
            async click() {
                if (active_session || pending_preview || document.getElementById('gif_recording_frame')) {
                    Blockbench.showQuickMessage(translate('finish_or_cancel_the_current_gif_recording_first'), 3000);
                    return;
                }
                const recording_dialog = Screencam.gif_options_dialog;
                save_capture_configuration();
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
            if (labels_only) return update_field_labels(installed_floor_fields.get(key), field);
            previous_floor_fields.set(key, Screencam.gif_options_dialog.form_config[key]);
            installed_floor_fields.set(key, field);
            Screencam.gif_options_dialog.form_config[key] = field;
        });
    }

    function update_animation_fields(dialog, remembered_animations = []) {
        const animations = capture_animations();
        const project_choices = Project ? animation_choices.get(Project) : undefined;
        let selected = resolve_capture_animations(animations, project_choices);
        if (!selected.length) selected = resolve_capture_animations(animations, remembered_animations);
        if (!selected.length) selected = selected_capture_animations(dialog.getFormResult()?.[animation_field]);
        if (!selected.length) selected = [animations.find(animation => animation === Animation.selected) || animations[0]].filter(Boolean);
        const values = {[animation_field]: selected.map(animation => animation.uuid)};
        if (!animations.length) values.play = false;
        dialog.setFormValues(values);
    }

    function select_capture_animation(animation) {
        AnimationItem.all.forEach(item => {
            item.selected = item === animation;
            item.playing = item === animation;
        });
        AnimationItem.selected = animation;
        Timeline.vue.animation_length = animation.length;
        Timeline.vue.markers = animation.markers;
        Animator.MolangParser.resetVariables();
        BarItems.slider_animation_length.update();
    }

    function sequence_time(sequence, time) {
        let remaining = time % sequence_length(sequence);
        for (const animation of sequence) {
            if (remaining < animation.length) return {animation, time: remaining};
            remaining -= animation.length;
        }
        const last = sequence[sequence.length - 1];
        return {animation: last, time: last.length};
    }

    function play_capture_sequence(session, sequence) {
        session.sequence = sequence;
        session.original_preview = Animator.preview;
        session.preview_wrapper = function(...args) {
            if (session.disposed || Project !== session.project) return session.original_preview.apply(this, args);
            const time = Timeline.time;
            const frame = sequence_time(session.sequence, Math.max(0, time));
            if (AnimationItem.selected !== frame.animation) select_capture_animation(frame.animation);
            Timeline.time = frame.time;
            try {
                return session.original_preview.apply(this, args);
            } finally {
                Timeline.time = time;
            }
        };
        Animator.preview = session.preview_wrapper;
    }

    function sequence_capture_options(options, sequence) {
        if (sequence.length < 2 || options.length_mode !== 'animation') return options;
        return {...options, length_mode: 'seconds', length: sequence_duration(sequence) - 1e-6};
    }

    function prepare_capture_animation(session, sequence) {
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
        select_capture_animation(sequence[0]);
        if (sequence.length > 1) play_capture_sequence(session, sequence);
    }

    function restore_capture_animation(session) {
        if (session.preview_wrapper && Animator.preview === session.preview_wrapper) Animator.preview = session.original_preview;
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

    function clean_render_uv(element, snapshots) {
        const uv = element.mesh?.geometry?.getAttribute('uv');
        if (!uv || uv.itemSize !== 2 || uv.isInterleavedBufferAttribute || snapshots.has(uv)) return;
        const faces = element instanceof Cube ? Canvas.face_order.map(key => element.faces[key]) : Object.values(element.faces).filter(face => face.vertices.length > 2);
        const counts = faces.map(face => element instanceof Cube ? 4 : face.vertices.length);
        if (counts.reduce((sum, count) => sum + count, 0) !== uv.count) return;
        let offset = 0;
        faces.forEach((face, face_index) => {
            const start = offset;
            const count = counts[face_index];
            offset += count;
            const texture = face.getTexture();
            if (face.texture === null || !(texture instanceof Texture)) return;
            [texture.width, texture.height].forEach((size, axis) => {
                if (!Number.isFinite(size) || size <= 0) return;
                const coordinates = Array.from({length: count}, (_, index) => (axis ? uv.getY(start + index) : uv.getX(start + index)) * size);
                const lower = Math.min(...coordinates);
                const upper = Math.max(...coordinates);
                const span = upper - lower;
                if (!Number.isFinite(span) || span <= 0) return;
                const margin = 1 / 32;
                const lower_shift = Math.abs(lower - Math.round(lower)) < 1 / 16 ? Math.min(Math.max(Math.round(lower) + margin - lower, 0), span / 4) : 0;
                const upper_shift = Math.abs(upper - Math.round(upper)) < 1 / 16 ? Math.min(Math.max(upper - Math.round(upper) + margin, 0), span / 4) : 0;
                if (!lower_shift && !upper_shift) return;
                if (!snapshots.has(uv)) snapshots.set(uv, uv.array.slice());
                coordinates.forEach((coordinate, index) => {
                    const value = (lower + lower_shift + (coordinate - lower) * (span - lower_shift - upper_shift) / span) / size;
                    if (axis) uv.setY(start + index, value);
                    else uv.setX(start + index, value);
                });
            });
        });
        if (snapshots.has(uv)) uv.needsUpdate = true;
    }

    function render_frame(session, renderer, render_scene, camera, render) {
        if (session.disposed || Project !== session.project) return render();
        const elements = get_render_elements(session.project);
        const bounds = get_bounds(elements);
        if (bounds.isEmpty()) return render();
        const cast_snapshots = new Map();
        const uv_snapshots = new Map();
        const shadow_state = {enabled: renderer.shadowMap.enabled, type: renderer.shadowMap.type, autoUpdate: renderer.shadowMap.autoUpdate, needsUpdate: renderer.shadowMap.needsUpdate};
        const original_buffer_render = renderer.renderBufferDirect;
        const casters = new Set(elements.map(element => element.mesh));
        const lit_meshes = new Set(casters);
        let buffer_wrapper;
        try {
            if (session.options.clean_uv) elements.forEach(element => clean_render_uv(element, uv_snapshots));
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
            uv_snapshots.forEach((array, uv) => {
                uv.array.set(array);
                uv.needsUpdate = true;
            });
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
        if (session.reference_model_canvas) session.reference_model_canvas.width = session.reference_model_canvas.height = 0;
        session.reference_plane_geometry?.dispose();
        session.reference_planes?.forEach(mesh => {
            mesh.material.map.dispose();
            mesh.material.dispose();
        });
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
                    const references = capture_reference_images(session);
                    if (references.length) {
                        compose_capture_frame(session, canvas, references, vars.background_image, vars.crop, vars.custom_resolution);
                    }
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

    function capture_reference_images(session) {
        if (!session.capture_options[reference_images_field] || typeof ReferenceImage === 'undefined') return [];
        const view = session.view;
        const sources = session.reference_sources ||= new WeakMap();
        return ReferenceImage.active.filter(reference => {
            if (!reference.visibility || !reference.image_is_loaded || reference.is_video || reference.opacity < 0.1 || !reference.img.naturalWidth) return false;
            if (reference.view_mode === 'plane') {
                if (reference.scene_object.parent !== Canvas.scene || !reference.scene_object.visible) return false;
            } else if (!reference.node.isConnected || (reference.is_blueprint && (!view.isOrtho || view.angle !== reference.attached_side))) return false;
            const source = reference.img.currentSrc;
            const cached = sources.get(reference.img);
            if (cached && cached.source === source) return cached.readable;
            const sample = session.reference_sample ||= document.createElement('canvas');
            sample.width = sample.height = 1;
            const context = sample.getContext('2d', {willReadFrequently: true});
            let readable = true;
            try {
                context.drawImage(reference.img, 0, 0, 1, 1);
                context.getImageData(0, 0, 1, 1);
            } catch (error) {
                readable = false;
            }
            sources.set(reference.img, {source, readable});
            return readable;
        });
    }

    function draw_capture_reference_planes(context, session, preview, references, area) {
        if (!references.length) return;
        const scene = session.reference_scene ||= new THREE.Scene();
        const geometry = session.reference_plane_geometry ||= new THREE.PlaneGeometry(1, 1);
        const planes = session.reference_planes ||= new Map();
        const renderer = preview.renderer;
        const alpha = renderer.getClearAlpha();
        try {
            references.forEach((reference, index) => {
                let mesh = planes.get(reference);
                if (!mesh) {
                    const map = new THREE.Texture(reference.img);
                    map.colorSpace = THREE.SRGBColorSpace;
                    mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({map, transparent: true, depthTest: false, depthWrite: false, toneMapped: false}));
                    mesh.matrixAutoUpdate = false;
                    planes.set(reference, mesh);
                }
                const {material} = mesh;
                const source = reference.img.currentSrc;
                if (mesh.userData.source !== source) {
                    mesh.userData.source = source;
                    material.map.needsUpdate = true;
                }
                material.map.repeat.set(reference.flip_x ? -1 : 1, reference.flip_y ? -1 : 1);
                material.map.offset.set(reference.flip_x ? 1 : 0, reference.flip_y ? 1 : 0);
                material.opacity = reference.opacity;
                const side = reference.cull_backface ? THREE.FrontSide : THREE.DoubleSide;
                if (material.side !== side) {
                    material.side = side;
                    material.needsUpdate = true;
                }
                reference.scene_object.updateWorldMatrix(true, false);
                mesh.matrix.copy(reference.scene_object.matrixWorld).scale(new THREE.Vector3(...reference.size, 1));
                mesh.matrixWorldNeedsUpdate = true;
                mesh.renderOrder = index;
                scene.add(mesh);
            });
            renderer.setClearAlpha(0);
            renderer.render(scene, preview.camera);
            context.drawImage(preview.canvas, ...area);
        } finally {
            renderer.setClearAlpha(alpha);
            scene.clear();
        }
    }

    function draw_capture_reference_layer(context, session, preview, references, area) {
        if (!references.length) return;
        draw_capture_reference_planes(context, session, preview, references.filter(reference => reference.view_mode === 'plane'), area);
        const viewport = session.view.canvas.getBoundingClientRect();
        if (!viewport.width || !viewport.height) return;
        const [x, y, width, height] = area;
        context.save();
        try {
            context.beginPath();
            context.rect(x, y, width, height);
            context.clip();
            context.translate(x, y);
            context.scale(width / viewport.width, height / viewport.height);
            for (const reference of references) {
                if (reference.view_mode === 'plane') continue;
                const rect = reference.node.getBoundingClientRect();
                context.save();
                try {
                    context.translate(rect.left - viewport.left + rect.width / 2, rect.top - viewport.top + rect.height / 2);
                    context.rotate(reference.rotation * Math.PI / 180);
                    context.scale(reference.flip_x ? -1 : 1, reference.flip_y ? -1 : 1);
                    context.globalAlpha = reference.opacity;
                    context.filter = reference.node.style.filter || 'none';
                    if (reference.node.style.mixBlendMode === 'lighten') context.globalCompositeOperation = 'lighten';
                    context.drawImage(reference.img, -rect.width / 2, -rect.height / 2, rect.width, rect.height);
                } finally {
                    context.restore();
                }
            }
        } finally {
            context.restore();
        }
    }

    function compose_capture_frame(session, canvas, references, background, crop, custom_resolution) {
        const preview = Screencam.NoAAPreview;
        const options = session.capture_options;
        const ratio = window.devicePixelRatio;
        const pixelate = options.pixelate || 1;
        const area = [
            custom_resolution ? 0 : Math.round(-crop.left * ratio),
            custom_resolution ? 0 : Math.round(-crop.top * ratio),
            Math.round(preview.width * pixelate),
            Math.round(preview.height * pixelate)
        ];
        let model = preview.canvas;
        if (references.some(reference => reference.view_mode === 'plane')) {
            const buffer = session.reference_model_canvas ||= document.createElement('canvas');
            if (buffer.width !== model.width || buffer.height !== model.height) {
                buffer.width = model.width;
                buffer.height = model.height;
            }
            const context = buffer.getContext('2d');
            context.clearRect(0, 0, buffer.width, buffer.height);
            context.drawImage(model, 0, 0);
            model = buffer;
        }
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.imageSmoothingEnabled = false;
        if (options.background) {
            context.fillStyle = options.background;
            context.fillRect(0, 0, canvas.width, canvas.height);
        }
        if (background?.naturalWidth) context.drawImage(background, 0, 0, canvas.width, canvas.height);
        draw_capture_reference_layer(context, session, preview, references.filter(reference => reference.layer === 'background'), area);
        context.drawImage(model, ...area);
        draw_capture_reference_layer(context, session, preview, references.filter(reference => reference.layer !== 'background'), area);
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
        let render_error;
        const render = () => {
            session.rendering_live = true;
            try {
                preview.render();
                compose_capture_frame(session, canvas, capture_reference_images(session), session.live_background, crop, custom);
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
        if (Dialog.open !== Screencam.gif_options_dialog) wrapped_open.call(Screencam.gif_options_dialog);
        return render_recording_preview(Screencam.gif_options_dialog.getFormResult(), {...options, clean_uv: options.clean_uv ?? !!options.enabled, watermark_enabled: options.watermark_enabled ?? true});
    }


    const reference_entries = new Map();
    const reference_image_types = {png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg', webp: 'image/webp', gif: 'image/gif', bmp: 'image/bmp'};
    let reference_database;
    let reference_loading;
    let reference_setting;
    let reference_dialog;
    let reference_busy = false;
    let refresh_reference_dialog;

    function open_reference_database() {
        reference_database ??= new Promise((resolve, reject) => {
            const request = indexedDB.open(plugin_id + '_preview_library', 1);
            request.onupgradeneeded = () => request.result.createObjectStore('models', {keyPath: 'id'});
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
        return reference_database;
    }

    async function reference_transaction(mode, operate) {
        const database = await open_reference_database();
        return new Promise((resolve, reject) => {
            const transaction = database.transaction('models', mode);
            const request = operate(transaction.objectStore('models'));
            transaction.oncomplete = () => resolve(request.result);
            transaction.onabort = () => reject(transaction.error || request.error);
        });
    }

    function reference_image_type(name) {
        const extension = String(name).split('.').at(-1).toLowerCase();
        return Object.hasOwn(reference_image_types, extension) ? reference_image_types[extension] : undefined;
    }

    function reference_data_url(content, type) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = () => reject(reader.error);
            reader.readAsDataURL(new Blob([content], {type}));
        });
    }

    async function reference_texture_source(texture, file, images) {
        const provided = [texture.name, texture.relative_path, texture.path]
            .filter(Boolean).map(value => String(value).split(/[\\/]/).at(-1).toLowerCase())
            .map(name => images.get(name)).find(Boolean);
        if (provided) return reference_data_url(provided.content, reference_image_type(provided.name));
        if (isApp && file.path && PathModule.isAbsolute(file.path)) {
            const filesystem = require('fs');
            const directory = PathModule.dirname(file.path);
            const candidates = [
                texture.relative_path && PathModule.resolve(directory, texture.relative_path),
                texture.path && PathModule.isAbsolute(texture.path) && texture.path,
                texture.name && PathModule.join(directory, PathModule.basename(texture.name))
            ];
            for (const candidate of candidates) {
                const type = candidate && reference_image_type(candidate);
                if (!type || !filesystem.existsSync(candidate) || !filesystem.statSync(candidate).isFile()) continue;
                return reference_data_url(filesystem.readFileSync(candidate), type);
            }
        }
        return /^data:image\/(?:png|jpeg|webp|gif|bmp);base64,/i.test(texture.source ?? '') ? texture.source : null;
    }

    function reference_snapshot(project) {
        project.model_3d.updateWorldMatrix(true, true);
        const offset = Format.centered_grid ? 0 : -8;
        const anchor = new THREE.Matrix4().makeTranslation(offset, 0, offset)
            .multiply(new THREE.Matrix4().copy(project.model_3d.matrixWorld).invert());
        const textures = [];
        const materials = [];
        const meshes = [];
        const texture_indices = new Map();
        const material_indices = new Map();
        function texture_index(map) {
            if (!map?.image) return null;
            if (!texture_indices.has(map)) {
                const canvas = document.createElement('canvas');
                canvas.width = map.image.width;
                canvas.height = map.image.height;
                canvas.getContext('2d').drawImage(map.image, 0, 0);
                texture_indices.set(map, textures.length);
                textures.push({source: canvas.toDataURL('image/png'), flip_y: map.flipY, wrap_s: map.wrapS, wrap_t: map.wrapT, color_space: map.colorSpace});
            }
            return texture_indices.get(map);
        }
        function material_index(material) {
            if (!material_indices.has(material)) {
                const texture = texture_index(material.map || material.uniforms?.map?.value);
                material_indices.set(material, materials.length);
                materials.push({
                    texture,
                    color: material.color?.getHex() ?? 0xffffff,
                    side: material.side,
                    opacity: material.opacity,
                    transparent: material.transparent,
                    alpha_test: material.alphaTest || (texture === null ? 0 : 0.01),
                    shading: !material.isMeshBasicMaterial && material.uniforms?.SHADE?.value !== false,
                    depth_write: material.depthWrite,
                    vertex_colors: material.vertexColors
                });
            }
            return material_indices.get(material);
        }
        for (const element of Outliner.elements) {
            const mesh = element.mesh;
            if (!mesh?.isMesh || !mesh.geometry?.attributes.position) continue;
            let visible = true;
            let parent = mesh;
            while (parent && parent !== project.model_3d) {
                visible &&= parent.visible;
                parent = parent.parent;
            }
            if (!visible || parent !== project.model_3d) continue;
            const geometry = new THREE.BufferGeometry().copy(mesh.geometry);
            if (mesh.isSkinnedMesh || mesh.morphTargetInfluences?.some(Boolean)) {
                const vertex = new THREE.Vector3();
                const position = geometry.attributes.position;
                for (let i = 0; i < position.count; i++) {
                    mesh.getVertexPosition(i, vertex);
                    position.setXYZ(i, vertex.x, vertex.y, vertex.z);
                }
                geometry.deleteAttribute('skinIndex');
                geometry.deleteAttribute('skinWeight');
                geometry.morphAttributes = {};
                geometry.computeVertexNormals();
            }
            meshes.push({
                geometry: geometry.toJSON(),
                materials: Array.isArray(mesh.material) ? mesh.material.map(material_index) : material_index(mesh.material),
                matrix: new THREE.Matrix4().multiplyMatrices(anchor, mesh.matrixWorld).toArray(),
                render_order: mesh.renderOrder
            });
            geometry.dispose();
        }
        return {textures, materials, meshes};
    }

    async function read_reference_model(files, generation) {
        const model_files = files.filter(file => /\.bbmodel$/i.test(file.name));
        if (model_files.length !== 1) throw new Error(translate('reference_invalid_model'));
        const [file] = model_files;
        let data;
        try {
            data = JSON.parse(file.content);
        } catch {
            throw new Error(translate('reference_invalid_model'));
        }
        if (!data?.meta || !Array.isArray(data.elements) || (data.textures && !Array.isArray(data.textures))) throw new Error(translate('reference_invalid_model'));
        const format_id = data.meta.model_format || 'free';
        if (!Object.hasOwn(Formats, format_id)) throw new Error(translate('reference_unsupported_format'));
        const images = new Map(files.filter(file => reference_image_type(file.name)).map(file => [file.name.toLowerCase(), file]));
        const textures = [];
        for (const texture of data.textures ?? []) {
            const source = await reference_texture_source(texture, file, images);
            if (!source) throw new Error(translate('reference_missing_texture') + texture.name);
            textures.push({...texture, source, path: '', relative_path: '', sync_to_project: '', layers: [], layers_enabled: false});
        }
        if (generation !== lifecycle) return null;
        if (active_session || pending_preview) throw new Error(translate('finish_or_cancel_the_current_gif_recording_first'));
        const previous = Project;
        let temporary;
        try {
            setupProject(Formats[format_id]);
            temporary = Project;
            Codecs.project.parse({
                meta: data.meta, name: data.name, resolution: data.resolution,
                textures, texture_groups: data.texture_groups,
                elements: data.elements, groups: data.groups, outliner: data.outliner
            });
            await Promise.all(Texture.all.map(texture => new Promise((resolve, reject) => {
                const finish = event => {
                    clearTimeout(timeout);
                    texture.img.removeEventListener('load', finish);
                    texture.img.removeEventListener('error', finish);
                    if (event?.type === 'load') resolve();
                    else reject(new Error(translate('reference_missing_texture') + texture.name));
                };
                const timeout = setTimeout(finish, 10000);
                texture.img.addEventListener('load', finish);
                texture.img.addEventListener('error', finish);
            })));
            if (generation !== lifecycle || !ModelProject.all.includes(temporary)) return null;
            if (Project !== temporary && !temporary.select()) return null;
            Canvas.updateAll();
            const snapshot = reference_snapshot(temporary);
            if (!snapshot.meshes.length) throw new Error(translate('reference_no_geometry'));
            return {id: plugin_id + '_reference_' + guid(), name: file.name.replace(/\.bbmodel$/i, '').slice(0, 120), ...snapshot};
        } finally {
            if (temporary && ModelProject.all.includes(temporary)) {
                const restore = Project === temporary ? previous : Project;
                await temporary.close(true);
                if (restore && ModelProject.all.includes(restore) && Project !== restore) restore.select();
            }
        }
    }

    function register_reference_model(record) {
        const preview = new PreviewModel(record.id, {name: record.name});
        preview.name = record.name;
        const resources = [];
        const enable = preview.enable.bind(preview);
        preview.enable = () => {
            if (!resources.length) {
                const textures = record.textures.map(data => {
                    const texture = new THREE.TextureLoader().load(data.source);
                    texture.flipY = data.flip_y;
                    texture.wrapS = data.wrap_s;
                    texture.wrapT = data.wrap_t;
                    if (typeof data.color_space === 'string') texture.colorSpace = data.color_space;
                    texture.magFilter = THREE.NearestFilter;
                    texture.minFilter = THREE.NearestFilter;
                    resources.push(texture);
                    return texture;
                });
                const materials = record.materials.map(data => {
                    const Material = data.shading ? THREE.MeshLambertMaterial : THREE.MeshBasicMaterial;
                    const material = new Material({
                        color: data.color, map: textures[data.texture] ?? null, side: data.side, opacity: data.opacity,
                        transparent: data.transparent, alphaTest: data.alpha_test, depthWrite: data.depth_write, vertexColors: data.vertex_colors
                    });
                    resources.push(material);
                    return material;
                });
                const loader = new THREE.BufferGeometryLoader();
                for (const data of record.meshes) {
                    const geometry = loader.parse(data.geometry);
                    const material = Array.isArray(data.materials) ? data.materials.map(index => materials[index]) : materials[data.materials];
                    const mesh = new THREE.Mesh(geometry, material);
                    mesh.matrixAutoUpdate = false;
                    mesh.matrix.fromArray(data.matrix);
                    mesh.renderOrder = data.render_order;
                    preview.model_3d.add(mesh);
                    resources.push(geometry);
                }
            }
            enable();
        };
        reference_entries.set(record.id, {record, preview, resources});
    }

    function remove_reference_model(id) {
        const entry = reference_entries.get(id);
        if (!entry) return;
        entry.preview.disable();
        if (PreviewModel.transform_model === entry.preview) {
            PreviewModel.transform_model = null;
            if (Project) Transformer.updateSelection();
        }
        entry.preview.model_3d.clear();
        for (const resource of entry.resources) resource.dispose();
        entry.preview.material?.dispose();
        entry.preview.delete();
        reference_entries.delete(id);
    }

    function start_reference_library() {
        const generation = lifecycle;
        reference_loading = reference_transaction('readonly', store => store.getAll()).then(records => {
            if (generation !== lifecycle) return false;
            for (const record of records) register_reference_model(record);
            return true;
        }).catch(error => {
            console.error(error);
            return false;
        });
    }

    function open_reference_library() {
        reference_dialog?.hide().delete();
        const dialog = new Dialog({
            id: plugin_id + '_preview_library',
            title: translate('reference_library'),
            width: 560,
            lines: ['<div class="modeler_toolkit_reference_library"></div>'],
            singleButton: true,
            buttons: [translate('close')]
        }).show();
        reference_dialog = dialog;
        const container = dialog.object.querySelector('.modeler_toolkit_reference_library');
        const generation = lifecycle;
        const button = (label, click) => {
            const element = document.createElement('button');
            element.type = 'button';
            element.textContent = translate(label);
            element.addEventListener('click', click);
            return element;
        };
        async function run(action) {
            if (reference_busy || generation !== lifecycle) return;
            reference_busy = true;
            render(translate('reference_busy'));
            let message = '';
            try {
                await action();
            } catch (error) {
                console.error(error);
                message = error instanceof Error ? error.message : translate('reference_error');
            } finally {
                if (generation === lifecycle) {
                    reference_busy = false;
                    refresh_reference_dialog?.(message);
                }
            }
        }
        function render(message = '') {
            if (generation !== lifecycle || reference_dialog !== dialog) return;
            const help = document.createElement('p');
            help.textContent = translate('reference_import_hint');
            const import_button = button('reference_import', () => {
                if (reference_busy) return;
                Blockbench.import({
                    type: translate('reference_import_files'),
                    extensions: ['bbmodel', ...Object.keys(reference_image_types)],
                    multiple: true,
                    readtype: name => /\.bbmodel$/i.test(name) ? 'text' : 'buffer'
                }, files => run(async () => {
                    const record = await read_reference_model(files, generation);
                    if (!record || generation !== lifecycle) return;
                    await reference_transaction('readwrite', store => store.add(record));
                    if (generation === lifecycle) register_reference_model(record);
                }));
            });
            container.replaceChildren(help, import_button);
            const status = document.createElement('p');
            status.setAttribute('role', 'status');
            status.textContent = message || (reference_entries.size ? '' : translate('reference_empty'));
            container.append(status);
            for (const {record, preview} of reference_entries.values()) {
                const row = document.createElement('div');
                row.style.cssText = 'display:flex;align-items:center;gap:8px;margin:8px 0';
                const name = document.createElement('input');
                name.type = 'text';
                name.maxLength = 120;
                name.value = record.name;
                name.setAttribute('aria-label', translate('reference_name'));
                name.style.flex = '1';
                row.append(name, button('reference_rename', () => run(async () => {
                    const value = name.value.trim();
                    if (!value || value === record.name) return;
                    const updated = {...record, name: value};
                    await reference_transaction('readwrite', store => store.put(updated));
                    if (generation !== lifecycle) return;
                    record.name = value;
                    preview.name = value;
                })), button('reference_remove', () => run(async () => {
                    await reference_transaction('readwrite', store => store.delete(record.id));
                    if (generation !== lifecycle) return;
                    remove_reference_model(record.id);
                    delete StateMemory.preview_model_customization[record.id];
                    StateMemory.save('preview_model_customization');
                })));
                container.append(row);
            }
            container.querySelectorAll('button').forEach(element => element.disabled = reference_busy);
        }
        refresh_reference_dialog = render;
        render(translate('reference_busy'));
        container.querySelector('button').disabled = true;
        reference_loading.then(loaded => {
            render(loaded ? '' : translate('reference_error'));
            if (!loaded) container.querySelectorAll('button').forEach(element => element.disabled = true);
        });
    }

    function stop_reference_library() {
        reference_dialog?.hide().delete();
        reference_dialog = null;
        refresh_reference_dialog = null;
        reference_setting?.delete();
        reference_setting = null;
        for (const id of reference_entries.keys()) remove_reference_model(id);
        reference_database?.then(database => database.close(), () => {});
        reference_database = null;
        reference_loading = null;
        reference_busy = false;
    }

    BBPlugin.register(plugin_id, {
        title: translate('modeler_toolkit'),
        author: 'Raven Studio',
        description: translate('rebuild_textures_and_uvs_create_outlines_and_record_animations_w'),
        about: translate('uv_tools_outlines_layer_controls_dynamic_shadows'),
        icon: 'handyman',
        variant: 'both',
        version: '3.11.0',
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
            const form_state = capture_form(true);
            const form_was_open = Dialog.open === Screencam.gif_options_dialog;
            ordered_settings().forEach(([key, definition]) => {
                plugin_settings[key] = new Setting(plugin_id + '_' + key, {
                    ...definition,
                    plugin: plugin_id,
                    category: 'export',
                    onChange: key === 'language' ? change_language : () => {
                        if (module_keys.has(key)) refresh_tools();
                        else update_capture_setting(key);
                    }
                });
            });
            if (typeof PreviewModel === 'function' && typeof indexedDB !== 'undefined') {
                reference_setting = new Setting(plugin_id + '_preview_library', {
                    name: translate('reference_library'),
                    description: translate('reference_library_description'),
                    type: 'click',
                    plugin: plugin_id,
                    click: open_reference_library
                });
                start_reference_library();
            }
            const form = Screencam.gif_options_dialog.form_config;
            previous_reference_images_field = form[reference_images_field];
            installed_reference_images_field = {
                label: translate('show_reference_images'),
                type: 'checkbox',
                value: false,
                description: translate('capture_visible_reference_images')
            };
            const fields = Object.entries(form).filter(([key]) => key !== reference_images_field);
            const background_index = fields.findIndex(([key]) => key === 'background_image');
            fields.splice(background_index < 0 ? fields.length : background_index + 1, 0, [reference_images_field, installed_reference_images_field]);
            Object.keys(form).forEach(key => delete form[key]);
            Object.assign(form, Object.fromEntries(fields));
            previous_field = form[export_field];
            Screencam.gif_options_dialog.form_config[export_field] = {
                label: translate('dynamic_shadow_clean_render'),
                type: 'checkbox',
                value: read_values().enabled,
                description: translate('use_modeler_toolkit_render_settings_for_this_export')
            };
            setup_shadow_fields();
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
            capture_configuration = load_capture_configuration();
            previous_open = Screencam.gif_options_dialog.onOpen;
            wrapped_open = function(...args) {
                restoring_capture_configuration = true;
                try {
                    const result = previous_open?.apply(this, args);
                    restore_capture_configuration(this);
                    update_animation_fields(this, capture_configuration?.animations);
                    return result;
                } finally {
                    restoring_capture_configuration = false;
                }
            };
            Screencam.gif_options_dialog.onOpen = wrapped_open;
            previous_form_change = Screencam.gif_options_dialog.onFormChange;
            wrapped_form_change = function(...args) {
                const result = previous_form_change?.apply(this, args);
                if (Dialog.open === this) save_capture_configuration();
                return result;
            };
            Screencam.gif_options_dialog.onFormChange = wrapped_form_change;
            previous_button = Screencam.gif_options_dialog.onButton;
            wrapped_button = function(...args) {
                save_capture_configuration();
                return previous_button?.apply(this, args);
            };
            Screencam.gif_options_dialog.onButton = wrapped_button;
            previous_confirm = Screencam.gif_options_dialog.onConfirm;
            wrapped_confirm = function(form_data) {
                save_capture_configuration();
                const selected = selected_capture_animations(form_data[animation_field]);
                if (Project && selected.length) animation_choices.set(Project, capture_animation_references(selected));
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
                let sequence = [];
                if (options.play) {
                    sequence = Array.isArray(options[animation_field]) || options[animation_field]
                        ? selected_capture_animations(options[animation_field])
                        : [animations.find(item => item === Animation.selected) || animations[0]].filter(Boolean);
                }
                if (options.play && !sequence.length) {
                    Blockbench.showQuickMessage(translate('choose_an_animation_available_in_this_project_before_recording'), 4000);
                    return;
                }
                const timed = sequence.filter(animation => animation.length > 0);
                sequence = timed.length ? timed : sequence.slice(0, 1);
                options = sequence_capture_options(options, sequence);
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
                    if (sequence.length) {
                        prepare_capture_animation(session, sequence);
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
                    if (Dialog.open !== Screencam.gif_options_dialog) wrapped_open.call(Screencam.gif_options_dialog);
                    await Screencam.gif_options_dialog.form_config[plugin_id + '_capture_preview'].click();
                }
            });
            setup_tool_modules();
            observe_language_setting();
            Blockbench.on('unselect_project', abort_recording);
            Blockbench.on('close_project', abort_recording);
            restoring_capture_configuration = true;
            try {
                rebuild_form(form_state);
                restore_capture_configuration(Screencam.gif_options_dialog);
                if (form_was_open) update_animation_fields(Screencam.gif_options_dialog, capture_configuration?.animations);
            } finally {
                restoring_capture_configuration = false;
            }
            if (form_was_open || form_state && !capture_configuration) save_capture_configuration();
        },
        onunload() {
            if (Dialog.open === Screencam.gif_options_dialog) save_capture_configuration();
            plugin_loaded = false;
            lifecycle++;
            stop_reference_library();
            restore_language_property?.();
            restore_language_property = null;
            font_process?.kill();
            font_process = null;
            abort_recording();
            pending_preview?.finish(null);
            const form_state = capture_form(true);
            if (Screencam.createGif === wrapped_create_gif) Screencam.createGif = previous_create_gif;
            if (Screencam.gif_options_dialog.onConfirm === wrapped_confirm) Screencam.gif_options_dialog.onConfirm = previous_confirm;
            if (Screencam.gif_options_dialog.onOpen === wrapped_open) Screencam.gif_options_dialog.onOpen = previous_open;
            if (Screencam.gif_options_dialog.onFormChange === wrapped_form_change) Screencam.gif_options_dialog.onFormChange = previous_form_change;
            if (Screencam.gif_options_dialog.onButton === wrapped_button) Screencam.gif_options_dialog.onButton = previous_button;
            if (Screencam.gif_options_dialog.form_config[reference_images_field] === installed_reference_images_field) {
                if (previous_reference_images_field === undefined) delete Screencam.gif_options_dialog.form_config[reference_images_field];
                else Screencam.gif_options_dialog.form_config[reference_images_field] = previous_reference_images_field;
            }
            if (previous_field === undefined) delete Screencam.gif_options_dialog.form_config[export_field];
            else Screencam.gif_options_dialog.form_config[export_field] = previous_field;
            if (Screencam.gif_options_dialog.form_config.play === installed_play_field) Screencam.gif_options_dialog.form_config.play = previous_play_field;
            if (installed_turnspeed_sync_field && Screencam.gif_options_dialog.form_config.turnspeed_o === installed_turnspeed_sync_field) Screencam.gif_options_dialog.form_config.turnspeed_o = previous_turnspeed_sync_field;
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
            installed_shadow_fields.forEach((field, key) => {
                if (Screencam.gif_options_dialog.form_config[key] !== field) return;
                const previous = previous_shadow_fields.get(key);
                if (previous === undefined) delete Screencam.gif_options_dialog.form_config[key];
                else Screencam.gif_options_dialog.form_config[key] = previous;
            });
            installed_shadow_fields.clear();
            previous_shadow_fields.clear();
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
