// Path to the JSON data
const url = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json";

// Fetch the JSON data
d3.json(url).then(function(data) {
  var dropdownMenu = d3.select("#selDataset");
  data.names.forEach((id) => {
    dropdownMenu.append("option").text(id).property("value", id);
  });
  optionChanged(data.names[0]);
});

function optionChanged(newSample) {
    d3.json(url).then(function(data) {
      var samples = data.samples;
      var metadataArray = data.metadata.filter(sample => sample.id == newSample);
      var resultArray = samples.filter(sample => sample.id == newSample);
  
      var result = resultArray.length > 0 ? resultArray[0] : null;
      var metadata = metadataArray.length > 0 ? metadataArray[0] : {};
  
      // Display the sample metadata
      var PANEL = d3.select("#sample-metadata");
      PANEL.html("");
  
      // Add each key-value pair to the panel
      Object.entries(metadata).forEach(([key, value]) => {
        PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
      });
  
      
      // Build the Bar Chart
      if (result) {
        var otu_ids = result.otu_ids;
        var otu_labels = result.otu_labels;
        var sample_values = result.sample_values;
        
      var barData = [{
        x: sample_values.slice(0, 10).reverse(),
        y: otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse(),
        text: otu_labels.slice(0, 10).reverse(),
        type: "bar",
        orientation: "h"
      }];
  
      var barLayout = {
        title: "Top 10 OTUs Found",
        margin: { t: 30, l: 150 }
      };
  
      Plotly.newPlot("bar", barData, barLayout);
  
      // Build the Bubble Chart
      var bubbleData = [{
        x: otu_ids,
        y: sample_values,
        text: otu_labels,
        mode: 'markers',
        marker: {
          size: sample_values,
          color: otu_ids,
          colorscale: "Earth"  
        }
      }];
  
      var bubbleLayout = {
        title: 'Bacteria Cultures Per Sample',
        showlegend: false,
        height: 600,
        width: 1000,
        xaxis: {
          title: 'OTU ID'
        },
        hovermode: 'closest'
      };
  
      Plotly.newPlot("bubble", bubbleData, bubbleLayout);
    }
});
}