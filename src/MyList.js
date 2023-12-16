import DeleteIc from "./icons8-trash-50.png"

const MyList = ( {mealPlansProp, addMealProp, deleteDayProp, selectDayProp, setSelectDayProp } ) =>{
    return(
        <div>
            <div>
                <h1>Weekly Plan Meal Ideas</h1>
            <button className="button-add" onClick={addMealProp}>ADD</button>
            </div>
            <div>
                {mealPlansProp.map( ({title,id, mealForDay},index) =>{
                    return( 
                        <div key={index} className={`meal ${id === selectDayProp ? "selected" : "default"} `}
                        onClick={()=> setSelectDayProp(id)} 
                        > 
                            <p className="title" > {title} </p>
                            <p className="field"> {mealForDay.substring(0, 60) } </p>
                            <button className="button-delete" onClick={()=>deleteDayProp(id)}>
                                <img alt="old" className="iconDelete" src={DeleteIc} /> 
                            </button>

                        </div>
                        )
                })}
            </div>
        </div>
    )
}
export default MyList;