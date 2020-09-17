import React from "react"
import { APP_CONFIG } from "./config"
import "./App.less"

function App() {
    return (
        <div className="app">
            <div className="app-header">XLab实验室项目展示</div>
            <div className="app-content">
                {APP_CONFIG.map((app) => {
                    return <div className="app-content-item">{app.name}</div>
                })}
            </div>
        </div>
    )
}

export default App
