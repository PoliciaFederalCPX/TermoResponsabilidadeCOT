document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    
    var qra = document.getElementById('qra').value;
    var id = document.getElementById('id').value;

    var concordaSim = document.getElementById('concordaSim').checked;

    
    if (concordaSim) {
        alert("Termo de Responsabilidade enviado com sucesso! Boa reprovação no COTAR!");

        
        var message = {
            content: `**Termo de Responsabilidade Preenchido**\n\n**QRA:** ${qra}\n**ID:** ${id}\n**Concorda com o Termo:** Sim`
        };

        
        var webhookUrl = 'https://discord.com/api/webhooks/1308132530653757560/68mDQLORWD1A2KrTXB8FJ4U2ZMXMb7ad8qUjGLES-4XKy_CYVxGwrTy6uMXEwE0b-vq8';

        
        fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(message)
        })
        .then(response => response.json())
        .then(data => {
            console.log("Dados enviados com sucesso ao Discord:", data);
        })
        .catch((error) => {
            console.error('Erro ao enviar os dados:', error);
        });

    } else {
        alert("Você precisa concordar com o termo para realizar o COTAR.");
    }
});
