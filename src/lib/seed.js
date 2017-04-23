// Script to load local pgn file, parse it, and index it to elasticsearch index.

import ESClient from './elasticsearch';

function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "file://"+file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                debugger
            }
        }
    }
    rawFile.send(null);
}

export default readTextFile(process.env.PGN_PATH);

