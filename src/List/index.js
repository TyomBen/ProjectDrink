import { useEffect, useState } from "react";
import './styles.css';
import { URL } from "../Utills/constants";
import DataContainer from "../DataContainer";
import InfoDetailsButton from "../DataContainer/InfoDetailsButton";
const List = () => {
    const [coctails, setCoctails] = useState ([]);
    const [valuesearch, setValueSearch] = useState ('');
    const gettingData = async () => {
      try {
        const response = await fetch (`${URL}?s=${valuesearch}`);
        const data = await response.json ();
        setCoctails (data.drinks);
      }catch (eror) {
        throw eror;
      }
    }
    const hendlerCopySameFunction = () => {
      return (
        <>
        <label htmlFor = 'name' 
        className= 'label'> Search Your Favorite Cocktail</label> <br />
        <input type = 'text' id="name" 
        onChange={(event) => setValueSearch(event.target.value)} 
        value={valuesearch}></input>
        </>
      )
    }
  useEffect(() => {
    gettingData()
  }, [valuesearch]);

  if(coctails){
    return (
      <>
      <main>
        <section> 
        <div className="Form-Controlled">
        {hendlerCopySameFunction()}
        <h1>Cocktails</h1>
        </div>
        </section>
        <DataContainer coctails = {coctails} /> 
      </main>
      </>
    )
  }else {
    return (
      <main>
        <section> 
        <div className="Form-Controlled">
        {hendlerCopySameFunction()}
        <h2 className="h2">No Cocktails Matched Your Search Criteria</h2>
        </div>
        </section> 
      </main>
    )
  }
}
export default List;