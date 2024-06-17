const Reverse = ({texto}) => {
    const reverseText = texto.split('').reverse().join('');
    console.log(reverseText);

    return (
        <p>{reverseText}</p>
    )
}

export default Reverse;