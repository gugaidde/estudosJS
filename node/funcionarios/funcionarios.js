

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
function mulherChina(funcionario) {
    if (funcionario.pais == 'China' && funcionario.genero == 'F'){
        return true;
    }
    return false;
}

axios.get(url).then(response => {
    const funcionarios = response.data
    
    //obter mulher chinesa com menor salario
    console.log(funcionarios.filter(e => mulherChina(e)).sort((f1,f2)=>f1.salario-f2.salario)[0] )
    
    
})