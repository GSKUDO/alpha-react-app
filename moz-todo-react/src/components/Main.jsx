import React, {useState} from "react";

function Main() {
  const [description , setDescription] = useState('');
  const [date , setDate] = useState('');
  const [local , setLocal] = useState('');

  const handleChange = (e) => {
    setDescription(e.target.value);
  }
  const handleDateChange = (e) => {
    setDate(e.target.value);
  }
  const handleLocalChange = (e) => {
    setLocal(e.target.value);
  }

  const handleSubmit= () => {
    const description1 = description;
    const date1 = date;
    const local1 = local;
    alert(description1 + date1 + local1)
  }

  const handleFormReset= (e) => {
    setDescription("");
    setDate("");
    setLocal("");
  }

  return (
    <main>
      <section className="Add">
        <div>
            <form onSubmit={(e) => {handleSubmit(e)}} onReset={(e) => {handleFormReset(e)}}>
              <div>
                  <input type="text" value={description} className="inputDescription" placeholder="Descrição" required onChange={(e) => {handleChange(e)}} />
                  <input type="submit" className="btnadicionar" value="ADICIONAR"/>
              </div>
              <div>
                  <input type="date" value={date} className="inputDate" placeholder="Data" required onChange={(e) => {handleDateChange(e)}} />
                  <input type="text" className="inputLocal" placeholder="Local" value={local} required onChange={(e) => {handleLocalChange(e)}} />
                  <input type="reset" className="btnlimpar" value="LIMPAR" />
              </div>
             </form>
         </div>
      </section>
      <section className="Show">         
        <p></p>
      </section>
    </main>
  )
}

export default Main;