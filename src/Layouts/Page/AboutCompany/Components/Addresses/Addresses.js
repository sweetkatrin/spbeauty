import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
import styled from "styled-components";

const Container = styled.div`
    border: 1px solid rgba(100, 116, 139, 0.12);
    border-radius: 8px;
    max-width: 45%;
`;

function Addresses() {
    return (
        <Container className='d-inline-flex flex-column mt-4 p-4 justify-content-between col'>          
            <div className='d-flex flex-column gap-4'>
                <div className='title'>Адреса заведений</div>
                <div className='d-inline-flex flex-column gap-2'>
                    <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                    <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
                </div>
            </div>
            <SecondaryButton>Добавить филиал</SecondaryButton>
        </Container>
    );
}

export default Addresses;