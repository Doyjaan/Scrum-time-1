// Função para abrir as tabs
function openTab(evt, tabName) {
    const contentDiv = document.getElementById('content');
    
    // Carregar o conteúdo correto da aba clicada
    if (tabName === 'Empresas') {
        loadEmpresas();
    } else if (tabName === 'ONGs') {
        loadONGs();
    }

    // Alterar os botões para ativos/inativos
    const tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    evt.currentTarget.className += " active";
}

// Função para carregar o conteúdo da aba "Empresas"
function loadEmpresas() {
    document.getElementById('content').innerHTML = `
        <div id="Empresas" class="tabcontent active">
            <h2>Cadastro de Empresas</h2>
            <form id="empresaForm">
                <!-- Informações da Empresa -->
                <fieldset>
                    <legend>Informações da Empresa</legend>
                    <label for="nome_empresa">Nome da Empresa:</label>
                    <input type="text" id="nome_empresa" name="nome_empresa" placeholder="Digite o nome da empresa" required>

                    <label for="cnpj_empresa">CNPJ:</label>
                    <input type="text" id="cnpj_empresa" name="cnpj_empresa" placeholder="Digite o CNPJ" required>

                    <label for="responsavel_empresa">Nome do Responsável:</label>
                    <input type="text" id="responsavel_empresa" name="responsavel_empresa" placeholder="Digite o nome do responsável" required>

                    <label for="email_empresa">E-mail:</label>
                    <input type="email" id="email_empresa" name="email_empresa" placeholder="exemplo@dominio.com" required>

                    <label for="telefone_empresa">Telefone:</label>
                    <input type="tel" id="telefone_empresa" name="telefone_empresa" placeholder="(XX) XXXXX-XXXX" required>
                </fieldset>

                <!-- Tipo de Doação da Empresa -->
                <fieldset>
                    <legend>O que sua Empresa vai doar?</legend>
                    <label for="tipo_doacao_empresa">Tipo de Doação:</label>
                    <select id="tipo_doacao_empresa" name="tipo_doacao_empresa" required>
                        <option value="" disabled selected>Selecione</option>
                        <option value="dinheiro">Dinheiro</option>
                        <option value="alimentos">Alimentos</option>
                        <option value="vestimentas">Vestimentas</option>
                        <option value="eletronicos">Eletrônicos</option>
                        <option value="servicos">Serviços</option>
                    </select>

                    <label for="estado_item_empresa">Condição dos Itens Doados:</label>
                    <select id="estado_item_empresa" name="estado_item_empresa" required>
                        <option value="" disabled selected>Selecione</option>
                        <option value="novo">Novo</option>
                        <option value="usado">Usado</option>
                    </select>

                    <label for="descricao_doacao_empresa">Descrição da Doação:</label>
                    <textarea id="descricao_doacao_empresa" name="descricao_doacao_empresa" rows="4" placeholder="Descreva brevemente o que sua empresa está doando" required></textarea>
                </fieldset>

                <!-- Localização da Empresa -->
                <fieldset>
                    <legend>Localização da Empresa</legend>
                    <label for="endereco_empresa">Endereço:</label>
                    <input type="text" id="endereco_empresa" name="endereco_empresa" placeholder="Digite o endereço da empresa" required>

                    <label for="cidade_empresa">Cidade:</label>
                    <input type="text" id="cidade_empresa" name="cidade_empresa" required>

                    <label for="estado_empresa">Estado:</label>
                    <select id="estado_empresa" name="estado_empresa" required>
                        <option value="" disabled selected>Selecione seu estado</option>
                        <option value="SP">São Paulo</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="MG">Minas Gerais</option>
                    </select>

                    <label for="cep_empresa">CEP:</label>
                    <input type="text" id="cep_empresa" name="cep_empresa" placeholder="XXXXX-XXX" required>
                </fieldset>

                <!-- Botão de envio -->
                <input type="submit" value="Cadastrar Empresa">
            </form>

            <p id="empresaMessage" style="display:none;color:green;">Empresa cadastrada com sucesso, Iremos entrar em contato com você para concluir seu cadastro!</p>
        </div>
    `;

    // Adicionar evento de submissão do formulário
    document.getElementById('empresaForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário
        document.getElementById('empresaMessage').style.display = 'block'; // Exibe a mensagem de sucesso
        this.reset(); // Limpa o formulário
    });
}

