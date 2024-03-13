import { FaMoon } from 'react-icons/fa';
import { Container, ContainerHeader } from '../../../widgets/container';

interface props{
    toggleTheme: VoidFunction;
}
    

const ThemeContainer = ({ toggleTheme }: props) => {
    return (
        <>
            <ContainerHeader data-aos="fade-left" data-aos-delay="1200" data-aos-duration='1500'>
                <Container pad='0px 10px'>
                    <FaMoon />
                </Container>
            </ContainerHeader>


        </>
    )
};

export default ThemeContainer;