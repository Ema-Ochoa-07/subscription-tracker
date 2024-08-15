import { useState } from "react"

const FormAddMoney = ({ setCount, setIsValid }) => {

  const [quantity, setQuantity] = useState("") 
  const [errquantity, setErrquantity] = useState(false)
  const handleForm = (e) =>{
    e.preventDefault()
    //console.log(quantity)
    if(quantity == "" || Number(quantity) < 0 ){
      return setErrquantity(true)
    }else(
      setErrquantity(false)
    )
    console.log(quantity)

    setCount(Number(quantity))
    setIsValid(true)
  }

  return (
    <div className='form-add-money '>
        <form onSubmit={handleForm}>
            <p>Agregar presupuesto</p>
            <input type="number" placeholder='300$' 
            onChange={e => setQuantity(e.target.value)}
            />
            <input type="submit"  value="Agregar"/>
        </form>
        {errquantity ?  <p className="error">Presupuesto inválido</p> : null}
        
    </div>
  )
}

export default FormAddMoney