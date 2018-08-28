---
layout: page
title: Promo 2
permalink: /promo2/
---

## promo2

{% include snippet_include.html %}

What reward do you want to give this promo?

Suggest between 1 & 10:
<form>
<input type="text" value="5" id="promovalue"/>
<input type="submit" onClick="rewardExperiment($(promovalue).val())">
</form>