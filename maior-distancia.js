function processData(input) {
    
    const linhas = input.trim().split('\n')
    const nColaboradores = parseInt(linhas[0]);
    const coordenadas = linhas.slice(1).map(linhaAtual => linhaAtual.split(' ').map(coordAtual => parseFloat(coordAtual)));
    
    
        let maiorDistancia = 0;
    
        for(i = 0; i < nColaboradores; i++){
            for(j = i + 1; j < nColaboradores; j++){
                let distancia = Math.sqrt(((coordenadas[j][0] - coordenadas[i][0])**2) + ((coordenadas[j][1] - coordenadas[i][1])**2))
    
                if(distancia > maiorDistancia){
                    maiorDistancia = distancia;
                }
            }
    
        }
    
    
        console.log(maiorDistancia);
    } 