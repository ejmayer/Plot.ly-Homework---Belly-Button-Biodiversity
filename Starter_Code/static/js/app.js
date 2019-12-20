// test bargraph function
function drawBargraph(sampleID) 
{
    console.log("DrawBargraph: smaple - ", sampleID);
}
// test bubblechart function
function drawBubbleChart(sampleID) 
{
    console.log("DrawBubbleChart: sample - ", sampleID);
}

// show data: confirm I am getting json data
function showMetaData(sampleID)
{
    console.log("ShowMetaData: sample - ", sampleID);
}


function optionChanged(newSampleID)
{
    console.log("Dropdown changed to: ", newSampleID);
    ///////////////  I am getting newSampleID - shown in console, ///////
    ////// but not working through functions/////////////////
    drawBargraph(newSampleID);
    drawBubbleChart(newSampleID);
    showMetaData(newSampleID);
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
            selector.append("option").text(sample).property("value", sampleID);

        });
    });

    sampleID = 100;

    // show new data using each fuction
    drawBubbleChart(sampleID);
    drawBargraph(sampleID);
    showMetaData(sampleID);
   
}

Init();