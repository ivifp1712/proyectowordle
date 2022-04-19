/// <reference path="MindFusion.Keyboard-vsdoc.js" />

var mk = MindFusion.Keyboard;

document.addEventListener("DOMContentLoaded", function (event)
{
	var vk = mk.VirtualKeyboard.create(document.getElementById("keyboard"));
	vk.scaleToFitParent = false;

	vk.render();
	document.getElementById("mode").onchange = function (event)
	{
		vk.layoutMode = Number(event.target.value);
	}
	document.getElementById("lang").onchange = function (event)
	{
		vk.inputLocale = event.target.value;
	}
});