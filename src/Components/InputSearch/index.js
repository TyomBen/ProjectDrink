const InputSearch = ({ setValueSearch, valuesearch }) => {
    return (
        <input
        type="text"
        id="name"
        onChange={(event) => setValueSearch(event.target.value)}
        value={valuesearch}
      />
    )
}

export default InputSearch;