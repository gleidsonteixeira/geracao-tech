import Banner from "./components/Banner";
import Card from "./components/Card";
import CardDinamico from "./components/CardDinamico";
import FormaDeBolo from "./components/FormaDeBolo";
import Header from "./components/Header";
import { Componente1, Componente2 } from "./components/VariosComponentes";

const App = () => {
  return (
    //parte visivel do componente  
    <>
      {/* <Header />
      <Banner />
      <Componente1 />
      <Componente2 /> */}
      {/* <FormaDeBolo sabor="Laranja" cobertura="Chocolate" />
      <FormaDeBolo sabor="Chocolate" cobertura="Chantili" />
      <FormaDeBolo sabor="Frango" cobertura="Molho Xadrês" /> */}
      <Card 
        image={"https://images.educamaisbrasil.com.br/content/banco_de_imagens/guia-de-estudo/D/esportes-gerais-educacao-fisica.jpg"}
        title={"Noticia 1"} 
        category={"esportes"} 
        paragraph={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam qui molestias similique nesciunt minima illo hic eligendi neque officia est ex quod, fugit aut expedita aliquam dolorum aspernatur velit possimus?"}
        tipo={"A"}
      />
      <Card 
        image={"https://images.educamaisbrasil.com.br/content/banco_de_imagens/guia-de-estudo/D/esportes-gerais-educacao-fisica.jpg"}
        title={"Noticia 2"} 
        category={"finanças e investimento"} 
        paragraph={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam qui molestias similique nesciunt minima illo hic eligendi neque officia est ex quod, fugit aut expedita aliquam dolorum aspernatur velit possimus?"}
      />
      <Card 
        image={"https://images.educamaisbrasil.com.br/content/banco_de_imagens/guia-de-estudo/D/esportes-gerais-educacao-fisica.jpg"}
        title={"Noticia 3"} 
        category={"culinária"} 
        paragraph={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam qui molestias similique nesciunt minima illo hic eligendi neque officia est ex quod, fugit aut expedita aliquam dolorum aspernatur velit possimus?"}
      />

      <CardDinamico>
        <h1>Noticia 4</h1>
        <img src="https://images.educamaisbrasil.com.br/content/banco_de_imagens/guia-de-estudo/D/esportes-gerais-educacao-fisica.jpg" alt="" />
        <h6>esportes</h6>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, sit deleniti. Optio quos quibusdam, ab fugit voluptate architecto quasi, ea expedita dolorum non at fugiat, fuga maiores suscipit assumenda eveniet?</p>
      </CardDinamico>
      <CardDinamico>
        <h1>Noticia 4</h1>
        <img src="https://images.educamaisbrasil.com.br/content/banco_de_imagens/guia-de-estudo/D/esportes-gerais-educacao-fisica.jpg" alt="" />
      </CardDinamico>
      <CardDinamico>
        <img src="https://images.educamaisbrasil.com.br/content/banco_de_imagens/guia-de-estudo/D/esportes-gerais-educacao-fisica.jpg" alt="" />
        <h1>Noticia 4</h1>
      </CardDinamico>
    </>
  );
}
export default App;
