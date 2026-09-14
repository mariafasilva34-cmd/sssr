// ==========================================
// CONFIGURAÇÃO GLOBAL DO SISTEMA
// ==========================================
// Edite as credenciais e valores abaixo.
// Não é mais necessário usar o Painel para salvar, 
// pois este arquivo será lido por todas as páginas (celular, guia anônima, etc).

const GLOBAL_CONFIG = {
    // Gateway ativo. Pode ser: 'techbynet', 'ironpay', 'activepay', 'unipay', 'paguex', 'moonfy', 'mangofy', 'otimize', 'sigilopay' ou 'blackcat'
    activeGateway: 'techbynet',

    // Credenciais dos Gateways
    gateways: {
        techbynet: {
            // Documentação: https://docs.techbynet.com/
            api_key: '8db67d23-46c8-42fa-8e58-8ce3005dcf22'
        },
        ironpay: {
            token: 'XCntKV6WvEts5wHqYucZh257gUgmrSrn34ZxLXOlkyvWM6Ju9d50QRvZMsDE',
            offer_hash: 'mqszplqlev',
            product_hash: 'mqszplqlev'
        },
        activepay: {
            public_key: 'pk_jpjg37WRIEH8N5iAUgNPoITzEmoftnE8nUp0bMf8WBNbXFnJ',
            secret_key: 'sk_210ur96q0wX8oTBULiZ3PufmQhZ115gg4sD8U_B2GQM2AT_J'
        },
        unipay: {
            public_key: 'pk_d5eeee4771f9ff6e5f2ac0b6b6de0aedf773119f',
            secret_key: 'sk_bfed0718725a89a087b90cb99823799ea1fa03d3'
        },
        paguex: {
            public_key: 'paguex_live_0f3oHhxVqvv75rkUJXpD9gmYTOGY4b55',
            secret_key: 'sk_live_LzgxPYAEctMravzyLN2pDEe1cV8WQ1x5'
        },
        moonfy: {
            public_key: 'pk_931MuY6MOKnjJB6x_s4GQfxP96IigOWuS1bQUs9KHju2sU13',
            secret_key: 'sk_ZJ-AO79mUo71mW3rco2jIWVXEDxHlrOLs3xjRdVp6QROv-QE'
        },
        mangofy: {
            store_code: 'c7a280242f269563afa73a2eab25c395',
            api_key: '2ef5286d541a007307cf170d42ba9f8f0w7n8ntsrt7ad24bs8fadobx3iu4kzc',
            // URL de callback exigida pela Mangofy (campo obrigatório). Pode ser
            // sobrescrita aqui; se vazia, usa a origem da página / fallback https.
            postback_url: ''
        },
        otimize: {
            public_key: 'pk_live_v2NV0ru4ORSYvfvDh0Ua80OAPkD5stYM2r',
            secret_key: 'sk_live_v2Ak5bOgXrSkh8QKm8QsixTbjHh1ai90t5BsrSXZh4'
        },
        sigilopay: {
            public_key: 'dossantosdelimaroney_v6j23x0sofwywelr',
            secret_key: 'lkpnaqqbfzom4sse8ohz0qryo67m3m4s3a4877w3pbjhxhvxidaz60lhemb9vkvn'
        },
        blackcat: {
            // Obtenha sua API Key no painel administrativo da Blackcat
            api_key: 'sk_live_39f64d6021fc93053021598a91d22c05d5accab759b93d2213b3730e25159883'
        }
    },

    // Valores e Nomes dos Produtos
    product: {
        amount: '78,47',
        name: 'Taxa de Liberação'
    },
    upsell: {
        amount: '43,92',
        name: 'Taxa De Regularização RF'
    },
    iof: {
        amount: '38,40',
        name: 'Taxa de Autenticação Cadastral 2026'
    },
    icm: {
        amount: '45,60',
        name: 'Taxa de Conformidade Fiscal BC'
    },
    iphone: {
        amount: '67,43',
        name: 'Tarifa Anti-Cancelamento'
    }
};

// Se precisar ler em outro lugar, use a variável GLOBAL_CONFIG
// O Painel antigo não terá mais efeito no site.

// ===== PROXY HELPER =====
// Em localhost usa API direta; em produção (Netlify) usa proxy local pra evitar CORS
const _IS_LOCAL = ['127.0.0.1', 'localhost'].includes(window.location.hostname);
const API_BASES = {
    techbynet: _IS_LOCAL ? 'https://corsproxy.io/?https://api-gateway.techbynet.com' : '/api/techbynet',
    activepay: _IS_LOCAL ? 'https://api.activepay.com.br' : '/api/activepay',
    ironpay: _IS_LOCAL ? 'https://api.ironpayapp.com.br' : '/api/ironpay',
    unipay: _IS_LOCAL ? 'https://api.fastsoftbrasil.com' : '/api/unipay',
    paguex: _IS_LOCAL ? 'https://corsproxy.io/?https://api.paguex.online' : '/api/paguex',
    moonfy: _IS_LOCAL ? 'https://api.moooonfy.com.br' : '/api/moonfy',
    mangofy: _IS_LOCAL ? 'https://corsproxy.io/?https://checkout.mangofy.com.br' : '/api/mangofy',
    otimize: _IS_LOCAL ? 'https://api.otimizepagamentos.com' : '/api/otimize',
    sigilopay: _IS_LOCAL ? 'https://corsproxy.io/?https://app.sigilopay.com.br/api/v1' : '/api/sigilopay',
    blackcat: _IS_LOCAL ? 'https://api.blackcatpayments.com/api' : '/api/blackcat'
};
