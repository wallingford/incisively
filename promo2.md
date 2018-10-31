---
layout: page
title: Promo 2
permalink: /promo2/
---

## Free cuddly toy

{% include snippet_include.html %}

What reward do you want to give this promo?

Suggest between 1 & 10: 
<form>
<input type="text" value="5" id="promovalue"/>
<input type="button" value="Reward me right up" onClick="rewardExperiment(parseFloat($(promovalue).val()))"/>
</form>