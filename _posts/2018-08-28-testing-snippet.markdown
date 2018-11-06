---
layout: post
title:  "Test suggest/reward from snippet functionality"
date:   2018-08-28 10:14:07 +0100
categories: testing
permalink: /test-snippet
---

## This is a test page for the snippet functionality

{% include snippet_include.html %}

<script type = 'text/javascript'>
// Fetch suggestion from Incisively for this lab
incisively.suggest({
  lab: labId,
  segment: null,
  success: function(suggestion) {
    console.log(suggestion.content);
	$('#incisivelySuggestion').text(suggestion.content);
	$('#incisivelySuggestion').attr('href', baseurl + suggestion.content);
  }
});

function deleteCookies() {
  deleteCookie("iyS");
  deleteCookie("iyV");
  deleteCookie("iyR");
}

/**
 * Delete a cookie
 * @param {String} cname, cookie name
 */
function deleteCookie(cname) {
    var d = new Date(); //Create an date object
    d.setTime(d.getTime() - (1000*60*60*24)); //Set the time to the past. 1000 milliseonds = 1 second
    var expires = "expires=" + d.toGMTString(); //Compose the expirartion date
    window.document.cookie = cname+"="+"; "+expires;//Set the cookie with name and the expiration date
 
}
</script>


**incisively is currently suggesting: <a href='#' id='incisivelySuggestion'></a>** 

NOTES: 
at the time of creation incisively only supports one suggestion per browser session, meaning if you call suggest multiple times (EVEN AFTER YOU'VE REWARDED A VARIANT) you will still get the same suggestion.  Hitting the reward function again just results in nothing happening.

url /incisively-test is hardcoded in the incisively.suggest function, this would need changing if deployed elsewhere

This page has also been updated to call the track() function to test the collect/analytics services.

Remove cookie: should give you a new promo, although isn't working :(
<form>
<input value="Remove cookie" type="button" onClick="deleteCookies()"/>
</form>
<b>NOTE: If you are running this on localhost you should keep an eye on your cookies as chrome has issues with localhost cookies.
If the remove cookies button doesn't work remove the cookie manually. In Chrome > Dev tools > Application > Storage (find and delete the cookie)</b>




