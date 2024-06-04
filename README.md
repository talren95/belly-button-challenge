# Belly Button Biodiversity Dashboard

## Background
This project involves building an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels. The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Instructions
Steps to Complete:

* **Read Data:**
   - Use the D3 library to read in `samples.json` from the URL: [samples.json](https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json).

* **Create a Horizontal Bar Chart:**
   - Incorporate a dropdown menu to display the top 10 OTUs found in an individual.
   - Use `sample_values` as the values for the bar chart.
   - Use `otu_ids` as the labels for the bar chart.
   - Use `otu_labels` as the hovertext for the chart.

* **Create a Bubble Chart:**
   - Display each sample using a bubble chart.
   - Use `otu_ids` for the x-axis values.
   - Use `sample_values` for the y-axis values.
   - Use `sample_values` for the marker size.
   - Use `otu_ids` for the marker colors.
   - Use `otu_labels` for the text values.

* **Display Sample Metadata:**
   - Display an individual's demographic information.
   - Loop through each key-value pair from the metadata JSON object to create a text string.
   - Append an HTML tag with that text to the `#sample-metadata` panel.

* **Update Plots:**
   - Ensure all plots update when a new sample is selected.
   - Feel free to design the layout of your dashboard as desired.

## Repository Structure
index.html - Main HTML file.
static/js/app.js - JavaScript file containing D3 code for the dashboard.
static/css/style.css - CSS file for styling the dashboard.
samples.json - JSON file containing the dataset (linked from an external URL).
