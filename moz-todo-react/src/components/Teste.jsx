import React, {useState} from 'react';
import ReactDOM from 'react-dom';
  
function App2() {
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
    const handleSubmit= (e) => {
        alert(description + date + local)
      }
  return (
    <div>
    <form onSubmit={(e) => {handleSubmit(e)}}>
        <br/>
        <input type="text" value={description} required onChange={(e) => {handleChange(e)}} /><br/>
        <br/>
        <input type="date" value={date} required onChange={(e) => {handleDateChange(e)}} /><br/>
        <br/>
        <input type="text" value={local} required onChange={(e) => {handleLocalChange(e)}} /><br/>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
}
  
export default App2;