import { TitleStyled } from "./page-title.styles";

const Title = ({ pageTitle }) => {
    return (
        <TitleStyled>{ pageTitle }</TitleStyled>
    );
}

export default Title;