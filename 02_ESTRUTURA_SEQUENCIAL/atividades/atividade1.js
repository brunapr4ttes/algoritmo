alert("Arquivo atividade 1")

let título, duração, horas, minutos

título = prompt("Qual será o filme? ")
duração = prompt("Qual a duração do filme em minutos? ")

horas = Math.floor(duração / 60)
minutos = duração % 60

duração = Number(duração)
horas = Number(horas)
minutos = Number(minutos)

document.write(`O filme ${título} tem duração de ${horas} horas e ${minutos} minutos`)