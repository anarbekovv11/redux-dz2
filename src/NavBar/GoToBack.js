import {useNavigate} from 'react-router-dom'

export function GoToBack(props) {
    const navigate = useNavigate();

    const goToBack = () => {
        navigate(-1)
    }


    return (
        <>
            <button onClick={goToBack}>back</button>
        </>
    );
}