<script type = 'text/javascript'>

var incisively = new Incisively(6000018);

// Fetch suggestion from Incisively for this lab
incisively.suggest({
  lab: 'f0329166-464c-419d-7ae7-c29b4e002bd5',
  segment: null,
  success: function(suggestion) {
    console.log(suggestion.content);
  }
});

// Send reward to Incisively once the user has completed a purchase
function rewardExperiment(basketValue) {
  incisively.reward({
    lab: 'f0329166-464c-419d-7ae7-c29b4e002bd5',
    context: { // You only need this for real value experiments
      value: basketValue
    }
  });
}

</script>