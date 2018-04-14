$.getJSON("dane.json" ,function(data){
        var items = [];
        $.each(data, function(key,val){
            items.push("<tr>");
                    items.push("<td id=''"+key+"''>"+val.id+"</td>");
                    items.push("<td id=''"+key+"''>"+val.firstName+"</td>");
                    items.push("<td id=''"+key+"''>"+val.lastName+"</td>");
                    items.push("<td id=''"+key+"''>"+val.dateOfBirth+"</td>");
                    items.push("<td id=''"+key+"''>"+val.company+"</td>");
                    items.push("<td id=''"+key+"''>"+val.note+"</td>");
            items.push("</tr>");
            });
            $("<tbody/>", {html: items.join("")}).appendTo("table");

        

    });