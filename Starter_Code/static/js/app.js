// test bargraph function
function drawBargraph(chosenSampleID) 
{
    console.log("DrawBargraph test: ", chosenSampleID);

    d3.json("samples.json").then((data) => {

        var samples = data.samples;
        var resultArray = samples.filter(sampleObj => sampleObj.id == chosenSampleID);
        var result = resultArray[0];
        
        var otu_ids = result.otu_ids;
        var otu_labels = result.otu_labels;
        var sample_values = result.sample_values;
        
        var yticks = otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();
        
        
        var barData = [
            {
                type: "bar",
                orientation: "h",
                x: sample_values.slice(0, 10).reverse(),
                y: yticks,
                text: otu_labels.slice(0, 10).reverse(),
               
            }
        ];
    
        var barLayout = {
            title: "Top 10 Bacteria Cultures Found",
            margin:  {t: 30, l: 150}
    
        };
    
        Plotly.newPlot("bar", barData, barLayout); 
    });
}
// test bubblechart function
function drawBubbleChart(chosenSampleID) 
{
    console.log("DrawBubbleChart test: ", chosenSampleID);
}

// show data: confirm I am getting json data
function showMetaData(chosenSampleID)
{
    console.log("ShowMetaData test: ", chosenSampleID);
}


function optionChanged(newSampleID)
{
    console.log("Dropdown reset test value: ", newSampleID);
    
    
    showMetaData(newSampleID);
    drawBubbleChart(newSampleID);
    drawBargraph(newSampleID);
}



function Init() 
{   
    console.log("Initializing Screen:");
    
    // select dataset from dropdown select element
    var selector = d3.select("#selDataset");

    // create select options from list of sample names
    d3.json("samples.json").then((data) => {
        var sampleNames = data.names;
        
        sampleNames.forEach((sampleID) => {
            selector.append("option").text(sampleID).property("value", sampleID);

        });
    });

    initializingTestValue = 1;

    // show new data using each fuction
    drawBubbleChart(initializingTestValue);
    showMetaData(initializingTestValue);
    drawBargraph(initializingTestValue);
    
   
}

Init();