// Função para carregar o conteúdo da aba "ONGs"
function loadONGs() {
    document.getElementById('content').innerHTML = `
        <div id="ONGs" class="tabcontent active">
            <h2>Cadastro de ONGs</h2>
            <form id="ongForm">
                <!-- Informações da ONG -->
                <fieldset>
                    <legend>Informações da ONG</legend>
                    <label for="nome_ong">Nome da ONG:</label>
                    <input type="text" id="nome_ong" name="nome_ong" placeholder="Digite o nome da ONG" required>

                    <label for="cnpj_ong">CNPJ:</label>
                    <input type="text" id="cnpj_ong" name="cnpj_ong" placeholder="Digite o CNPJ" required>

                    <label for="responsavel_ong">Nome do Responsável:</label>
                    <input type="text" id="responsavel_ong" name="responsavel_ong" placeholder="Digite o nome do responsável" required>

                    <label for="email_ong">E-mail:</label>
                    <input type="email" id="email_ong" name="email_ong" placeholder="exemplo@dominio.com" required>

                    <label for="telefone_ong">Telefone:</label>
                    <input type="tel" id="telefone_ong" name="telefone_ong" placeholder="(XX) XXXXX-XXXX" required>
                </fieldset>

                <!-- Tipo de Doação da ONG -->
                <fieldset>
                    <legend>O que sua ONG vai doar?</legend>
                    <label for="tipo_doacao_ong">Tipo de Doação:</label>
                    <select id="tipo_doacao_ong" name="tipo_doacao_ong" required>
                        <option value="" disabled selected>Selecione</option>
                        <option value="dinheiro">Dinheiro</option>
                        <option value="alimentos">Alimentos</option>
                        <option value="vestimentas">Vestimentas</option>
                        <option value="eletronicos">Eletrônicos</option>
                        <option value="servicos">Serviços</option>
                    </select>

                    <label for="estado_item_ong">Condição dos Itens Doados:</label>
                    <select id="estado_item_ong" name="estado_item_ong" required>
                        <option value="" disabled selected>Selecione</option>
                        <option value="novo">Novo</option>
                        <option value="usado">Usado</option>
                    </select>

                    <label for="descricao_doacao_ong">Descrição da Doação:</label>
                    <textarea id="descricao_doacao_ong" name="descricao_doacao_ong" rows="4" placeholder="Descreva brevemente o que sua ONG está doando" required></textarea>
                </fieldset>

                <!-- Localização da ONG -->
                <fieldset>
                    <legend>Localização da ONG</legend>
                    <label for="endereco_ong">Endereço:</label>
                    <input type="text" id="endereco_ong" name="endereco_ong" placeholder="Digite o endereço da ONG" required>

                    <label for="cidade_ong">Cidade:</label>
                    <input type="text" id="cidade_ong" name="cidade_ong" required>

                    <label for="estado_ong">Estado:</label>
                    <select id="estado_ong" name="estado_ong" required>
                        <option value="" disabled selected>Selecione seu estado</option>
                        <option value="SP">São Paulo</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="MG">Minas Gerais</option>
                    </select>

                    <label for="cep_ong">CEP:</label>
                    <input type="text" id="cep_ong" name="cep_ong" placeholder="XXXXX-XXX" required>
                </fieldset>

                <!-- Botão de envio -->
                <input type="submit" value="Cadastrar ONG">
            </form>

            <p id="ongMessage" style="display:none;color:green;">ONG cadastrada com sucesso, iremos entrar em contato para concluir o cadastro!</p>
        </div>
    `;

    // Adicionar evento de submissão do formulário
    document.getElementById('ongForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário
        document.getElementById('ongMessage').style.display = 'block'; // Exibe a mensagem de sucesso
        this.reset(); // Limpa o formulário
    });
}

// Definir a aba padrão
document.getElementById('defaultOpen').click();
