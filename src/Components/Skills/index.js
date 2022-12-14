import { useState } from "react";
import styled from "styled-components";

const StyledSkills = styled.section`
        color: rgb(236, 217, 255);
        background-color: #0a0612;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        width: 100%;
    section {
        display: flex;
        flex-direction: column;
        justify-content: left;
        justify-items: left;
    }
    .SkillBoxes {
        display: flex;
        flex-direction: row;
    }
    #skills {
        display: flex;
        height: 100vh;
        flex-direction: column;
        align-items: center;
        justify-content: left;
        justify-items: left;
        width: 80vw;
    }
    #SkillText {
        display: flex;
        flex-direction: column;
        justify-content: left;
        justify-items: left;
        align-items: center;
    }
    p   {
        font-size: 1.5em;
        margin: auto;
        width: 60%;
    }
    button {
        background-color: blueviolet;
        color: rgb(236, 217, 255);
        height: 60px;
        padding: 20px;
        font-size: 1.3em;
        border-radius: 10px;
        border: none;
        cursor: pointer;
    }
    h2 {
        display: flex;
        width: 80%;
        padding: 20px 10px 10px;
        margin: auto;
        justify-content: left;
        background-color: #0a0612;
        border-bottom: 3px solid rebeccapurple;
    }
    h3 {
        margin: auto;
        font-size: 1.5em;
    }
`;

const StyledSkillBox = styled.div`
    height: 156px;
    width: 156px;
    background-color: #150c25;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-repeat: no-repeat;
    background-position: center;
    transition: ease 0.3s;
    margin: 20px;
    :hover {
        background-color: #1f1137;
        transform: scale(1.05);
    }
    img {
        height: 150px;
        width: 150px;
    }
`;
const StyledSkillText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    p {
        padding: 20px;
    }
    h3 {
        font-size: 2em;
        padding: 20px;
    }
`;

export default function Skills() {
    const [skillTitle, setSkillTitle] = useState("HTML")
    const [skillDesc, setSkillDesc] = useState("HTML ?? uma Linguagem de Marca????o de Hipertexto utilizada no desenvolvimento de paginas na web. HTML ?? basicamente o respons??vel pela estrutura dos conte??dos da p??gina. Eu possuo cerca de 3 meses de experi??ncia com HTML.")
// Descri????es. Provavelmente deve ter uma forma mais limpa de se fazer isso usando JSON tho
    const htmlDesc = "HTML ?? uma Linguagem de Marca????o de Hipertexto utilizada no desenvolvimento de paginas na web. HTML ?? basicamente o respons??vel pela estrutura dos conte??dos da p??gina. Eu possuo cerca de 3 meses de experi??ncia com HTML."
    const cssDesc = "CSS ?? uma Linguagem de Folhas de Estilosutilizada para aplicar estilos nos elementos de um documento HTML. Eu possuo cerca de 3 meses de experi??ncia com CSS."
    const jsDesc = "Javascript ?? uma Linguagem de Programa????o amplamente utilizada no desenvolvimento de paginas da web, principalmente para criar interatividade com os elementos. Eu possuo cerca de 2 meses de experi??ncia com Javascript."
    const reactDesc = "ReactJS ?? uma Biblioteca Javascript criada pelo Facebook. Ela ?? utilizada para a cria????o de interfaces de usu??rio em p??ginas da web. Eu possuo cerca de 1 m??s de experi??ncia com React."
    const nextDesc = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque velit aliquam a dolorem hic vero quo perferendis officiis veritatis exercitationem laudantium at eum repellat asperiores nulla amet, sequi laborum reprehenderit!"
    const styledcomponentsDesc = "Styled-components ?? uma Bibliot??ca usada para estilizar componentes de React. O Styled-components permite escrever CSS dentro do pr??prio Javascript. Eu possuo cerca de 1 m??s de experi??ncia com Styled-components."
    const gitDesc = "Git ?? um Software de Controle de Vers??o de Arquivos. O GitHub ?? uma Plataforma Online que permite armazenar projetos e disponibiliza-los para outros desenvolvedores possam acessar o c??digo. Eu possuo cerca de 3 meses de experi??ncia com Git e GitHub."

    return (
        <StyledSkills>
            <h2>Habilidades</h2>
            <section id="skills">
                <section>
                    <div className="SkillBoxes">
                        <StyledSkillBox 
                            onMouseOver={() => {setSkillTitle("HTML"); setSkillDesc(htmlDesc)}}>
                            <img src="/icons8-html-5-480.png"/>
                        </StyledSkillBox>
                        <StyledSkillBox onMouseOver={() => {setSkillTitle("CSS"); setSkillDesc(cssDesc)}}>
                            <img src="/icons8-css3-480.png"/>
                        </StyledSkillBox>
                        <StyledSkillBox onMouseOver={() => {setSkillTitle("Javascript"); setSkillDesc(jsDesc)}}>
                            <img src="/icons8-javascript-480.png"/>
                        </StyledSkillBox>
                    </div>
                    <div className="SkillBoxes">
                        <StyledSkillBox onMouseOver={() => {setSkillTitle("React"); setSkillDesc(reactDesc)}}>
                            <img src="/icons8-react-native-480.png"/>
                        </StyledSkillBox>
                        <StyledSkillBox onMouseOver={() => {setSkillTitle("Styled-components"); setSkillDesc(styledcomponentsDesc)}}>
                            <img src="/icons8-styled-components-480.png"/>
                        </StyledSkillBox>
                        <StyledSkillBox onMouseOver={() => {setSkillTitle("Git e Github"); setSkillDesc(gitDesc)}}>
                            <img src="/icons8-github-480.png"/>
                        </StyledSkillBox>
                    </div>
                </section>
                <StyledSkillText>
                    <h3>{skillTitle}</h3>
                    <p>{skillDesc}</p>
                </StyledSkillText>
            </section>
        </StyledSkills>
    )
}