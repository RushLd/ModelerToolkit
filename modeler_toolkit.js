(function() {
    const plugin_id = 'modeler_toolkit';
    const messages = {
        "export_texture_backups": {
            "en": "Export Texture / UV Backups",
            "fr": "Exporter les sauvegardes des textures et UV"
        },
        "texture_uv_backups": {
            "en": "Texture and UV Backups",
            "fr": "Sauvegardes des textures et UV"
        },
        "close": {
            "en": "Close",
            "fr": "Fermer"
        },
        "incompatible_backup_preserved": {
            "en": "This backup no longer matches the current project. It has been preserved without applying it. You can optimize again from the current textures and UVs, or export all backups for recovery.",
            "fr": "Cette sauvegarde ne correspond plus au projet actuel. Elle est conservée sans être appliquée. Vous pouvez relancer l’optimisation depuis les textures et UV actuels, ou exporter toutes les sauvegardes pour les récupérer."
        },
        "previous_backups_preserved": {
            "en": "Restore returns to the state immediately before this optimization. Earlier backups remain embedded in the project and can be exported.",
            "fr": "La restauration revient à l’état juste avant cette optimisation. Les sauvegardes antérieures restent dans le projet et peuvent être exportées."
        },
        "rebuild_textures_and_share_matching_uvs": {
            "en": "Rebuild textures and share identical UV regions",
            "fr": "Reconstruire les textures et mutualiser les UV identiques"
        },
        "fewer_texture_pixels": {
            "en": "% fewer texture pixels.",
            "fr": " % de pixels de texture en moins."
        },
        "optimize_texture_and_uvs": {
            "en": "Optimize Texture and UVs",
            "fr": "Optimiser la texture et les UV"
        },
        "enable_dynamic_gif_render": {
            "en": "Enable Dynamic GIF Render",
            "fr": "Activer le rendu GIF dynamique"
        },
        "use_the_dynamic_renderer_by_default_when_recording_a_gif_apng_or": {
            "en": "Use the dynamic renderer by default when recording a GIF, APNG or PNG sequence.",
            "fr": "Utiliser le rendu dynamique par défaut lors de l’enregistrement d’un GIF, d’un APNG ou d’une séquence PNG."
        },
        "dynamic_shadow": {
            "en": "Dynamic Shadow",
            "fr": "Ombre dynamique"
        },
        "project_the_animated_model_onto_an_invisible_wall_or_floor_using": {
            "en": "Project the animated model onto an invisible wall or floor using a shadow map.",
            "fr": "Projeter l’ombre du modèle animé sur un mur ou un sol invisible à l’aide d’une carte d’ombres."
        },
        "shadow_color_tool_settings": {
            "en": "Shadow Color / Tool Settings",
            "fr": "Couleur de l’ombre / Paramètres des outils"
        },
        "open_the_color_picker_and_all_modeler_toolkit_settings": {
            "en": "Open the color picker and all Modeler Toolkit settings.",
            "fr": "Ouvrir le sélecteur de couleur et tous les paramètres de Modeler Toolkit."
        },
        "shadow_opacity": {
            "en": "Shadow Opacity (%)",
            "fr": "Opacité de l’ombre (%)"
        },
        "partial_opacity_needs_an_opaque_gif_background_or_apng_to_retain": {
            "en": "Partial opacity needs an opaque GIF background or APNG to retain smooth transparency.",
            "fr": "Une opacité partielle nécessite un fond GIF opaque ou le format APNG pour conserver une transparence progressive."
        },
        "shadow_softness": {
            "en": "Shadow Softness",
            "fr": "Flou de l’ombre"
        },
        "shadow_map_filter_radius_zero_produces_a_sharp_shadow": {
            "en": "Shadow map filter radius. Zero produces a sharp shadow.",
            "fr": "Rayon du filtre de la carte d’ombres. Une valeur de zéro produit une ombre nette."
        },
        "shadow_surface": {
            "en": "Shadow Surface",
            "fr": "Surface de projection de l’ombre"
        },
        "automatic_wall_behind_the_model": {
            "en": "Automatic wall behind the model",
            "fr": "Mur placé automatiquement derrière le modèle"
        },
        "floor_below_the_model": {
            "en": "Floor below the model",
            "fr": "Sol sous le modèle"
        },
        "surface_distance": {
            "en": "Surface Distance (%)",
            "fr": "Distance de la surface (%)"
        },
        "extra_distance_from_the_model_relative_to_its_size_placement_is": {
            "en": "Extra distance from the model, relative to its size. Placement is automatic.",
            "fr": "Distance supplémentaire par rapport au modèle, proportionnelle à sa taille. Le placement est automatique."
        },
        "light_horizontal": {
            "en": "Light Horizontal (%)",
            "fr": "Direction horizontale de la lumière (%)"
        },
        "negative_values_light_the_model_from_the_left_and_cast_the_shado": {
            "en": "Negative values light the model from the left and cast the shadow to the right.",
            "fr": "Les valeurs négatives éclairent le modèle depuis la gauche et projettent l’ombre vers la droite."
        },
        "light_vertical_direction": {
            "en": "Light Vertical Direction (%)",
            "fr": "Direction verticale de la lumière (%)"
        },
        "positive_values_light_the_model_from_above_when_using_the_wall": {
            "en": "Positive values light the model from above when using the wall.",
            "fr": "Les valeurs positives éclairent le modèle depuis le haut lorsque le mur est utilisé."
        },
        "shadow_map_resolution": {
            "en": "Shadow Map Resolution",
            "fr": "Résolution de la carte d’ombres"
        },
        "clean_texture_edges": {
            "en": "Clean Texture Edges",
            "fr": "Nettoyer les bords des textures"
        },
        "temporarily_inset_uvs_during_rendering_model_uvs_and_undo_histor": {
            "en": "Temporarily inset UVs during rendering. Model UVs and undo history stay unchanged.",
            "fr": "Réduire temporairement les UV pendant le rendu. Les UV du modèle et l’historique d’annulation restent inchangés."
        },
        "texture_edge_margin": {
            "en": "Texture Edge Margin",
            "fr": "Marge des bords de texture"
        },
        "inset_in_texture_uv_units_zero_disables_temporary_cleanup": {
            "en": "Inset in texture UV units. Zero disables temporary cleanup.",
            "fr": "Retrait en unités UV de texture. La valeur zéro désactive le nettoyage temporaire."
        },
        "watermark_text": {
            "en": "Watermark Text",
            "fr": "Texte du filigrane"
        },
        "a_single_line_of_text_enable_or_disable_it_in_the_gif_export_dia": {
            "en": "A single line of text. Enable or disable it in the GIF export dialog.",
            "fr": "Une seule ligne de texte. Activez ou désactivez le filigrane dans la fenêtre d’export GIF."
        },
        "watermark_position": {
            "en": "Watermark Position",
            "fr": "Position du filigrane"
        },
        "bottom_center": {
            "en": "Bottom center",
            "fr": "En bas au centre"
        },
        "bottom_left": {
            "en": "Bottom left",
            "fr": "En bas à gauche"
        },
        "bottom_right": {
            "en": "Bottom right",
            "fr": "En bas à droite"
        },
        "center_left": {
            "en": "Center left",
            "fr": "Au centre à gauche"
        },
        "center": {
            "en": "Center",
            "fr": "Au centre"
        },
        "center_right": {
            "en": "Center right",
            "fr": "Au centre à droite"
        },
        "top_left": {
            "en": "Top left",
            "fr": "En haut à gauche"
        },
        "top_center": {
            "en": "Top center",
            "fr": "En haut au centre"
        },
        "top_right": {
            "en": "Top right",
            "fr": "En haut à droite"
        },
        "watermark_color": {
            "en": "Watermark Color",
            "fr": "Couleur du filigrane"
        },
        "watermark_text_size": {
            "en": "Watermark Text Size (%)",
            "fr": "Taille du texte du filigrane (%)"
        },
        "font_size_relative_to_the_shorter_side_of_the_final_image_long_t": {
            "en": "Font size relative to the shorter side of the final image. Long text automatically shrinks to fit.",
            "fr": "Taille de la police proportionnelle au côté le plus court de l’image finale. Les textes longs sont automatiquement réduits pour tenir dans l’image."
        },
        "watermark_margin": {
            "en": "Watermark Margin (%)",
            "fr": "Marge du filigrane (%)"
        },
        "distance_from_the_final_image_edges_relative_to_its_shorter_side": {
            "en": "Distance from the final image edges, relative to its shorter side.",
            "fr": "Distance par rapport aux bords de l’image finale, proportionnelle à son côté le plus court."
        },
        "watermark_font": {
            "en": "Watermark Font",
            "fr": "Police du filigrane"
        },
        "fonts_installed_on_this_computer_including_custom_fonts": {
            "en": "Fonts installed on this computer, including custom fonts.",
            "fr": "Polices installées sur cet ordinateur, y compris les polices personnalisées."
        },
        "enable_uv_cleanup_restoration": {
            "en": "Enable UV Cleanup / Restoration",
            "fr": "Activer le nettoyage / la restauration des UV"
        },
        "clean_selected_model_uvs_and_restore_the_saved_originals": {
            "en": "Clean selected model UVs and restore the saved originals.",
            "fr": "Nettoyer les UV de la sélection et restaurer les UV d’origine sauvegardés."
        },
        "enable_texture_uv_optimization": {
            "en": "Enable Texture / UV Optimization",
            "fr": "Activer l’optimisation des textures et des UV"
        },
        "rebuild_a_clean_square_texture_share_identical_uv_regions_and_re": {
            "en": "Rebuild a clean square texture, share identical UV regions and reduce dimensions when possible.",
            "fr": "Reconstruire une texture carrée propre, mutualiser les régions UV identiques et réduire les dimensions lorsque c’est possible."
        },
        "power_of_two_texture_atlas": {
            "en": "Power-of-Two Texture Atlas",
            "fr": "Texture carrée en puissance de deux"
        },
        "use_square_sizes_16_32_64_etc_disabled_uses_square_multiples_of": {
            "en": "Use square sizes 16, 32, 64, etc. Disabled uses square multiples of 16, as the native generator with Power of Two disabled.",
            "fr": "Utiliser des dimensions carrées de 16, 32, 64, etc. Si cette option est désactivée, utiliser des multiples de 16, comme le générateur natif sans l’option « Puissance de deux »."
        },
        "enable_inverted_cubes": {
            "en": "Enable Inverted Cubes",
            "fr": "Activer les cubes inversés"
        },
        "create_inward_facing_copies_named_name_inverted": {
            "en": "Create inward facing copies named <name>_inverted.",
            "fr": "Créer des copies aux faces orientées vers l’intérieur, nommées <nom>_inverted."
        },
        "enable_outlines": {
            "en": "Enable Outlines",
            "fr": "Activer les contours"
        },
        "create_outline_shells_named_name_outline": {
            "en": "Create outline shells named <name>_outline.",
            "fr": "Créer des enveloppes de contour nommées <nom>_outline."
        },
        "enable_java_version_selector": {
            "en": "Enable Java Version Selector",
            "fr": "Activer le sélecteur de version Java"
        },
        "choose_a_supported_java_model_version_when_converting_a_project": {
            "en": "Choose a supported Java model version when converting a project.",
            "fr": "Choisir une version de modèle Java prise en charge lors de la conversion d’un projet."
        },
        "enable_layer_controls": {
            "en": "Enable Layer Controls",
            "fr": "Activer les outils de calques"
        },
        "toggle_or_isolate_elements_and_groups_containing_layer": {
            "en": "Toggle or isolate elements and groups containing _layer.",
            "fr": "Afficher, masquer ou isoler les éléments et groupes dont le nom contient _layer."
        },
        "plugin_settings": {
            "en": "Plugin settings",
            "fr": "Paramètres du plugin"
        },
        "top": {
            "en": "Top",
            "fr": "En haut"
        },
        "left": {
            "en": "Left",
            "fr": "À gauche"
        },
        "front": {
            "en": "Front",
            "fr": "De face"
        },
        "right": {
            "en": "Right",
            "fr": "À droite"
        },
        "bottom": {
            "en": "Bottom",
            "fr": "En bas"
        },
        "custom_direction": {
            "en": "Custom direction",
            "fr": "Direction personnalisée"
        },
        "local_font_access_is_unavailable_allow_local_font_access_in_your": {
            "en": "Local font access is unavailable. Allow local font access in your browser.",
            "fr": "L’accès aux polices locales est indisponible. Autorisez cet accès dans votre navigateur."
        },
        "unavailable": {
            "en": " (Unavailable)",
            "fr": " (indisponible)"
        },
        "select_cubes_or_meshes_with_editable_per_face_uvs": {
            "en": "Select cubes or meshes with editable per face UVs.",
            "fr": "Sélectionnez des cubes ou des maillages dont les UV par face sont modifiables."
        },
        "apply_modeler_toolkit_uv_cleanup": {
            "en": "Apply Modeler Toolkit UV Cleanup",
            "fr": "Appliquer le nettoyage UV de Modeler Toolkit"
        },
        "mandatory_box_uv_elements_were_skipped": {
            "en": "Mandatory box UV elements were skipped.",
            "fr": "Les éléments imposant des UV de boîte ont été ignorés."
        },
        "clean_uv_edges": {
            "en": "Clean UV Edges",
            "fr": "Nettoyer les bords UV"
        },
        "margin": {
            "en": "Margin",
            "fr": "Marge"
        },
        "original_uvs_are_saved_in_the_model_restore_uvs_returns_to_that": {
            "en": "Original UVs are saved in the model. Restore UVs returns to that saved state.",
            "fr": "Les UV d’origine sont sauvegardés dans le modèle. L’outil « Restaurer les UV d’origine » permet de revenir à cet état."
        },
        "no_matching_original_uv_backup_exact_restoration_requires_uv_cle": {
            "en": "No matching original UV backup. Exact restoration requires UV cleanup applied by Modeler Toolkit.",
            "fr": "Aucune sauvegarde correspondante des UV d’origine. Une restauration exacte nécessite d’avoir appliqué le nettoyage avec Modeler Toolkit."
        },
        "restore_modeler_toolkit_uvs": {
            "en": "Restore Modeler Toolkit UVs",
            "fr": "Restaurer les UV avec Modeler Toolkit"
        },
        "select_cubes_in_a_format_supporting_per_face_uvs": {
            "en": "Select cubes in a format supporting per face UVs.",
            "fr": "Sélectionnez des cubes dans un format prenant en charge les UV par face."
        },
        "create_modeler_toolkit_inverted_cubes": {
            "en": "Create Modeler Toolkit Inverted Cubes",
            "fr": "Créer des cubes inversés avec Modeler Toolkit"
        },
        "create_modeler_toolkit_outlines": {
            "en": "Create Modeler Toolkit Outlines",
            "fr": "Créer des contours avec Modeler Toolkit"
        },
        "the_outline_texture_is_no_longer_available": {
            "en": "The outline texture is no longer available.",
            "fr": "La texture du contour n’est plus disponible."
        },
        "generate_solid_color_texture": {
            "en": "Generate Solid Color Texture",
            "fr": "Générer une texture de couleur unie"
        },
        "this_format_needs_an_existing_front_sided_texture_for_outlines": {
            "en": "This format needs an existing front sided texture for outlines.",
            "fr": "Ce format nécessite une texture existante dont seules les faces avant sont visibles pour créer les contours."
        },
        "create_outlines": {
            "en": "Create Outlines",
            "fr": "Créer des contours"
        },
        "thickness": {
            "en": "Thickness",
            "fr": "Épaisseur"
        },
        "outline_color": {
            "en": "Outline Color",
            "fr": "Couleur du contour"
        },
        "convert_project": {
            "en": "Convert Project",
            "fr": "Convertir le projet"
        },
        "conversion_may_remove_features_unsupported_by_the_target_format": {
            "en": "Conversion may remove features unsupported by the target format. Create Copy keeps the current project.",
            "fr": "La conversion peut supprimer les fonctionnalités non prises en charge par le format cible. L’option « Créer une copie » conserve le projet actuel."
        },
        "current_format": {
            "en": "Current Format",
            "fr": "Format actuel"
        },
        "java_model_version": {
            "en": "Java Model Version",
            "fr": "Version du modèle Java"
        },
        "create_copy": {
            "en": "Create Copy",
            "fr": "Créer une copie"
        },
        "no_elements_or_groups_containing_layer": {
            "en": "No elements or groups containing _layer.",
            "fr": "Aucun élément ni groupe dont le nom contient _layer."
        },
        "modeler_toolkit_texture_optimization": {
            "en": "Modeler Toolkit - Texture Optimization",
            "fr": "Modeler Toolkit - Optimisation des textures"
        },
        "box_uv_layouts_preserved": {
            "en": "Box UV layouts preserved",
            "fr": "Dispositions des UV de boîte conservées"
        },
        "textures_still_loading_or_unavailable": {
            "en": "Textures still loading or unavailable",
            "fr": "Textures en cours de chargement ou indisponibles"
        },
        "animated_layered_or_material_textures_preserved": {
            "en": "Animated, layered or material textures preserved",
            "fr": "Textures animées, à calques ou associées à un matériau conservées"
        },
        "textures_exceeding_the_safe_comparison_size": {
            "en": "Textures exceeding the safe comparison size",
            "fr": "Textures dépassant la taille limite de comparaison"
        },
        "invalid_uv_coordinates": {
            "en": "Invalid UV coordinates",
            "fr": "Coordonnées UV invalides"
        },
        "uvs_outside_the_texture_preserved": {
            "en": "UVs outside the texture preserved",
            "fr": "UV situés hors de la texture conservés"
        },
        "finish_the_current_edit_or_recording_before_optimizing_uvs": {
            "en": "Finish the current edit or recording before optimizing UVs.",
            "fr": "Terminez la modification ou l’enregistrement en cours avant d’optimiser les UV."
        },
        "layered_compositing_is_active_the_texture_stack_and_uvs_were_pre": {
            "en": "Layered compositing is active. The texture stack and UVs were preserved.",
            "fr": "La composition des textures par calques est active. La pile de textures et les UV ont été conservés."
        },
        "no_changes_were_made": {
            "en": "No changes were made. ",
            "fr": "Aucune modification n’a été effectuée. "
        },
        "no_additional_pixel_identical_uv_regions_were_found_original_tex": {
            "en": "No additional pixel-identical UV regions were found. Original textures, dimensions and padding are unchanged.",
            "fr": "Aucune région UV supplémentaire identique au pixel près n’a été trouvée. Les textures d’origine, leurs dimensions et le rembourrage restent inchangés."
        },
        "share_identical_uv_regions_without_changing_textures": {
            "en": "Share identical UV regions without changing textures",
            "fr": "Partager les régions UV identiques sans modifier les textures"
        },
        "uv_optimization_was_cancelled": {
            "en": "UV optimization was cancelled. ",
            "fr": "L’optimisation des UV a été annulée. "
        },
        "face_s_now_share_pixel_identical_uv_regions_including_rotated_or": {
            "en": " face(s) now share pixel-identical UV regions, including rotated or mirrored matches.\nUV regions: ",
            "fr": " face(s) partagent désormais des régions UV existantes identiques au pixel près, y compris après rotation ou retournement.\nRégions UV : "
        },
        "original_pixels_dimensions_padding_and_texture_assignments_are_u": {
            "en": ".\n\nOriginal pixels, dimensions, padding and texture assignments are unchanged. UVs are adjusted to preserve face appearance and orientation. Texture resolution is not reduced automatically.\n\nUse Undo or Restore Original Textures / UVs to revert.",
            "fr": ".\n\nLes pixels d’origine, les dimensions, le rembourrage et les textures attribuées aux faces restent inchangés. Les UV sont adaptés pour conserver le rendu et l’orientation des faces. La résolution des textures n’est pas réduite automatiquement.\n\nUtilisez « Annuler » ou « Restaurer les textures et UV d’origine » pour revenir en arrière."
        },
        "finish_the_current_edit_or_recording_before_rebuilding_textures": {
            "en": "Finish the current edit or recording before rebuilding textures.",
            "fr": "Terminez la modification ou l’enregistrement en cours avant de reconstruire les textures."
        },
        "layered_texture_compositing_is_active_the_texture_stack_was_pres": {
            "en": "Layered texture compositing is active. The texture stack was preserved.",
            "fr": "La composition des textures par calques est active. La pile de textures a été conservée."
        },
        "some_uvs_or_element_types_require_the_original_layout": {
            "en": ": some UVs or element types require the original layout",
            "fr": " : certains UV ou types d’éléments nécessitent la disposition d’origine"
        },
        "no_compatible_square_layout_found_with_the_same_pixels_and_borde": {
            "en": ": no compatible square layout found with the same pixels and borders without enlarging the texture",
            "fr": " : aucune disposition carrée compatible trouvée avec les mêmes pixels et bordures, sans agrandir la texture"
        },
        "no_compatible_square_texture_could_be_rebuilt_without_enlargemen": {
            "en": "No compatible square texture could be rebuilt without enlargement. Original textures and UVs were preserved.",
            "fr": "Aucune texture carrée compatible n’a pu être reconstruite sans agrandissement. Les textures et les UV d’origine ont été conservés."
        },
        "this_format_shares_a_non_square_uv_resolution_across_several_tex": {
            "en": "This format shares a non-square UV resolution across several textures. Repacking it would change texture animation, so the original layout was preserved.",
            "fr": "Ce format partage une résolution UV non carrée entre plusieurs textures. Leur réorganisation modifierait l’animation des textures ; la disposition d’origine a donc été conservée."
        },
        "texture_repacking_was_cancelled": {
            "en": "Texture repacking was cancelled. ",
            "fr": "La réorganisation des textures a été annulée. "
        },
        "dimensions_preserved_rebuilding_does_not_require_a_smaller_textu": {
            "en": "Dimensions preserved: rebuilding does not require a smaller texture.",
            "fr": "Dimensions conservées : la reconstruction ne nécessite pas de réduire la texture."
        },
        "uv_regions": {
            "en": "\nUV regions: ",
            "fr": "\nRégions UV : "
        },
        "identical_regions_are_shared_including_rotated_or_mirrored_match": {
            "en": "\n\nIdentical regions are shared, including rotated or mirrored matches. Face pixels and border pixels are preserved. UVs are adjusted to preserve face appearance and orientation. No resampling or image smoothing.\n\nUse Undo or Restore Original Textures / UVs to revert. Existing image files are not overwritten automatically.",
            "fr": "\n\nLes régions identiques sont fusionnées, y compris après rotation ou retournement. Les pixels des faces et des bordures sont conservés. Les UV sont adaptés pour préserver le rendu et l’orientation des faces. Aucun rééchantillonnage ni lissage de l’image.\n\nUtilisez « Annuler » ou « Restaurer les textures et UV d’origine » pour revenir en arrière. Les fichiers image existants ne sont pas écrasés automatiquement."
        },
        "finish_the_current_edit_or_recording_before_restoring_textures": {
            "en": "Finish the current edit or recording before restoring textures.",
            "fr": "Terminez la modification ou l’enregistrement en cours avant de restaurer les textures."
        },
        "undo_the_project_format_or_uv_resolution_change_before_restoring": {
            "en": "Undo the project format or UV resolution change before restoring these textures.",
            "fr": "Annulez le changement de format du projet ou de résolution UV avant de restaurer ces textures."
        },
        "an_optimized_texture_is_missing_or_has_a_different_resolution_un": {
            "en": "An optimized texture is missing or has a different resolution. Undo its replacement before restoring.",
            "fr": "Une texture optimisée est manquante ou sa résolution a changé. Annulez son remplacement avant de lancer la restauration."
        },
        "an_optimized_element_has_different_faces_or_vertices_undo_its_to": {
            "en": "An optimized element has different faces or vertices. Undo its topology change before restoring.",
            "fr": "Les faces ou les sommets d’un élément optimisé ont changé. Annulez cette modification de géométrie avant de lancer la restauration."
        },
        "new_geometry_uses_an_optimized_texture_undo_that_addition_before": {
            "en": "New geometry uses an optimized texture. Undo that addition before restoring its original texture layout.",
            "fr": "De nouveaux éléments utilisent une texture optimisée. Annulez leur ajout avant de restaurer la disposition d’origine de cette texture."
        },
        "restore_original_square_atlas_textures_and_uvs": {
            "en": "Restore original square atlas textures and UVs",
            "fr": "Restaurer les textures et UV d’origine de l’atlas carré"
        },
        "texture_restoration_was_cancelled": {
            "en": "Texture restoration was cancelled. ",
            "fr": "La restauration des textures a été annulée. "
        },
        "original_textures_uvs_and_resolution_restored": {
            "en": "Original textures, UVs and resolution restored.",
            "fr": "Les textures, les UV et la résolution d’origine ont été restaurés."
        },
        "finish_the_current_edit_or_recording_before_restoring_uvs": {
            "en": "Finish the current edit or recording before restoring UVs.",
            "fr": "Terminez la modification ou l’enregistrement en cours avant de restaurer les UV."
        },
        "undo_the_project_format_or_uv_resolution_change_before_restoring_2": {
            "en": "Undo the project format or UV resolution change before restoring the original UVs.",
            "fr": "Annulez le changement de format du projet ou de résolution UV avant de restaurer les UV d’origine."
        },
        "an_original_texture_is_missing_or_has_a_different_resolution_res": {
            "en": "An original texture is missing or has a different resolution. Restore it before restoring these UVs.",
            "fr": "Une texture d’origine est manquante ou sa résolution a changé. Restaurez-la avant de restaurer ces UV."
        },
        "an_optimized_element_has_different_faces_or_vertices_undo_its_to_2": {
            "en": "An optimized element has different faces or vertices. Undo its topology change before restoring these UVs.",
            "fr": "Les faces ou les sommets d’un élément optimisé ont changé. Annulez cette modification de géométrie avant de restaurer ces UV."
        },
        "restore_original_uvs_without_changing_textures": {
            "en": "Restore original UVs without changing textures",
            "fr": "Restaurer les UV d’origine sans modifier les textures"
        },
        "uv_restoration_was_cancelled": {
            "en": "UV restoration was cancelled. ",
            "fr": "La restauration des UV a été annulée. "
        },
        "original_uvs_restored_texture_images_preserved": {
            "en": "Original UVs restored. Texture images preserved.",
            "fr": "Les UV d’origine ont été restaurés. Les images des textures ont été conservées."
        },
        "this_project_has_no_texture_optimization_backup": {
            "en": "This project has no texture optimization backup.",
            "fr": "Ce projet ne contient aucune sauvegarde des textures avant optimisation."
        },
        "the_project_format_or_uv_resolution_has_changed_undo_those_chang": {
            "en": "The project format or UV resolution has changed. Undo those changes before restoring the original textures.",
            "fr": "Le format du projet ou la résolution UV a changé. Annulez ces modifications avant de restaurer les textures d’origine."
        },
        "an_optimized_element_has_different_faces_or_vertices_undo_its_to_3": {
            "en": "An optimized element has different faces or vertices. Undo its topology changes before restoring the original UVs.",
            "fr": "Les faces ou les sommets d’un élément optimisé ont changé. Annulez ces modifications de géométrie avant de restaurer les UV d’origine."
        },
        "an_original_texture_identifier_is_already_in_use_undo_the_textur": {
            "en": "An original texture identifier is already in use. Undo the texture replacement before restoring.",
            "fr": "L’identifiant d’une texture d’origine est déjà utilisé. Annulez le remplacement de cette texture avant de lancer la restauration."
        },
        "an_original_texture_path_is_already_in_use_undo_the_texture_repl": {
            "en": "An original texture path is already in use. Undo the texture replacement before restoring.",
            "fr": "Le chemin d’une texture d’origine est déjà utilisé. Annulez le remplacement de cette texture avant de lancer la restauration."
        },
        "new_geometry_uses_the_optimized_default_texture_undo_that_additi": {
            "en": "New geometry uses the optimized default texture. Undo that addition before restoring in this single-texture format.",
            "fr": "De nouveaux éléments utilisent la texture optimisée par défaut. Annulez leur ajout avant de lancer la restauration dans ce format à texture unique."
        },
        "restore_original_textures_and_uvs": {
            "en": "Restore original textures and UVs",
            "fr": "Restaurer les textures et les UV d’origine"
        },
        "restoration_was_cancelled": {
            "en": "Restoration was cancelled. ",
            "fr": "La restauration a été annulée. "
        },
        "original_textures_and_uvs_restored": {
            "en": "Original textures and UVs restored.",
            "fr": "Les textures et les UV d’origine ont été restaurés."
        },
        "share_uvs_keep_texture": {
            "en": "Share UVs (Keep Texture)",
            "fr": "Partager les UV sans modifier la texture"
        },
        "create_texture_blockbench": {
            "en": "Create Texture (Blockbench)",
            "fr": "Créer une texture (Blockbench)"
        },
        "restore_original_textures_uvs": {
            "en": "Restore Original Textures / UVs",
            "fr": "Restaurer les textures et UV d’origine"
        },
        "restore_original_uvs": {
            "en": "Restore Original UVs",
            "fr": "Restaurer les UV d’origine"
        },
        "create_inverted_cubes": {
            "en": "Create Inverted Cubes",
            "fr": "Créer des cubes inversés"
        },
        "convert_project_java_version": {
            "en": "Convert Project / Java Version",
            "fr": "Convertir le projet / Version Java"
        },
        "modeler_toolkit_settings": {
            "en": "Modeler Toolkit Settings",
            "fr": "Paramètres de Modeler Toolkit"
        },
        "toggle_layers": {
            "en": "Toggle Layers",
            "fr": "Afficher / masquer les calques"
        },
        "show_only_layers": {
            "en": "Show Only Layers",
            "fr": "Afficher uniquement les calques"
        },
        "modeler_toolkit": {
            "en": "Modeler Toolkit",
            "fr": "Modeler Toolkit"
        },
        "available_tools": {
            "en": "Available Tools",
            "fr": "Outils disponibles"
        },
        "gif_render_the_invisible_wall_or_floor_only_receives_the_shadow": {
            "en": "GIF render: the invisible wall or floor only receives the shadow. Use an opaque GIF background or APNG for soft, partially transparent shadows.",
            "fr": "Rendu GIF : le mur ou le sol invisible reçoit uniquement l’ombre. Utilisez un fond GIF opaque ou le format APNG pour des ombres douces et partiellement transparentes."
        },
        "the_installed_font_list_is_unavailable_reopen_settings_after_all": {
            "en": "The installed font list is unavailable. Reopen settings after allowing local font access.",
            "fr": "La liste des polices installées est indisponible. Autorisez l’accès aux polices locales, puis rouvrez les paramètres."
        },
        "preview": {
            "en": "Preview",
            "fr": "Aperçu"
        },
        "reset_to_defaults": {
            "en": "Reset to Defaults",
            "fr": "Rétablir les valeurs par défaut"
        },
        "preview_gif_render": {
            "en": "Preview GIF Render",
            "fr": "Aperçu du rendu GIF"
        },
        "back_to_settings": {
            "en": "Back to Settings",
            "fr": "Retour aux paramètres"
        },
        "modeler_toolkit_watermark": {
            "en": "Modeler Toolkit Watermark",
            "fr": "Filigrane de Modeler Toolkit"
        },
        "unnamed_animation": {
            "en": "Unnamed Animation",
            "fr": "Animation sans nom"
        },
        "animation_to_record": {
            "en": "Animation to Record",
            "fr": "Animation à enregistrer"
        },
        "record_this_animation_from_any_editor_mode": {
            "en": "Record this animation from any editor mode.",
            "fr": "Enregistrer cette animation depuis n’importe quel mode de l’éditeur."
        },
        "shadow_light_direction": {
            "en": "Shadow Light Direction",
            "fr": "Direction de la lumière de l’ombre"
        },
        "choose_where_the_light_comes_from_for_this_export_the_shadow_pro": {
            "en": "Choose where the light comes from for this export. The shadow projects in the opposite direction.",
            "fr": "Choisissez la provenance de la lumière pour cet export. L’ombre est projetée dans la direction opposée."
        },
        "negative_light_from_the_left_positive_light_from_the_right": {
            "en": "Negative: light from the left. Positive: light from the right.",
            "fr": "Valeur négative : lumière depuis la gauche. Valeur positive : lumière depuis la droite."
        },
        "light_vertical_depth": {
            "en": "Light Vertical / Depth (%)",
            "fr": "Direction verticale / Profondeur de la lumière (%)"
        },
        "negative_light_from_below_positive_light_from_above_on_a_floor_t": {
            "en": "Negative: light from below. Positive: light from above. On a floor this adjusts depth.",
            "fr": "Valeur négative : lumière depuis le bas. Valeur positive : lumière depuis le haut. Sur un sol, ce réglage ajuste la profondeur."
        },
        "modeler_toolkit_capture_stopped": {
            "en": "Modeler Toolkit capture stopped: ",
            "fr": "L’enregistrement Modeler Toolkit s’est arrêté : "
        },
        "open_a_model_and_finish_the_current_recording_before_previewing": {
            "en": "Open a model and finish the current recording before previewing.",
            "fr": "Ouvrez un modèle et terminez l’enregistrement en cours avant de lancer l’aperçu."
        },
        "rebuild_textures_and_uvs_create_outlines_and_record_animations_w": {
            "en": "Rebuild textures and UVs, create outlines and record animations with configurable shadows and watermarks.",
            "fr": "Reconstruire les textures et les UV, créer des contours et enregistrer des animations avec des ombres et un filigrane personnalisables."
        },
        "uv_tools_outlines_java_conversion_layer_controls_dynamic_shadows": {
            "en": "UV tools, outlines, Java conversion, layer controls, dynamic shadows and watermark. See the repository for usage instructions and the MIT license.",
            "fr": "Outils UV, contours, conversion Java, calques, ombres dynamiques et filigrane. Voir le dépôt pour le mode d’emploi et la licence MIT."
        },
        "dynamic_shadow_clean_render": {
            "en": "Dynamic Shadow / Clean Render",
            "fr": "Ombre dynamique / Rendu propre"
        },
        "use_modeler_toolkit_render_settings_for_this_export": {
            "en": "Use Modeler Toolkit render settings for this export.",
            "fr": "Utiliser les réglages de rendu de Modeler Toolkit pour cet export."
        },
        "watermark": {
            "en": "Watermark",
            "fr": "Filigrane"
        },
        "add_your_configured_text_to_every_frame_independently_of_dynamic": {
            "en": "Add your configured text to every frame, independently of Dynamic Shadow / Clean Render.",
            "fr": "Ajouter le texte configuré à chaque image, indépendamment de l’option « Ombre dynamique / Rendu propre »."
        },
        "watermark_settings": {
            "en": "Watermark Settings",
            "fr": "Paramètres du filigrane"
        },
        "finish_or_cancel_the_current_gif_recording_first": {
            "en": "Finish or cancel the current GIF recording first.",
            "fr": "Terminez ou annulez d’abord l’enregistrement GIF en cours."
        },
        "choose_an_animation_available_in_this_project_before_recording": {
            "en": "Choose an animation available in this project before recording.",
            "fr": "Choisissez une animation disponible dans ce projet avant de lancer l’enregistrement."
        }
    };
    Object.keys(messages).forEach(key => delete Language.data[plugin_id + '.' + key]);
    ['en', 'fr'].forEach(language => Language.addTranslations(language, Object.fromEntries(Object.entries(messages).map(([key, value]) => [plugin_id + '.' + key, value[language]]))));

    function translate(key) {
        return tl(plugin_id + '.' + key);
    }
    const installed_font_options = {Arial: 'Arial'};
    const setting_definitions = {
        enabled: {name: translate('enable_dynamic_gif_render'), type: 'toggle', value: false, description: translate('use_the_dynamic_renderer_by_default_when_recording_a_gif_apng_or')},
        shadow_enabled: {name: translate('dynamic_shadow'), type: 'toggle', value: true, description: translate('project_the_animated_model_onto_an_invisible_wall_or_floor_using')},
        color: {name: translate('shadow_color_tool_settings'), type: 'click', value: '#424242', icon: 'palette', description: translate('open_the_color_picker_and_all_modeler_toolkit_settings'), click: open_settings},
        opacity: {name: translate('shadow_opacity'), type: 'number', value: 35, min: 0, max: 100, step: 1, description: translate('partial_opacity_needs_an_opaque_gif_background_or_apng_to_retain')},
        softness: {name: translate('shadow_softness'), type: 'number', value: 0, min: 0, max: 12, step: 0.25, description: translate('shadow_map_filter_radius_zero_produces_a_sharp_shadow')},
        surface: {name: translate('shadow_surface'), type: 'select', value: 'wall', options: {wall: translate('automatic_wall_behind_the_model'), floor: translate('floor_below_the_model')}},
        gap: {name: translate('surface_distance'), type: 'number', value: 10, min: 0, max: 200, step: 1, description: translate('extra_distance_from_the_model_relative_to_its_size_placement_is')},
        light_x: {name: translate('light_horizontal'), type: 'number', value: -60, min: -200, max: 200, step: 5, description: translate('negative_values_light_the_model_from_the_left_and_cast_the_shado')},
        light_y: {name: translate('light_vertical_direction'), type: 'number', value: 80, min: -200, max: 200, step: 5, description: translate('positive_values_light_the_model_from_above_when_using_the_wall')},
        resolution: {name: translate('shadow_map_resolution'), type: 'select', value: '2048', options: {'512': '512', '1024': '1024', '2048': '2048', '4096': '4096'}},
        clean_uv: {name: translate('clean_texture_edges'), type: 'toggle', value: false, description: translate('temporarily_inset_uvs_during_rendering_model_uvs_and_undo_histor')},
        uv_margin: {name: translate('texture_edge_margin'), type: 'number', value: 0.032, min: 0, max: 0.25, step: 0.001, description: translate('inset_in_texture_uv_units_zero_disables_temporary_cleanup')},
        watermark_text: {name: translate('watermark_text'), type: 'text', value: '', description: translate('a_single_line_of_text_enable_or_disable_it_in_the_gif_export_dia')},
        watermark_position: {name: translate('watermark_position'), type: 'select', value: 'bottom_center', options: {bottom_center: translate('bottom_center'), bottom_left: translate('bottom_left'), bottom_right: translate('bottom_right'), center_left: translate('center_left'), center: translate('center'), center_right: translate('center_right'), top_left: translate('top_left'), top_center: translate('top_center'), top_right: translate('top_right')}},
        watermark_color: {name: translate('watermark_color'), type: 'click', value: '#ffffff', icon: 'palette', click: open_watermark_settings},
        watermark_size: {name: translate('watermark_text_size'), type: 'number', value: 3, min: 0.5, max: 15, step: 0.25, description: translate('font_size_relative_to_the_shorter_side_of_the_final_image_long_t')},
        watermark_margin: {name: translate('watermark_margin'), type: 'number', value: 3, min: 0, max: 25, step: 0.5, description: translate('distance_from_the_final_image_edges_relative_to_its_shorter_side')},
        watermark_font: {name: translate('watermark_font'), type: 'select', value: 'Arial', options: installed_font_options, description: translate('fonts_installed_on_this_computer_including_custom_fonts')},
        uv_cleanup: {name: translate('enable_uv_cleanup_restoration'), type: 'toggle', value: true, description: translate('clean_selected_model_uvs_and_restore_the_saved_originals')},
        atlas: {name: translate('enable_texture_uv_optimization'), type: 'toggle', value: true, description: translate('rebuild_a_clean_square_texture_share_identical_uv_regions_and_re')},
        atlas_power: {name: translate('power_of_two_texture_atlas'), type: 'toggle', value: false, description: translate('use_square_sizes_16_32_64_etc_disabled_uses_square_multiples_of')},
        inverted: {name: translate('enable_inverted_cubes'), type: 'toggle', value: true, description: translate('create_inward_facing_copies_named_name_inverted')},
        outline: {name: translate('enable_outlines'), type: 'toggle', value: true, description: translate('create_outline_shells_named_name_outline')},
        java_selector: {name: translate('enable_java_version_selector'), type: 'toggle', value: true, description: translate('choose_a_supported_java_model_version_when_converting_a_project')},
        layers: {name: translate('enable_layer_controls'), type: 'toggle', value: true, description: translate('toggle_or_isolate_elements_and_groups_containing_layer')}
    };
    const plugin_settings = {};
    const module_keys = new Set(['uv_cleanup', 'atlas', 'atlas_power', 'inverted', 'outline', 'java_selector', 'layers']);
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
    const animation_choices = new WeakMap();
    let active_session = null;
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
            const previous_key = key === 'uv_cleanup' ? 'plaster' : key;
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
        ['atlas_padding', 'watermark_enabled', 'watermark_line_1', 'watermark_line_2', 'watermark_line_3', 'watermark_opacity', 'watermark_bold', 'watermark_outline', 'watermark_outline_color'].forEach(key => delete Settings.stored[plugin_id + '_' + key]);
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

    function clean_model_uv(element, margin) {
        if (element instanceof Cube && element.box_uv) element.setUVMode(false);
        Object.values(element.faces).forEach(face => {
            if (face.texture === null) return;
            if (Array.isArray(face.uv)) {
                const original = face.uv.slice();
                for (let axis = 0; axis < 2; axis++) {
                    const low = Math.min(original[axis], original[axis + 2]);
                    const high = Math.max(original[axis], original[axis + 2]);
                    const span = high - low;
                    if (span < 0.00001) continue;
                    const next_low = Math.min(low + span * 0.49, Math.max(low, inset_boundary(low, false, margin)));
                    const next_high = Math.max(high - span * 0.49, Math.min(high, inset_boundary(high, true, margin)));
                    const mirrored = original[axis] > original[axis + 2];
                    face.uv[axis] = mirrored ? next_high : next_low;
                    face.uv[axis + 2] = mirrored ? next_low : next_high;
                }
            } else {
                const points = Object.values(face.uv);
                if (!points.length) return;
                inset_uv_points(points, margin);
            }
        });
        element.preview_controller.updateUV(element);
    }

    function apply_uv_cleanup(elements, margin) {
        const supported = elements.filter(element => !(element instanceof Cube && element.box_uv && !Format.optional_box_uv));
        if (!supported.length) {
            Blockbench.showQuickMessage(translate('select_cubes_or_meshes_with_editable_per_face_uvs'), 3000);
            return;
        }
        supported.forEach(element => {
            if (!element[backup_key]) element[backup_key] = {};
        });
        edit_model(translate('apply_modeler_toolkit_uv_cleanup'), {elements: supported}, () => {
            supported.forEach(element => {
                if (!element[backup_key].faces) element[backup_key] = capture_model_uv(element);
                clean_model_uv(element, margin);
            });
            UVEditor.loadData();
        });
        if (supported.length !== elements.length) Blockbench.showQuickMessage(translate('mandatory_box_uv_elements_were_skipped'), 3000);
    }

    function open_uv_cleanup() {
        const project = Project;
        const elements = selected_elements();
        if (!elements.length) return;
        show_tool_dialog({
            id: 'modeler_toolkit_uv_cleanup_settings',
            title: translate('clean_uv_edges'),
            form: {
                margin: {label: translate('margin'), type: 'number', min: 0.001, max: 0.25, step: 0.001, value: read_values().uv_margin},
                information: {type: 'info', text: translate('original_uvs_are_saved_in_the_model_restore_uvs_returns_to_that')}
            },
            onConfirm(form_data) {
                if (Project !== project) return;
                const margin = Math.min(0.25, Math.max(0.001, Number(form_data.margin) || 0.032));
                apply_uv_cleanup(elements.filter(element => Project.elements.includes(element)), margin);
            }
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

    function open_java_conversion() {
        const source_project = Project;
        const formats = Object.fromEntries(Object.entries(Formats).filter(([id, format]) => id !== Format.id && format.can_convert_to).map(([id, format]) => [id, format.name]));
        const versions = {...ModelProject.properties.java_block_version.options};
        const default_version = ModelProject.properties.java_block_version.getDefault(Project) || Object.keys(versions).slice(-1)[0];
        show_tool_dialog({
            id: 'modeler_toolkit_convert_project',
            title: translate('convert_project'),
            width: 540,
            form: {
                information: {type: 'info', text: translate('conversion_may_remove_features_unsupported_by_the_target_format')},
                current: {type: 'info', label: translate('current_format'), text: Format.name || Format.id},
                format: {label: 'Format', type: 'select', options: formats, value: formats.java_block ? 'java_block' : Object.keys(formats)[0]},
                java_block_version: {label: translate('java_model_version'), type: 'select', options: versions, value: default_version, condition: form => form.format === 'java_block'},
                create_copy: {label: translate('create_copy'), type: 'checkbox', value: true}
            },
            onConfirm(form_data) {
                if (Project !== source_project) return;
                const target = Formats[form_data.format];
                if (!target || target === Format) return;
                if (form_data.create_copy) {
                    const selected_texture = Texture.selected?.uuid;
                    const model = Codecs.project.compile({raw: true});
                    const original_format = Format;
                    setupProject(original_format);
                    Codecs.project.parse(model, '');
                    if (Project.name) Project.name += '_converted';
                    Texture.all.find(texture => texture.uuid === selected_texture)?.select();
                }
                target.convertTo();
                if (form_data.format === 'java_block' && versions[form_data.java_block_version]) Project.java_block_version = form_data.java_block_version;
                Project.saved = false;
                updateInterface();
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
        const isolate = tool_actions.find(action => action.id === 'modeler_toolkit_show_only_layers');
        toggle?.setIcon(state?.mode === 'hide' ? 'visibility' : 'visibility_off');
        isolate?.setIcon(state?.mode === 'isolate' ? 'layers_clear' : 'layers');
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
        Blockbench.showMessageBox({title: translate('modeler_toolkit_texture_optimization'), message, icon: error ? 'error' : 'info'});
        return {changed: false, message};
    }

    function export_atlas_backups() {
        const backup = Project?.[atlas_backup_key];
        if (!backup?.version) return atlas_message(translate('this_project_has_no_texture_optimization_backup'));
        return Blockbench.export({
            resource_id: 'modeler_toolkit_texture_backups',
            type: translate('texture_uv_backups'),
            extensions: ['json'],
            name: (Project.name || 'model') + '_texture_backups',
            savetype: 'text',
            content: JSON.stringify({version: 1, project: Project.name, format: Format.id, backup}, null, 2)
        });
    }

    function atlas_restore_blocked(reason) {
        const project = Project;
        const message = reason + '\n\n' + translate('incompatible_backup_preserved');
        Blockbench.showMessageBox({
            title: translate('modeler_toolkit_texture_optimization'),
            message,
            icon: 'info',
            buttons: [translate('export_texture_backups'), translate('close')],
            confirm: 0,
            cancel: 1
        }, result => {
            if (result === 0 && Project === project) export_atlas_backups();
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

    function texture_uv_topology_matches(element, saved) {
        return element.type === saved.type && Object.keys(element.faces).length === Object.keys(saved.faces).length
            && Object.entries(element.faces).every(([key, face]) => saved.faces[key] && (!face.vertices
                || face.vertices.length === saved.faces[key].vertices?.length && face.vertices.every(vertex => saved.faces[key].vertices.includes(vertex))));
    }

    function apply_texture_uv(element, saved) {
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
        const border = region.border || 1;
        const width = transform & 4 ? region.height : region.width;
        const height = transform & 4 ? region.width : region.height;
        let hash = 2166136261;
        for (let y = -border; y < height + border; y++) {
            for (let x = -border; x < width + border; x++) {
                const offset = transformed_uv_pixel(region, x, y, transform);
                for (let channel = 0; channel < 4; channel++) hash = Math.imul(hash ^ region.source.pixels[offset + channel], 16777619);
            }
        }
        return width + '_' + height + '_' + border + '_' + (hash >>> 0);
    }

    function equal_uv_regions(first, second, transform = 0) {
        const border = first.border || 1;
        if (border !== (second.border || 1) || first.width !== (transform & 4 ? second.height : second.width) || first.height !== (transform & 4 ? second.width : second.height)) return false;
        for (let y = -border; y < first.height + border; y++) {
            for (let x = -border; x < first.width + border; x++) {
                const first_offset = uv_region_pixel(first, x, y);
                const second_offset = transformed_uv_pixel(second, x, y, transform);
                for (let channel = 0; channel < 4; channel++) {
                    if (first.source.pixels[first_offset + channel] !== second.source.pixels[second_offset + channel]) return false;
                }
            }
        }
        return true;
    }

    function plan_model_uvs() {
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
                const min = [0, 1].map(axis => Math.min(...points.map(point => point[axis] * scale[axis])));
                const max = [0, 1].map(axis => Math.max(...points.map(point => point[axis] * scale[axis])));
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
                const region_key = [x, y, width, height].join('_');
                let region = source.regions.get(region_key);
                if (!region) {
                    const border = Math.max(1, Math.ceil(source.width / texture.getUVWidth()), Math.ceil(source.height / texture.getUVHeight()));
                    region = {source, x, y, width, height, border, key: texture.uuid + '_' + region_key};
                    const hash = hash_uv_region(region);
                    const matches = source.hashes.get(hash) || [];
                    const match = matches.find(candidate => equal_uv_regions(region, candidate.region, candidate.transform));
                    region.target = match?.region || region;
                    region.transform = match?.transform || 0;
                    if (region.target === region) {
                        for (let transform = 0; transform < 8; transform++) {
                            const transformed_hash = transform === 0 ? hash : hash_uv_region(region, transform);
                            const candidates = source.hashes.get(transformed_hash) || [];
                            candidates.push({region, transform});
                            source.hashes.set(transformed_hash, candidates);
                        }
                    }
                    source.regions.set(region_key, region);
                }
                entries.push({element, key, face, region, scale});
            }
        }
        return {entries, skipped};
    }

    function remap_texture_uv(entry, placement, width, height) {
        const {region, face, element, scale} = entry;
        const texture = region.source.texture;
        const transform = region.transform;
        const point = uv => {
            const local = [uv[0] * scale[0] - region.x, uv[1] * scale[1] - region.y];
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

    function square_region_tile(region, border) {
        const width = region.width + border * 2;
        const height = region.height + border * 2;
        const data = new Uint32Array(width * height);
        const source = region.source;
        const words = new Uint32Array(source.pixels.buffer, source.pixels.byteOffset, source.pixels.length / 4);
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) data[y * width + x] = words[uv_region_pixel(region, x - border, y - border) / 4];
        }
        return {region, border, width, height, data};
    }

    function fit_square_regions(tiles, size, preserve_positions, budget) {
        const pixels = new Uint32Array(size * size);
        const occupied = new Uint8Array(size * size);
        const placements = new Map();
        function score(tile, left, top) {
            if (tile.region.source.texture.wrap_mode === 'repeat' && (left < tile.border || top < tile.border || left + tile.region.width + tile.border > size || top + tile.region.height + tile.border > size)) return -1;
            let overlap = 0;
            for (let y = 0; y < tile.height; y++) {
                const target_y = top + y - tile.border;
                for (let x = 0; x < tile.width; x++) {
                    if (--budget.remaining < 0) return -2;
                    const target_x = left + x - tile.border;
                    const value = tile.data[y * tile.width + x];
                    if (target_x < 0 || target_y < 0 || target_x >= size || target_y >= size) {
                        const clamped_x = Math.max(0, Math.min(size - 1, target_x)) - left + tile.border;
                        const clamped_y = Math.max(0, Math.min(size - 1, target_y)) - top + tile.border;
                        if (value !== tile.data[clamped_y * tile.width + clamped_x]) return -1;
                        continue;
                    }
                    const index = target_y * size + target_x;
                    if (occupied[index]) {
                        if (pixels[index] !== value) return -1;
                        overlap++;
                    }
                }
            }
            return overlap;
        }
        for (const tile of tiles) {
            if (tile.region.width > size || tile.region.height > size) return null;
            let best = null;
            const original_x = tile.region.x;
            const original_y = tile.region.y;
            if (preserve_positions && original_x + tile.region.width <= size && original_y + tile.region.height <= size) {
                const overlap = score(tile, original_x, original_y);
                if (overlap === -2) return null;
                if (overlap >= 0) best = {x: original_x, y: original_y, overlap};
            }
            if (!best) {
                for (let y = 0; y <= size - tile.region.height; y++) {
                    for (let x = 0; x <= size - tile.region.width; x++) {
                        const overlap = score(tile, x, y);
                        if (overlap === -2) return null;
                        if (overlap >= 0 && (!best || overlap > best.overlap)) best = {x, y, overlap};
                    }
                }
            }
            if (!best) return null;
            placements.set(tile.region, best);
            for (let y = 0; y < tile.height; y++) {
                const target_y = best.y + y - tile.border;
                if (target_y < 0 || target_y >= size) continue;
                for (let x = 0; x < tile.width; x++) {
                    const target_x = best.x + x - tile.border;
                    if (target_x < 0 || target_x >= size) continue;
                    const index = target_y * size + target_x;
                    pixels[index] = tile.data[y * tile.width + x];
                    occupied[index] = 1;
                }
            }
        }
        return {size, placements, pixels};
    }

    function plan_square_texture(entries, power) {
        const source = entries[0].region.source;
        const regions = [...new Set(entries.map(entry => entry.region.target))];
        const border = Math.max(1, Math.ceil(source.width / source.texture.getUVWidth()), Math.ceil(source.height / source.texture.getUVHeight()));
        if (regions.reduce((count, region) => count + (region.width + border * 2) * (region.height + border * 2), 0) > 16777216) return null;
        const tiles = regions.map(region => square_region_tile(region, border));
        const budget = {remaining: 64000000};
        const by_area = tiles.slice().sort((first, second) => second.width * second.height - first.width * first.height);
        const by_height = tiles.slice().sort((first, second) => second.height - first.height || second.width - first.width);
        const keep_size = source.width === source.height && source.width <= 2048 && (!power || (source.width & (source.width - 1)) === 0);
        const fallback = keep_size ? fit_square_regions(by_area, source.width, true, {remaining: 16777216}) : null;
        for (let size = 16; size * size < source.width * source.height && size <= 2048; size = power ? size * 2 : size + 16) {
            if (regions.some(region => region.width > size || region.height > size)) continue;
            for (const [ordered, preserve_positions] of [[by_area, true], [by_area, false], [by_height, false]]) {
                const packed = fit_square_regions(ordered, size, preserve_positions, budget);
                if (packed) return {...packed, source, entries, border};
                if (budget.remaining < 0) return fallback ? {...fallback, source, entries, border} : null;
            }
        }
        return fallback ? {...fallback, source, entries, border} : null;
    }

    function refresh_atlas_view() {
        Canvas.updateAllFaces();
        Canvas.updateAllUVs();
        UVEditor.loadData();
        UVEditor.vue.updateTexture();
        updateInterfacePanels();
        MenuBar.update();
    }

    function share_model_uvs() {
        if (!Project) return;
        if (active_session || Undo.current_save) return atlas_message(translate('finish_the_current_edit_or_recording_before_optimizing_uvs'));
        if (Texture.all.some(texture => texture.render_mode === 'layered')) return atlas_message(translate('layered_compositing_is_active_the_texture_stack_and_uvs_were_pre'));
        let plan;
        try {
            plan = plan_model_uvs();
        } catch (error) {
            return atlas_message(translate('no_changes_were_made') + error.message, true);
        }
        const changes = plan.entries.filter(entry => entry.region.target !== entry.region);
        const skipped_text = [...plan.skipped].map(([reason, count]) => reason + ': ' + count).join('\n');
        if (!changes.length) return atlas_message(translate('no_additional_pixel_identical_uv_regions_were_found_original_tex') + (skipped_text ? '\n\n' + skipped_text : ''));
        const elements = [...new Set(changes.map(entry => entry.element))];
        const textures = [...new Set(changes.map(entry => entry.region.source.texture))];
        const backup = {
            version: 2,
            mode: 'uv_only',
            format: Format.id,
            width: Project.texture_width,
            height: Project.texture_height,
            previous_backup: structuredClone(Project[atlas_backup_key] || {}),
            textures: textures.map(texture => ({uuid: texture.uuid, width: texture.width, height: texture.height, uv_width: texture.getUVWidth(), uv_height: texture.getUVHeight()})),
            elements: Object.fromEntries(elements.map(element => [element.uuid, capture_texture_uv(element)]))
        };
        const aspects = {elements, uv_only: true, raven_tools_atlas: true};
        Undo.initEdit(aspects);
        try {
            for (const entry of changes) {
                remap_texture_uv(entry, entry.region.target, entry.region.source.width, entry.region.source.height);
            }
            Project[atlas_backup_key] = backup;
            refresh_atlas_view();
            Undo.finishEdit(translate('share_identical_uv_regions_without_changing_textures'), aspects);
        } catch (error) {
            Undo.cancelEdit(true);
            refresh_atlas_view();
            return atlas_message(translate('uv_optimization_was_cancelled') + error.message, true);
        }
        const result = {changed: true, mode: 'uv_only', faces: changes.length, regions_before: new Set(plan.entries.map(entry => entry.region.key)).size, regions_after: new Set(plan.entries.map(entry => entry.region.target.key)).size, textures_unchanged: true};
        atlas_message(result.faces + translate('face_s_now_share_pixel_identical_uv_regions_including_rotated_or') + result.regions_before + ' → ' + result.regions_after + translate('original_pixels_dimensions_padding_and_texture_assignments_are_u') + (skipped_text ? '\n\n' + skipped_text : ''));
        return result;
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

    function optimize_texture_atlas() {
        if (!Project) return;
        if (active_session || Undo.current_save) return atlas_message(translate('finish_the_current_edit_or_recording_before_rebuilding_textures'));
        if (Texture.all.some(texture => texture.render_mode === 'layered')) return atlas_message(translate('layered_texture_compositing_is_active_the_texture_stack_was_pres'));
        const previous_backup = structuredClone(Project[atlas_backup_key] || {});
        const skipped = [];
        let plans;
        try {
            const source_plan = plan_model_uvs();
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
                const plan = plan_square_texture(entries, !!plugin_settings.atlas_power.value || texture.wrap_mode === 'repeat');
                if (plan) plans.push(plan);
                else skipped.push(texture.name + translate('no_compatible_square_layout_found_with_the_same_pixels_and_borde'));
            }
        } catch (error) {
            return atlas_message(translate('no_changes_were_made') + error.message, true);
        }
        if (!plans.length) return atlas_message(translate('no_compatible_square_texture_could_be_rebuilt_without_enlargemen') + (skipped.length ? '\n\n' + skipped.join('\n') : ''));
        const change_project_size = !Format.per_texture_uv_size && Texture.all.length === 1 && plans.length === 1;
        if (!Format.per_texture_uv_size && !change_project_size && Project.texture_width !== Project.texture_height && Format.animated_textures) return atlas_message(translate('this_format_shares_a_non_square_uv_resolution_across_several_tex'));
        const elements = [...new Set(plans.flatMap(plan => plan.entries.map(entry => entry.element)))];
        const textures = plans.map(plan => plan.source.texture);
        const backup = {
            version: 3,
            mode: 'square_atlas',
            format: Format.id,
            width: Project.texture_width,
            height: Project.texture_height,
            optimized_width: change_project_size ? plans[0].size : Project.texture_width,
            optimized_height: change_project_size ? plans[0].size : Project.texture_height,
            previous_backup,
            textures: textures.map(texture => ({...texture.getUndoCopy(true), image_data: texture.canvas.toDataURL('image/png')})),
            optimized_textures: plans.map(plan => ({uuid: plan.source.texture.uuid, width: plan.size, height: plan.size})),
            elements: Object.fromEntries(elements.map(element => [element.uuid, capture_texture_uv(element)]))
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
                elements.filter(element => plan.entries.some(entry => entry.element === element)).forEach(element => element[backup_key] = {});
            }
            Project[atlas_backup_key] = backup;
            refresh_atlas_view();
            Undo.finishEdit(translate('rebuild_textures_and_share_matching_uvs'), aspects);
        } catch (error) {
            Undo.cancelEdit(true);
            refresh_atlas_view();
            return atlas_message(translate('texture_repacking_was_cancelled') + error.message, true);
        }
        const original_pixels = plans.reduce((area, plan) => area + plan.source.width * plan.source.height, 0);
        const atlas_pixels = plans.reduce((area, plan) => area + plan.size * plan.size, 0);
        const regions_before = plans.reduce((count, plan) => count + new Set(plan.entries.map(entry => entry.region)).size, 0);
        const regions_after = plans.reduce((count, plan) => count + plan.placements.size, 0);
        const result = {changed: true, mode: 'square_atlas', original_pixels, atlas_pixels, reduction: 1 - atlas_pixels / original_pixels, regions_before, regions_after, textures: plans.map(plan => ({name: plan.source.texture.name, before: [plan.source.width, plan.source.height], after: [plan.size, plan.size], border: plan.border, regions: plan.placements.size})), skipped};
        const dimensions_message = result.reduction > 0 ? (result.reduction * 100).toLocaleString(Language.code === 'fr' ? 'fr-FR' : 'en-US', {maximumFractionDigits: 1}) + translate('fewer_texture_pixels') : translate('dimensions_preserved_rebuilding_does_not_require_a_smaller_textu');
        atlas_message(result.textures.map(texture => texture.name + ' : ' + texture.before.join(' × ') + ' → ' + texture.after.join(' × ')).join('\n') + translate('uv_regions') + regions_before + ' → ' + regions_after + '.\n' + dimensions_message + translate('identical_regions_are_shared_including_rotated_or_mirrored_match') + (previous_backup.version ? '\n\n' + translate('previous_backups_preserved') : '') + (skipped.length ? '\n\n' + skipped.join('\n') : ''));
        return result;
    }

    function restore_square_atlas(backup) {
        if (active_session || Undo.current_save) return atlas_message(translate('finish_the_current_edit_or_recording_before_restoring_textures'));
        if (backup.format !== Format.id || Project.texture_width !== backup.optimized_width || Project.texture_height !== backup.optimized_height) return atlas_restore_blocked(translate('undo_the_project_format_or_uv_resolution_change_before_restoring'));
        const textures = backup.textures.map(saved => Texture.all.find(texture => texture.uuid === saved.uuid));
        if (textures.some((texture, index) => !texture || texture.width !== backup.optimized_textures[index].width || texture.height !== backup.optimized_textures[index].height)) return atlas_restore_blocked(translate('an_optimized_texture_is_missing_or_has_a_different_resolution_un'));
        const elements = Outliner.elements.filter(element => backup.elements[element.uuid]);
        if (elements.some(element => !texture_uv_topology_matches(element, backup.elements[element.uuid]))) return atlas_restore_blocked(translate('an_optimized_element_has_different_faces_or_vertices_undo_its_to'));
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
            elements.forEach(element => apply_texture_uv(element, backup.elements[element.uuid]));
            Project[atlas_backup_key] = structuredClone(backup.previous_backup || {});
            refresh_atlas_view();
            Undo.finishEdit(translate('restore_original_square_atlas_textures_and_uvs'), aspects);
        } catch (error) {
            Undo.cancelEdit(true);
            refresh_atlas_view();
            return atlas_message(translate('texture_restoration_was_cancelled') + error.message, true);
        }
        Blockbench.showQuickMessage(translate('original_textures_uvs_and_resolution_restored'), 4000);
        return {changed: true, textures: textures.length, elements: elements.length};
    }

    function rebuild_texture_atlas() {
        if (!Project) return;
        return BarItems.create_texture.trigger();
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
            return atlas_message(translate('uv_restoration_was_cancelled') + error.message, true);
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
            return atlas_message(translate('restoration_was_cancelled') + error.message, true);
        }
        Blockbench.showQuickMessage(translate('original_textures_and_uvs_restored'), 4000);
        return {changed: true, elements: elements.length, textures: restored.length};
    }

    function setup_tool_modules() {
        [Cube, Mesh].forEach(type => uv_properties.push(new Property(type, 'object', backup_key, {default: {}, exposed: false})));
        uv_properties.push(new Property(ModelProject, 'object', atlas_backup_key, {default: {}, exposed: false}));
        Blockbench.on('create_undo_save', capture_atlas_undo);
        Blockbench.on('load_undo_save', load_atlas_undo);
        Blockbench.on('save_project', serialize_square_atlas);
        const definitions = [
            ['modeler_toolkit_optimize_atlas', {name: translate('optimize_texture_and_uvs'), icon: 'texture', condition: () => module_enabled('atlas') && !!Project && Outliner.elements.length > 0, click: optimize_texture_atlas}],
            ['modeler_toolkit_share_uv', {name: translate('share_uvs_keep_texture'), icon: 'content_copy', condition: () => module_enabled('atlas') && !!Project && Outliner.elements.length > 0, click: share_model_uvs}],
            ['modeler_toolkit_rebuild_texture', {name: translate('create_texture_blockbench'), icon: 'grid_on', condition: () => module_enabled('atlas') && !!Project && Outliner.elements.length > 0, click: rebuild_texture_atlas}],
            ['modeler_toolkit_restore_atlas', {name: translate('restore_original_textures_uvs'), icon: 'restore', condition: () => module_enabled('atlas') && !!Project && [1, 2, 3].includes(Project[atlas_backup_key]?.version), click: restore_texture_atlas}],
            ['modeler_toolkit_export_backups', {name: translate('export_texture_backups'), icon: 'save_alt', condition: () => module_enabled('atlas') && !!Project && !!Project[atlas_backup_key]?.version, click: export_atlas_backups}],
            ['modeler_toolkit_uv_cleanup', {name: translate('clean_uv_edges'), icon: 'healing', condition: () => module_enabled('uv_cleanup') && !!Project && selected_elements().length > 0, click: open_uv_cleanup}],
            ['modeler_toolkit_restore_uv', {name: translate('restore_original_uvs'), icon: 'settings_backup_restore', condition: () => module_enabled('uv_cleanup') && !!Project && selected_elements().length > 0, click: restore_model_uv}],
            ['modeler_toolkit_inverted', {name: translate('create_inverted_cubes'), icon: 'flip_to_back', condition: () => module_enabled('inverted') && !!Project && selected_elements().some(element => element instanceof Cube), click: create_inverted_cubes}],
            ['modeler_toolkit_outline', {name: translate('create_outlines'), icon: 'crop_square', condition: () => module_enabled('outline') && !!Project && selected_elements().length > 0, click: open_outline}],
            ['modeler_toolkit_convert', {name: translate('convert_project_java_version'), icon: 'swap_horiz', condition: () => module_enabled('java_selector') && !!Project, click: open_java_conversion}],
            ['modeler_toolkit_settings', {name: translate('modeler_toolkit_settings'), icon: 'settings', click: open_settings}],
            ['modeler_toolkit_toggle_layers', {name: translate('toggle_layers'), icon: 'visibility_off', condition: () => module_enabled('layers') && !!Project && Outliner.elements.length > 0, click: () => toggle_layer_visibility('hide')}],
            ['modeler_toolkit_show_only_layers', {name: translate('show_only_layers'), icon: 'layers', condition: () => module_enabled('layers') && !!Project && Outliner.elements.length > 0, click: () => toggle_layer_visibility('isolate')}]
        ];
        definitions.forEach(([id, options]) => tool_actions.push(new Action(id, {...options, category: 'edit'})));
        ['modeler_toolkit_toggle_layers', 'modeler_toolkit_show_only_layers'].forEach(id => {
            if (Toolbars.outliner && !Toolbars.outliner.children.some(child => (typeof child === 'string' ? child : child.id) === id)) Toolbars.outliner.add(id);
        });
        tools_menu = new BarMenu('modeler_toolkit', ['modeler_toolkit_optimize_atlas', 'modeler_toolkit_restore_atlas', 'modeler_toolkit_export_backups', 'modeler_toolkit_share_uv', 'modeler_toolkit_rebuild_texture', '_', 'modeler_toolkit_uv_cleanup', 'modeler_toolkit_restore_uv', '_', 'modeler_toolkit_inverted', 'modeler_toolkit_outline', '_', 'modeler_toolkit_preview_shadow', 'modeler_toolkit_settings', '_', 'modeler_toolkit_convert', '_', 'modeler_toolkit_toggle_layers', 'modeler_toolkit_show_only_layers'], {name: translate('modeler_toolkit'), icon: 'handyman'});
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
                step: definition.step
            };
        });
        form.actions = {
            type: 'buttons',
            buttons: [translate('preview'), translate('reset_to_defaults')],
            async click(index) {
                if (index === 0) {
                    const return_dialog = settings_dialog;
                    const options = read_values(return_dialog.getFormResult());
                    const data_url = await render_preview(options);
                    if (data_url && settings_dialog === return_dialog) {
                        const preview_image = document.createElement('img');
                        preview_image.src = data_url;
                        preview_image.width = 512;
                        preview_image.height = 512;
                        preview_image.className = 'checkerboard';
                        preview_dialog = new Dialog({
                            id: 'modeler_toolkit_preview',
                            title: translate('preview_gif_render'),
                            width: 552,
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
                    }
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
            values: form.getResult(),
            toggles: Object.fromEntries(Object.entries(form.form_data).filter(([, field]) => field.input_toggle).map(([key, field]) => [key, field.input_toggle.checked]))
        };
    }

    function rebuild_form(state) {
        if (!state) return;
        const form = Screencam.gif_options_dialog.form;
        form.buildForm();
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
        const visible = form => !!form[export_field] && !!plugin_settings.shadow_enabled.value;
        const custom = form => visible(form) && form[light_field] === 'custom';
        const definitions = {
            [light_field]: {label: translate('shadow_light_direction'), type: 'select', value: 'settings', options: Object.fromEntries(Object.entries(light_presets).map(([key, preset]) => [key, preset.name])), condition: visible, description: translate('choose_where_the_light_comes_from_for_this_export_the_shadow_pro')},
            [light_x_field]: {label: translate('light_horizontal'), type: 'number', value: values.light_x, min: -200, max: 200, step: 5, condition: custom, description: translate('negative_light_from_the_left_positive_light_from_the_right')},
            [light_y_field]: {label: translate('light_vertical_depth'), type: 'number', value: values.light_y, min: -200, max: 200, step: 5, condition: custom, description: translate('negative_light_from_below_positive_light_from_above_on_a_floor_t')}
        };
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

    function inset_boundary(value, upper, margin) {
        return value + (upper ? -margin : margin);
    }

    function inset_uv_points(points, margin) {
        if (!points.length) return;
        const bounds = [0, 1].map(axis => [Math.min(...points.map(point => point[axis])), Math.max(...points.map(point => point[axis]))]);
        const spans = bounds.map(([low, high]) => high - low).filter(span => span > 0.00001);
        if (!spans.length) return;
        const scale = Math.max(0.02, 1 - 2 * margin / Math.min(...spans));
        points.forEach(point => bounds.forEach(([low, high], axis) => point[axis] = (low + high) / 2 + (point[axis] - (low + high) / 2) * scale));
    }

    function uv_dimensions(face, project) {
        const texture = face.getTexture();
        const per_texture = texture && (Format.per_texture_uv_size || face instanceof MeshFace) && project.view_mode !== 'uv';
        return [
            per_texture ? texture.getUVWidth() : project.texture_width,
            (per_texture ? texture.getUVHeight() : project.texture_height) * (texture?.frameCount || 1)
        ];
    }

    function clean_cube_uv(element, attribute, margin, project) {
        Canvas.face_order.forEach((face_key, face_index) => {
            const face = element.faces[face_key];
            if (face.texture === null) return;
            const dimensions = uv_dimensions(face, project);
            const start = face_index * 4;
            if (start + 4 > attribute.count) return;
            for (let axis = 0; axis < 2; axis++) {
                const scale = dimensions[axis];
                if (!(scale > 0)) continue;
                const coordinates = Array.from({length: 4}, (_, index) => (axis ? 1 - attribute.getY(start + index) : attribute.getX(start + index)) * scale);
                const low = Math.min(...coordinates);
                const high = Math.max(...coordinates);
                const span = high - low;
                if (span < 0.00001) continue;
                const inset_low = Math.min(low + span * 0.49, Math.max(low, inset_boundary(low, false, margin)));
                const inset_high = Math.max(high - span * 0.49, Math.min(high, inset_boundary(high, true, margin)));
                coordinates.forEach((coordinate, index) => {
                    const value = (inset_low + (coordinate - low) / span * (inset_high - inset_low)) / scale;
                    if (axis) attribute.setY(start + index, 1 - value);
                    else attribute.setX(start + index, value);
                });
            }
        });
    }

    function clean_mesh_uv(element, attribute, margin, project) {
        let start = 0;
        Object.values(element.faces).forEach(face => {
            const count = face.vertices.length;
            if (count < 3) return;
            if (face.texture !== null && start + count <= attribute.count) {
                const [width, height] = uv_dimensions(face, project);
                if (!(width > 0 && height > 0)) {
                    start += count;
                    return;
                }
                const points = Array.from({length: count}, (_, index) => [attribute.getX(start + index) * width, attribute.getY(start + index) * height]);
                inset_uv_points(points, margin);
                for (let index = start; index < start + count; index++) {
                    attribute.setXY(index, points[index - start][0] / width, points[index - start][1] / height);
                }
            }
            start += count;
        });
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

    function create_session(options, project = Project) {
        const session = {options, project, depth_materials: new Map(), frame: null, observer: null, disposed: false, anchor: null};
        if (options.shadow_enabled) {
            session.receiver = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.ShadowMaterial({color: options.color, opacity: options.opacity / 100, depthWrite: false, side: THREE.DoubleSide}));
            session.receiver.name = 'modeler_toolkit_receiver';
            session.receiver.receiveShadow = true;
            session.receiver.material.toneMapped = false;
            session.light = new THREE.DirectionalLight(0xffffff, 0);
            session.light.name = 'modeler_toolkit_light';
            session.light.castShadow = true;
            session.light.shadow.mapSize.set(Number(options.resolution), Number(options.resolution));
            session.light.shadow.radius = options.softness;
            session.light.shadow.bias = -0.0001;
        }
        return session;
    }

    function position_shadow(session, camera, bounds) {
        if (!session.anchor) session.anchor = bounds.clone();
        const center = session.anchor.getCenter(new THREE.Vector3());
        const radius = Math.max(session.anchor.getSize(new THREE.Vector3()).length() / 2, 0.5);
        const normal = session.options.surface === 'floor' ? new THREE.Vector3(0, 1, 0) : camera.getWorldDirection(new THREE.Vector3()).negate();
        const right = new THREE.Vector3(1, 0, 0).applyQuaternion(camera.quaternion);
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
        const direction = normal.clone().addScaledVector(right, session.options.light_x / 100).addScaledVector(up, session.options.light_y / 100).normalize();
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
        const receiver_depth = radius * (2 + session.options.gap / 100) / Math.max(direction.dot(normal), 0.1) + radius;
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
        const uv_snapshots = new Map();
        const cast_snapshots = new Map();
        const shadow_state = {enabled: renderer.shadowMap.enabled, type: renderer.shadowMap.type, autoUpdate: renderer.shadowMap.autoUpdate, needsUpdate: renderer.shadowMap.needsUpdate};
        const original_buffer_render = renderer.renderBufferDirect;
        let buffer_wrapper;
        try {
            if (session.options.clean_uv && session.options.uv_margin > 0) {
                elements.forEach(element => {
                    const attribute = element.mesh.geometry.attributes.uv;
                    if (!attribute || uv_snapshots.has(attribute) || element[backup_key]?.faces) return;
                    uv_snapshots.set(attribute, attribute.array.slice());
                    if (element instanceof Cube) clean_cube_uv(element, attribute, session.options.uv_margin, session.project);
                    else clean_mesh_uv(element, attribute, session.options.uv_margin, session.project);
                    attribute.needsUpdate = true;
                });
            }
            if (session.light) {
                position_shadow(session, camera, bounds);
                const casters = new Set(elements.map(element => element.mesh));
                render_scene.traverse(node => {
                    if (node.isMesh || node.isLight) {
                        cast_snapshots.set(node, node.castShadow);
                        node.castShadow = casters.has(node);
                    }
                });
                Object.assign(renderer.shadowMap, {enabled: true, type: THREE.PCFShadowMap, autoUpdate: true, needsUpdate: true});
                render_scene.add(session.receiver, session.light, session.light.target);
                buffer_wrapper = function(render_camera, scene_argument, geometry, material, object, group) {
                    if (render_camera === session.light.shadow.camera && casters.has(object)) {
                        const source = Array.isArray(object.material) ? object.material[group?.materialIndex || 0] : object.material;
                        if (source) material = get_depth_material(session, source);
                    }
                    return original_buffer_render.call(this, render_camera, scene_argument, geometry, material, object, group);
                };
                renderer.renderBufferDirect = buffer_wrapper;
            }
            return render();
        } finally {
            if (session.light) {
                render_scene.remove(session.receiver, session.light, session.light.target);
                if (renderer.renderBufferDirect === buffer_wrapper) renderer.renderBufferDirect = original_buffer_render;
            }
            cast_snapshots.forEach((value, node) => node.castShadow = value);
            uv_snapshots.forEach((array, attribute) => {
                attribute.array.set(array);
                attribute.needsUpdate = true;
            });
            Object.assign(renderer.shadowMap, shadow_state);
        }
    }

    function dispose_session(session) {
        if (!session || session.disposed) return;
        session.disposed = true;
        session.observer?.disconnect();
        if (session.watermark_canvas) {
            session.watermark_canvas.width = 0;
            session.watermark_canvas = null;
        }
        if (session.gif_format && session.gif_format.frameRendered === session.frame_wrapper) {
            if (session.had_frame_handler) session.gif_format.frameRendered = session.previous_frame_handler;
            else delete session.gif_format.frameRendered;
        }
        if (session.renderer && session.renderer.render === session.render_wrapper) session.renderer.render = session.original_render;
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
        if (active_session === session) active_session = null;
        restore_capture_animation(session);
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
            Blockbench.showQuickMessage(translate('modeler_toolkit_capture_stopped') + error.message, 5000);
        });
    }

    function attach_recording(session, options) {
        session.frame = document.getElementById('gif_recording_frame');
        if (!session.frame) {
            dispose_session(session);
            return;
        }
        if (session.options.watermark_enabled && session.options.watermark_text) {
            session.gif_format = ScreencamGIFFormats[options.format || 'gif'];
            session.had_frame_handler = Object.hasOwnProperty.call(session.gif_format, 'frameRendered');
            session.previous_frame_handler = session.gif_format.frameRendered;
            session.frame_wrapper = function(vars, canvas) {
                try {
                    if (!session.disposed && Project === session.project) draw_watermark(canvas, session.options, session);
                    if (session.previous_frame_handler) return session.previous_frame_handler.apply(this, arguments);
                    vars.frame_canvases.push(canvas);
                } catch (error) {
                    capture_error(session, error);
                    throw error;
                }
            };
            session.gif_format.frameRendered = session.frame_wrapper;
        }
        session.renderer = Screencam.NoAAPreview.renderer;
        session.original_render = session.renderer.render;
        session.render_wrapper = function(render_scene, camera) {
            if (render_scene !== Canvas.scene || !session.frame.classList.contains('recording')) return session.original_render.apply(this, arguments);
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
        });
        session.observer.observe(session.frame.parentNode, {childList: true});
    }

    async function render_preview(options = read_values()) {
        if (!Project || active_session || document.getElementById('gif_recording_frame')) {
            Blockbench.showQuickMessage(translate('open_a_model_and_finish_the_current_recording_before_previewing'), 3000);
            return null;
        }
        options = {...options, watermark_enabled: true};
        const project = Project;
        const generation = lifecycle;
        await prepare_watermark_font(options);
        if (!plugin_loaded || generation !== lifecycle || Project !== project || active_session || document.getElementById('gif_recording_frame')) return null;
        const preview = Screencam.NoAAPreview;
        const session = create_session(options);
        const renderer = preview.renderer;
        const original_render = renderer.render;
        let data_url;
        let render_error;
        const render_wrapper = function(render_scene, camera) {
            if (render_scene !== Canvas.scene) return original_render.apply(this, arguments);
            return render_frame(session, this, render_scene, camera, () => original_render.call(this, render_scene, camera));
        };
        try {
            preview.copyView(Preview.selected);
            preview.resize(640, 640);
            renderer.render = render_wrapper;
            Canvas.withoutGizmos(() => {
                try {
                    preview.render();
                    const canvas = document.createElement('canvas');
                    canvas.width = preview.canvas.width;
                    canvas.height = preview.canvas.height;
                    canvas.getContext('2d').drawImage(preview.canvas, 0, 0);
                    draw_watermark(canvas, options, session);
                    data_url = canvas.toDataURL('image/png');
                } catch (error) {
                    render_error = error;
                }
            });
            if (render_error) throw render_error;
            return data_url;
        } finally {
            if (renderer.render === render_wrapper) renderer.render = original_render;
            dispose_session(session);
        }
    }

    BBPlugin.register(plugin_id, {
        title: translate('modeler_toolkit'),
        author: 'Raven Studio',
        description: translate('rebuild_textures_and_uvs_create_outlines_and_record_animations_w'),
        about: translate('uv_tools_outlines_java_conversion_layer_controls_dynamic_shadows'),
        icon: 'handyman',
        variant: 'both',
        version: '3.1.1',
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
            setup_light_fields();
            setup_animation_fields();
            previous_open = Screencam.gif_options_dialog.onOpen;
            wrapped_open = function(...args) {
                const result = previous_open?.apply(this, args);
                const values = read_values();
                this.setFormValues({[export_field]: values.enabled});
                update_animation_fields(this);
                return result;
            };
            Screencam.gif_options_dialog.onOpen = wrapped_open;
            previous_confirm = Screencam.gif_options_dialog.onConfirm;
            wrapped_confirm = function(form_data) {
                if (Project && form_data[animation_field]) animation_choices.set(Project, form_data[animation_field]);
                return previous_confirm.call(this, form_data[export_field] ? {...form_data, shadow_enabled: false} : form_data);
            };
            Screencam.gif_options_dialog.onConfirm = wrapped_confirm;
            previous_create_gif = Screencam.createGif;
            wrapped_create_gif = async function(options = {}, callback) {
                if (active_session) {
                    if (active_session.frame?.isConnected) {
                        Blockbench.showQuickMessage(translate('finish_or_cancel_the_current_gif_recording_first'), 3000);
                        return;
                    }
                    dispose_session(active_session);
                }
                const values = read_values();
                const animations = capture_animations();
                const animation = options.play ? options[animation_field]
                    ? animations.find(item => item.uuid === options[animation_field])
                    : animations.find(item => item === Animation.selected) || animations[0] : null;
                if (options.play && !animation) {
                    Blockbench.showQuickMessage(translate('choose_an_animation_available_in_this_project_before_recording'), 4000);
                    return;
                }
                const render_enabled = options[export_field] ?? values.enabled;
                const render_values = {...values, ...capture_light_values(options, values), shadow_enabled: render_enabled && values.shadow_enabled, clean_uv: render_enabled && values.clean_uv, watermark_enabled: options[watermark_field] ?? false};
                if (!animation && !render_values.shadow_enabled && !render_values.clean_uv && !(render_values.watermark_enabled && render_values.watermark_text)) return previous_create_gif.call(this, options, callback);
                const project = Project;
                const generation = lifecycle;
                await prepare_watermark_font(render_values);
                if (!plugin_loaded || generation !== lifecycle || Project !== project) return;
                if (active_session) {
                    Blockbench.showQuickMessage(translate('finish_or_cancel_the_current_gif_recording_first'), 3000);
                    return;
                }
                const session = create_session(render_values);
                active_session = session;
                try {
                    if (animation) prepare_capture_animation(session, animation);
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
                    const data_url = await render_preview();
                    if (data_url) Screencam.returnScreenshot(data_url);
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
            Object.keys(messages).forEach(key => delete Language.data[plugin_id + '.' + key]);
        }
    });
})();
