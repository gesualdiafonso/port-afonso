// src/lib/i18n.ts (ou onde preferir)

import { notFound } from 'next/navigation';

const section = ['common', 'page']; 

export async function getMessages(locale: string) {
  try {
    const imports = await Promise.all(
      section.map((sec) => 
        // Use caminhos RELATIVOS ou o alias (@/) se ele estiver configurado, 
        // mas o caminho deve ser ESTÁTICO o suficiente para o build.
        // Já que você está no Server Component, o alias deve funcionar, 
        // mas o caminho RELATIVO é mais seguro.
        // Se 'src' estiver na raiz, use:
        // import(`../locales/${locale}/${sec}.json`) 
        
        // Se o alias '@/' estiver mapeando para './src', 
        // este caminho (que é mais parecido com o seu erro) DEVE ser testado primeiro:
        import(`@/locales/${locale}/${sec}.json`).then(mod => ({
          [sec]: mod.default
        }))
      )
    );
    
    // Combina os objetos JSON em um único objeto de mensagens
    const combinedMessages = Object.assign({}, ...imports);
    return combinedMessages;
    
  } catch (error) {
    // Se o arquivo não for encontrado para um locale específico, trate o erro
    console.error(`Falha ao carregar mensagens para o locale ${locale}:`, error);
    // return notFound(); // Você pode querer retornar uma página 404
    return {}; // Ou retorne um objeto vazio para evitar falha total
  }
}