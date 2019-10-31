function lejson(ind) {
    const ws = new WebSocket('ws://localhost:8000');
    ws.onopen = function() {
        var requestMessage = {
            "tag":"getindex",
            "index":ind
        }
        ws.send(JSON.stringify(requestMessage));
    }
    ws.onmessage =function (ev) {
        var demo = document.getElementById('demo');
        try {
            var men = JSON.parse(ev.data); 
            demo.innerHTML = men.nome;
        }
        catch(e) {
            console.log(e);
            demo.innerHTML = "nao encotrado";
        }
        ws.close();
    }
}

function leTodoJson() {
    const ws = new WebSocket('ws://localhost:8000');
    ws.onopen = function() {
        var requestMessage = {
            "tag":"getall"
        }
        ws.send(JSON.stringify(requestMessage));
    }
    ws.onmessage = function (ev) {
         = document.getElementById('demo1');
        try {
            var men = JSON.parse(ev.data);
            demo.innerHTML = JSON.stringify(men);
        }
        catch(e) {
            console.log(e);
            demo.innerHTML = "nao encotrado";
        }
        ws.close();
    }
}