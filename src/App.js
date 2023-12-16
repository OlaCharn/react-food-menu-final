import { useEffect, useState } from 'react';
import './App.css';
import MyList from './MyList';
import MyMealAndIngredients from './MyMealAndIngredients';
import uuid from 'react-uuid';
//добавляем библиотеку uuid для работы с id, чтобы удалять каждую заметку в отдельности
//синхронизация заметки и формы. ЧТо хочу?
//хочу чтобы нажав на заметку справа открывалось содержимое слева
//передавать состояние из компонента в компонент и менять состояние динамично
//нажимаю на заметку справа - открывается слева форма с содержимым с тем же id -> MyMealAndIngridients.js
//лимитируем количество букв -> MyList.js
//local Storage -> useEffect()

function App() {

  //2 create state - все, что мы планируем - массмв
  
  const [mealPlans, setMealPlans] = useState(
    localStorage.mealPlans ? JSON.parse(localStorage.mealPlans) : []);

//local storage 
//Структура всегда одинакова
//берем состояние изменения mealPlans, переводим в строку *нужный нам формат
// привязываем к изменениям [mealPlans]
  useEffect(()=>{
    localStorage.setItem("mealPlans", JSON.stringify(mealPlans))
  }, [mealPlans])


  //4 create state for active(clickable)/inactive notes
  //мы хотим, чтобы изначально наша заметка не была выбрала
  //а когда click, то менялся цвет

  const [selectDay, setSelectDay] = useState(false)


  //1 ADD - to add smth -> onClick with props: addMealProp
  //3 создаем для нашей еды объект с константой

  const addMeal =()=>{
    const newMeal= {
      title: "Today is...",
      id: uuid(),
      mealForDay:"",
      ingredients:""
    }
    //как только нажата ADD, то измени состояние.
    //"добавь сюда newMeal/мою заметку" и не убирай со страницы, а добавь в общий массив и все остальное

    setMealPlans([newMeal, ...mealPlans]);

    //console.log(newMeal)
  }

  const deleteDay = (mealID) =>{
    setMealPlans(mealPlans.filter(({id}) => id!==mealID))
  }

  //прописываем синхронизацию двух форм
  const updateDay = (myUpdateMeal) =>{
    const updateMeals = mealPlans.map((mealPlan) => {
      if (mealPlan.id === myUpdateMeal.id) {
        return myUpdateMeal;
      }
      return mealPlan;
    })
    setMealPlans(updateMeals) //если данные менятся, то измени состояние
  }

 //проверяем id заметки и id формы
  const getActiveMeal = () => {
    return mealPlans.find(({id}) => id === selectDay)
  }

  return (
    <div className="App">
      <MyList addMealProp={addMeal}
              mealPlansProp={mealPlans}
              deleteDayProp= {deleteDay}
              selectDayProp = {selectDay}
              setSelectDayProp = {setSelectDay}
      />
      <MyMealAndIngredients
              selectedDayProp = {getActiveMeal()}
              updateDayProp = {updateDay}
      />
    </div>
  );
}

export default App;
