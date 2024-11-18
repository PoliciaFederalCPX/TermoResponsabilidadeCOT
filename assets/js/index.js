document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    var qra = document.getElementById('qra').value;
    var id = document.getElementById('id').value;

    var concordaSim = document.getElementById('concordaSim').checked;

    if (concordaSim) {
        alert("Termo de Responsabilidade enviado com sucesso! Boa reprovação no COTAR!");

        var message = {
            content: '``` ```\n** # <:COT:1162252748335624202> Termo de Responsabilidade Preenchido**\n**QRA:** ' + qra + '\n**ID:** ' + id + '\n**Concorda com o Termo:** Sim\n'
        };

        
        var webhookUrl = 'https://discord.com/api/webhooks/1308136914326392852/DmVjlmOkKRIa7bqvadMXysunn9DUpBs8pxmlDAU6vO6j_cF28UtszdhrE6kXD0zbGP4y';

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
