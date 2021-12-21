fetch('https://www.imis.bfs.de/ogc/opendata/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=opendata:odl_brutto_1h&format_options=CHARSET:UTF-8&CQL_FILTER=(end_measure%3D2021-12-15T13%3A00%3A00.000Z)%20AND%20(source%20%3D%20%27BfS%27)&outputFormat=application%2Fjson')
    .then(function(response) {
        if (!response.ok) {
            throw new Error("HTTP error, status = " + response.status);
        }
        //console.log(response.json());
        return response.json();
    })
    .then(function(json) {
        for (var i = 0; i < json.features.length; i++) {


            if (json) {
                console.log("hurray");


                var listItem = [];


                for (var i in json.features) {

                    var item = json.features[i];

                    listItem.push({
                        "firstName": item.properties.id,
                        "value": item.properties.value,
                        "time": item.properties.start

                    });

                }
            }
            console.log(listItem);
            for (var i = 0; i < json.features.length; i++) {
                console.log(listItem[i].firstName);
                console.log(listItem[i].value);
            }

        }
    })
    .catch(function(error) {

    });
// console.log(myList);