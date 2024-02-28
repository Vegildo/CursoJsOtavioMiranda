Seção 12: Linux - Deploy da aplicação e segurança+Chaves SSH

    #Passo a passo:
        
        1. ##Escolha do servidor - Google Cloud, Digital Ocean, AWS, ou Máquina Virtual 
        
        2. ##Como a escolha foi máquina virtual, nós criamos uma no 
    programa VirtualBox Manager (VM).

>Obs1: Vídeo ensinando a instalar o VirtualBox Manager: [YouTube](https://www.youtube.com/watch?v=PaDTA4B7K4U)
>Obs2: Vídeo do professor Otávio Miranda ensinando instalar o Ubuntu (64bit) no VirtualBox: [YouTube](https://www.youtube.com/watch?v=Vl6f8_vin9M)

        3. ##No VirtualBox Manager: 
            - ###Vá em Settings/Configurações.
            - ###Vá em Network/Rede.
            - ###Certifique-se de estar Attached to/Conectado a: Bridged Adapter/ Placa em modo Ponte
            - ###Certifique-se do nome estar correto ao de sua conexão a internet.
            
        4. ##Na máquina virtual clique: ctrl+t

        5. ##No terminal confire seu ip digitando: 
            > `ip address show`
            Ou
            > `id addr` 
>Obs3: O ip estará na última linha que começa inet e é so a aprte antes do barra "/"

        6. Configurar o servidor ssh na máquina virutal, no terminal digite:
            - `sudo apt install ssh`
            - Coloque senha se tiver
            - Coloque S ou Y quando perguntado
            - Depois na sua máquina:
                - Clique com o botão direito do mouse na área de trabalho
                - Clique em Git Bash Here
                - Digite: `ssh -vvv <usuario-servidor>@<ip-servidor>`
>Obs4: A flag -vvv é para debugar a conexão, ajuda para sabermos onde está o problema.
            
            - Provável que não tenha acesso
            - Tendo ou não acesso, vá no terminal da máquina virtual e digite:
                - `sudo nano /etc/ssh/sshd_config`
                - Procure MaxAuthtries e coloque o número de quantidade de chaves que terá acesso
                - Procure PasswordAuthentication tire a hashtag '#' inicial, tirar o comentário e deixe no. Para acesso somente com chave SSH
                - Clique: ctrl+0 (para salvar)
                - Clique: ctrl+x (para sair)
                - Digite no terminal: `sudo systemctl restart ssh`
>Obs5: SSH é um protocolo de segurança de comunicação entre cliente e servidor
>Obs6: Para mais explicações: https://www.youtube.com/watch?v=A9CSSbten_s    
        
        7. Criando a chave SSH no computador;
            - No terminal do GitBash, já aberto no passo anterior, digite:
                ```
                 ssh-keygen -f ~/.ssh/removemeplease -t rsa -b 4096
                ```
>Obs7: gerando uma chave ssh (ssh-keygen), no caminho padrão (~/.ssh/removemeplease), com a flag -f podemos mudar o nome final do caminho e a parte final (-t rsa -b 4096) é para segurança.
                
                - O terminal perguntará se quer botar uma senha, botei a mesma senha para TUDO.. alguns números (4 a 6 números).
                - E toda vez que tentar acessar (digitando: `ssh -vvv <usuario-servidor>@<ip-servidor>`) ele pedirá essa senha.
            - O Windows não vai verificar keys com nomes personalizados, digite:
                - `nano ~/.ssh/config`
                - No editor, cole o seguinte:
                    ```
                    Hostname <usuario-servidor>
                    User <ip-servidor>
                    PubKeyAuthentication yes
                    IdentityFile ~/.ssh/removemeplease
                    ```

>Obs8: Há mais formas de configuração do arquivo config, dependendo do seu caso. [Using the SSH Config File](https://linuxize.com/post/using-the-ssh-config-file/)   
>Obs9: IMPORTANTE: Deixe o nome como removemeplease é um nome padrão UNIX.  No caso do windows, faz-se necessário cumprir esses passos de edição da config para que o nosso computador identifique a chave com o nome personalizado
       
        8. Colocando a public key no servidor (máquina virtual).
            - Vá no caminho gerado e copie a chave .pub
            - No terminal do servidor digite:
                - `nano ~/.ssh/authorized_keys`
Obs10: Se precisar mudar o nome de um arquivo use: `mv <nome antigo> <nome novo>`. Lembre-se de estar na pasta certa no terminal

                - Cole a chave 
                - Salve e saia
            - Coloque todas as chaves que quiser ali (se tiver mais maquinas querendo acesso)
            - Digite depois:
                ```
                sudo systemctl restart ssh
                ```
            - Para restartar o ssh no servidor

        9. Acesse o servidor pela sua máquina.
            - Na sua máquina, mais precisamente no gitbash aberto anteriormente, digite:
                ```
                ssh -vvv <usuario-servidor>@<ip-servidor>
                ```

        10. Para acessos posteriores, SEMPRE verefiue o ip do servidor com:
            - `ip addr`
            - Se o mesmo tiver mudado, atualize a config na pasta .ssh do seu computador
            - Depois digite:
                ```
                ssh -vvv <usuario-servidor>@<ip-servidor>
                ```

>Obs11: Professor liberou alguns arquivos com alguns códigos usados na aula e para nos audar (tem no git junto com esse arquivo). [git](https://github.com/Vegildo/CursoJsOtavioMiranda)