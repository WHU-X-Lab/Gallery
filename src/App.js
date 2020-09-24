import React from "react"
import { APP_CONFIG } from "./config"
import "./App.less"

function App() {
    return (
        <div className="app">
            <div className="app-header">XLab实验室项目展示</div>
            <div className="app-content">
                {APP_CONFIG.map((app) => {
                    return (
                        <a href={app.url}>
                            <div className="app-content-item">
                                <img
                                    className="app-content-item-img"
                                    src={app.image}
                                    alt="image"
                                />
                                <div className="app-content-item-footer">
                                    {app.name}
                                </div>
                            </div>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}

export default App
