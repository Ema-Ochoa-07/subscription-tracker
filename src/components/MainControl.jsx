import Balance from "./Balance"

const MainControl = ({ count }) => {      

  return (
    <div className="main-control">
        {/* <h4>{count}</h4> */}
        <Balance count = {count} />
    </div>
  )
}

export default MainControl