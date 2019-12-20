function drawBargraph() 
{
    console.log("DrawBargraph: smaple - ", sampleID);
}


function drawBubbleChart() 
{
    console.log("DrawBubbleChart: sample - ", sampleID);
}

function showMetaData()
{
    console.log("ShowMetaData: sample - ", sampleID);
}


function optionChanged(newSampleID)
{
    console.log("Dropdown changed to: ", newSampleID);
    showMetaData(sampleID);
    drawBargraph(newSampleID);
    drawBubbleChart(newSampleID);
    
}



function Init() 
{   
    console.log("Initializing Screen:");
    
    
    // select dataset from dropdown select element
    var selector = d3.select("#selDataset");

    // create select options from list of sample names
    d3.json("samples.json").then((data) => {
        var sampleNames = data.names;
        
        sampleNames.forEach((sample) => {
            selector.append("option").text(sample).property("value", sample);

        });
    })



    sampleID = 100;


    drawBubbleChart(sampleID);
    drawBargraph(sampleID);
    showMetaData(sampleID);
   
}

Init();