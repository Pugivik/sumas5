/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext, useEffect } from "react"
import { EventLoopContext, StateContexts } from "$/utils/context"
import { Event, getRefValue, getRefValues } from "$/utils/state"
import NextHead from "next/head"



export function Form_e1653f8a9e2aa69afa7cd455c4bdd311 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  
    const handleSubmit_203b7b582fe4ec995c90865d7ca88570 = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...({  })};

        (((...args) => (addEvents([(Event("reflex___state____state.sumas___sumas____sum_practice_state.handle_submit", ({ ["form_data"] : form_data }), ({  })))], args, ({  }))))(ev));

        if (true) {
            $form.reset()
        }
    })
    




  
  return (
    <form className={"flex flex-col items-center"} onSubmit={handleSubmit_203b7b582fe4ec995c90865d7ca88570}>

<input autoFocus={true} className={"w-24 h-20 border-2 border-gray-400 rounded-lg text-center text-4xl font-bold focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm"} name={"answer"} placeholder={"?"} type={"number"}/>
<button className={"mt-6 px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"} type={"submit"}>

{"Revisar Respuesta"}
</button>
</form>
  )
}

export function P_31d45607754f449100ba72a648bb0f82 () {
  
  const reflex___state____state__sumas___sumas____sum_practice_state = useContext(StateContexts.reflex___state____state__sumas___sumas____sum_practice_state)





  
  return (
    <p className={(() => { switch (JSON.stringify(reflex___state____state__sumas___sumas____sum_practice_state.feedback_type)) {case JSON.stringify("success"):  return ("text-green-600 mt-6 text-xl font-medium animate-pulse");  break;case JSON.stringify("error"):  return ("text-red-600 mt-6 text-xl font-medium");  break;case JSON.stringify("warning"):  return ("text-yellow-500 mt-6 text-xl font-medium");  break;default:  return ("mt-6 text-xl font-medium h-7");  break;};})()}>

{reflex___state____state__sumas___sumas____sum_practice_state.feedback_message}
</p>
  )
}

export function Div_a663cf33f85c6aaec493e28434095fd1 () {
  
  const reflex___state____state__sumas___sumas____sum_practice_state = useContext(StateContexts.reflex___state____state__sumas___sumas____sum_practice_state)





  
  return (
    <div className={"w-20 h-20 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center text-4xl font-bold shadow-sm"}>

{reflex___state____state__sumas___sumas____sum_practice_state.num1}
</div>
  )
}

export function Div_4c92ee732d3f5cd1bec36277c09747fe () {
  
  const reflex___state____state__sumas___sumas____sum_practice_state = useContext(StateContexts.reflex___state____state__sumas___sumas____sum_practice_state)





  
  return (
    <div className={"w-20 h-20 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center text-4xl font-bold shadow-sm"}>

{reflex___state____state__sumas___sumas____sum_practice_state.num2}
</div>
  )
}

export function Main_3a9e2afbad2b52100cdf420998a691d0 () {
  
  
                useEffect(() => {
                    ((...args) => (addEvents([(Event("reflex___state____state.sumas___sumas____sum_practice_state.start_new_problem", ({  }), ({  })))], args, ({  }))))()
                    return () => {
                        
                    }
                }, []);
  const [addEvents, connectErrors] = useContext(EventLoopContext);





  
  return (
    <main className={"font-['Inter']"}>

<div className={"flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 p-4"}>

<h1 className={"text-3xl font-bold text-indigo-700 mb-10 text-center"}>

{"Practica de Sumas de Primaria"}
</h1>
<div className={"flex items-center justify-center mb-8"}>

<Div_a663cf33f85c6aaec493e28434095fd1/>
<span className={"text-4xl font-bold mx-4 text-gray-700"}>

{"+"}
</span>
<Div_4c92ee732d3f5cd1bec36277c09747fe/>
<span className={"text-4xl font-bold mx-4 text-gray-700"}>

{"="}
</span>
</div>
<Form_e1653f8a9e2aa69afa7cd455c4bdd311/>
<P_31d45607754f449100ba72a648bb0f82/>
</div>
</main>
  )
}

export default function Component() {
    




  return (
    <Fragment>

<Main_3a9e2afbad2b52100cdf420998a691d0/>
<NextHead>

<title>

{"Sumas | Index"}
</title>
<meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</Fragment>
  )
}
