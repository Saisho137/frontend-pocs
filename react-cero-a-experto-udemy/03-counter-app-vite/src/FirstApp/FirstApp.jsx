import PropTypes from 'prop-types';

//This object will be written to memory only once.
const object = {
    name: 'Santiago',
    lastName: 'Betancur'
};

const FirstApp = ({ title, bestNumber = 123, noParentProp }) => {
    //Put your data, objects or methods here if depends on component state/operations.
    //This functions will be written to memory after each re render.
    const printHelloWorld = () => 'Hello world!';

    return (
        <>
            <h1 data-testid="test-title">{title}</h1>
            <h2>{printHelloWorld()}</h2>
            <p>{`${object.name} ${object.lastName}`}</p>
            <p>{noParentProp}</p>
            <p>{noParentProp}</p>
            <p>{noParentProp}</p>
            <h3>{bestNumber / 10}</h3>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    bestNumber: PropTypes.number.isRequired,
}

FirstApp.defaultProps = {
    title: 'No hay titulo',
    bestNumber: 321,
    noParentProp: ' - Not from parent'
}

export default FirstApp;