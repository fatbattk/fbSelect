// fbSelect jquery plugin v 0.1.0 (http://git.io/nLpK2w)
// by @fatbattk
// https://github.com/jquery-boilerplate/jquery-patterns/blob/master/patterns/jquery.basic.plugin-boilerplate.js
;(function($,window,document,undefined){
	// default properties.
	var pluginName = "fbSelect",
		defaults = {
			spanClass: "fbs",
			spanClasses: ['fbs1','fbs2','fbs3','fbs4'],
			skipNoValue: false
		};

	// plugin constructor.
	function Plugin(element,options){
		if(!element || element.length<1){
			return;
		}
		this.element = element;
		this.options = $.extend({},defaults,options);
		/*** this._defaults = defaults;
		this._name = pluginName; **/
		this.init();
	}
	// init functions.
	function toggOption($select,skip){
		var opSelector = (skip)? 'option[value][value!=""]:enabled:first' : 'option:enabled:first',
			$current = $(':selected',$select),
			$next = $current.nextAll(opSelector),
			opText = '';

		if(!$next || $next.length<1){
			$next = $(opSelector,$select);
		}
		$current.removeProp('selected');
		$select.val($next.val());
		$next.prop('selected',true);
		opText = $next.html();

		return opText;
	}
	function toggClass($span,classes){
		var ct = ($span.data('counter'))? $span.data('counter') : 0;

		$span.toggleClass(classes[ct]);
		ct++;
		if(classes[ct]==null){
			ct = 0;
		}
		$span.toggleClass(classes[ct]).data('counter',ct);
	}

	Plugin.prototype = {
		init: function(){
			var o = this.options,
				$dd = $(this.element),
				$op1 = ($(':selected',$dd).length)? $(':selected:first',$dd) : $('option:enabled',$dd),
				ddTitle = ($dd.attr('title'))? $dd.attr('title') : 'Click to toggle between options';

			$dd.hide(0).after('<span class="'+ o.spanClass +' '+ o.spanClasses[0] +'" title="'+ ddTitle +'">'+ $op1.html() +'</span>').find('optgroup option').unwrap();
			// set default select option. unwrap bugs out selected selector.
			$op1.prop('selected',true);

			$dd.next('.'+ o.spanClass).on('click',function(){
				var $this = $(this),
					newOp = toggOption($this.prev('select:hidden'),o.skipNoValue);

				$this.html(newOp);
				toggClass($this,o.spanClasses);
			});
		}
	};

	// plugin wrapper around the constructor, preventing against multiple instantiations.
	$.fn[pluginName] = function(options){
		return this.each(function(){
			if(!$.data(this,"plugin_"+ pluginName)){
				$.data(this,"plugin_"+ pluginName,new Plugin(this,options));
			}
		});
	};
})(jQuery,window,document);