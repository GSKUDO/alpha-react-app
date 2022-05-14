import React from "react";
import Input from "./Input";
import Button from "./Button";

function Main() {
  return (
    <main>
        <section className="Add">
            <div>
                <Input className="inputDescription" type="text" placeholder="Descrição"></Input>
                <Button className="btnadicionar" innerText="ADICIONAR"/>
            </div>
            <div>
                <Input className="inputDate" type="date" placeholder="Data"></Input>
                <Input className="inputLocal" type="text" placeholder="Local"></Input>
                <Button className="btnlimpar" innerText="LIMPAR"/>
            </div>

        </section>
        <section className="Show">  
        
        </section>
    </main>
  )
}

export default Main;