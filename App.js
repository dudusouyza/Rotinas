import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Header from "./components/Header";
import Card from "./components/Card";
export default function App() {
  return (
    <View style={estilo.container}>
      <Header></Header>

      <Card
        porcentagem="45%"
        titulo="Leitura"
        Imagem="https://www.redeicm.org.br/carmo/wp-content/uploads/sites/5/2019/01/Livro.jpg"
        descrição="A leitura estimula o raciocínio, melhora o vocabulário, aprimora a capacidade interpretativa, além de proporcionar ao leitor um conhecimento amplo e diversificado sobre vários assuntos."
      ></Card>

      <Card
        porcentagem="40%"
        titulo="cinema"
        Imagem="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sbt.com.br%2Ffilmes%2Fcinema-em-casa&psig=AOvVaw04PK05tHULlBNUO75gNFPJ&ust=1711557361798000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLCIjpeukoUDFQAAAAAdAAAAABAE"
        descrição="Cinema é uma palavra que se refere à arte de produção de filmes. É também uma abreviação de cinematógrafo, o aparelho desenvolvido pelos irmãos Lumiére que gravava e projetava filmes."
      ></Card>

      <Card
        porcentagem="35%"
        titulo="comida"
        Imagem="https://cdn.abjnoticias.com.br/abjnoticias-home/2023/05/colesterol_comidas-1.jpg"
        descrição="A culinária é a arte de cozinhar ou confeccionar alimentos e foi evoluindo de acordo com a história da humanidade e possui características diferentes em cada cultura."
      ></Card>

      <Card
        porcentagem="30%"
        titulo="informatica"
        Imagem="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/-5be0989bbc0c9.jpg"
        descrição="Entre os conhecimentos da informática básica, podemos destacar o conhecimento das peças fundamentais dos computadores (hardware), funcionamento de cabos, fios e conexões diversos."
      ></Card>

      <Card
        porcentagem="25%"
        titulo="basquete"
        Imagem="https://regrasdoesporte.com.br/wp-content/uploads/2013/01/basquete3.jpg"
        descrição="O nome em inglês, basketball, significa bola no cesto"
      ></Card>
      <Card
        porcentagem="20%"
        titulo="volei"
        Imagem="https://yt3.googleusercontent.com/ytc/AIdro_m_qSkLi30YPgiV3RGDjZGJLU8tM77lnKIrQvbU=s900-c-k-c0x00ffffff-no-rj"
        descrição="O vôlei, também chamado de volley ou voleibol, é um esporte de origem norte-americana do século XIX. É um esporte de popularidade significativa em grande parte do mundo."
      ></Card>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#CAF0F8",
    borderColor: "#90E0EF",
    paddingHorizontal: 20,
  },

  titulo: {
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 20,
  },

  subtitulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 15,
  },

  cardTarefa: {
    marginTop: 20,
    backgroundColor: "#A8DADC",
    width: "100%",
    height: 125,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 2,
    flexDirection: "row",
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },

  tituloCard: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#1d3557",
  },

  textoCard: {
    fontSize: 10,
    marginTop: 5,
  },

  imagemCard: {
    width: 60,
    height: 60,
    marginRight: 15,
  },
});
