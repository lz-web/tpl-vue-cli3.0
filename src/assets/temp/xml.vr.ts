// xml 模板拼接
export default {
	xml2Temp: (scene: any) => {
		// 去除自带root
		scene = scene.replace('<?xml version="1.0" encoding="UTF-8"?>','')
		scene = scene.replace('<root>','')
		scene = scene.replace('</root>','')
		return `<krpano title="Corfu Holiday Trip">
		<include url="skin/vtourskin.xml" />
		<!-- add a custom map (container+scrollarea+image) -->
		<layer name="skin_layer">
			<layer name="skin_scroll_window">
				<layer name="skin_scroll_layer">
					<layer name="skin_scroll_container">
						<layer name="skin_map_container">
							<layer name="skin_map" type="container">
								<layer name="skin_map_scrollarea" url="/plugins/scrollarea.js" align="center" width="100%" height="100%">
									<layer name="skin_map_image" url="corfumap.jpg" align="center" onloaded="copy(layer[skin_map_scrollarea].width, width); copy(layer[skin_map_scrollarea].height, height); layer[skin_map_scrollarea].update();">
										<layer name="mapspot1" style="mapspot" x="16.93%" y="14.80%" linkedscene="scene_canaldemure5" />
										<layer name="mapspot2" style="mapspot" x="52.34%" y="14.50%" linkedscene="scene_kalamaki-strand" />
										<layer name="mapspot3" style="mapspot" x="58.72%" y="16.40%" linkedscene="scene_kassiopi-felsen" />
										<layer name="mapspot4" style="mapspot" x="48.57%" y="24.00%" linkedscene="scene_pantokrator-antenne" />
										<layer name="mapspot5" style="mapspot" x="58.85%" y="47.30%" linkedscene="scene_korfu-stadt-alte-festung-ganz-oben" />
										<layer name="mapspot6" style="mapspot" x="54.43%" y="58.60%" linkedscene="scene_achilleion-hof-unten" />
									</layer>
								</layer>
							</layer>
						</layer>
					</layer>
				</layer>
			</layer>
		</layer>
	
		<style name="mapspot"
			style="skin_tooltips"
			url="skin/vtourskin_mapspot.png"
			align="lefttop" edge="bottom" scale="0.5"
			onover.addevent="tween(scale,0.55,0.2);"
			onout.addevent="tween(scale,0.5,0.2);"
			tooltip="" onloaded.addevent="copy(tooltip, scene[get(linkedscene)].title);"
			onclick="skin_showmap(false); skin_gotoscene(get(linkedscene));"
			/>
	
	
		<!-- customize skin settings: maps, gyro, webvr, thumbnails, tooltips, layout, design, ... -->
		<skin_settings maps="true"
					   maps_type="custom"
					   maps_bing_api_key=""
					   maps_google_api_key=""
					   maps_zoombuttons="false"
					   maps_loadonfirstuse="true"
					   gyro="true"
					   gyro_keeplookingdirection="false"
					   webvr="true"
					   webvr_keeplookingdirection="true"
					   webvr_prev_next_hotspots="true"
					   littleplanetintro="true"
					   followmousecontrol="false"
					   title="true"
					   thumbs="true"
					   thumbs_width="120" thumbs_height="80" thumbs_padding="10" thumbs_crop=""
					   thumbs_opened="false"
					   thumbs_text="true"
					   thumbs_dragging="true"
					   thumbs_onhoverscrolling="false"
					   thumbs_scrollbuttons="false"
					   thumbs_scrollindicator="false"
					   thumbs_loop="false"
					   tooltips_buttons="false"
					   tooltips_thumbs="false"
					   tooltips_hotspots="false"
					   tooltips_mapspots="false"
					   deeplinking="false"
					   loadscene_flags="MERGE"
					   loadscene_blend="OPENBLEND(0.5, 0.0, 0.75, 0.05, linear)"
					   loadscene_blend_prev="SLIDEBLEND(0.5, 180, 0.75, linear)"
					   loadscene_blend_next="SLIDEBLEND(0.5,   0, 0.75, linear)"
					   loadingtext="loading..."
					   layout_width="100%"
					   layout_maxwidth="814"
					   controlbar_width="-24"
					   controlbar_height="40"
					   controlbar_offset="20"
					   controlbar_offset_closed="-40"
					   controlbar_overlap.no-fractionalscaling="10"
					   controlbar_overlap.fractionalscaling="0"
					   design_skin_images="vtourskin.png"
					   design_bgcolor="0x304954"
					   design_bgalpha="0.7"
					   design_bgborder="0"
					   design_bgroundedge="1"
					   design_bgshadow="0 4 10 0x000000 0.3"
					   design_thumbborder_bgborder="3 0xFFFFFF 1.0"
					   design_thumbborder_padding="2"
					   design_thumbborder_bgroundedge="0"
					   design_text_css="color:#FFFFFF; font-family:Arial;"
					   design_text_shadow="1"
					   />
	
		<!--
			For an alternative skin design either change the <skin_settings> values 
			from above or optionally include one of the predefined designs from below.
		-->
		<!-- <include url="skin/vtourskin_design_flat_light.xml"  /> -->
		<!-- <include url="skin/vtourskin_design_glass.xml"       /> -->
		<!-- <include url="skin/vtourskin_design_ultra_light.xml" /> -->
		<!-- <include url="skin/vtourskin_design_117.xml"         /> -->
		<!-- <include url="skin/vtourskin_design_117round.xml"    /> -->
	
	
		<!-- startup action - load the first scene -->
		<action name="startup" autorun="onstart">
			if(startscene === null OR !scene[get(startscene)], copy(startscene,scene[0].name); );
			loadscene(get(startscene), null, MERGE);
			if(startactions !== null, startactions() );
		</action>
		${scene}
	</krpano>`
	}
}
