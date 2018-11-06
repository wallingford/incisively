---
layout: post
title:  "Test track functionality"
date:   2018-10-31 13:14:07 +0100
categories: testing
permalink: /tracking-tester
---

## This is a test page for the snippet functionality

{% include snippet_include.html %}

<script type = 'text/javascript'>

function trackIt(trackCountValue) {
	for(count = 1; count <= trackCountValue; count++){
		incisively.track('tracking_test', {
  			count: count
  			//site_url: siteUrl,
  			//labId: labId
		});
		$(sentCount).val(count);
		$(sentCount).change();
	}
	alert("Called track " + trackCountValue + " times");
}
</script>


How many times do you want to call track('tracking_test') ?

Suggest between 1 & 1000: 
<form>
Call track() <input type="text" value="100" id="trackCountValue"/> times
<input type="button" value="Do it!" onClick="trackIt(parseFloat($(trackCountValue).val()))"/>
<br>
track was called
<input type="text" value="0" id="sentCount" readonly/> times
</form>
NOTES: Open the network tab in the chrome console to see activity.
As javascript only has one thread clicking the button will hang the browser, it's fine for 1000 odd tracking events but not for a million!
