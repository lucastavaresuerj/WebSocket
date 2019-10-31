function lejson(ind) {
    const ws = new WebSocket('ws://localhost:8000');
    ws.onopen = function() {
        var requestMessage = {
            "field":"getindex",
            "index":ind
        }
        ws.send(JSON.stringify(requestMessage));
    }
    ws.onmessage =function (ev) {
        var demo = document.getElementById('demo');
        try {
            demo.innerHTML = ev.nome;
        }
        catch(e) {
            console.log(e);
            demo.innerHTML = "nao encotrado";
        }
        ws.close();
    }
}