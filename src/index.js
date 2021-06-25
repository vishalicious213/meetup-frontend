import React, { useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

const myElement = <h1>MY ELEMENT</h1>

const restEndpoint = "https://randomuser.me/api"

const callRestApi = async () => {
  const response = await fetch(restEndpoint)
  const jsonResponse = await response.json()
  console.log(jsonResponse)
  return React.createElement('h1', null, JSON.stringify(jsonResponse))
}

function RenderResult() {
  const [apiResponse, setApiResponse] = useState("LOADING")

  useEffect(() => {
    callRestApi().then(
      result => setApiResponse(result)
    )
  }, [])

  return (
    <div>
      <h1>REACT APP</h1>
      <p>{apiResponse}</p>
    </div>
  )
}

callRestApi()

ReactDOM.render(
  myElement,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
