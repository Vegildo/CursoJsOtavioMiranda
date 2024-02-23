/*
npm init -y   ->   inicia o npm

npm update   -> att tds os pacotes

npm install express ou npm i express   -> instala o express de forma padrao

npm i express -E   -> instala o express tirando a opçao de att automaticamente.

npm i express --save-dev    -> instala o pacote no devdependecis

npm i express --save-prod   -> instala o pacote no dependecies

npm unistall express   -> desinstala o pacote

npm i express@2.2.4   -> instalo a versao especifica digitada, no caso 2.2.4

Versionamento semântico: 

  2.      1.    0
 major  minor  patch

patch - versao de correcao de bugs, poucas mudancas
minor - versao com att um pouco mais profundas
major - versao com grande att

 - Flags:
 ^ att a minor e a patch
 ~ att somente a patch

npm i express -E     -> instalo tirando a opcao de att automaticamente, podemos tirar "na mão" lá no package.json e colocar um ~ ou add o ^ depois. Lembrando que é sempre no comeco da versao (Canto esquerdo do major)
 

npm i express@5.x   -> Instalo na versão 5 com a minor e patch mais atuais.

npm ls  -> lista os pacotes instalados. Cuidado pacotes como o webpack tem muitas dependecias, ficará gigante

npm ls --depth=0   -> Lista somente o instalado sem nenhuma dependncia, --depth=1 listará uma pasta pra dentro e assim por adiante.

npm outdated   -> mostra os pacotes desatualizados



*/
// Lembrando que o express é só um um ex pod ser qualquer módulo ali.
