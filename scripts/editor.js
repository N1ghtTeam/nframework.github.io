ace.define("ace/theme/tomorrow_night_eighties",["require","exports","module","ace/lib/dom"],function(e,t,n){t.isDark=!0,t.cssClass="ace-tomorrow-night-eighties",t.cssText=".ace-tomorrow-night-eighties .ace_gutter{background:#282C34;color:#474C55;padding-right:10px}.ace-tomorrow-night-eighties .ace_print-margin{width:1px;background:#555651}.ace-tomorrow-night-eighties{background-color:#282C34;color:#ABB2BF}.ace-tomorrow-night-eighties .ace_cursor{color:#528BFF}.ace-tomorrow-night-eighties .ace_marker-layer .ace_selection{background:#3D4350}.ace-tomorrow-night-eighties.ace_multiselect .ace_selection.ace_start{box-shadow:0 0 3px 0px #282C34}.ace-tomorrow-night-eighties .ace_marker-layer .ace_step{background:rgb(102, 82, 0)}.ace-tomorrow-night-eighties .ace_marker-layer .ace_bracket{margin:-1px 0 0 -1px;border:1px solid #ABB2BF}.ace-tomorrow-night-eighties .ace_marker-layer .ace_active-line{background:#202020}.ace-tomorrow-night-eighties .ace_gutter-active-line{background-color:#272727}.ace-tomorrow-night-eighties .ace_marker-layer .ace_selected-word{border:1px solid #49483E}.ace-tomorrow-night-eighties .ace_invisible{color:#52524d}.ace-tomorrow-night-eighties .ace_entity.ace_name.ace_tag,.ace-tomorrow-night-eighties .ace_meta.ace_tag,.ace-tomorrow-night-eighties .ace_constant,.ace-tomorrow-night-eighties .ace_storage{color:#E06C75}.ace-tomorrow-night-eighties .ace_keyword{color:#61AFEF}.ace-tomorrow-night-eighties .ace_punctuation,.ace-tomorrow-night-eighties .ace_punctuation.ace_tag{color:#ABB2BF}.ace-tomorrow-night-eighties .ace_constant.ace_character,.ace-tomorrow-night-eighties .ace_constant.ace_language,.ace-tomorrow-night-eighties .ace_constant.ace_numeric,.ace-tomorrow-night-eighties .ace_constant.ace_other{color:#D19A66}.ace-tomorrow-night-eighties .ace_invalid{color:#F8F8F0;background-color:#F92672}.ace-tomorrow-night-eighties .ace_invalid.ace_deprecated{color:#F8F8F0;background-color:#AE81FF}.ace-tomorrow-night-eighties .ace_support.ace_constant,.ace-tomorrow-night-eighties .ace_support.ace_type{color:#ABB2BF}.ace-tomorrow-night-eighties .ace_support.ace_function{color:#66D9EF}.ace-tomorrow-night-eighties .ace_fold{background-color:#A6E22E;border-color:#ABB2BF}.ace-tomorrow-night-eighties .ace_storage.ace_type{color:#C678DD}.ace-tomorrow-night-eighties .ace_support.ace_class{font-style:italic;color:#66D9EF}.ace-tomorrow-night-eighties .ace_entity.ace_other,.ace-tomorrow-night-eighties .ace_entity.ace_other.ace_attribute-name,.ace-tomorrow-night-eighties .ace_variable{color:#D19A66}.ace-tomorrow-night-eighties .ace_string.ace_attribute-value{color:#98C379}.ace-tomorrow-night-eighties .ace_entity.ace_name.ace_function{color:#61AFEF}.ace-tomorrow-night-eighties .ace_operator{color:#ABB2BF}.ace-tomorrow-night-eighties .ace_variable.ace_parameter{font-style:italic;color:#FD971F}.ace-tomorrow-night-eighties .ace_string{color:#ABB2BF}.ace-tomorrow-night-eighties .ace_comment{color:#5C6370;font-style:italic}.ace-tomorrow-night-eighties .ace_indent-guide{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ0FD0ZXBzd/wPAAjVAoxeSgNeAAAAAElFTkSuQmCC) right repeat-y}";var r=e("../lib/dom");r.importCssString(t.cssText,t.cssClass)})

const editor = ace.edit("editor");

editor.setTheme("ace/theme/tomorrow_night_eighties");
editor.session.setMode("ace/mode/javascript");
editor.setOptions({ fontSize:"15pt" });
editor.setOption('showLineNumbers', false);
editor.renderer.setShowGutter(false);
editor.session.setUseWorker(false)

editor.setValue(`<module demo>

    <method setup>

        function() {
            console.log('Hello World!');
        }

    </method>

</module>`, -1);