import {useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Characters from "./components/Characters.jsx";
import {QueryClientProvider, QueryClient} from "react-query";

const queryClient = new QueryClient()

function App() {
    return (
        <div className="App">
            <div className="container">
                <h1>Rick and Morty</h1>
                <QueryClientProvider client={queryClient}>
                    <Characters/>
                </QueryClientProvider>
            </div>
        </div>
    )
}

export default App
