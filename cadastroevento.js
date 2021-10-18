let idade = 18
if (idade >= 18) {
console.log("Participante possui idade mínima! Prossiga por favor.")

        var dataAtual = new Date ('10-3-2021')
        var dataEvento = new Date ('10-2-2021')
        if (dataEvento > dataAtual) {
        console.log("Data válida. Prossiga para o cadastramento.")

            let listaConvidados = ["João", "Maiara", "Renato", "Julia", "Thomás", "Gabriela"]
            if (listaConvidados.length < 100){
            console.log("Reserva na lista realizada com sucesso!")
            
            }else {console.log("Lista de participantes lotada!")}


        }else {console.log("Data inválida. Por favor insira a data desejada novamente.")}

}else{
console.log("Participante não possui a idade mínima para atender ao evento. Insira uma data válida.")}