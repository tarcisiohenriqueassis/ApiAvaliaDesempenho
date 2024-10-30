export default function avaliarDesempenho(desempenho) {
    return desempenho >= 90
       ? "Desempenho excepcional"
       : desempenho >= 70 && desempenho < 90
       ? "Desempenho satisfatório"
       : desempenho >= 50 && desempenho < 70
       ? "Desempenho razoável"
       : "Desempenho insatisfatório";
   }