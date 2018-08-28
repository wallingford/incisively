---
layout: post
title:  "Testing snippet functionality"
date:   2018-08-28 10:14:07 +0100
categories: testing
---

## This is a test page for the snippet functionality

{% include snippet_include.html %}

<script type = 'text/javascript'>
// Fetch suggestion from Incisively for this lab
incisively.suggest({
  lab: 'f0329166-464c-419d-7ae7-c29b4e002bd5',
  segment: null,
  success: function(suggestion) {
    console.log(suggestion.content);
	$('#incisivelySuggestion').text(suggestion.content);
	$('#incisivelySuggestion').attr('href', baseurl + suggestion.content);
  }
});

function deletecookie() {
  var d = new Date();
  
  document.cookie = "iyV=blah;expires=" + d.toGMTString() + ";" + ";";
  alert(document.cookie);
  window.reload()
}
</script>


incisively is currently suggesting:
<a href='#' id='incisivelySuggestion'>
</a> 

NOTE: url /incisively-test is hardcoded in the incisively.suggest function, this would need changing if deployed elsewhere


Remove cookie (should give you a new promo):
<form>
<input value="Remove cookie" type="submit" onClick="deletecookie()"/>
</form>




