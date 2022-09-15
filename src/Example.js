import React, { useState, useEffect } from 'react'

const getLocalItem = () => {
  let list = localStorage.getItem('lists')
  console.log(list);
  if (list) {
    return JSON.parse(list)
  } else {
    return [];
  }
}

export function Example() {
  const [text, setText] = useState("add some task")
  const [task, setTask] = useState(getLocalItem())


  const changeText = (e) => {
    // console.log(e);
    setText(e.target.value)
  }
  const submitHandler = (e) => {
    console.log("submited");
    e.preventDefault();
    setTask([...task, text])

    setText("")
  }
  const removeTask = (a) => {
    const finalData = task.filter((curEle, index) => {
      return index !== a;
    })

    setTask(finalData)
  }

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(task))
  }, [task])
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center align-items-center main-row">
          <div className="col shadow main-col bg-white">
            <div className="row bg-primary text-white">
              <div className="col  p-2">
                <h4 className='text-center'>Todo App Using React JS</h4>
              </div>
            </div>
            <form onSubmit={submitHandler}>
              <div className="row justify-content-between text-white p-2">
                <div className="form-group flex-fill mb-2 col-9">
                  <input id="todo-input" type="text" className="form-control"value={text} onChange={changeText} />
                </div>
                <button type="submit" className="btn btn-primary mb-2 ml-2 col-3">Add todo</button>
              </div>
            </form>

            <div className="container">
              <div className="row">
                {
                  task.map((value, index) => {

                    return (
                      <>
                        <div className="col-6 my-2" key={index}>{value}</div>
                        <div className="col-6 my-2"><button onClick={() => removeTask(index)}>X</button></div>
                      </>
                    );
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
