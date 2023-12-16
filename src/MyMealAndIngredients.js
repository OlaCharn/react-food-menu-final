//переносим selectedDayProp из App.js
//предусмотреть ситуацию внесения изменений.


const MyMealAndIngredients =( {selectedDayProp , updateDayProp } ) =>{

    //...selectedDayProp - состояние , выбран у нас день или нет
    const editMyMeal = (myInput, value) => {
        updateDayProp({
                ...selectedDayProp,
                [myInput]: value
            })
    }
    //если у нас неактивен день, то покажи не форму, а надпись
    if (!selectedDayProp) 
    return (
        <p>Plan your week ahead of time</p>
        )

    return(
        <div className="whole-plan">

            <div className="meal-editing">

                <input 
                type="text"
                className="myInput"
                placeholder="Today is ..."
                id="title" 
                value={selectedDayProp.title}
                onChange={(e) => editMyMeal("title", e.target.value)}
                />


                <textarea 
                placeholder="write your meal"
                id="mealForDay"
                value={selectedDayProp.mealForDay}
                onChange={(e)=> editMyMeal("mealForDay", e.target.value)}
                />

                <textarea 
                placeholder="List of Ingriedients"
                id="mealForDay"
                value={selectedDayProp.ingredients}
                onChange={(e)=> editMyMeal("ingredients", e.target.value)}
                />
            </div>

            </div>
    )
}
export default MyMealAndIngredients;