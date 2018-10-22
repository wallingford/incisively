---
layout: page
title: Promo 1
permalink: /promo1/
---

## Free Beer

![Free beer - Yay]({{ "/assets/img/free_beer.jpeg" | absolute_url }})

{% include snippet_include.html %}

What reward do you want to give this promo?

Suggest between 1 & 10:
<form>
<input type="text" value="5" id="promovalue"/>
<input type="button" value="Reward me" onClick="rewardExperiment(parseFloat($(promovalue).val()))"/>
</form>

