const Scroll = ({ children }) => {
    return (
        <div style={{ overflowY: "scroll", border: "1px solid blue", height: "700px"}}>
            { children }
        </div>
        
    )
}

export default Scroll;