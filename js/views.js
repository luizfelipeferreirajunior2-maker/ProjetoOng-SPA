import { pilares, projetos } from "./data.js";
import { criarCardPilar, criarCardProjeto } from "./templates.js";

/*
 * Views da SPA. Este módulo compõe dados + templates,
 * mas não conhece eventos, localStorage ou regras do formulário.
 */
export const views = {
    inicio: `
<!-- APRESENTAÇÃO -->
<section class="hero">
<div class="container hero-content">
<div class="hero-text">
<span class="eyebrow">
                        Juntos fazemos a diferença
                    </span>
<h1>
                        Pequenas ações podem transformar
                        grandes histórias.
                    </h1>
<p>
                        A Mãos que Transformam conecta pessoas
                        dispostas a ajudar com projetos que levam
                        alimento, acolhimento e educação a quem
                        mais precisa.
                    </p>
<div class="hero-actions">
<a class="button primary" href="#/cadastro" data-route="/cadastro">
                            Seja um colaborador
                        </a>
<a class="button secondary" href="#/projetos" data-route="/projetos">
                            Conheça os projetos
                        </a>
</div>
</div>
<!-- IMAGEM DA ONG -->
<div class="hero-image">
<picture>
<source
    type="image/webp"
    srcset="../imagens/ong-480.webp 480w, ../imagens/ong-768.webp 768w, ../imagens/ong-1200.webp 1200w"
    sizes="(max-width: 600px) 92vw, (max-width: 1024px) 48vw, 520px"
/>
<img
    alt="Voluntários da ONG Mãos que Transformam realizando uma ação solidária"
    src="../imagens/ong.jpg"
    decoding="async"
    fetchpriority="high"
/>
</picture>
</div>
</div>
</section>
<!-- QUEM SOMOS / MISSÃO -->
<section class="section">
<div class="container">
<div class="section-heading">
<span class="eyebrow">
                        Quem somos
                    </span>
<h2>
                        Solidariedade que aproxima pessoas
                    </h2>
<p>
                        Nossa missão é mobilizar voluntários,
                        doadores e parceiros para criar oportunidades
                        e melhorar a qualidade de vida de comunidades
                        em situação de vulnerabilidade.
                    </p>
</div>
<div class="cards">
${pilares.map(criarCardPilar).join("")}
</div>
</div>
</section>
<!-- CONTATO -->
<section class="section contact-section">
<div class="container">
<div class="section-heading">
<span class="eyebrow">
                        Fale conosco
                    </span>
<h2>Entre em Contato</h2>
<p>
                        Quer conhecer melhor nosso trabalho ou
                        participar das nossas ações? Entre em contato.
                    </p>
</div>
<address class="contact-card">
<div class="contact-item">
<strong>Telefone</strong>
<p>
                            (31) 99999-9999
                        </p>
</div>
<div class="contact-item">
<strong>E-mail</strong>
<p>
                            contato@maosquetransformam.org
                        </p>
</div>
<div class="contact-item">
<strong>Instagram</strong>
<p>
                            @maosquetransformam
                        </p>
</div>
</address>
</div>
</section>
<!-- CHAMADA PARA CADASTRO -->
<section class="cta-section">
<div class="container cta-content">
<div>
<span class="eyebrow light">
                        Faça parte
                    </span>
<h2>
                        Seu tempo e sua vontade de ajudar
                        podem mudar uma história.
                    </h2>
</div>
<a class="button light-button" href="#/cadastro" data-route="/cadastro">
                    Cadastrar agora
                </a>
</div>
</section>
`,
    projetos: `
<section class="page-hero">
<div class="container">
<span class="eyebrow">Nossas iniciativas</span>
<h1>Projetos que transformam solidariedade em ação</h1>
<p>
                    Conheça algumas das iniciativas desenvolvidas para apoiar
                    famílias e fortalecer a comunidade.
                </p>
</div>
</section>
<div class="section">
<div class="container project-grid">
${projetos.map(criarCardProjeto).join("")}
</div>
</div>
<section class="cta-section">
<div class="container cta-content">
<div>
<span class="eyebrow light">Participe</span>
<h2>Encontrou uma iniciativa com a qual se identifica?</h2>
</div>
<a class="button light-button" href="#/cadastro" data-route="/cadastro">Quero colaborar</a>
</div>
</section>
`,
    cadastro: `
<!-- APRESENTAÇÃO -->
<section class="page-hero compact">
<div class="container">
<span class="eyebrow">
                    Faça parte
                </span>
<h1>
                    Cadastro de colaborador
                </h1>
<p>
                    Preencha seus dados para demonstrar interesse
                    em participar das ações da ONG.
                </p>
</div>
</section>
<!-- ÁREA DO FORMULÁRIO -->
<div class="section form-section">
<div class="container form-layout">
<!-- INFORMAÇÕES -->
<aside class="form-info">
<span class="eyebrow">
                        Sua participação importa
                    </span>
<h2>
                        Ajude como puder
                    </h2>
<p>
                        Você pode colaborar como voluntário,
                        participar de campanhas ou contribuir
                        com doações.
                    </p>
<div class="info-item">
<strong>
                            Dados protegidos
                        </strong>
<span>
                            Solicitamos apenas informações
                            necessárias para o cadastro.
                        </span>
</div>
<div class="info-item">
<strong>
                            Contato facilitado
                        </strong>
<span>
                            Telefone e e-mail ajudam nossa
                            equipe a retornar o contato.
                        </span>
</div>
<div class="info-item">
<strong>
                            Campos obrigatórios
                        </strong>
<span>
                            Os campos marcados com *
                            precisam ser preenchidos.
                        </span>
</div>
</aside>
<!-- FORMULÁRIO -->
<div class="form-card">
<div class="alert alert-info" role="note">
<span aria-hidden="true" class="alert-icon">i</span>
<div>
<strong>Seus dados estão protegidos</strong>
<span>Utilizamos as informações somente para organizar o contato e a participação nas ações da ONG.</span>
</div>
</div>
<form id="formCadastro" novalidate="">
<!-- DADOS PESSOAIS -->
<fieldset>
<legend>
                                Dados Pessoais
                            </legend>
<!-- NOME -->
<div class="form-group full">
<label for="nome">
                                    Nome completo
                                    <span aria-hidden="true">*</span>
</label>
<input autocomplete="name" id="nome" maxlength="100" minlength="3" name="nome" placeholder="Digite seu nome completo" required="" type="text"/>
<small class="field-hint">
                                    Informe pelo menos 3 caracteres.
                                </small>
</div>
<!-- E-MAIL E NASCIMENTO -->
<div class="form-row">
<div class="form-group">
<label for="email">
                                        E-mail
                                        <span aria-hidden="true">*</span>
</label>
<input autocomplete="email" id="email" maxlength="120" name="email" placeholder="seuemail@exemplo.com" required="" type="email"/>
<small class="field-hint">
                                        Utilize um e-mail válido.
                                    </small>
</div>
<div class="form-group">
<label for="nascimento">
                                        Data de nascimento
                                        <span aria-hidden="true">*</span>
</label>
<input autocomplete="bday" id="nascimento" name="nascimento" required="" type="date"/>
</div>
</div>
<!-- CPF E TELEFONE -->
<div class="form-row">
<div class="form-group">
<label for="cpf">
                                        CPF
                                        <span aria-hidden="true">*</span>
</label>
<input autocomplete="off" id="cpf" inputmode="numeric" maxlength="14" name="cpf" pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}" placeholder="000.000.000-00" required="" title="Digite um CPF no formato 000.000.000-00" type="text"/>
<small class="field-hint">
                                        Formato: 000.000.000-00
                                    </small>
</div>
<div class="form-group">
<label for="telefone">
                                        Telefone
                                        <span aria-hidden="true">*</span>
</label>
<input autocomplete="tel" id="telefone" inputmode="tel" maxlength="15" name="telefone" pattern="\\(\\d{2}\\) \\d{4,5}-\\d{4}" placeholder="(00) 00000-0000" required="" title="Digite o telefone com DDD" type="tel"/>
<small class="field-hint">
                                        Informe o DDD.
                                    </small>
</div>
</div>
</fieldset>
<!-- ENDEREÇO -->
<fieldset>
<legend>
                                Endereço
                            </legend>
<!-- CEP E ENDEREÇO -->
<div class="form-row">
<div class="form-group">
<label for="cep">
                                        CEP
                                        <span aria-hidden="true">*</span>
</label>
<input autocomplete="postal-code" id="cep" inputmode="numeric" maxlength="9" name="cep" pattern="\\d{5}-\\d{3}" placeholder="00000-000" required="" title="Digite um CEP no formato 00000-000" type="text"/>
<small class="field-hint">
                                        Formato: 00000-000
                                    </small>
</div>
<div class="form-group">
<label for="endereco">
                                        Endereço
                                        <span aria-hidden="true">*</span>
</label>
<input id="endereco" maxlength="150" name="endereco" placeholder="Rua, avenida..." required="" type="text"/>
</div>
</div>
<!-- CIDADE E ESTADO -->
<div class="form-row">
<div class="form-group">
<label for="cidade">
                                        Cidade
                                        <span aria-hidden="true">*</span>
</label>
<input autocomplete="address-level2" id="cidade" maxlength="100" name="cidade" placeholder="Digite sua cidade" required="" type="text"/>
</div>
<div class="form-group">
<label for="estado">
                                        Estado
                                        <span aria-hidden="true">*</span>
</label>
<select autocomplete="address-level1" id="estado" name="estado" required="">
<option value="">
                                            Selecione
                                        </option>
<option value="AC">Acre</option>
<option value="AL">Alagoas</option>
<option value="AP">Amapá</option>
<option value="AM">Amazonas</option>
<option value="BA">Bahia</option>
<option value="CE">Ceará</option>
<option value="DF">Distrito Federal</option>
<option value="ES">Espírito Santo</option>
<option value="GO">Goiás</option>
<option value="MA">Maranhão</option>
<option value="MT">Mato Grosso</option>
<option value="MS">Mato Grosso do Sul</option>
<option value="MG">Minas Gerais</option>
<option value="PA">Pará</option>
<option value="PB">Paraíba</option>
<option value="PR">Paraná</option>
<option value="PE">Pernambuco</option>
<option value="PI">Piauí</option>
<option value="RJ">Rio de Janeiro</option>
<option value="RN">Rio Grande do Norte</option>
<option value="RS">Rio Grande do Sul</option>
<option value="RO">Rondônia</option>
<option value="RR">Roraima</option>
<option value="SC">Santa Catarina</option>
<option value="SP">São Paulo</option>
<option value="SE">Sergipe</option>
<option value="TO">Tocantins</option>
</select>
</div>
</div>
</fieldset>
<!-- FORMA DE COLABORAÇÃO -->
<fieldset>
<legend>
                                Forma de Colaboração
                            </legend>
<div class="form-group full">
<label for="interesse">
                                    Como deseja ajudar?
                                    <span aria-hidden="true">*</span>
</label>
<select id="interesse" name="interesse" required="">
<option value="">
                                        Selecione uma opção
                                    </option>
<option value="voluntario">
                                        Trabalho voluntário
                                    </option>
<option value="doacao">
                                        Doações
                                    </option>
<option value="campanhas">
                                        Participar de campanhas
                                    </option>
<option value="parceria">
                                        Parceria com a ONG
                                    </option>
</select>
</div>
<!-- MENSAGEM -->
<div class="form-group full">
<label for="mensagem">

                                    Mensagem

                                    <span class="optional">
                                        (opcional)
                                    </span>
</label>
<textarea id="mensagem" maxlength="300" name="mensagem" placeholder="Conte brevemente como você gostaria de colaborar." rows="4"></textarea>
</div>
</fieldset>
<!-- CONFIRMAÇÃO -->
<label class="checkbox-group">
<input id="aceite" name="aceite" required="" type="checkbox"/>
<span>
                                Confirmo que os dados
                                informados estão corretos. *
                            </span>
</label>
<!-- MENSAGEM DO FORMULÁRIO -->
<p aria-live="polite" class="form-message" id="formMessage" role="status">
</p>
<!-- BOTÃO -->
<button class="button primary submit-button" type="submit">

                            Enviar cadastro

                        </button>
</form>
</div>
</div>
</div>

<div class="toast" id="feedbackToast" role="status">
<span aria-hidden="true" class="toast-icon">✓</span>
<div>
<strong class="toast-title">Cadastro enviado</strong>
<p>Recebemos seus dados. Obrigado por querer colaborar!</p>
</div>
<button aria-label="Fechar notificação" class="toast-close" type="button">×</button>
</div>`
};

