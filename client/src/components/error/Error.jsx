export default function Error({message}) {
    return (
        <div style={{marginBottom: '300px' }}>
            <h1 style={{ color: "red" ,padding:'50px'}}>Opps somting wrong...  !</h1>
            <h2 style={{ color: "green",padding:'50px'}}>{message.text}</h2>
        </div>
    );

};